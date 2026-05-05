#math #math101 

Integration by parts, or ==IBP== allows us to integrate products of functions. So, first recall the product rule:

> [!theorem] Product Rule
>
>$$
> \frac{d}{dx} u(x)v(x) = u'(x)v(x) + u(x)v'(x)
>$$

Integrating this however yields the following:
$$
\int [u'(x)v(x) + u(x)v'(x)]dx = \int u'(x)v(x)dx + \int u(x)v'(x)dx,
$$

$$
u(x)v(x)-\int u'(x)v(x)dx=\int u(x)v'(x)dx.
$$
Which is precisely the formula for integration by parts, that is for any two continuously differentiable functions $u(x)$ and $v(x)$ we have by IBP that:

> [!theorem] Integration By Parts
>$$
> \int udv = uv - \int vdu
>$$


Where the corresponding form for definite integrals is as follows:

> [!theorem] IBP for Definite Integrals
>$$
> \int ^b_{a}u(x)v'(x)dx = u(b)v(b)-u(a)v(a)-\int^b_{a}v(x)u'(x)dx
>$$

# So how do we use it?

1. First we need to choose our $u$ and $dv$ by using 'LIATE'
2. Then we compute $du$ and $v$ 
3. Solve the easier integral $\int vdu$ and repeat if necessary

### The LIATE Rule

LIATE is an acronym that stands for the order to choose your $u$ term in IBP and goes as follows:
1. Logarithmic functions
2. Inverse functions
3. Trigonometric functions
4. Algebraic functions
5. Exponential functions

# Examples

Consider
$$
\int x \sin(x)dx
$$
using LIATE we choose $u = x$ and $dv = \sin(x)$. Therefore we have that $du = dx$ and $v = \int \sin(x)dx = -\cos(x)$. This then yields:
$$
\int x\sin(x)dx = -x\cos(x) - \int -\cos(x)dx = -x\cos(x)+\sin (x)+ C
$$
Consider
$$
\int x^2e^{ x }dx
$$
using LIATE we choose $u = x^2$ and $dv = e^xdx$, therefore $du = 2xdx$ and $v = \int e^x dx = e^x$. Which yields:
$$
\int x^2e^{ x }dx = x^2e^x - \int 2xe^xdx
$$

So, again let $u = 2x$ and $dv = e^x$, thus $du = 2dx$ and $v = e^x$ which yields:
$$
\int x^2e^{ x }dx = x^2e^x - \Big(2xe^x-\int 2e^xdx  \Big)
$$
Simplifying we recover:
$$
\int x^2e^{ x }dx = x^2e^x - 2xe^xdx - 2e^x + C
$$
