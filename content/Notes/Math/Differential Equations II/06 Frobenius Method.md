#math #math316 #ODEs

# Frobenius Method (Regular Singular Points)

If $x_0$ is a regular singular point ([[03 Ordinary and Singular Points]]), try
$$
y = \sum_{n=0}^\infty a_n(x - x_0)^{n+r}, \qquad a_0 \neq 0
$$
Below, $x_0 = 0$. For any other $x_0$, sub $t = x - x_0$ first.

> [!tip] On the formula sheet
> The three forms of the second solution and the limits $b = \lim(x-x_0)p$, $c = \lim(x-x_0)^2q$. You still have to do the substitution and recursion yourself.

## Workflow
1. Show $x = 0$ is regular singular: $p_0 = \lim xp$ and $q_0 = \lim x^2q$ are finite.
2. Sub in. ==All sums start at $n = 0$==, unlike at an ordinary point:
$$
y = \sum a_nx^{n+r}, \qquad y' = \sum(n+r)a_nx^{n+r-1}, \qquad y'' = \sum(n+r)(n+r-1)a_nx^{n+r-2}
$$
3. Multiply through, combine sums with the same power, and shift so everything is $x^{m+r}$.
4. Lowest power ($m = 0$): $a_0F(r) = 0$ with $a_0 \neq 0$ gives the ==indicial equation $F(r) = 0$==. Check it against $r(r-1) + p_0r + q_0 = 0$.
5. Peel off any other low-$m$ equations (e.g. $a_1F(r+1) = 0$ when the recursion steps by 2).
6. General $m$: write the recursion for $a_m$ with $r$ still a symbol.
7. $y_1$: plug in the larger root $r_1$ and compute 3 nonzero terms.
8. $y_2$: depends on $r_1 - r_2$ (next section).
9. If asked, the behaviour near $0$ comes from $x^r$ ([[04 Cauchy-Euler Singular Points]]). The series converges at least on $0 < x < \rho$, where $\rho$ is the distance to the nearest other singular point.

## The second solution

| $r_1 - r_2$ | Form of $y_2$ | What to do |
|---|---|---|
| not an integer | $x^{r_2}\sum a_nx^n$ | plug $r_2$ into the same recursion |
| $0$ (repeated) | $y_1\ln x + x^{r_1}\sum_{n\geq1}b_nx^n$ | a log term always appears |
| positive integer $N$ | $a\,y_1\ln x + x^{r_2}\sum b_nx^n$, where $a$ may be $0$ | ==try $r_2$ first== (below) |

**Integer difference trick.** Plug $r_2$ into the recursion. At $m = N$, the coefficient of $a_N$ is $F(r_2 + N) = F(r_1) = 0$, so the equation reads $0\cdot a_N = (\text{stuff})$.
- If the stuff is $0$: $a_N$ is ==free== and there's no log. $r_2$ alone gives the general solution, since the part multiplied by $a_N$ is just $y_1$. Example: Bessel with $\nu = \frac12$ in [[07 Bessel Equation]].
- If the stuff is not $0$: there's no solution of that form, so $y_2$ needs the $\ln x$ term.

## Worked example (non-integer difference)
$2x^2y'' + 3xy' - (1 + x)y = 0$. Here $p_0 = \frac32$ and $q_0 = -\frac12$, so $x = 0$ is regular singular.
$$
\begin{align}
\sum_{n=0}^\infty\big[2(n+r)(n+r-1) + 3(n+r) - 1\big]a_nx^{n+r} - \sum_{n=0}^\infty a_nx^{n+r+1} &= 0 \\
\sum_{n=0}^\infty\big(2(n+r) - 1\big)(n+r+1)\,a_nx^{n+r} - \sum_{m=1}^\infty a_{m-1}x^{m+r} &= 0
\end{align}
$$
- $x^r$: $(2r - 1)(r + 1)a_0 = 0$, so $r_1 = \frac12$ and $r_2 = -1$. The difference is $\frac32$, not an integer.
- $x^{m+r}$, $m \geq 1$:
$$
a_m = \frac{a_{m-1}}{\big(2(m+r) - 1\big)(m + r + 1)}
$$
- $r = \frac12$: $a_m = \frac{a_{m-1}}{m(2m+3)}$, so $a_1 = \frac{a_0}{5}$ and $a_2 = \frac{a_0}{70}$.
- $r = -1$: $a_m = \frac{a_{m-1}}{m(2m-3)}$, so $a_1 = -a_0$ and $a_2 = -\frac{a_0}{2}$.
$$
y_1 = x^{1/2}\left(1 + \frac x5 + \frac{x^2}{70} + \dots\right), \qquad y_2 = x^{-1}\left(1 - x - \frac{x^2}{2} - \dots\right)
$$
Near $0$, $y_1 \to 0$ and $y_2$ is unbounded. $x = 0$ is the only singular point, so both series converge for all $x > 0$.

> [!warning] Traps
> - Dropping the $n = 0$ terms of $y'$ and $y''$. They're not zero here because of the $r$.
> - When the recursion steps by 2, the peeled-off equation $a_1F(r+1) = 0$ usually forces $a_1 = 0$. Check that $F(r+1) \neq 0$ first.
> - "First three nonzero terms" means skipping coefficients that are zero.
