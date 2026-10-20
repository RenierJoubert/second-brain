#math 

# Series
> We cannot literally take the sum of infinitely many terms, so to evaluate convergence in series we study the partial sum instead.

Let $(a_{n})$ be a sequence. Then define the series $S = \sum_{n=1}^{\infty}a_{n}$ to mean the limit of the partial sums $(S_{N})$ as the sequence $S_{N}=\sum_{n=1}^{N}a_{n}$.

If this limit exists, we say that $S$ converges and $S = \lim_{ N \to \infty }S_{N}$. If this limit does not exist, then we say that $S$ diverges. If $\lim_{ N \to \infty }S_{N}=\pm  \infty$ then we write $S= \pm \infty$.

## Some Famous Series

### Geometric Series
$$
S = 1 + \frac{1}{2}+ \frac{1}{4} + \frac{1}{8} + \cdots

$$
This is the series:
$$
S = \sum_{n=0}^\infty \frac{1}{2^n}
$$
The partial sum is then:
$$
S_{N}= 1 + \frac{1}{2} + \frac{1}{4} + \cdots + \frac{1}{2^N}
$$
Now, notice that $2S_{N}-S_{N}$ is as follows:

$$
\begin{align}
2S_{N}-S_{N} & =\left( 2+ 1 + \frac{1}{2} + \cdots +\frac{1}{2^{N+1}} \right)-\left( 1+\frac{1}{2}+\cdots+  \frac{1}{2^N} \right) \\
 & =2 +\frac{1}{2^{N+1}}
\end{align}
$$
And so $\lim_{ N \to \infty }S_{N}=2$ so we conclude $S \to 2$.

### Harmonic Series
$$
S = 1 + \frac{1}{2}+\frac{1}{3}+\frac{1}{4}+\cdots
$$
This is the series:
$$
S= \sum_{n=1}^\infty \frac{1}{n}
$$

We can see that this series diverges if we group the terms are follows. The idea is that we can group the elements of the series in groups with sizes of powers of two as follows:
$$
S_{}=1+\frac{1}{2}+\left( \frac{1}{3}+\frac{1}{4} \right)+\left( \frac{1}{5}+\frac{1}{6}+\frac{1}{7}+\frac{1}{8} \right)+\cdots
$$
Now, notice each term in the first group is $\geq \frac{1}{4}$ and there are 2 terms, similarly, each term in the second group is $\geq \frac{1}{8}$ and there are 4 terms. So, we have an infinite number of groups of the form
$$
\geq2^{k-1} \cdot \left( \frac{1}{2^k} + \frac{1}{2^k} \right)=\frac{2^{k-1}}{2^{k+1}}=\frac{1}{2}
$$
So all of the groups are $\geq \frac{1}{2}$. Hence, $S_{N}=1+\frac{1}{2} \cdot k$ where $k \in \mathbb{Z}$ s.t. $2^k\leq N$. Hence $\lim_{ N \to \infty }=\infty$ so $S$ diverges.

Basically, even though the terms of the harmonic series do eventually go to zero, they do so too slowly.

### Basel Series (special p-series)

$$
S= \sum_{n=1}^\infty \frac{1}{n^2} = 1+\frac{1}{4} +\frac{1}{9} + \cdots
$$
We prove this in homework 5. (Will add later). This is proven using the dyadic series converges and doing a comparison test.

### Alternating Harmonic Series
$$
S = 1 -\frac{1}{2} + \frac{1}{3}-\frac{1}{4} + \cdots
$$
This is the series:
$$
S = \sum_{n=1}^\infty (-1)^{n+1} \cdot \frac{1}{n}
$$
This series does converge. We can prove it by considering $S_{2n}$ and $S_{2n+1}$.
$$
S_{2n} = 1 +\left( -\frac{1}{2}+\frac{1}{3} \right) + \left( -\frac{1}{4} +\frac{1}{5}\right) + \cdots - \frac{1}{2^n}
$$
Notice all of the grouped terms are negative and $\frac{1}{2^n}$ is negative. But, rearranging the terms


$$
S_{2n} = \left( 1-\frac{1}{2} \right) + \left( \frac{1}{3}-\frac{1}{4} \right)+ \cdots+\left( \frac{1}{2n-1}-\frac{1}{2n} \right)
$$
we see that now all the grouped terms are positive. So, $S_{2n}$ is decreasing, but each term is positive so $S_{2n}\geq 0$. Hence 0 is a lower bound and $S_{2n}$ is decreasing so it converges. Moreover,
$$
S_{n} = \begin{cases}
S_{2k} \quad k = \frac{n}{2} \quad \text{if n even} \\
S_{2k}+\frac{1}{n} \quad k = \frac{{n-1}}{2} \quad \text{if n odd}
\end{cases}
$$
$S_{2k}$ and $S_{2k}+\frac{1}{n}$ converge to the same thing, so $S$ converges. (proof on hw 5 will fill in later)

## Absolute Convergence
A series $S = \sum_{n=1}^\infty a_{n}$ converges absolutely if $\sum_{n=1}^\infty |a_{n}|$ converges.

## Cauchy Criterion for Series
$$
\begin{align}
\sum_{n=1}^\infty a_{n} \quad \text{converges}  & \iff S_{N} \quad \text{converges} \\
 & \iff S_{N} \quad \text{is Cauchy} \\
 &  \iff \forall \varepsilon  >0, \exists N \in \mathbb{N}, s.t. \forall n,m\geq N, |S_{m}-S_{n}|<\varepsilon \\
 & \iff \forall \varepsilon>0, \exists N \in \mathbb{N} \text{ s.t. } \forall m > n \geq N, \left|\sum_{k=n+1}^m a_k\right| < \varepsilon
\end{align}
$$
So, $\sum a_{n}$ converges $\iff |\sum_{k=n+1}^m a_{k}| < \varepsilon$. Where $|\sum_{k=n+1}^m a_{k}|$ is the sum the remaining terms in the series after $N$ to $m$, ie from $n \to m$.


> [!quote] This is saying that: 
> "A series converges precisely when its tails eventually become arbitrarily small." 

## Absolute Convergence $\implies$ Convergence

If $\sum_{n=1}^\infty |a_{n}|$ converges then $\sum_{n=1}^\infty a_{n}$ converges, and $\left | \sum_{n=1}^\infty a_{n} \right| \leq \sum_{n=1}^\infty |a_{n}|$.

The proof of this just follows from the Cauchy Criterion for Series. First, assume $\sum |a_{n}|$ converges,  then from the Cauchy Criterion this means that $\forall \varepsilon>0$, $\exists N \in \mathbb{N}$ such that $\forall m>n\geq N$
$$
\sum_{k=n+1}^m |a_{k}| < \varepsilon
$$
Then, from triangle inequality we have that:
$$
\left | \sum_{k=n+1}^m a_{k} \right | \leq \sum_{k=n+1}^m |a_{k}| < \varepsilon
$$
And from the Cauchy Criterion and the definition of partial sums:
$$
|S_{m}-S_{n}| =  \left | \sum_{k=n+1}^m a_{k} \right | \leq \sum_{k=n+1}^m |a_{k}| < \varepsilon
$$
Hence, the partial sum of the series is Cauchy, and $\mathbb{R}$ is complete so partial sum converges, thus the series converges and absolute convergence implies convergence.

Note that $\left | \sum_{n=1}^\infty a_{n} \right| \leq \sum_{n=1}^\infty |a_{n}|$ is obtained from just using triangle inequality on the partial sums and then taking the limit $N \to \infty$.


> [!abstract] If $a_{n}\geq 0$ then the series converges if and only if $S_{N}$ is bounded above

$$
\begin{align}
\sum_{n=1}^\infty a_{n} \quad \text{converges} \iff & S_{N} \quad \text{converges} \\
 \iff  & S_{N} \quad \text{is bounded above}
\end{align}
$$
Note that $S_{N}$ converges iff $S_{N}$ is bounded above because $a_{n}\geq 0$ so the sequence is increasing, and a bounded monotonic sequence converges. 

## A Necessary Condition for Convergence
If $\sum_{n=1}^\infty a_{n}$ converges then $\lim_{ n \to \infty }a_{n}=0$. (Proof omitted)

## Comparison Test

Suppose $0\leq a_{n} \leq b_{n}$ for all sufficiently large $n$ (on the tail). Then, 

1. If $\displaystyle\sum_{n=1}^\infty b_n$ converges, then $\displaystyle\sum_{n=1}^\infty a_n$ converges.
2. If $\displaystyle\sum_{n=1}^\infty a_n$ diverges, then $\displaystyle\sum_{n=1}^\infty b_n$ diverges.

Proof for 1:

If $\sum b_{n}$ converges then $S_{N}=\sum_{n=1}^N b_{n}$ is bounded, hence $\sum_{n=1}^N a_{n}$ is bounded, a bounded monotone sequence converges so $\sum a_{n}$ converges.

Proof for 2: We can just prove the contrapositive. 

## Convergence of Geometric Series
The series:
$$
S = \sum_{n=1}^\infty r^n
$$
converges if and only if $|r|<1$.

(Proof in HW5)

## Convergence of P-series
The p-series:
$$
\sum_{n=1}^\infty \frac{1}{p^n}
$$
converges if and only if $p>1$.

(Proof in HW5)

