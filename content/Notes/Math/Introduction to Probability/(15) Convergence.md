#stats #math #math302

# Convergence II

Topics covered include:
1. Convergence in distribution
2. The Central Limit Theorem (CLT)

## Convergence In Distribution

> [!Theorem] Convergence In Distribution 
> A sequence of random variables $\{ X_{n} \}$ with **CDFs** $F_{n}$ converges *in distribution* to a random variable $X$ with CDF $F$ if, for all $t$ at which $F$ is continuous,
> $$
> \lim_{ n \to \infty } F_{n}(t)=F(t)
> $$  
> That is, when $n$ is sufficiently large the CDF of $X_{n}$ is equal to the CDF of the given RV $X$.

Convergence in distribution is the weakest form of convergence across convergence almost surely, and convergence in probability, however it is used the most out of the three. We use the following notation to denote convergence in distribution:
$$
X_{n} \to^d X
$$
Namely, if $\exists s > 0$ such that $\forall t \in (-s, s)$, $m_{X_{n}}(t)\to m_{X}(t)$ then $X_{n} \to^d X$.


> [!Todo] An example 
> Let $U \sim \text{Unif}(0, 1)$ and let $U_{n} \sim \text{Unif}(0, 1)$ all i.id. Then, define $X_{n}=U_{n}+B_{n}$ where $B_{n} \sim \text{Bern}\left( \frac{1}{n} \right)$ all i.id and independent of ${U}$. Show that $X_{n} \to^d U$.
> 

We have that for all $t$,
$$
m_{X_{n}}(t)=m_{U_{n}}(t)m_{B_{n}}(t) = \frac{{e^{ t }-1}}{t}\left( 1-\frac{1}{n}+\frac{1}{n}e^{ t } \right) \to \frac{{e^{ t }-1}}{t} = m_{U}(t)
$$

> [!Todo] An example 
> Let $X_{n}\sim N\left( 0, 1 + \frac{1}{n} \right), \forall n$. Show that $X_{n}\to^d Z \sim N(0, 1)$ by examining the moment generating functions.
> 

First recall that the MGF of $N(\mu, \sigma^2)$ is $m(t)=e^{ \mu t + \sigma^2 t^2/2 }$
We have that:
$$
m_{X_{n}}(t)=e^{ 0 \cdot t  + (1+1/n)t^2/2} = e^{ (1+1/n)\cdot t^2/2 }
$$
Hence,
$$
\lim_{ n \to \infty } e^{ (1+1/n)t^2/2 } = e^{ t^2/2 }
$$
And $e^{ t^2/2 }$ is just the MGF of $N(0, 1)$, thus $X_{n} \to^d Z$ as $\lim_{ n \to \infty }m_{X_{n}}(t)=m_{Z}(t)$.

## Different Types of Convergence
> Naturally there is stronger notions of convergence than others, namely, for **any** random variable $X$ we have that:

$$
X_{n} \to^\text{a.s} X \implies X_{n} \to^p X \implies X_{n} \to^d X
$$
![[Pasted image 20260618123422.png]]

Essentially, convergence almost surely examines the sample path of $X_{n}(\omega)$, and we observe if that path converges to the value of $X(\omega)$ for almost all $\omega$.

Convergence in probability examines the joint distributions of $X_{n}$ and $X$, such that we hope to prove that the difference $|X_{n}-X|$ is very small, in that we hope the probability the difference is very small is one.

Convergence in distribution involves the marginal distribution of $X_{n}$, such that we look at the distribution of $X_{n}$ and hope that it equals the distribution of $X$ as $n \to \infty$.


> [!Theorem] An example 
> Let $\{ U \}$ be i.id $\text{Unif}(0,1)$ distributed random variables. And let $Y_{n}=\max\{ U_{1}, \cdots, U_{n} \}$ . Prove that $n(1-Y_{n}) \to^d \text{Exp}(1)$.
> 

Firstly, the CDF of $n(1-Y_{n})$ is as follows:
$$
\begin{align}
F_{n(1-Y_{n})}(t)  & = \mathbb{P}(n(1-Y_{n})\leq t) \\
 & = \mathbb{P}\left( Y_{n} \geq 1-\frac{t}{n} \right) \\
 & = 1-\mathbb{P}\left( Y_{n} < 1-\frac{t}{n} \right) \\
 & = 1- \mathbb{P}\left( U_{1} < 1-\frac{t}{n}, \cdots, U_{n} < t - \frac{t}{n} \right) \quad \text{ becuase max}\{ U \} \text{ is } < 1-\frac{t}{n} \\
 & = 1- \prod_{i=1}^n \mathbb{P}\left( U_{i} < 1-\frac{t}{n} \right) \quad \text{ because i.id} \\
 & = 1- \prod_{i=1}^n\left( 1-\frac{t}{n} \right) \quad \text{because unifromally distributed} \\
 & = 1-\left( 1-\frac{t}{n} \right)^n \\
 & \\
 &  \lim_{ n \to \infty } \left( 1-\left( 1-\frac{t}{n} \right)^n \right)  = 1-e^{ -t }
\end{align}


$$
and $1-e^{ -t }$ is just the CDF of $\text{Exp}(1)$, hence $n(1-Y_{n}) \to^d \text{Exp}(1)$.

## Central Limit Theorem (CLT)


> [!Theorem] The CLT 
> Let $X_{1}, \cdots, X_{n}$ be i.id random variables with finite mean $\mu$ and variance $\sigma^2$, then
> $$
> \frac{{\sqrt{ n }(\overline X_{n}-\mu)}}{\sigma} \to^d N(0, 1)
> $$ 
> Namely, $\overline X_{n}$ appropriately normalized converges.

The CLT is helpful because it allows us to approximate the probability of $\mathbb{P}(\overline X_{n} \leq x)$ by using $\Phi$,the CDF of $N(0, 1)$ such that:
$$
\mathbb{P}(\overline X_{n} \leq x) \approx \Phi\left( \frac{{\sqrt{ n }(x-\mu)}}{\sigma} \right)
$$
when $n$ is sufficiently large.

For example,
![[Pasted image 20260618130006.png]]

![[Pasted image 20260618130019.png]]

## Sums and The CLT

We know that when $n$ is large that the distribution of:
$$
\frac{{\overline X_{n} - \mu}}{{\frac{\sigma}{\sqrt{ n }}}}
$$
is approximately $N(0, 1)$, now because $n$ is sufficiently large we can also discuss the distribution of 
$$
S_{n} = \sum_{i=1}^n X_{i}
$$
Namely, we have that:
$$
\begin{align}
1-\Phi(z)  & = \lim_{ n \to \infty } \mathbb{P}\left( \frac{{\overline X_{n} - \mu}}{{\frac{\sigma}{\sqrt{ n }}}}>z \right) \\
 & = \lim_{ n \to \infty } \mathbb{P}\left( \frac{{S_{n}-n\mu}}{\sqrt{ n }\sigma} > z\right)
\end{align}
$$

> [!Todo] An example 
> Suppose a struggling restaurant has daily sales on any given day as a random variable with a mean of \$2500 and sd of \$500, what is the approximate value that the total sales for 30 days will be over \$80,000?
> 

$$
\begin{align}
\mathbb{P}(T > 80000)  &  = \mathbb{P}\left( \frac{{T-n\mu}}{\sqrt{ n }\sigma} > \frac{{80000 - n\mu}}{\sqrt{ n }\sigma} \right) \\
 & = \mathbb{P}\left( Z > \frac{{80000-30\cdot 2500}}{\sqrt{ 30 }\cdot 500} \right)\\ 
 & \approx 1 - \Phi(1.8257) \\
 & = 0.034
\end{align}
$$
Which uses $\mathbb{P}(Z > z) = 1 - \Phi(z)$
