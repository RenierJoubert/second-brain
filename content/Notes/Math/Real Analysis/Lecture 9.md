#math 

# More Series

## Root Test
> Good for proving convergence when the terms of the series behave like something raised to the power $n$. We are basically taking a series and comparing to the geometric series.

Let $\sum a_{n}$ be a series and define
$$
L = \lim_{ n \to \infty } \sqrt[n]{ |a_{n}| }
$$
1. If $L<1$ then $\sum a_{n}$ converges absolutely
2. If $L > 1$ then $\sum a_{n}$ diverges
3. If $L =1$ then the series could either converge or diverge


> [!theorem]- Proof 
> If $L<1$ then pick some $L<r<1$. By the definition of the limit, there exists some $N$ such that for all $n\geq N$ we have $\sqrt[n]{ |a_{n}| }\leq r$ so $|a_{n}|\leq r^n$. Since $|r|<1$ the geometric series $\sum r^n$ converges. Hence by the comparison test $a_{n}$ converges absolutely.
> If $L>1$ then pick some $1<r<L$ such that there exists some $N$ so for all $n\geq N$ we have $\sqrt[n]{ |a_{n}| }\geq r$. So $|a_{n}| \geq r^n \geq 1$ for all $n \geq N$, which means $a_{n} \not\to 0$, so $\sum a_{n}$ diverges by the necessary condition ($\sum a_{n}$ converges $\implies a_{n} \to 0$). (Comparing with $\sum r^n$ would only show $\sum |a_{n}|$ diverges, which is not enough.)
> If $L=1$ then we see that the harmonic series and alternating harmonic series both satisfy $L=1$ so this case is inconclusive.

## Ratio Test
> Good for dealing with expressions that involve powers and factorials.

Let $\sum a_{n}$ be a series and each $a_{n}\neq 0$. Then define:
$$
L = \lim_{ n \to \infty } \left| \frac{{a_{n+1}}}{a_{n}} \right|
$$
1. If $L<1$ then $\sum a_{n}$ converges absolutely
2. If $L > 1$ then $\sum a_{n}$ diverges
3. If $L=1$ then it could diverge or converge.

(Proof done in homework 5)

## The Root Test is Stronger 
> Whenever the ratio test applies $(a_{n} \ne 0)$ the root test also applies and gives the same conclusion. However, the root test also succeeds when the ratio test fails.

(Proof omitted for now)

## Arithmetic of Series

1. Addition and subtraction behave as expected (can take limits of partial sums)
2. Multiplication is tricky

We can naively define the multiplication of infinite sums by doing it index wise so $a_{0}\left( \sum_{n=1}^\infty b_{n} \right) + \cdots$ for all $a_{n}$ but this is cumbersome. 

We can show this best with power series,  we would like:

$$
\left( \sum_{n=0}^\infty a_{n}x^n \right)\left( \sum_{n=0}^\infty b_{n}x^n \right) = \sum_{n=0}^\infty c_{n}x^n
$$

Ie, we want to group terms according to their degree. This is the same idea as adding all the "big" terms first, and this is how the product of series is defined.

## Cauchy Product
> Given two series $\sum a_{n}$ and $\sum b_{n}$ their product is defined as

$$
\left( \sum_{n=0}^\infty a_{n} \right)\left( \sum_{n=0}^\infty b_{n} \right) = \sum_{n=0}^\infty c_{n}
$$
where, 
$$
c_{n} = \sum_{k=0}^n a_{k}b_{n-k}
$$
Multiplying $(a_0 + a_1 + a_2 + \dots)(b_0 + b_1 + b_2 + \dots)$ produces every product $a_i b_j$ exactly once. We can lay these out in a grid:

$$
\begin{array}{c|ccccc}
 & b_0 & b_1 & b_2 & b_3 & \cdots \\
\hline
a_0 & a_0b_0 & a_0b_1 & a_0b_2 & a_0b_3 & \cdots \\
a_1 & a_1b_0 & a_1b_1 & a_1b_2 & \cdots \\
a_2 & a_2b_0 & a_2b_1 & \cdots \\
a_3 & a_3b_0 & \cdots
\end{array}
$$

The question is what order to add infinitely many grid entries in. The Cauchy product adds along the **anti-diagonals** where $i + j = n$:

$$
\begin{align}
c_0 &= a_0b_0 \\
c_1 &= a_0b_1 + a_1b_0 \\
c_2 &= a_0b_2 + a_1b_1 + a_2b_0
\end{align}
$$

So $c_n$ is the sum of anti-diagonal $n$, which is exactly what $c_n = \sum_{k=0}^n a_k b_{n-k}$ says: in each term, the indices $k$ and $n-k$ add up to $n$.

## Merten's Product Theorem

Let $\sum a_{n}$ and $\sum b_{n}$ be two series such that $\sum a_{n}$ converges absolutely and $\sum b_{n}$ converges (not necessarily absolutely). Then define the Cauchy Product Series by 
$$
c_{n}=\sum_{k=0}^n a_{k}b_{n-k}
$$
Then, the series $\sum c_{n}$ converges and equals the product of $\sum a_{n}$ and $\sum b_{n}$.

(Proof in HW5)

## Any Rearrangement is Equal
> If a series is absolutely convergent, then any rearrangement of its infinite terms is equal and converges to the same sum. So, an absolutely convergent series can never be rearranged to a different sum, because its sum is stable under the reordering of terms. (Contrast this with conditionally convergent series below, which can be rearranged to equal any value you want.)

(Will do proof later)


> [!danger] Riemann Rearrangement Theorem 
> Let $\sum a_{n}$ be a conditionally convergent series of real numbers, then by rearranging the series we can make the resulting series converge to any real number, or even diverge to $\pm \infty$.
> 


### Throwing Away Positive or Negative Terms (Lemma)
Let $\sum a_{n}$ be a conditionally convergent series of real numbers. Then define $a_{n}^+ =\max(a_{n},0)$ and $a_{n}^- = \max (-a_{n}, 0)$. Then:
$$
\sum a_{n}^+ = \infty \quad \sum a_{n}^- =  \infty
$$
Proof:
$\sum a_{n}$ is conditionally convergent, so $\sum |a_{n}|= \infty$. Notice that $|a_{n}|=a_{n}^+ + a_{n}^-$ and $a_{n}=a_{n}^+ - a_{n}^-$. If both the infinite series of the positive terms and negative terms were finite then:
$$
\sum |a_{n}| = \sum(a_{n}^+ + a_{n}^-) < \infty
$$
But this contradicts conditional convergence. So one of them must diverge. Suppose only one diverges, say $\sum a_{n}^-$ diverges while $\sum a_{n}^+$ converges. Then:
$$
\sum a_{n} - \sum a_{n}^+ = - \sum a_{n}^- = -\infty
$$
Which is a contradiction because the sum of two convergent series is a real number. The other case is similar.

(The proof for the Riemann Rearrangement theorem is long and I dont have time right now). But, the basic idea is basically that if you want your convergent series to equal some $L \in \mathbb{R}$, then you can take positive terms and sum them until you pass $L$, then add negative terms until the sum dips below $L$, then add positive terms until you pass $L$ again, then negative terms until you dip below $L$, and so forth. The lemma guarantees you never run out of either sign, and since $a_{n} \to 0$ the overshoots shrink to 0, so the partial sums converge to $L$. 

To get divergence, add enough terms to reach $1$, then add 1 negative term, then add enough positive terms to get 2, then add another negative term, and so forth...
