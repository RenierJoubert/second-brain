#math #math316 #ODEs

# Cauchy-Euler Equations

$$
ax^2y'' + bxy' + cy = 0, \qquad x > 0
$$
The power of $x$ in each term matches the order of the derivative, so $y = x^r$ turns the ODE into an algebraic equation.

> [!tip] On the formula sheet
> The solution table (distinct / repeated / complex roots) is given. You still need to find the indicial equation and handle the non-homogeneous case yourself.

## Workflow
1. Sub $y = x^r$, $y' = rx^{r-1}$, $y'' = r(r-1)x^{r-2}$.
2. Divide by $x^r$ to get the ==indicial equation== $ar(r-1) + br + c = 0$. It's $r(r-1)$, not $r^2$.
3. Read off the solution:

| Roots | General solution |
|---|---|
| $r_1 \neq r_2$ real | $y = Ax^{r_1} + Bx^{r_2}$ |
| $r_1 = r_2 = r$ | $y = x^r(A + B\ln x)$ |
| $r = \lambda \pm i\mu$ | $y = x^\lambda\big[A\cos(\mu\ln x) + B\sin(\mu\ln x)\big]$ |

4. For $x < 0$ replace $x$ by $|x|$. For $a(x-x_0)^2y'' + b(x-x_0)y' + cy = 0$ use $(x-x_0)^r$.

### Examples
- $x^2y'' - 2y = 0$: $r(r-1) - 2 = (r-2)(r+1)$ → $y = Ax^2 + Bx^{-1}$
- $x^2y'' + 3xy' + y = 0$: $r^2 + 2r + 1 = (r+1)^2$ → $y = x^{-1}(A + B\ln x)$
- $x^2y'' + xy' + 4y = 0$: $r^2 + 4 = 0$, $r = \pm 2i$ → $y = A\cos(2\ln x) + B\sin(2\ln x)$

## Why it works: $x = e^t$
With $t = \ln x$:
$$
xy' = \frac{dy}{dt}, \qquad x^2y'' = \frac{d^2y}{dt^2} - \frac{dy}{dt}
$$
so the Euler equation becomes the ==constant coefficient== ODE
$$
a\ddot y + (b - a)\dot y + cy = 0
$$
Its characteristic equation $ar^2 + (b-a)r + c = 0$ is the same as the indicial equation. Each $e^{rt}$ becomes $x^r$ and each $t$ becomes $\ln x$, which is where the $\ln x$ in the repeated and complex cases comes from.

## Non-homogeneous: $ax^2y'' + bxy' + cy = f(x)$
**A. Guess in $x$.** For $f = x^k$: if $k$ is not a root, try $y_p = Kx^k$. If $k$ is a root, try $Kx^k\ln x$ (or $Kx^k(\ln x)^2$ for a double root).

**B. Sub $x = e^t$.** Convert to constant coefficients, use undetermined coefficients in $t$ ($x^k = e^{kt}$, $\ln x = t$), convert back.

**C. Variation of parameters.** ==Divide by $ax^2$ first==, so the forcing is $g(x) = \frac{f(x)}{ax^2}$:
$$
y_p = -y_1\int\frac{y_2\,g}{W}\,dx + y_2\int\frac{y_1\,g}{W}\,dx, \qquad W = y_1y_2' - y_1'y_2
$$

### Example (resonance)
$x^2y'' - 2y = x^2$. The roots are $r = 2, -1$, and the forcing $x^2$ matches $r = 2$, so try $y_p = Kx^2\ln x$.
With $x = e^t$: $\ddot y - \dot y - 2y = e^{2t}$; $y_p = Kte^{2t}$ gives $3K = 1$.
$$
y = Ax^2 + Bx^{-1} + \tfrac13x^2\ln x
$$

> [!warning] Traps
> - Writing $ar^2 + br + c$ instead of $ar(r-1) + br + c$.
> - Using variation of parameters without dividing by $ax^2$ first.
> - $x = 0$ is a singular point; see [[04 Cauchy-Euler Singular Points]].
