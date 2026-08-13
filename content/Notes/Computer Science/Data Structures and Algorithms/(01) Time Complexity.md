#cs #cs221 

## Measuring and Comparing Algorithms

> Time and space complexity

Running time (the time complexity of an algorithm) can be expressed with the function:
$$
T(n): \mathbb Z^0 \to \mathbb R^0
$$
Where $n$ is the collection size.

## How do we determine time complexity

```cpp
int mystery(vector<int>& arr, int q) {
	for (int i = 0; i < arr.size(); i++) {
		if (arr[i] == q)
			return 1;
	}
	return -1;
}
```

Given an array of 16 elements. What is the function doing and how long will it take?

>The for loop is checking if the array contains $q$, if so it returns the element of the array equal to $q$. 

>On average the running time of this function if $q$ is in the array will be $\frac{n}{2}$ where $n$ is the size of the array. Thus it is linear and the time complexity is $O(n)$.

> For this particular example, in the worst case scenario the function will take $O(16)$ if $q$ is not contained in the array, or if $q$ is contained last in the array.
> In the best case, the function will take $O(1)$ if $q$ is first in the array.
> Moreover, if the array is empty or has only 1 element then the time complexity will also be $O(n)$.

## Getting T(n)

> How many/which lines are executed?
> 
In this particular example (we used an array of size 16 in class), in the worst case the check: `i < arr.size()` occurs 17 times (n+1 times where n=16 is the array size: i=0..15 pass, i=16 fails). `i++` occurs 16 times (n times — only executes when the loop body runs). Additionally the check: `arr[i] == q` happens 16 times (n times). Finally the `return -1` will only occur once. Thus $T(n)$ is given by:
$$
T(n)= (n+1)+n+n+1=3n+2 \in O(n)
$$

## Asymptotic and Big-O Notation

Recall the Big-O formal definition, namely:
$$
T(n) \in O(f(n)) \quad \text{if} \quad \exists c,n_{0} \quad \text{s.t.} \quad T(n) \leq c \cdot f(n) \quad \forall n\geq n_{0}
$$
But why do we care?

>O-notation allows us to describe the upper bound on the long-term growth of an algorithm's running time function T(n).

The "smallest" reference function that satisfies the O relation is called the "tight upper bound".

## Big $\quad \Omega \quad$ Definition

- Used for a lower-bound.

$$
T(n) \in \Omega(f(n)) \quad \text{if} \quad \exists c,n_{0} \quad \text{s.t.} \quad T(n) \geq c \cdot f(n) \quad \forall n\geq n_{0}
$$

## Big $\quad \Theta \quad$ Definition

- Used for a tight-bound. Namely, T(n) is between the upper and lower bound.

$$
T(n) \in \Theta(f(n)) \quad \text{if} \quad T(n) \in O(f(n)) \quad \text{and} \quad T(n) \in \Omega (f(n))
$$

## Running Time Approximation

1. We can eliminate lower order terms

$$
\begin{align}
4n + 5 & \implies 4n \\
0.5n\log n -2n + 7 & \implies 0.5n\log n
\end{align}
$$
2. We can eliminate any constant coefficients

$$
\begin{align}
4n & \implies n \\
0.5n\log n & \implies n\log n \\
n\log(n^2) = 2n\log(n) & \implies n\log n
\end{align}
$$


![[public/Images/screenshot-2026-05-12_13-44-45.png]]

## Dominance

> We can look at the dominant term to guess at a big-O growth rate:


$$
T(n) = 2n^2 + 600n + 60000
$$
- Up to n = 100 the constant term dominates
- Between n = 100 and n = 300 the linear term dominates
- Beyond n = 300 the quadratic term dominates and $T(n) \in O(n^2)$

## Nested loops

Generally we count the number of times an inner loop is repeated for each time an outer loop is executed. Namely, for a loop of the form:

```cpp
bool hasDuplicate(int arr[], int size) {
	for (int i = 0; i < size - 1; i++) {
		for (int j = i + 1; j < size; j++) {
			if (arr[i] == arr[j])
				return true;
		}
	}
	return false;
}

```

(This is the solution to a leetcode problem lol)

Here the outer loop will execute at most $n-1$ times. And the inner loop will execute at most $n-1$ times. 

### Worst Case Scenario

Namely, the number of inner loop executions is given by the summation:

$$
\sum_{k=1}^{n-1}k=\sum_{k=1}^nk-n=\frac{n^2+n}{2}-n=\frac{n^2-n}{2}
$$
Which is of course still in $O(n^2)$.

## Some Different Loops

```cpp
void candyapple(int n) {
	for (int i = 1; i < n; i *= 3)
		cout << "iteration: " << i << endl;
}
```

Here the loop variable increments in the form:
$$
1 \to 3 \to 9 \to 27 \to \cdots \to n
$$
The interval contains $n$ elements but we land on roughly $\log_{3}(n)$ elements in the actual interval.

Generally, when the loop variable is multiplied or divided by a constant then the time complexity tends to be logarithmic. Namely $\log(\text{interval size})$.

All log function variations are in the the big O of $\log(n)$.

>Complexities of nested loops are usually multiplied
>Complexities of separate loops are usually added

Moreover, when the loop variable is added or subtracted, then the time complexity is usually given by the interval size.

### A Final Example

```cpp
int i, j;
for (i =1; i < 9*n; i = i*2) {
	for (j = n*n; j > 0; j--) {
	...
	}
}
```

Here the overall time complexity will be in $O(n^2\log n)$.

**Be wary about conditional loops**

```cpp
for (int i = 0; i < n*n*n; i++) {
	if (i > 1) {
		return i;
	}
}
```
Here the loop will only ever execute twice.


## Linearity 
$$
\begin{align}
O(f) + O(g) & = O(f + g) \\
O(f) \cdot O(g) & = O(f\cdot g)
\end{align}
$$
