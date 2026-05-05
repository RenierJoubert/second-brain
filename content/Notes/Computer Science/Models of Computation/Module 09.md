#cs #math #cs121 #proof 

# Weak Induction Proofs

Let us first define various forms of repetitions

## Sequences

A sequence is just an ordered list of numbers associated with a pattern or formula. For example we can define the sequence $a_n = 2n^2 +1$ $\forall n > 0$ which yields:
$$
3, 9, 19, 33, \cdots
$$
Moreover, the formula could also include previous terms, and this is called a recurrence relation, for instance the *Fibonacci sequence:* $F_n = F_{n-1} + F_{n-2}$. Where $F_0 = 0, F_1 = 1$ and yields:
$$
0,1, 1, 2, 3, 5, 8, 13 \cdots
$$

## Summation

A summation is simply the ==sum of all elements in the sequence== and is denoted by:

> [!theorem] Summation
> $$
> \sum^n_{k=m}a_k = a_m + a_{m+1} + \cdots + a_{n}
> $$
> 

Note, a summation where $m > n$ is called an empty summation and does not have any elements.

## Product

Similarly, a product is simply the ==product of all elements in the sequence== and is denoted by:

> [!theorem] Product 
>$$
> \prod^n_{k=m} a_{k} = a_{m} \cdot a_{m+1} \cdots a_{n}
> $$

### Factoring out the last term

Sometimes when working with sums or products it can be convenient to factor out the last term which can be done as follows:

> [!theorem] Remark 
> $$
> \sum^n_{k=m}a_k = a_{n} + \sum^{n-1}_{k=m}a_{k}, 
> $$
> $$
> \prod^n_{k=m}a_{k} = a_{n} + \prod^{n-1}_{k=m}a_{k}
> $$

## Mathematical Induction

To prove that some statement $P(n)$ is true $\forall n$ we can use an induction proof, which follows the basic structure of proving that statement to be true for some small base case, then assuming that it also holds for any arbitrary $n$ we prove that it also holds for the next consecutive number $n+1$. Then, by ==weak induction== if both steps hold then the original statement must be true.


> [!theorem] Weak Induction Structure 
> To prove $\forall n \in\mathbb Z^+$, $P(n)$, we must:
> 1. Prove $P(n=1)$ is true (or any base case)
> 2. Prove $\forall n \in\mathbb Z^+$, $P(n) \implies P(n+1)$
> 	i. Assume $P(n)$ is true
> 	ii. Prove $P(n+1)$ is true
> 

### The Base Case

In the base case, $n$ takes the value of the smallest possible value for which the statement should hold true; showing the statement is true at the starting point.

### The Inductive Hypothesis

Assume that $P(n)$ holds true for some arbitrary $n$. (Note we do not always have to choose $P(n)$ and could really choose any condition on $n$ such as $P(n-1)$ as long as the inductive step follows for the next consecutive value which in the case of $P(n-1)$ would be $P(n)$.

### The Inductive Step

Given $P(n)$ is true, preform some clever algebraic manipulation to show that $P(n+1)$ is also true *et voila*.

## Recursion

The logic of induction also provides a foundation for writing recursive algorithms, where in this case the base case would halt the recursion, where the step that reduces the problem towards the base case mimics the induction step. For instance, code that calculations the sum of all natural numbers up to some $n$ could be written as:
```java
public int sum(int n) {
	if (n == 1) {
		return 1;
	} else {
	return sum(n--) + n
	}
}

```
(pseudo code)

