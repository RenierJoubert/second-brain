#math #math316 #ODEs

# Bessel's Equation

$$
x^2y'' + xy' + (x^2 - \nu^2)y = 0, \qquad \nu \geq 0
$$

## Setup
- $x = 0$ is regular singular: $p_0 = \lim x\cdot\frac1x = 1$ and $q_0 = \lim x^2\cdot\frac{x^2 - \nu^2}{x^2} = -\nu^2$.
- Indicial equation: $r(r-1) + r - \nu^2 = r^2 - \nu^2 = 0$, so ==$r = \pm\nu$== with difference $2\nu$.
- There are no other singular points, so the Frobenius series converge for all $x > 0$.

## Recursion
Sub $y = \sum a_nx^{n+r}$ ([[06 Frobenius Method]]):
$$
\sum_{n=0}^\infty\big[(n+r)^2 - \nu^2\big]a_nx^{n+r} + \sum_{n=0}^\infty a_nx^{n+r+2} = 0
$$
- $m = 0$: $(r^2 - \nu^2)a_0 = 0$, the indicial equation.
- $m = 1$: $\big[(r+1)^2 - \nu^2\big]a_1 = 0$.
- $m \geq 2$:
$$
a_m = -\frac{a_{m-2}}{(m+r)^2 - \nu^2}
$$

**$r = \nu$:** $(m+\nu)^2 - \nu^2 = m(m + 2\nu)$. So $a_1 = 0$, every odd coefficient is $0$, and
$$
y_1 = a_0x^\nu\left[1 - \frac{x^2}{4(1+\nu)} + \frac{x^4}{32(1+\nu)(2+\nu)} - \dots\right] \propto J_\nu(x)
$$
This one is bounded at $0$.

**$r = -\nu$:** $(m - \nu)^2 - \nu^2 = m(m - 2\nu)$, which is $0$ at $m = 2\nu$.

| $\nu$ | Second solution |
|---|---|
| $2\nu$ not an integer | plug $r = -\nu$ into the recursion → $J_{-\nu}$ |
| $\nu = 0$ | repeated root → log term |
| $\nu = \frac12, \frac32, \dots$ | $0\cdot a_{2\nu} = 0$, so $a_{2\nu}$ is free: ==no log==, and $r = -\nu$ gives both solutions |
| $\nu = 1, 2, \dots$ | $0\cdot a_{2\nu} \neq 0$ → log term needed |

> [!example]- Order $\nu = \frac12$ (same as A3 P3 and the 2024 midterm Q1; try it yourself first)
> The roots are $\pm\frac12$ with difference $1$. Use $r = -\frac12$: the $m = 1$ equation is $0\cdot a_1 = 0$, so $a_0$ and $a_1$ are both free, and
> $$
> a_m = -\frac{a_{m-2}}{m(m-1)}
> $$
> The even and odd chains give
> $$
> y = x^{-1/2}\left[a_0\left(1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \dots\right) + a_1\left(x - \frac{x^3}{3!} + \frac{x^5}{5!} - \dots\right)\right] = \frac{a_0\cos x + a_1\sin x}{\sqrt x}
> $$
> - Near $0$: $\frac{\cos x}{\sqrt x} \to \infty$, while $\frac{\sin x}{\sqrt x} \approx \sqrt x \to 0$.
> - Radius: $\left|\frac{a_m}{a_{m-2}}\right| = \frac{1}{m(m-1)} \to 0$, so $\rho = \infty$.
> - Using $r = +\frac12$ instead gives $a_m = -\frac{a_{m-2}}{m(m+1)}$, which only reproduces the $\frac{\sin x}{\sqrt x}$ solution.

## Order $\nu = 0$
$r = 0$ is a double root. $J_0 = 1 - \frac{x^2}{4} + \frac{x^4}{64} - \dots$, and $y_2 = J_0\ln x + \sum_{n\geq1}b_nx^n$ is unbounded at $0$.
