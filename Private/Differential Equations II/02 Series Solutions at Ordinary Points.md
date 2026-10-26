#math #math316 #ODEs

# Series Solutions Near an Ordinary Point

For $P(x)y'' + Q(x)y' + R(x)y = 0$, the standard form is $y'' + p(x)y' + q(x)y = 0$ with $p = Q/P$, $q = R/P$.
If $x_0$ is an ==ordinary point== ($p$, $q$ analytic at $x_0$; for polynomial coefficients, $P(x_0) \neq 0$), there are two linearly independent solutions of the form
$$
y = \sum_{n=0}^\infty a_n(x - x_0)^n
$$
with $a_0$ and $a_1$ free. See [[03 Ordinary and Singular Points]] for the check.

## Workflow
1. Check $x_0$ is ordinary. If $x_0 \neq 0$, sub $t = x - x_0$ first.
2. Sub in
$$
y = \sum_{n=0}^\infty a_nx^n, \qquad y' = \sum_{n=1}^\infty na_nx^{n-1}, \qquad y'' = \sum_{n=2}^\infty n(n-1)a_nx^{n-2}
$$
3. Multiply the coefficients in, so each sum has a single power $x^{n+k}$.
4. ==Shift indices== so every sum has $x^m$ (e.g. $m = n - 2$ in the $y''$ sum).
5. ==Peel off== low-$m$ terms until all sums start at the same index.
6. Set the coefficient of each $x^m$ to $0$ → recursion $a_{m+k} = (\dots)\,a_m$.
7. $y_1$: $a_0 = 1$, $a_1 = 0$. $y_2$: $a_0 = 0$, $a_1 = 1$. Compute until each has 3 nonzero terms.
8. General solution $y = a_0y_1 + a_1y_2$. For initial conditions, $a_0 = y(0)$ and $a_1 = y'(0)$.

> [!tip] What the recursion step tells you
> - Step 2 ($a_{m+2}$ from $a_m$): evens come from $a_0$, odds from $a_1$.
> - Step 3 ($a_{m+3}$ from $a_m$, e.g. when there's an $x^3y''$ or $xy$ term): a peeled-off equation usually forces $a_2 = 0$, so you get $a_0, a_3, a_6, \dots$ and $a_1, a_4, a_7, \dots$
> - Non-polynomial coefficient (e.g. $\sin x$, $e^x$): expand it as a Taylor series, then match $x^0, x^1, x^2, \dots$ one at a time instead of finding a general recursion.

## Worked example
$(1 + x^2)y'' + 4xy' + 2y = 0$ about $x_0 = 0$. This is ordinary since $P(0) = 1 \neq 0$.
$$
\begin{align}
\sum_{n=2}^\infty n(n-1)a_nx^{n-2} + \sum_{n=2}^\infty n(n-1)a_nx^n + \sum_{n=1}^\infty 4na_nx^n + \sum_{n=0}^\infty 2a_nx^n &= 0 \\
\sum_{m=0}^\infty (m+2)(m+1)a_{m+2}x^m + \sum_{m=0}^\infty \big[m(m-1) + 4m + 2\big]a_mx^m &= 0
\end{align}
$$
The $n = 0, 1$ terms of the middle sums are $0$, so all sums can start at $m = 0$. Since $m(m-1) + 4m + 2 = (m+1)(m+2)$:
$$
a_{m+2} = -a_m
$$
$$
y_1 = 1 - x^2 + x^4 - \dots, \qquad y_2 = x - x^3 + x^5 - \dots
$$

## Radius of convergence
**Ratio test on the recursion.** If $a_{m+k} = R(m)\,a_m$, the series converges when
$$
\lim_{m\to\infty}\left|\frac{a_{m+k}x^{m+k}}{a_mx^m}\right| = |x|^k\lim_{m\to\infty}|R(m)| < 1
$$
In the example: $|x|^2 \cdot 1 < 1$, so $\rho = 1$.

**By inspection (theorem).** $\rho \geq$ the distance from $x_0$ to the ==nearest singular point in the complex plane==. With polynomial coefficients, that's the nearest zero of $P(x)$.
In the example: $1 + x^2 = 0$ at $x = \pm i$, at distance $1$ from $0$, so $\rho \geq 1$. This matches the ratio test.

> [!warning] Traps
> - Complex zeros count: $1 + x^2$ has no real zeros but still limits $\rho$ to $1$.
> - The theorem only gives a ==lower bound==. If $P$ has no zeros (e.g. $y'' - xy = 0$), $\rho = \infty$.
> - A series that terminates is a polynomial, so it converges everywhere.

## Wronskian and linear independence
$$
W[y_1, y_2](x) = y_1y_2' - y_1'y_2
$$
$y_1$ and $y_2$ are linearly independent iff $W \neq 0$. With $y_1(0) = 1, y_1'(0) = 0, y_2(0) = 0, y_2'(0) = 1$ we get $W(0) = 1 \neq 0$, so the two series solutions are always independent.
**Abel's theorem:** $W(x) = C\exp\left(-\int p(x)\,dx\right)$, so on an interval where $p$ is continuous, $W$ is either never zero or always zero.
