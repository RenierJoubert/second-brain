#stats #math #math302

# Expected Value and Variance

Topics covered include:
1. How to define and calculate EV, variance, and SD from discrete and continuous distributions

## Expected Value (EV)

> [!Theorem] Expected Value 
> The *expected value* of a random variable $g(X)$ is defined such that:
> $$
> \mathbb E [g(X)] = \begin{cases}
> \sum_{x}g(x)p_{X}(x) \quad \text{if X is discrete} \\
> \int_{-\infty}^\infty g(x)f_{X}(x)dx \quad \text{if X is absolutely continuous}
> \end{cases}
> $$ 

- Note that we do not need the distribution of, PMF, PDF, or CDF of $g(X)$ to compute the EV, **only the distribution of X itself.**

> [!Todo] EV of a Dice Roll 
> For example, the EV of a single dice roll can be calculated as follows:
> $$
> \mathbb E (X) = \sum_{i=1}^6 x_{i}p_{X}(x_{i})= 1 \cdot \frac{1}{6} + 2 \cdot \frac{1}{6} + \cdots + 6 \cdot \frac{1}{6} = 3.5 
> $$ 


> [!Todo] EV of a Binomially Distributed RV 
> Let $X \sim \text{Binom}(n, \theta)$, using kernel matching and the fact that $x\begin{pmatrix}n \\  x \end{pmatrix} = n \begin{pmatrix}n-1 \\  x-1\end{pmatrix}$  we can then calculate $\mathbb E(X)$ as follows:

$$
\begin{align}
\mathbb E (X)  & = \sum_{x = 0}^n x \cdot \begin{pmatrix}
n \\
x
\end{pmatrix} \theta^x(1-\theta)^{n-x} \\
& = 0 + \sum_{x=1}^n x \begin{pmatrix}
n \\
x
\end{pmatrix}\theta^x(1-\theta)^{n-x} \\
 & = \sum_{x = 1}^n n \begin{pmatrix}
 n -1 \\
 x-1
 \end{pmatrix} \theta^x(1-\theta)^{n-x} \\
  & = n \sum_{y=0}^{n-1} \begin{pmatrix}
  n-1 \\
  y
  \end{pmatrix}\theta^{y+1}(1-\theta)^{n-(y+1)} \quad \text{substituting}  \quad x = y +1 \\
   &  = n\theta \sum_{y=0}^{n-1} \begin{pmatrix}
   n-1 \\
   y
   \end{pmatrix} \theta^y (1-\theta)^{(n-1)-y} \\
    & = n \theta
\end{align}
$$
Because calculating the EV for distributions is proven to be quite cumbersome, fortunately we are provided a formula sheet for exams:
![[Pasted image 20260615193309.png]]

## Properties of Expected Value

1. Linearity
	for any $a,b,c \in \mathbb{R}$ and any functions $g, h$ along with any RVs $X, Y$ we have that $\mathbb E[ag(X) + bh(Y) + c] = a\mathbb E[g(X)] + b \mathbb E[h(Y)]+c$ 
2. Boundedness
	if $g(x)$ is bounded above $a$ and below $b$ for all $x$ in the *support* of $X$, then so too is $\mathbb E[g(X)]$.
3. Monotonicity
	if $g(x) \leq h(x)$ for all $x$ in support of $X$, then $\mathbb E[g(X)] \leq \mathbb E [h(X)]$.
4. Independence
	if $X, Y$ are independent then $\mathbb E[g(X)h(Y)] = \mathbb E[g(X)] \mathbb E [h(Y)]$

## Scalar Valued RV Functions


> [!Theorem] Scalar Valued RV Function 
> Let $g: \mathbb{R}^2 \to \mathbb{R}$ be a function, then if $X, Y$ are both discrete we have that:
> $$
> \mathbb{E}[g(X, Y)]  = \sum_{x} \sum_{y} g(x, y)p_{X, Y}(x, y) \quad \text{(pmf)}
> $$ 
> Whereas if $X, Y$ are both absolutely continuous we have that:
> $$
> \mathbb{E}[g(X, Y)] = \int_{-\infty}^\infty\int_{-\infty}^\infty g(x, y)f_{X, Y}(x, y)dxdy \quad \text{(pdf)}
> $$

## Some Examples Computing EV

Let $X, Y$ have the joint PDF:
$$
f_{X, Y}(x, y) = 8xyI_{\{ 0<x<y<1 \}}(x, y).
$$
1. We can calculate $\mathbb{E}[X]$ as follows:
$$
\mathbb{E}[X] = \int_{0}^1 \int_{0}^yx \cdot 8xy dxdy = \int_{0}^1 8y \cdot \frac{y^3}{3}dy = \frac{8}{15}
$$
2. We can calculate $\mathbb{E}[xy]$ as follows:
$$
\mathbb{E}[xy] = \int_{0}^1 \int_{0}^y xy \cdot 8xy dxdy = \frac{4}{9}
$$
## Variance


> [!Theorem] Variance 
> The **variance** of a random variable $X$ is defined such that
> $$
> \begin{align}
> \sigma_{X}^2 & = \text{Var}(X) \\
>  &  = \mathbb{E}[(X - \mathbb{E}[X])^2] \\
>   & = \mathbb{E}[X^2] - (\mathbb{E}[X])^2
> \end{align}
> $$ 

Conceptually, variance is a measure of the spread of the distribution of $X$ around it's *mean* $\mathbb{E}[X]$. However, the units of variance are the square units of $X$, hence if we want to look at the spread of the distribution in the original units we can take the square root, and this obtains the *standard deviation* of $X$, denoted with $\sigma_{X}$.


> [!Theorem] Standard Deviation 
> The **standard deviation** of a random variable $X$ is defined such that
> $$
> \sigma_{X} = \sqrt{\text{Var}(X)}
> $$  

## Properties of Variance

1. Scaling
	$\forall a \in \mathbb{R} \quad \text{Var}(aX)= a^2 \text{Var}(X)$
2. Shift invariance
	$\forall a \in \mathbb{R} \quad \text{Var}(a + X)= \text{Var}(x)$
3. Non-negativity
	$\text{Var}(x)\geq 0$



> [!Todo] Calculating Variance
> Let $X \sim \text{Unif}(0, 1)$, we can find $\text{Var}(X)$ as follows: 

$$
\begin{align}
\mathbb{E}(X) & = \int_{0}^1 x \cdot \frac{1}{1-0}dx = \frac{1}{2} \\
\mathbb{E}(X^2) & = \int_{0}^1 x^2 \cdot \frac{1}{1-0}dx = \frac{1}{3} \\
& \therefore \\
\text{Var}(X) & = \mathbb{E}(X^2) - [\mathbb{E}(X)]^2 \\
 & = \frac{1}{3} -\frac{1}{4} \\
 &  = \frac{1}{12}
\end{align}
$$

