#math #math316 #ODEs

# Legendre Equation

$$
(1 - x^2)y'' - 2xy' + \alpha(\alpha + 1)y = 0
$$

## Singular points
$p = \dfrac{-2x}{1 - x^2}$, $q = \dfrac{\alpha(\alpha+1)}{1 - x^2}$.
- $x = 0$ is ordinary → power series with $\rho \geq 1$ (the nearest singular points are $\pm 1$).
- $x = \pm 1$ are regular singular. At $x = 1$: $(x-1)p = \frac{2x}{x+1} \to 1$ and $(x-1)^2q = \frac{-\alpha(\alpha+1)(x-1)}{x+1} \to 0$. The indicial equation is $r^2 = 0$, ==a double root==, so one solution is bounded at $x = 1$ and the other has a $\ln|x - 1|$ term.

## Series about $x = 0$
Sub $y = \sum a_nx^n$ and collect $x^m$:
$$
(m+2)(m+1)a_{m+2} + \big[\alpha(\alpha+1) - m(m-1) - 2m\big]a_m = 0
$$
Using $m(m+1) - \alpha(\alpha+1) = (m - \alpha)(m + \alpha + 1)$:
$$
\boxed{a_{m+2} = -\frac{(\alpha - m)(\alpha + m + 1)}{(m+2)(m+1)}\,a_m}
$$
$$
\begin{align}
y_1 &= 1 - \frac{\alpha(\alpha+1)}{2!}x^2 + \frac{\alpha(\alpha-2)(\alpha+1)(\alpha+3)}{4!}x^4 - \dots \\
y_2 &= x - \frac{(\alpha-1)(\alpha+2)}{3!}x^3 + \frac{(\alpha-1)(\alpha-3)(\alpha+2)(\alpha+4)}{5!}x^5 - \dots
\end{align}
$$
**Radius:** $\left|\frac{a_{m+2}}{a_m}\right| \to 1$, so the series converges for $|x|^2 < 1$ and $\rho = 1$, matching the singular points at $\pm 1$.

## Legendre polynomials
If $\alpha = n$ is a non-negative integer, the factor $(\alpha - m)$ is $0$ at $m = n$, so ==one of the two series stops== and is a polynomial. The other series doesn't stop. Scaled so that $P_n(1) = 1$:
$$
P_0 = 1, \qquad P_1 = x, \qquad P_2 = \tfrac12(3x^2 - 1), \qquad P_3 = \tfrac12(5x^3 - 3x)
$$
- $n$ even → $y_1$ stops; $n$ odd → $y_2$ stops.
- The polynomials are the only solutions bounded at both $x = \pm 1$.
- They're orthogonal on $[-1, 1]$: $\int_{-1}^1 P_mP_n\,dx = 0$ for $m \neq n$, and $\frac{2}{2n+1}$ for $m = n$.

> [!tip] Same playbook for other named equations
> Chebyshev, Hermite, Airy, etc. all work the same way: classify the points, sub the series, find the recursion, check whether it stops. Read the question carefully for which point to expand about.
