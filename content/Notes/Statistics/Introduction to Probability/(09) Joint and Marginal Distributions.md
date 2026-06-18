#stats #math #stats302 

# Joint and Marginal Distributions

- How to define joint and marginal distributions
- Calculate marginal distributions from a joint distribution

## Joint Distributions

> Let $X,Y$ be two **random variables**, the joint CDF of these two random variables is defined by:


> [!Theorem] Joint CDF of $X, Y$
> $$
> F_{X, Y}(a, b) = \mathbb{P}(X \leq a, Y \leq B ) 
> $$ 
> Where the comma signifies "and", namely $\cap$.

## Mass and Density Joint Distributions

> [!Theorem] Joint PMF of $X, Y$
> If $X, Y$ are both *discrete*, then the joint PMF is defined by: 
> $$
> p_{X, Y}(a, b) = \mathbb{P}(X = a, Y = b)
> $$ 


> [!Theorem] Joint PDF of $X, Y$ 
> The random variables $X, Y$ are jointly **absolutely continuous** if there exists a PDF $f_{X, Y}(x, y)$ such that $\forall A \subset \mathbb{R}^2$ we have that:
> $$
> \mathbb{P}((X, Y) \in A) = \int \int_{A}f_{X,Y}(x, y)dxdy
> $$


> [!Todo] Joint PMF Example 
> Consider the rolling of two fair dice where $X$ is the minimum roll and $Y$ is the maximum, the joint *PMF* of $X,Y$ is then given by finding the joint probabilities for each combination of the dice.
> 

$$
\begin{array}{c|cccccc}
f_{X,Y}(x,y) & 1 & 2 & 3 & 4 & 5 & 6 \\
\hline
1 & \frac{1}{36} & \frac{2}{36} & \frac{2}{36} & \frac{2}{36} & \frac{2}{36} & \frac{2}{36} \\
2 & 0 & \frac{1}{36} & \frac{2}{36} & \frac{2}{36} & \frac{2}{36} & \frac{2}{36} \\
3 & 0 & 0 & \frac{1}{36} & \frac{2}{36} & \frac{2}{36} & \frac{2}{36} \\
4 & 0 & 0 & 0 & \frac{1}{36} & \frac{2}{36} & \frac{2}{36} \\
5 & 0 & 0 & 0 & 0 & \frac{1}{36} & \frac{2}{36} \\
\end{array}
$$

> [!Todo] Another PMF Example 
> Suppose $\mathbb{P}(X = x, Y = y) = c \cdot (x + 2y + 1)I_{\{ 0, 1, 2 \}}(x)I_{\{ 0, 1 \}}(y)$. What value of $c$ will make this a valid joint PMF? And what is $\mathbb{P}(X = 0, Y = 1)$. 

$$
\begin{array}{c|cc}
(x,y) & P(X=x_i, Y=y) & \\
\hline
(0,0) & c & \frac{1}{18} \\
(0,1) & 3c & \frac{3}{18} \\
(1,0) & 2c & \frac{2}{18} \\
(1,1) & 4c & \frac{4}{18} \\
(2,0) & 3c & \frac{3}{18} \\
(2,1) & 5c & \frac{5}{18} \\
\end{array}
$$
Because $\mathbb{P}(\Omega)=1$ we can obtain $c$ by solving:
$$
c + 3c + 2c + 4c + 3c + 5c =1 \implies 18c = 1 \implies c = \frac{1}{18}
$$
And we have that $\mathbb{P}(X = 0, Y = 1)=\frac{3}{18}$.


> [!Todo] Joint PDF Example 
> Let $X, Y$ be jointly continuous with the following joint density function:
> $$
> f(x, y) = \begin{cases}
> 4x^2+y + 2y^5 \quad 0 \leq x \leq 1, 0 \leq y \leq 1 \\
> 0 \quad \text{o.w}
> \end{cases}
> $$ 
> Verify that this is indeed a density function.

To verify that this is a density function we need to show that:
1. $f(x, y)\geq 0 \quad \forall x,y \in \mathbb{R}$
2. $\int \int f(x, y)dxdy = 1$

We can see already that the first condition holds, now to verify the second we can do the integration as follows:

$$
\begin{align}
\int_{-\infty}^\infty \int_{-\infty}^\infty f(x, y)dxdy & = \int_{0}^1 \int_{0}^14x^2y+5y^5dxdy \\
 & = \int_{0}^1 \frac{4}{3}y + 2y^5dy \\
 & = \left( \frac{4}{6}y^2 + \frac{2}{6}y^6 \right)\bigg |_{y=0}^{y=1} \\
 & = \frac{4}{6} + \frac{2}{6}  \\
 & = 1
\end{align}
$$
Hence it is indeed a valid density function. Moreover, ==we can visualize a joint PDF as a surface==, in particular, for this example its graph is as follows:
![[Pasted image 20260603175736.png]]

## Bivariate Normal Distribution

Given $\mu_1, \mu_2, \sigma_1, \sigma_2, \rho \in \mathbb{R}$ where $\sigma_1, \sigma_2 > 0$ and $-1 \leq \rho \leq 1$, the bivariate normal distribution $\mathcal{N}(\mu, \mu_2, \sigma_1, \sigma_2)$, is given by:

$$
\begin{align}
f_{X_1, X_2}(x_1, x_2) = \frac{1}{2\pi\sigma_1\sigma_2\sqrt{1-\rho^2}} \exp\Bigg\{ &-\frac{1}{2(1-\rho^2)} \left[ \left(\frac{x_1 - \mu_1}{\sigma_1}\right)^2 \right. \\
&- 2\rho\frac{(x_1-\mu_1)(x_2-\mu_2)}{\sigma_1\sigma_2} \\
&+ \left. \left(\frac{x_2-\mu_2}{\sigma_2}\right)^2 \right] \Bigg\}
\end{align}
$$
When $\mu_{1} = \mu_{2} = \rho = 0$ and $\sigma_{1} = \sigma_{2}=1$, this is the standard bivariate normal distribution.

## Marginal Distributions

Let $X, Y$ be two random variables with some joint CDF $F_{X,Y}$ such that:
$$
\begin{align}
\lim_{ a \to -\infty } F_{X, Y}(a, y)=0 \quad \forall y \in \mathbb{R} \\
\lim_{ b \to -\infty } F_{X, Y}(x, b)=0 \quad \forall x \in \mathbb{R} \\
\lim_{ a \to \infty, b \to \infty } F_{{X, Y}}(a, b) = 1 \quad \quad \quad \ 
\end{align}
$$
Then, the **marginal CDFs** of $X, Y$ are defined such that:
$$
F_{X}(x) = \lim_{ b \to \infty } F_{X, Y}(x, b) \quad F_{Y}(y)=\lim_{ a \to \infty }F_{X, Y}(a, y)
$$
Now, if $X, Y$ are both discrete, then the **marginal PMFs** of $X, Y$ are defined such that:
$$
p_{X}(x) = \sum_{y}p_{X, Y}(x, y) \quad p_{Y}(y)=\sum_{x}p_{X, Y}(x, y)
$$
Finally, if $X, Y$ are both continuous, then the **marginal PDFs** of $X, Y$ are defined such that:
$$
f_{X}(x)= \int_{-\infty}^\infty f_{X, Y}(x, y)dy \quad f_{Y}(y)=\int_{-\infty}^\infty f_{X, Y}(x, y)dx
$$
In this course the scope will stay limited to two random variables, however with linear algebra/superposition these formulas can be generalized to more than two variables.

## Discrete Marginal Distributions
> Consider the rolling of two fair dice, where $X$ represents the minimum of the rolls and $Y$ represents the maximum, use the joint PMF of $X, Y$ in order to find the marginal PMFs of $X, Y$.

![[Pasted image 20260604003823.png]]

In this example, this can be accomplished by summing over the rows and columns, that is for $x_{1}$, sum all the $x$ in the $x_{1}$ row and so forth as follows:

![[Pasted image 20260604004141.png]]

However it is still important to ensure the following conditions hold:
1. $p(X)\geq 0 \quad \forall x \in \mathbb{R}$
2. $\sum p(x)=1$

## Continuous Marginal Distributions

Let $X, Y$ be continuous random variables with the PDF:
$$
f_{X, Y}(x, y) = I_{[0, 1]}(x)I_{[0, 1]}(y) = I_{[0, 1]^2}(x, y)
$$
Find $F(x, y) = \int_{0}^x \int_{0}^yf_{X, Y}(s, t)dtds$ for $0 \leq x, y \leq 1$, compute $F(0.3, 0.8)$, and finally, calculate $\mathbb{P}(X - 2Y > 0)$.

Firstly, we have that:
$$
\begin{align}
F(x, y) = \int_{-\infty}^x \int_{-\infty}^y f(s, t)dt ds & = \int_{0}^x \int_{0}^y 1 dt ds \\
 & = \int_{0}^x \left[ \int_{0}^y dt \right] ds \\
 & = \int_{0}^x y ds \\
 & = yx
\end{align}
$$
Hence we have that:
$$
F(0.3, 0.8) = 0.24 
$$
Finally, calculating $\mathbb{P}(X - 2Y > 0)$ we see that:
$$
\begin{align}
\mathbb{P}(X - 2Y > 0) &  = \mathbb{P}\left( Y < \frac{x}{2} \right) \\
 & = \int_{0}^1 \int_{0}^{x/2} dydx \\
 & =\int_{0}^1 \frac{x}{2} dx \\
 & = \frac{1}{4}
\end{align}
$$
However, if we wanted to calculate per se something such as $F(2, 0.5)$ we would have to do as follows:
$$
F(2, 0.5) = \mathbb{P}(x \leq 2, y \leq 0.5) = \int_{-\infty}^2 \int_{-\infty}^{0.5} f_{X,Y}(x, y)dydx = \int_{0}^1 \int_{0}^{0.5}f_{X, Y}(x, y)dydx
$$
Because our indicator functions are only on $[0, 1]$.
