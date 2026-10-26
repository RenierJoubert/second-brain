#math #math316 #ODEs

# Cauchy-Euler Equations as Singular Points

$$
ax^2y'' + bxy' + cy = 0 \quad\Longrightarrow\quad p = \frac{b}{ax}, \qquad q = \frac{c}{ax^2}
$$

## Classification
- $x = 0$: $xp = \frac ba$ and $x^2q = \frac ca$ are constants, so ==$x = 0$ is always a regular singular point== (unless $b = c = 0$).
- Every $x \neq 0$ is ordinary.

## Euler is the model for Frobenius
Near a regular singular point, $(x - x_0)p \approx p_0$ and $(x-x_0)^2q \approx q_0$, so the ODE behaves like the Euler equation
$$
x^2y'' + p_0xy' + q_0y = 0
$$
That's why the Frobenius indicial equation $r(r-1) + p_0r + q_0 = 0$ is the Euler indicial equation, and why the Frobenius cases mirror the Euler ones:

| Euler | Frobenius ([[06 Frobenius Method]]) |
|---|---|
| $y = Ax^{r_1} + Bx^{r_2}$ | $y_i = x^{r_i}\sum a_nx^n$ |
| $y = x^r(A + B\ln x)$ | $y_2 = y_1\ln x + x^r\sum b_nx^n$ |

If you run Frobenius on a pure Euler equation you get $a_n F(n + r) = 0$ for every $n$, so $a_n = 0$ for $n \geq 1$ and the series is just $x^r$.

## Analytic solution and behaviour near $x = 0$
Solve with [[01 Cauchy-Euler Equations]], then read off the behaviour as $x \to 0^+$:

| Solution | As $x \to 0^+$ |
|---|---|
| $x^r$, $r > 0$ | $\to 0$ (bounded) |
| $x^r$, $r = 0$ | constant (bounded) |
| $x^r$, $r < 0$ | $\to \infty$ (unbounded) |
| $x^r\ln x$ | bounded only if $r > 0$; $\ln x$ alone is unbounded |
| $x^\lambda\cos(\mu\ln x)$ | oscillates infinitely often; $\to 0$ if $\lambda > 0$, unbounded if $\lambda < 0$ |

"Which solutions stay bounded at $x = 0$?" questions just use this table.

## Radius of convergence
There are no other singular points, so the solutions are valid on all of $x > 0$ (and on $x < 0$ using $|x|$).
