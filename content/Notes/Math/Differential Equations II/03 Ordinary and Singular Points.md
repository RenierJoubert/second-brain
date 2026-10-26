#math #math316 #ODEs

# Ordinary and Singular Points

$$
P(x)y'' + Q(x)y' + R(x)y = 0 \quad\Longrightarrow\quad y'' + p(x)y' + q(x)y = 0, \qquad p = \frac{Q}{P}, \quad q = \frac{R}{P}
$$

| Type | Condition at $x_0$ | Series to use |
|---|---|---|
| Ordinary | $p$ and $q$ analytic at $x_0$ | $\sum a_n(x-x_0)^n$ → [[02 Series Solutions at Ordinary Points]] |
| Regular singular | not ordinary, but $(x-x_0)p$ and $(x-x_0)^2q$ analytic | $\sum a_n(x-x_0)^{n+r}$ → [[06 Frobenius Method]] |
| Irregular singular | anything worse | not covered |

"Analytic at $x_0$" means it has a convergent Taylor series there. For a rational function (after cancelling), that means the limit as $x \to x_0$ is finite.

> [!tip] On the formula sheet
> The rearrangement $(x-x_0)^2y'' + [(x-x_0)p](x-x_0)y' + [(x-x_0)^2q]y = 0$, the indicial equation, and $b = \lim(x-x_0)p$, $c = \lim(x-x_0)^2q$ are given.

## Workflow (e.g. "classify the points $0 \leq x < \infty$")
1. Divide by $P(x)$ to get $p$ and $q$. ==Cancel common factors.==
2. Candidates: zeros of $P(x)$, plus points where $p$ or $q$ isn't analytic ($\ln x$ or $\sqrt x$ at $0$, $\cot x$ at $n\pi$, ...).
3. For each candidate compute
$$
p_0 = \lim_{x\to x_0}(x - x_0)\,p(x), \qquad q_0 = \lim_{x\to x_0}(x - x_0)^2\,q(x)
$$
Both finite (and the functions analytic) → regular. Either one infinite → irregular.
4. Every other point in the interval is ordinary. ==Say this explicitly on the exam.==
5. If asked for the indicial equation / exponents: $r(r-1) + p_0r + q_0 = 0$; the exponents are its roots.
6. If asked for a lower bound on the radius of convergence: the distance from $x_0$ to the nearest *other* singular point, complex ones included.

## Worked example
$x^2(x-1)^2y'' + 2xy' - 2(x-1)^2y = 0$ on $0 \leq x < \infty$.
$$
p = \frac{2}{x(x-1)^2}, \qquad q = -\frac{2}{x^2}
$$
- $x = 0$: $xp = \frac{2}{(x-1)^2} \to 2$ and $x^2q = -2$. Both finite → ==regular singular==. Indicial equation $r(r-1) + 2r - 2 = (r+2)(r-1) = 0$, so $r = 1, -2$. The Frobenius series about $0$ converges at least on $0 < x < 1$.
- $x = 1$: $(x-1)p = \frac{2}{x(x-1)} \to \infty$ → ==irregular singular==.
- Every other $x \geq 0$ is ordinary.

## Analyticity facts
- Polynomials, $e^x$, $\sin x$, $\cos x$: analytic everywhere.
- $\frac{\sin x}{x}$ and $\frac{e^x - 1}{x}$ are analytic at $0$ (removable). Check with the Taylor series.
- $\sqrt x$, $x^{1/3}$, $\ln x$ are ==not analytic at $0$==. If one is still there in $(x-x_0)p$ or $(x-x_0)^2q$, the point is irregular.
- $\ln x$ *is* analytic at $x = 1$, where it has a simple zero.
- $\sinh x = 0$ only at $x = 0$ on the real line, but also at $x = in\pi$ in the complex plane, which matters for the radius.
- $\cot x$ and $\csc x$ are singular at $x = n\pi$.
