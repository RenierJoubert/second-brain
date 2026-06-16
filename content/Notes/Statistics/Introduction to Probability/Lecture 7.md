#stats #math #stat302 

# Continuous Random Variables


> [!Theorem] Continuous Random Variable
> A random variable $X$ is *continuous* if
> $$
> \mathbb{P}(X = x) = 0, \forall x \in \mathbb{R}
> $$


> [!Theorem] Density Function 
> A function $f: \mathbb{R} \to \mathbb{R}$ is a *density function* if $f(x) \geq 0, \forall x \in \mathbb{R}$ and:
> $$
> \int f(x)dx = 1
> $$


> [!Theorem] Absolutely continuous 
> A random variable $X$ is *absolutely continuous* if there exists some density function $f$ such that:
> $$
> \mathbb{P}(a \leq X \leq b) = \int_{a}^b f(x)dx
> $$
> Whenever $a \leq b$.
> Such a density function is referred to as a *probability density function* (PDF) and we will use the notation $f_{X}(x)$ to denote its relation to the RV $X$.

Please note that if some random variable $X$ is an absolutely continuous RV then it is too a continuous random variable, however, the converse is not always the case.

This is because we have that,
$$
\mathbb{P}(X=a) = \mathbb{P}(a \leq X \leq a)= \int_{a}^a f(x)dx = 0
$$
## Continuous vs Discrete RVs

The probability for some event $A$ given a discrete RV $X$ is just:
$$
\mathbb{P}(X \in A) = \sum_{x \in A}p_{X}(x)
$$
Whereas for an absolutely continuous RV it is:
$$
\mathbb{P}(X \in A)= \int_{A}f_{X}(x)dx
$$
## Some Examples

Let $X$ be an RV with the PDF:
$$
f_{X} = 2x^{-3}I_{[1, \infty)}(x)
$$
We can show that $f_{X}(x)$ is indeed a PDF by proving that
1. $f(x) \geq 0, \forall x \in \mathbb{R}$
2. $\int f(x)dx =1$

Firstly, we can show the first axiom as follows:
$$
\begin{align}
x & \in [1, \infty) \implies 2x^{-3}\geq 0 \\
 & \not\in [1, \infty) \implies f(x) = 0
\end{align}
\quad \therefore \quad f(x) \geq 0, \forall x \in \mathbb{R}
$$
Then we can show the second axiom:
$$
\int 2x^{-3}I_{[1, \infty)}(x)dx = \int_{1}^\infty 2x^{-3}dx = \frac{2x^{-2}}{-2}\bigg |^{x=\infty}_{x=1}=1
$$
Now, what is $\mathbb{P}(0 < X < 2)$?
$$
\mathbb{P}(0 < X < 2) = \int_{0}^22x^{-3}I_{[1, \infty)}dx = \int_{1}^22x^{-3}dx = \frac{3}{4}
$$
Here the lower bound of integration changes because the indicator function is only switched on starting at 1, hence we can change the bounds from 0 to 2 to instead 1 to 2.


> [!Question] If we removed the indicator function, is $f_{X}$ still a density function?
> No, because without the indicator function the, *support* of $f$ is all real numbers, hence $f(-1)=2(-1)^{-3}=-2$ is permitted which breaks the first probability axiom.  

## The Median
> For continuous RVs, the *median* is the number $m$ s.t.
> $$
> \mathbb{P}(X < m)=\mathbb{P}(X > m) = \frac{1}{2}
> $$
## Continuous Distributions

## Uniform
> Let $L <R \in \mathbb{R}$. A RV with PDF:
>$$
>f_{X}(x, L, R) = \frac{1}{R-L}I_{[L, R]}(x)
>$$
> Has a $\text{Unif}(L, R)$ distribution.


> [!Todo] Uniform median
> If $X ~ \text{Unif}(L,R)$, what is the median of $X$?

We know that for a uniform distribution the PDF is given by:
$$
f_{X}(x)=\frac{1}{R-L}I_{[L, R]}(x)
$$
and because $X$ is continuous we then have that:
$$
\begin{align}
\mathbb{P}(X < m) = \frac{1}{2} = \int_{L}^m \frac{1}{R-L}&dx = \frac{x}{R-L}\bigg|_{{x=L}}^{x=m}= \frac{{m-L}}{R-L} \\
\therefore \\
m = &\frac{{R+L}}{2}
\end{align}
$$
## Exponential
> Let $\lambda > 0$. A RV $X$ with PDF
> $$
> f_{X}(x, \lambda)=\lambda e^{-\lambda x}I_{[0, \infty)}(x)
> $$
> Has an $\text{Exp}(\lambda)$ distribution with a rate of $\lambda$.

![[Pasted image 20260530234241.png]]


> [!Todo] Exponential Rates
> A store recieves customers independently at an average rate of 12 customers per hour. Let $T$ be the waiting time in minutes between consecutive customer arrivals. What distribution does $T$ follow, and what is its rate $\lambda$? What is the probability that the next customer arrives in 3 minutes?


Moreover, to find the probability that the next customer arrives within 3 minutes we need to find $\mathbb{P}(T \leq 3)$ which is given by:

$$
\mathbb{P}(T \leq 3) = \int_{0}^3 \frac{1}{5}e^{\frac{1}{5}t}dt=0.4512
$$
## Gamma
First, let us recall the *gamma function*,
$$
\Gamma(\alpha) = \int_{0}^\infty t^{\alpha-1}e^{-t}dt
$$
where $\alpha > 0$.


> [!Tip] Some useful results
>  - $\Gamma(\alpha+1)= \alpha \Gamma(\alpha)$
>  - $\Gamma(n)=(n-1)! \quad$ when $\alpha$ is some integer $n$
>  - $\Gamma\left( \frac{1}{2} \right)=\sqrt{(\pi) }$

> Let $\alpha, \lambda > 0$. A RV $X$ with PDF
>$$
> f_{X}(x, \alpha, \lambda)= \frac{\lambda^\alpha}{\Gamma(\alpha)}x^{\alpha-1}e^{-\lambda x}I_{[0, \infty)}(x)
>$$
>Has a $\text{Gam}(\alpha, \lambda)$ distribution with a *shape* $\alpha$, and *rate* $\lambda$.


> [!Tip] Gamma and Exponential 
>$$
> X ~ \text{Gam}(1, \lambda) \implies X ~ \text{Exp}(\lambda)
>$$


> [!Todo] Gamma Applications 
> Suppose the time it takes to process an insurance claim follows $\text{Gam}\left( \alpha = 2, \lambda = \frac{1}{3} \right)$. What is the probability that the claim takes more than 6 hours to process? 

Here we have that the RV $X \sim \text{Gam}\left( 2, \frac{1}{3} \right)$ and we are trying to find $\mathbb{P}(X \geq 6)$ which is given by:
$$
\mathbb{P}(X \geq 6)\int_{6}^\infty \frac{\left( \frac{1}{3} \right)^2x^{2-1}}{\Gamma(2)}e^{\frac{-1}{3}x}dx
$$
Simplifying we obtain:
$$
\frac{1}{9}\int_{6}^\infty xe^{\frac{-1}{3}x}dx
$$
Now using [[Integration By Parts]] we recover,
$$
\mathbb{P}(X \geq 6)=\frac{1}{9}\left[-3xe^{\frac{-1}{3}x}+3(-3)e^{\frac{-1}{3}x}\right]\bigg |_{x=6}^{x=\infty}\approx 0.4060
$$
## Kernel and Integration Constant
> All PDFs/PMFs must integrate and sum to 1, and their functional form can be separated into two logical parts: the ==kernel== - that depends on the $x$, and the ==normalizing constant== - that depends on the parameters  and actually makes the function integrate/sum to 1.

For example, in the $\text{Gam}(x, \alpha, \lambda)=\frac{\lambda^\alpha}{\Gamma(\alpha)}x^{\alpha-1}e^{-\lambda x}I_{[0, \infty)}(x)$ distribution,

- The kernel is $x^{\alpha-1}e^{-\lambda x}I_{[0, \infty)}(x)$
- The normalizing constant is $\frac{\lambda^\alpha}{\Gamma(\alpha)}$

### Kernel Matching Problems

What is,
$$
\int_{0}^\infty z^3 e^{-5z}dz?
$$
We can rewrite this integral as follows, noticing it looks similar to $\text{Gam}(\alpha=4, \lambda = 5)$
$$
\begin{align}
& = \int_{0}^\infty z^{4-1}e^{-5z}dz \\
& = \frac{\Gamma(4)}{5^4} \cdot \frac{5^4}{\Gamma(4)}\int^\infty_{0} z^{4-1}e^{-5z}dz \\
& = \frac{\Gamma(4)}{5^4} \int^\infty_{0} \frac{5^4}{\Gamma(4)}z^{4-1}e^{-5z}dz \\
& = \frac{\Gamma(4)}{5^4} \cdot 1 \\
& = \frac{{3 \cdot 2 \cdot 1}}{5^4}=0.0096
\end{align}
$$

## Normal
> Let $\mu \in \mathbb{R}$, $\sigma > 0$. A RV $X$ with PDF
>$$
> f_{X}(x, \mu, \sigma^2) =\frac{1}{\sqrt{ 2\pi \sigma^2 }}\text{exp}\left( -\frac{(z-\mu)^2}{2\sigma^2} \right)
>$$
> Has a normal distribution, namely $X \sim N(\mu, \sigma^2)$.

The normal distribution is especially important as most will know, for it is particularly excellent at modelling averages - this will be justified later more rigorously later. The distribution $Z \sim N(0, 1)$ is called the standard normal distribution, if $Z$ is ever written without context it should be understood to mean this. 