#cs #cs221 

# Proving Correctness 

>Correctness of an algorithm can be argued formally via induction on a loop invariant.

For example, we will study the following function:
```cpp
int indexOfMin(vector<int>&arr, int a) {
	int m = a;
	for (int i = a+1; i < arr.size(); i++) {
		if (arr[i] < arr[m]) {
			m = i;
		}
	}
	return m;
}
```


And let `arr` be the following array:

| 0   | 1   | 2   | 3   | 4   | 5   |
| --- | --- | --- | --- | --- | --- |
| 5   | 7   | 13  | 26  | 9   | 15  |

and let `a=2`.

Here the final value returned is `m=4` which is simply the index of the smallest element in the array starting from the parameter a.

In this case the upper bound of the running time is given by $O(n)$ for an array of size `n`. ==But does this function work for all possible valid inputs?==

## Using Induction to Prove Correctness

> To prove correctness we first need to define an invariant property formally.

In this case, our invariant property is:
- for any iteration $i$ in $\{ a+1, n \}$, $m$ is the index of the smallest element $n$ in `arr[a, i-1]`.

## Proving a Loop Invariant

> In order to prove a loop variant using induction we need the following:

1. An induction variable: this represents the number of times through the loop
2. Base case: in order to prove the invariant holds before the loop begins
3. Inductive Hypothesis: where we assume the invariant holds before beginning some unspecified loop iteration
4. Inductive step: where we prove the invariant holds at the end of the iteration, ready for the next iteration.
5. Termination: we need to make sure the invariant implies correctness when the loop ends

## Our Formal Proof


Base case: $i = a +1$
- Our base case is $i=a+1$ and the invariant states that $m$ contains the index of the smallest element of the interval $arr[a, i -1]$ hence for this $i$ this array becomes `arr[a,a]`
- This is set explicitly by the line `int m = a;` so the base case holds

Inductive step: $i = k, a+1 ,\leq k < arr.size()$ 
- Using the inductive hypothesis we assume that the loop invariant holds prior to processing this index $k$, thus we assume m contains the smallest element of $arr[a,\cdots, k-1]$ 

Case 1: `arr[k] < arr[m]`
- By assumptions `arr[k]` is smaller than any element of `arr[a..k-1]` 
- Hence `m` is set to `k`, and contains the index of the smallest element of `arr[a...k]`, thus the loop invariant holds after processing index k

Case 2: `arr[k] >= arr[m]`
- By assumption `arr[k]` is not smaller than any element of `arr[a..k-1]` 
- No action is taken and `m` still contains the smallest element of `arr[a..k]`, thus the loop invariant still holds after processing index `k`.

Termination: `i=arr.size()`
- Plug this into the invariant property to see that this range now describes the entire sub-array from `a` to `size - 1`
- Thus at termination, `m` contains the index of the smallest element in the entire sub-array
- Finally, the loop is guaranteed to terminate as `i` increases but the array size is finite.


## Selection Sort
> Selection sort is a simple sorting algorithm that repeatedly finds the smallest item, in that we select the smallest item and put it into place.
>
> Although this algorithm is relatively inefficient, it is very simple to write, and very small so when compiled it does not take up much memory at all.

In the simple sort algorithm we sort the array by repeatedly swapping the *first* (starting at index 0) unsorted element with the *smallest* unsorted element.

![[Pasted image 20260514001542.png]]

> Namely, for an array of $n$ unsorted elements, we need to perform $n-1$ comparisons.

Recall that:
$$
\sum_{i=0}^{n-1}i=\frac{n(n-1)}{2}
$$
## The Algorithm
```cpp
void SelectionSort (vector<int>&arr) {
	for (int i = 0; i < arr.size(); i++)  {
		int min = indexOfMin(arr, i);
			swap(arr[i], arr[min])
	}
}
```

Here the main loop will execute $n$ times for an array of size $n$, and indexOfMin will execute $\frac{n(n-1)}{2}$ times but perform only $n-1$ swaps, giving it the upper bound $O(n^2)$.

## Proving Selection Sort

### The Invariant Property
> Before iteration `i` of the loop, `arr[0..i-1]` contains the `i` smallest elements of `arr` in ascending order

### Base Case
> For `i=0` the invariant states that the array from `arr[0..-1]` contains the 0 smallest elements of `arr` in ascending order. This is trivially true as the array from 0 to -1 is an empty interval. Hence the base case holds.

### Inductive Step
> `i = k` such that $0 \leq k <$ `arr.size()`. Using our inductive hypothesis we assume that the invariant holds before processing index `k`. Namely, the array `arr[0.k-1]` contains the `k` smallest elements of the array in ascending order.
>
> We have already proven that `indexOfMin` will correctly find the smallest item in the array `arr[k..arr.size() - 1]` and that this item will be at least as large as every item in the array `arr[0..k]` (these are the sorted items to the left of index `k`).
>
> This smallest element will swap with `arr[k]` and thus after processing index `k`, the array `arr[0..k]` will contain the `k + 1` smallest elements of the array in ascending order and the loop invariant will hold.

### Termination
> For `i = arr.size()`, the invariant property states that the array `arr[0..arr.size()-1]` contains the `arr.size()` smallest elements of `arr` in ascending order. That range describes the entire array, thus the entire array is now sorted.

## Insertion Sort






