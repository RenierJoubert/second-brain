#math #math101 

When we need to integrate functions where the integrands are not linear combinations of simpler functions, but rather compositions of functions we need to use the *chain rule* in order to integrate.

## Chain rule

Let $F(u)$ and $u(x)$ be differentiable functions that form the composition $F(u(x))$, then:


> [!theorem] Chain Rule
>$$
> \frac{d}{dx} F(u(x)) = F'(u(x)) \cdot u'(x)
>$$


Now consider a function $f(u)$ with an anti-derivative $F(u)$, then it follows that:
$$
\int f(u)du = \int F'(u)du = F(u) + C
$$
by the *fundamental theorem of calculus*. Now, let $u = u(x)$ where $u(x)$ is any differentiable function. This yields:

$$
\int f(u)du \Big|_{u(x)} = F(u(x)) + C
$$

Then differentiating the *RHS* with respect to $x$ we obtain:
$$
\frac{d}{dx} F(u(x)) = F'(u(x)) \cdot u'(x)
$$
This shows that $F(u(x))$ is actually an anti-derivative of the function and yields the substitution rule:

> [!theorem] The Substitution Rule
> For any differentiable function $u(x)$ we have that:
>$$
> \int f(u(x))u'(x)dx=\int f(u)du \Big |_{u=u(x)}
>$$

Where for definite integrals we can use:

> [!theorem] The Substitution Rule for Definite Integrals
>$$
> \int^b_{a}f(u(x))u'(x)dx = \int _{u(a)}^{u(b)}f(u)du
>$$

For example we will integrate
$$
\int e^{ 3x-2 }dx
$$
with u-sub as follows, first let $u = 3x -2$, then $du = 3dx$, $\frac{1}{3} du = dx$. Then, our original integral becomes:
$$
\int \frac{1}{3} e^{ u }du = \frac{1}{3}e^{ 3x-2 }+C
$$

Additionally, to demonstrate the evaluation of a definite integral let us evaluate:
$$
\int^1_{0}x^2\sin(1-x^3)dx
$$
so, let $u = 1 - x^3$, then $du = -3x^2dx$, $dx = \frac{du}{-3x^2}$. Then our original integral becomes:
$$
\int^1_{0}x^2\sin(u)\cdot \frac{1}{-3x^2}du = \int^1_{0} \frac{-1}{3}\sin(u)du
$$

> [!theorem] Bounds of Integration
> Please note we have still not rewritten our bounds in terms of $u$, so let us do that now. Given $u = 1 - x^3$, when $x = 0$ we see $u=1$ so we will change our lower bound to 1. Similarly when $x = 1$ we see $u=0$ thus our upper bound will become 0 as follows:

$$
\int ^0_{1} -\frac{1}{3}\sin(u)du = \frac{\cos(u)}{3}\Bigg|^0_{1} = \frac{1-\cos(1)}{3}.
$$
