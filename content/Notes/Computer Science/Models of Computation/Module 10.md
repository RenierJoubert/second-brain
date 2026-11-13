#cs #math #cs121 #proof

# Strong Induction Proofs

In strong induction, we use the inductive hypothesis to assume that the statement is true for all values less than $n$, and then use that to prove it must also be true for $n$. Meaning that we can prove $P(k) \implies P(n)$ for any value of $k$ such that $k<n$. Moreover, we can use as many of these values as we wish, given then are strictly less than $n$ and in the range of values required.


> [!theorem] Strong Induction Structure 
> To prove $\forall n \in\mathbb Z^+$, $P(n)$, we must:
> 1. Prove $P(1), P(2), P(3), \cdots, P(a)$ are true (or any other base cases)
> 2. Prove $\forall n \in\mathbb Z^+$, $P(k) \implies P(n)$ where $k<n$ 
> 	i. Assume $P(k)$ is true for any $k<n$
> 	ii. Prove $P(n)$ is true
> 

## An example

Prove that any integer greater than 1 is divisible by a prime number

> [!theorem] Proof 
> 
> Base case: We know $P(2)$ is true as $2 \mid 2$ and 2 is prime.
> 
> Inductive hypothesis: Assume any integer $k<n$ is divisible by a prime number.
> 
> Inductive step: Consider an unspecified integer $n>1$
> 
> Then, either $n$ is prime or $n$ is not prime. If $n$ is prime then because all numbers are divisible by themselves $n$ is then divisible by a prime number.
> 
> If $n$ is not prime then there exists two integers $a,b$ such that $n=ab$ where $1<a<n$ and $1<b<n$. Now, since $a<n$ by the inductive hypothesis it follows that $a$ is divisible by a prime. Then, since $a$ is a factor of $n$ it follows that $n$ is then also divisible by a prime. Thus, by strong mathematical induction it follows that any integer greater than 1 is divisible by a prime number.

## Induction as a sequence of implications

In essence, induction can be thought of as a construction of logical implications. For example, in weak induction when we prove that $P(1)$ is true, and moreover that if $P(n)$ is true then $P(n+1)$ we are essentially constructing a chain such that:
$$
P(1) \implies P(2) \implies P(3) \implies P(4) \implies \cdots
$$
Where if all the implications in the chain are true, and we know that the very first link in the chain is true, then it follows that all statements afterwards must also be true.

Now, in a strong induction proof where we need several base cases, this then constructs several of these chains all running in parallel, so in order to ensure all possible values of $n$ are included in our proof we need to prove all several of these chains and their base cases because we have that $P(k)$ is true for all $k < n$. 

This is why strong induction often requires more base cases than weak induction. It depends on how far back the inductive step looks. Without the right base cases, the logic might only apply to a subset of the integers, not all of them.

## Proving Recurrence Relations

As see in [[Module 09]] a recurrence relation is a sequence that defines each term of the sequence based on previous terms. This fully determine a sequence from this, naturally some initial values or boundary conditions are required just like how a recursive function or induction proof requires a base case.

### An example

Consider the relation: $a_1 = 0, a_2 = 2, a_3 = 4, a_n = 3a_{\lfloor{n/3\rfloor}} + 2 \quad \forall n \in\mathbb Z^+ > 3$

For any positive integer $n$ prove $a_n$ is even.

> [!theorem] Proof 
> 
> Base cases:
> $$
> \begin{align} 
> 
> 	a_{1} & = 0 \\
> 	a_{2} & = 2 \\ 
> 	a_{3} & = 4 \\
> 
> 
> \end{align}
> $$
> Which we can see all hold as 0, 2, and  4 are all even.
> 
> Inductive Hypothesis: Assume $a_k$ is even for any $k<n$
> 
> Inductive Step:
> Consider an unspecified integer $n>3$, now since $\lfloor{n/3\rfloor}< n$ by the inductive hypothesis we have that  $a_{\lfloor{n/3\rfloor}}$ is even. Thus we have that $a_n = 3(2k) + 2$ for some positive integer $k$. Therefore $a_n = 2(3k + 1)$ hence $a_n$ is even.
> 


## Determining the number of base cases

Any induction proof will always require at least one base, and at that, must include at least the smallest possible value for $n$ for which the statement holds. However, additional values might be required to prove the proof is correct. To determine these values, first complete the inductive step and verify that all values used are indeed valid. 

For example, suppose you are proving P(n) for all positive integers. The first base case will naturally be n=1. After finishing your inductive step, you must check the values for which you invoked the inductive hypothesis. If, for instance, your inductive step uses the hypothesis at n − 3, then the proof will not work for n=2, because 2 − 3 = − 1, which is not a valid positive integer. Therefore, n=2 must be added as a base case.

Next, you test n=3. Since 3 − 3=0, and 0 is also not a positive integer, the inductive step does not work for n=3, so n=3 must be added as well. Finally, testing n=4 gives 4 − 3=1, which is a valid positive integer. Thus, the inductive step works for n=4, and it does not need to be included as a base case.

==Therefore, since the inductive hypothesis was used with k = n − 3, the proof requires n=1, n=2, and n=3 as base cases.==
