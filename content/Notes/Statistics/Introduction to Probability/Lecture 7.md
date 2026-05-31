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

## Continuous Families