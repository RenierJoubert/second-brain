#stats #math #stat302 

# Conditional Distributions and Independence

Topics covered include:
1. Calculation of conditional distributions from a join distribution
2. Relating independence to conditional and joint distributions

## Conditional Distributions


### Discrete

 
> [!Theorem] Conditional distribution 
> The *conditional distribution* of a random variable $Y$ given some discrete variable $X=x$ assigns to each set $A \subset \mathbb{R}$ the probability: 


$$
\mathbb{P}(Y \in A | X = x) = \frac{\mathbb{P}(Y \in A, X = x)}{\mathbb{P}(X = x)}
$$

> [!Danger] Type of Y 
> Note that here Y can be continuous or discrete.
> 


> [!Theorem] Conditional PMF
> If $X, Y$ are both **discrete random variables** then the conditional PMF of $Y$ given $X = x$ is defined such that:
> 

$$
p_{Y|X}(y|x) = \frac{\mathbb{P}(Y = y, X = x)}{\mathbb{P}(X = x)} = \frac{p_{X, Y}(x, y)}{p_{X}(x)}
$$
![[Pasted image 20260615180602.png]]
In this example, $V = X + Y$ where $X, Y$ are distinct individual dice rolls, and $W$ corresponds to $\max(x, y)$.

## Continuous

> [!Theorem] Conditional Density 
> Let $X, Y$ be absolutely continuous random variables, the conditional density of $Y$ given $X = x$ is then:
> 

$$
f_{Y|X}(y | x) = \frac{f_{X, Y}(x, y)}{f_{X}(x)} \quad \forall x \quad s.t. \quad f_{X}(x)>0
$$

> [!Theorem] Conditional Distribution 
> Let $X, Y$ be jointly absolutely continuous random variables with the joint PDF $f_{X, Y}$. The conditional distribution $Y$ given $X = x$ assigns to each set $A \subset \mathbb{R}$ the probability:
> 

$$
\mathbb{P}(a \leq Y \leq b) | X = x) = \int_{a}^b f_{Y|X}(y|x)dy \quad \forall f_{X}(x) > 0
$$

> [!Todo] An example 
> Let $X, Y$ be continuous random variables with the following joint PDF:
> $$
> f_{X, Y}(x, y) = \frac{1}{x}e^{-x}I_{\{ 0 \leq y \leq x \}}(x, y)
> $$

We can then obtain the [[(09) Joint and Marginal Distributions|marginal PDF]] of $X$ and find the conditional PDF of $Y$ given $X = x$ as follows:
$$
\begin{align}
\text{marginal PDF, X:} \quad f_{X}(x)  & = \int f_{X, Y}(x, y)dy \\
 & = \int_{0}^x \frac{1}{x}e^{-x}dy \\
 & = e^{-x} \\
 & \therefore \\
 \text{distribution, Y|X:} \quad f_{Y|X}(y|x)  &  = \frac{f_{X, Y}(x, y)}{f_{X}(x)} \\
  & = \frac{\frac{1}{x}e^{-x}I_{\{ 0 \leq y \leq x \}}}{e^{-x}} \\
  & = \frac{1}{x}I_{\{ 0 \leq y \leq x \}}
\end{align}
$$
## An Overview of Types So Far
> Let $X, Y$ have a **join distribution** $\mathbb{P}(X \in A, Y \in B)$. Then:

- We can find the joint CDF, PMF, or PDF of $X$ and $Y$
- The **marginal** distribution of $X$ is the distribution of $X$ ignoring $Y$
- The **conditional** distribution of $X$ is the distribution of $X$ given $Y = y$, that is when we fix $Y$ to be $y$.

The **marginal** distribution comes from summing out / integrating out the other variables, where the **conditional** comes from dividing out the other variable.

## Independence


> [!Theorem] Independent Random Variables 
> $X, Y$ are independent if and only if for sets $A, B$ we have that
> $$
> \mathbb{P}(X \in A, Y \in B) = \mathbb{P}(X \in A)\mathbb{P}(Y \in B)
> $$ 

Namely, that the joint distribution factors into the product of the marginal distributions. Now, however if we let $A = (-\infty, x]$ and $B = (-\infty, y]$ as well as let $X, Y$ be independent we see that:

> [!Tip] Independence 
> $$
> F_{X, Y}(x, y) = \mathbb{P}(X \leq x, Y \leq y)= \mathbb{P}(X \leq x)\mathbb{P}(Y \leq y) = F_{X}(x)F_{Y}(y)
> $$

However, this does not just follow for the CDF of $X$ and $Y$, but also the PMF and PDF as follows:


> [!Tip] Discrete Independence 
> If $X, Y$ are discrete random variables then they are independent if and only if
> $$
> p_{X, Y}(x, y) = p_{X}(x)p_{Y}(y) \quad \forall x, y \in \mathbb{R}
> $$ 


> [!Tip] Continuous Independence
> If $X, Y$ are jointly continuous then they are independent if and only if
> $$
> f_{X, Y}(x, y) = f_{X}(x)f_{Y}(y) \quad \forall x, y \in \mathbb{R}
> $$
> 

![[Pasted image 20260615184214.png]]

![[Pasted image 20260615184407.png]]

![[Pasted image 20260615184439.png]]

## Sums of Independent Random Variables
> In order to find the distribution of a sum of independent random variables we can use the distribution or Jacobian method seen in [[(08) CDFs]]. However, specifically when the distributions are **independent** we can use **convolution**.


> [!Tip] Convolution 
> Let $X, Y$ be two independent random variables, if they are both **discrete** then the *PMF* of $U = X + Y$ is given by
> $$
> p_{U}(u) = \sum_{w}p_{X}(u-w)p_{Y}(w)= \sum_{w}p_{Y}(u-w)p_{X}(w)
> $$ 
> If they are both **continuous** then the *PDF* of $U = X + Y$ is given by:
> $$
> f_{U}(u)= \int_{-\infty}^\infty f_{X}(u-w)f_{Y}(w)dw = \int_{-\infty}^\infty f_{Y}(u - w)f_{X}(w)dw
> $$


> [!Todo] An example 
> Let $X, Y$ be independent random variables distributed according to $\text{Unif}(0, 1)$ and let $S = X + Y$, find the distribution of S.
> 

Here $X, Y$ are continuous so we can use the following formula to convolve $X, Y$ as follows:

$$
\begin{align}

f_{S}(s) & = \int_{-\infty}^{\infty}f_{X}(w)f_{Y}(s-w)dw \\
 & = \int_{-\infty}^\infty I_{(0, 1)}(w)I_{(0, 1)}(s-w)dw \\
 & = \int_{-\infty}^\infty I_{(0, 1)}(w)I_{(s-1, s)}(w)dw \\
 & = \begin{cases}
 \int_{0}^s dw = s \quad 0 < s < 1 \\
 \int_{{s-1}}^1dw = 2 - s \quad 1\leq s < 2 \\
 0 \quad \text{if} \quad s \leq 0 ||s \geq 2
 \end{cases}
\end{align}
$$
Note that here we can rewrite the bounds of the indicator function $I_{(0, 1)}(s-w)$ as $I_{(s-1, s)}(w)$ as:
$$
0 < s-w < 1 \iff s-1 < w < s
$$
This example is referred to as the triangle distribution and looks something like this:
![[Pasted image 20260615190218.png]]

