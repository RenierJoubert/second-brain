#stats #math #math302

# Covariance, Correlation, and MGFs

Topics covered include:
1. Defining covariance and correlation
2. Calculating covariance from discrete and continuous distributions
3. Moment Generating Functions (MGFs)
4. Calculating moments

## Covariance

> [!Theorem] Covariance 
> We can measure the relationship between two random variables $X,Y$ using covariance. Namely, the covariance between these two random variables is defined such that
> $$
> \begin{align}
> \text{Cov}(X, Y)  & = \mathbb{E}[(X - \mathbb{E}[X])(Y - \mathbb{E}[Y])] \\
>  & = \mathbb{E}[XY] - \mathbb{E}[X]\mathbb{E}[Y]
> \end{align}
> $$ 
> This is a scalar-valued function of $X, Y$ and measures the *linear* relationship between $X, Y$. Essentially, if $\text{Cov}(X, Y)>0$ then $X, Y$ tend to increase together.

### Discrete Covariance
$$
\text{Cov}(X, Y) = \sum_{x} \sum_{y}(x-\mathbb{E}[X])(y-\mathbb{E}[Y])p_{X,Y}(x, y).
$$
### Continuous Covariance
$$
\text{Cov}(X, Y) = \int_{-\infty}^\infty \int_{-\infty}^\infty (x - \mathbb{E}[X])(y-\mathbb{E}[Y])f_{X,Y}(x, y) \ dx \ dy
$$
## Properties of Covariance

1. Linearity
	$\text{Cov}(aX + bY, cZ) = ac\text{Cov}(X, Z) + bc\text{Cov}(Y, Z)$

2. Independence
	if $X$ and $Y$ are independent then $\text{Cov}(X, Y)=0$, ==but the converse is false.==


> [!Todo] An example 
> Let $X$ be the number of heads in 5 tosses of a fair coin and let $Y$ be the number of tails in the same 5 tosses. What is $\text{Cov}(X, Y)$?
> 

We have that $X = \text{number of heads} \implies Y = 5 - X$. Then,
$$
\begin{align}

\text{Cov}(X, Y)  & = \text{Cov}(X, 5-X) \\
 &  = \text{Cov}(X, -X) \\
 &  = -\text{Cov}(X, X) \\
 &  =-(\mathbb{E}[XX]-\mathbb{E}[X]\mathbb{E}[X]) \\
 &  = -\text{Var}(X) \\
 &  = -(5)(0.5)(0.5) \\
 &  = -\frac{5}{4}
\end{align}
$$
The above example uses the fact that a coin toss is binomially distributed, and hence $\text{Var}(X)= n\theta(1-\theta)$ if $X \sim \text{Binom}(n, \theta)$.

## Variance and Covariance
> Let $X, Y$ be random variables with finite variances, then

$$
\text{Var}(X + Y) = \text{Var}(X) + \text{Var}(Y) + 2\text{Cov}(X, Y)
$$
We can prove this as follows:
$$
\begin{align*}
\operatorname{Var}(X+Y)
&= E\!\left[(X+Y-E[X]-E[Y])^2\right] \\
&= E\!\left[(X-E[X])^2 + 2(X-E[X])(Y-E[Y]) + (Y-E[Y])^2\right] \\
&= E[(X-E[X])^2]
   + 2E[(X-E[X])(Y-E[Y])]
   + E[(Y-E[Y])^2] \\
&= \operatorname{Var}(X)
   + 2\operatorname{Cov}(X,Y)
   + \operatorname{Var}(Y).
\end{align*}
$$

> [!Tip] Variance and Independence 
> Remember if $X, Y$ are independent then $\text{Cov}(X + Y)=0$ and hence
> $$
> \text{Var}(X + Y) = \text{Var}(X) + \text{Var}(Y)
> $$ 
> Generally, if $\{ X_{n} \}$ are independent random variables with finite variances, then
> $$
> \text{Var}\left( \sum_{i=1}^n X_{i} \right) = \sum_{i=1}^n \text{Var}(X_{i})
> $$

## Correlation

> [!Theorem] Correlation 
> The **correlation** between two random variables $X, Y$ is defined such that
> $$
> \rho_{XY} = \text{Corr(X, Y)}= \frac{\text{Cov}(X, Y)}{\sigma_{X}\sigma_{Y}}
> $$
> Correlation is the standardized measure of the linear relationship between $X, Y$, whereas covariance is **not** standardized. Additionally, $-1 \leq \rho_{XY} \leq 1$. 

For example, in our previous coin flip example, we would have that $\rho_{XY}=\frac{\left( -\frac{5}{4} \right)}{\sqrt{\frac{5}{4} }\sqrt{ \frac{5}{4} }}=-1$, and intuitively this makes sense as this represents a perfectly negative correlation. 

## Moment Generating Functions

> [!Theorem] Moment Generating Function (MGF) 
> The moment generating function (MGF) of a random variable $X$ is defined such that:
> $$
> m_{X}(t) = \mathbb{E}[e^{tX}]
> $$ 
> This is a scalar-valued function of $t$.


> [!Theorem] K-th moment of X 
> If $X$ is a random variable with MGF $m_{X}(t)$, and there exists $s > 0$ such that $\forall t \in (-s, s)$, $m_{X}(t)<\infty$ . Then for any $k \in \mathbb Z$ where $k \geq 1$ we have that
> $$
> \mathbb{E}[X^k] = m_{X}^k(0) = \frac{d^k}{dt^k}m_{X}(t) \bigg|_{t=0}
> $$
> This is called the $k$-th moment of $X$, where the first moment is given by $\mathbb{E}[X]=m_{X}'(0)$, the second as $\mathbb{E}[X^2]=m_{X}''(0)$ and so on.


> [!Todo] An example 
> Let $X \sim \text{Gam}(\alpha, \lambda)$ with MGF $m_{X}(t)=\left( 1-\frac{t}{\lambda} \right)^{-\alpha}$. Find $\text{Var}(X)$.
> 

$$
\begin{align}
\mathbb{E}[X]  & = m_{X}'(0) = \frac{d}{dt}\left( 1-\frac{t}{\lambda} \right)^{-\alpha} \bigg|_{t=0}= \frac{\alpha}{\lambda} \\
\mathbb{E}[X^2] & =m_{X}''(0) = \frac{d}{dt}\left( \frac{\alpha}{\lambda}\left( 1-\frac{t}{\lambda} \right)^{-\alpha-1} \right)\bigg|_{t=0}=\frac{\alpha(\alpha+1)}{\lambda^2} \\
\text{Var}(X) & = \mathbb{E}[X^2]-\mathbb{E}[X]^2=\frac{\alpha}{\lambda^2}
\end{align}
$$

> [!Tip] Independence and MGF 
> If $X, Y$ are independent random variables with MGFs $m_{X}(t)$ and $m_{Y}(t)$, then the MGF of $X+Y$ is defined such that
> $$
> \begin{align}
> m_{X+Y}(t)= \mathbb{E}[e^{t(X+Y)}]=\mathbb{E}[e^{tX}e^{ tY }] & =\mathbb{E}[e^{ tX }]\mathbb{E}[e^{ tY }] \\
>  & = m_{X}(t)m_{Y}(t)
> \end{align}
> $$ 


> [!Danger] Not Necessarily Independent 
> If $X, Y$ are random variables that are not necessarily independent, then the MGF of $h(X, Y)$ is given by:
> $$
> m_{h(X, Y)}(t) = \mathbb{E}[e^{ t\cdot h(X, Y) }]
> $$ 

## Some Useful Results
> Before we used convolution to find the PMF/PDF of $X+Y$, but by using the MGF we can also solve for the distributions of $X+Y$.


> [!Tip] Sums 
> If $\{ X_{n} \}$ are independent random variables with a common MGF $m_{X}(t)$, then the MGF of $S_{n}=\sum_{i=1}^n X_{i}$ is defined such that
> $$
> m_{S_{n}}(t) = (m_{X}(t))^n
> $$ 


> [!Tip] Scaling / Shifting 
> If $X$ has MGF $m_{X}(t)$, then $aX + b$ has MGF $e^{ bt }m_{X}(at)$ for all $a,b\in \mathbb{R}$. 

## Uniqueness
If $X$ and $Y$ are random variables with respective MGFs $m_{X}(t), m_{Y}(t)$,then $\exists s >0$ such that $\forall t \in(-s, s)$, if $m_{X}(t)=m_{Y}(t)< \infty$, then $X, Y$ have the **same distribution**.

==This is incredibly helpful as we can identify the distribution of a random variable by finding its MGF.==

### An Example

![[Pasted image 20260616230543.png]]

In this example $X, Y$ are not necessarily independent. Hence, we have that,
$$
\begin{align}
m_{X+Y}(t)  & = \mathbb{E}[e^{ t(X+Y) }] = \sum_{x}\sum_{y}e^{ t(x+y) }p(x, y) \\
 & = e^{ t(0+0) }(0.1) + e^{ t(0+1) }(0.4) + e^{ t(1+0) }(0.4) + e^{ t(1+1) }(0.1) \\
 & = 0.1 + 0.8e^{ t } + 0.2e^{ 2t }
\end{align}
$$
Therefore,
$$
\mathbb{E}[X+Y]=m_{X+Y}'(0)=1.
$$
