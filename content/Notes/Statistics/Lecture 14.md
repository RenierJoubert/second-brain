#stats #math #stat302 

# Conditional Expectation and Inequalities

Topics covered include:
- Calculating conditional expectations from conditional and joint distributions
- Using inequalities to find bounds of expectations and variances

## Conditional Expectation


> [!Theorem] Discrete 
> If $X, Y$ are two random variables, then the condition expectation of $X$ given some $Y=y$ is defined such that
> $$
> \mathbb{E}[X|Y=y]=\sum_{x}xp_{X|Y}(x|y)
> $$ 


> [!Theorem] Continuous 
> $$
> \mathbb{E}[X|Y=y] = \int_{-\infty}^{\infty}xf_{X|Y}(x|y)dx
> $$ 


> [!Todo] An example 
> Let $X,Y$ be random variables with joint density $f(x, y)=2$ for $0<x<1$, $0 < y < x$, what is the conditional expectation of $Y$ given $X$.
> 

We want to find $f_{Y|X}=\frac{f(x, y)}{f_{X}(x)}$, so we need to find $f_{X}(x)$ which is just:
$$
f_{X}(x)=\int_{0}^x 2dy = 2xI_{(0, 1)}(x)
$$
Hence,
$$
f_{y|X}(x, y) = \frac{1}{x}I_{(0, x)}(y)I_{(0, 1)}(x)
$$
Then,
$$
\begin{align}
\mathbb{E}[Y|X]  & = \int_{-\infty}^\infty y f_{Y|X}(y|x)dy \\
 & = \left[ \frac{1}{x} \cdot \frac{1}{2}y^2 \right]_{y=0}^{y=x} \\
 &  = \frac{x}{2} \quad \text{for} \quad 0 < x < 1
\end{align}
$$
## Conditional Variance

> [!Theorem] Discrete 
> If $X, Y$ are two random variables, then the conditional variance of $X$ given $Y=y$ is defined such that
> $$
> \text{Var}(X|Y=y) = \sum_{x}(x-\mathbb{E}[X|Y=y])^2p_{X|Y}(x|y)
> $$ 


> [!Theorem] Continuous 
> $$
> \text{Var}(X|Y=y) = \int_{-\infty}^\infty (x-\mathbb{E}[X|Y=y])^2 f_{X|Y}(x|y)dx
> $$ 
> 


> [!Tip] An easier calculation 
> We can also just use this instead which is easier to calculate!
> $$
> \text{Var}(X|Y) = \mathbb{E}[X^2|Y]-(\mathbb{E}[X|Y])^2
> $$ 


> [!Todo] An example 
> If $f(x, y)=2$ for $0<x<1$, $0<y<x$, what is the conditional variance of $Y$ given $X$?
> 

$$
\text{Var}(X|Y) = \mathbb{E}[X^2|Y]-(\mathbb{E}[X|Y])^2
$$
We already have that,
$$
f_{Y|X}(x,y)=\frac{1}{x}I_{(0,x)}(y) \quad \text{for} \quad 0<x<1
$$
and
$$
\mathbb{E}[Y|X]=\frac{x}{2}
$$
so, solving for our unknown $\mathbb{E}[Y^2|X]$ we see that
$$
\mathbb{E}[Y^2|X]=\int_{0}^x y^2 \frac{1}{x} \ dy = \frac{y^3}{3} \cdot \frac{1}{x} \bigg |_{y=0}^{y=x} = \frac{x^2}{3}
$$
Hence, 
$$
\begin{align}
\text{Var}(X|Y) &  = \mathbb{E}[X^2|Y]-(\mathbb{E}[X|Y])^2 \\
 & = \frac{x^2}{3} -\frac{x^2}{4} \\
 & = \frac{x^2}{12}
\end{align}
$$
## Hierarchical Models
We will demonstrate this using an example, let $\Lambda \sim \text{Gam}(1, 2)$ and let $X | \Lambda \sim \text{Exp}\left( \frac{1}{\Lambda} \right)$. Find the distribution of $W = \mathbb{E}[X|\Lambda]$ and $\mathbb{E}[W]$.

For our solution, first recall that if $Z \sim \text{Exp}(\Lambda) \implies \mathbb{E}[Z]=\frac{1}{\Lambda}$, hence if $X|\Lambda \sim \text{Exp}\left( \frac{1}{\Lambda} \right)$ then $W = \mathbb{E}[X|\Lambda]=\frac{1}{{\frac{1}{\Lambda}}}=\Lambda$. Then, we also know that $Y \sim \text{Gam}(\alpha, \Lambda) \implies \mathbb{E}[Y]=\frac{\alpha}{\Lambda}$. Hence, $E[W]=\mathbb{E}[\Lambda]=\frac{1}{2}$.

## Total Expectation / Tower Property

> [!Theorem] The Law of Total Expectation and Variation
>  Let $X, Y$ be two random variables then:
>  $$
> \mathbb{E}[X] = \mathbb{E}[\mathbb{E}[X|Y]] 
> $$
> and
> $$
> \text{Var}(X)= \mathbb{E}[\text{Var}(X|Y)] + \text{Var}(\mathbb{E}[X|Y])
> $$


> [!Theorem] An example 
> Let $X, U$ be random variables such that $U \sim \text{Unif}(0, 1)$ and $\mathbb{E}[X|U]=3U^2$. What is $\mathbb{E}[X]$.
> 

$$
\mathbb{E}[X]=\mathbb{E}[\mathbb{E}[X|U]]=3\mathbb{E}[U^2]
$$
Now, recall that $\text{Var}(U)=\frac{1}{12}=\mathbb{E}[U^2]-\mathbb{E}[U]^2$, and we know that $\mathbb{E}[U]=\frac{1}{2}$, hence,
$$
\mathbb{E}[U^2] = \frac{1}{12} + \frac{1}{4}=\frac{1}{3}
$$
So, $\mathbb{E}[X]=1$.

## Inequalities
