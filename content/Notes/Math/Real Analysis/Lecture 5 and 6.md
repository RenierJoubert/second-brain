# Sequences and Convergence

## Convergence
Let $(a_{n})_{n\in \mathbb{N}}$ be a sequence of real numbers. We say that $a_{n}$ converges to $L \in \mathbb{R}$ if $\forall \varepsilon>0, \exists N \in \mathbb{N}$ s.t. $\forall n \geq N, |a_{n}-L|<\varepsilon$. This means $a_{n} \to L$.

## Arithmetic of Convergence
> Assume $a_{n} \to a$ and $b_{n} \to b$.

1. $(a_{n}+b_{n})\to a +b$
2. $a_{n}b_{n}\to ab$
3. $\frac{a_{n}}{b_{n}}\to \frac{a}{b}$

We can prove the sum fairly easily. Namely, let $\varepsilon >0$, then $\exists N_{1} \in \mathbb{N}$ s.t. $\forall n \geq N_{1}$, $|a_{n}-a|< \frac{\varepsilon}{2}$.
Similarly, $|b_{n}-b|< \frac{\varepsilon}{2}$. Using the triangle inequality we get:
$$
|(a_{n}+b_{n}) - (a +b)| \leq|a_{n}-a| + |b_{n}-b| < \varepsilon
$$
To make the format more intuitive I will write:
$$
|a_{n}-a + b_{n} -b| \leq |a_{n}-a| + |b_{n}-b|
$$
But these are equivalent, and the first shows that $a_{n}+b_{n}\to a + b$.

## A Convergent Sequence is Bounded
Let $(a_{n})_{n \in \mathbb{N}}$ be a convergent sequence s.t. $a_{n}\to L$. Then, $\forall \varepsilon >0, \exists N \in \mathbb{N}$ s.t. $\forall n\geq N, |a_{n}-L|<\varepsilon$. Hence $|a_{n}|\leq|L| + \varepsilon$ for all $\varepsilon>0$ if $n\geq N$. This holds for all but *finitely* many $n$. Fortunately, we can take the maximum of a finite number of terms, namely let:
$$
M = \max\{ |a_{1}|, \cdots|a_{N-1}|, |L|+\varepsilon \}
$$
Then, $|a_{n}|\leq M$ for all $n \in \mathbb{N}$ and it is bounded. 


> [!danger] Boundedness Does NOT Imply Convergence 
> For example, take $a_{n}=(-1)^n$.
> 

## Bounded Monotone Sequences Converge
Let $(a_{n})$ be a bounded and monotone increasing sequence, meaning $a_{n}\leq a_{n+1}$. Then, $\text{sup}(a_{n})$ exists and $a_{n} \to \text{sup}(a_{n})$.


> [!theorem]- Proof 
> Let $L=\text{sup}(a_{n})$, then $a_{n}\leq L$ for all $n \in \mathbb{N}$ and any $x<L$ is not an upper bound, so $L-\varepsilon$ is not an upper bound. Therefore, $L-\varepsilon < a_{n} \leq L < L +\varepsilon$. Moreover, for all $n\geq N$, $a_{N}\leq a_{n}$ so $a_{N}\leq a_{n}\leq L<L+\varepsilon$ and $|a_{n}-L|<\varepsilon$ for all $n\geq N$.

## Subsequences
Let $(a_{n})$ be a sequence of real numbers. A subsequence of $(a_{n})$ is a new sequence $(a_{n_{k}})_{k}$ indexed by $k$ with strictly increasing indices $n_{1}< n_{2}<n_{3}<\cdots$. $k$ is the index in the subsequence, and $n_{k}$ is the index in the original sequence. 

Walk through $(a_n)$ in order and maybe delete some terms, but keep infinitely many. You can skip ahead, but you can't go backwards or use the same term twice. This is what a subsequence is.

## Every Sequence Has a Monotonic Subsequence
> Proof omitted. Do later.

## Bolzano-Weierstrass Theorem
> Every bounded sequence has a convergent subsequence.

More formally, let $(x_{n})$ be a sequence contained in $[a,b]$, then there exists a subsequence $(x_{n_{k}})_{k}$ and $L \in \mathbb{R}$ s.t. $|x_{n_{k}}-L| < \varepsilon$.

 First, we know that $(x_{n_{}})$ has a monotonic subsequence. Without loss of generality, assume this subsequence is monotonic increasing. This subsequence is then bounded above by $b$, hence it converges because a bounded monotonic sequence converges. 

Note that B-W gives the existence, but tells us nothing about the limit itself.

## Closed Sets Contain Their Limits
If $(x_{n})_{n} \subseteq [a, b]$ and $x_{n}\to L$, then $L \in [a,b]$.


> [!theorem]- Proof 
> If $L \not\in [a,b]$ then either $L > b$ or $L<a$. If $L>b$ then $L-b>0$. Let $\varepsilon=L-b$ then $\exists N\in \mathbb{N}$ s.t. $|x_{n}-L|<\varepsilon=L-b$ for all $n\geq N$. This means that $L-\varepsilon< x_{n}<L+\varepsilon$ and $x_{n}>b$ for all $n\geq N$ which is a contradiction.  


> [!danger] Open Sets May Not Contain Their Limits 
> If $x_{n}\to L$ and $x_{n}\in(a, b)$ then $L$ may or may not be in $(a, b)$. For example, let $x_{n}=\frac{1}{n}$, then $x_{n}\in(0, 2)$ but $0 \not\in (0, 2)$.


## ELFS: Heine-Borel Theorem
>TFAE

1. $A \subseteq \mathbb{R}$ is closed and bounded
2. Every sequence $(x_{n})$ contained in $A$ has a subsequence that converges to a point in $A$.




## Cauchy Sequences
> We might not know $L$ ahead of time, but we can show that the terms of a sequence get arbitrarily close together. It is also not that difficult to prove that if a sequence does converge, then it is necessary for the terms to get arbitrarily close together. For example, if $\exists N \in \mathbb{N}$ s.t. $|x_{n}-L|< \frac{\varepsilon}{2}$ and $|x_{m}-L|< \frac{\varepsilon}{2}$ for all $n,m>N$. Then, by triangle inequality we have that:
>$$
 |x_{n}-x_{m}|\leq |x_{n}-L|+|x_{m}-L|< \varepsilon
$$
>
>

We say that a sequence $(x_{n})$ is Cauchy if $\forall \varepsilon>0$, $\exists N \in \mathbb{N}$ s.t. $\forall n,m\geq N$, $|x_{n}-x_{m}|<\varepsilon$.

Cauchy is a weaker notion of convergence, that is, if a sequence is convergent,  then it is Cauchy. But, if a sequence is Cauchy, it does not imply that it is convergent. 

