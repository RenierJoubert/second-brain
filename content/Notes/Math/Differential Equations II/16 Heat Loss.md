#math #DifferentialEquationsII #PDEs

# Heat Loss to the Environment

If the sides of the bar aren't insulated, heat leaks out at a rate proportional to the temperature:
$$
u_t = \alpha^2u_{xx} - \beta^2u, \qquad \beta^2 > 0
$$
A5's chemical diffusion with consumption, $C_t = kC_{xx} - LC$, is the same equation.

## Separating
Substitute $u = XT$ and divide by $\alpha^2XT$. Put the $\beta^2$ term on the $T$ side so the $X$ side doesn't change:
$$
\frac{T'}{\alpha^2T} + \frac{\beta^2}{\alpha^2} = \frac{X''}{X} = -\mu^2
$$
- $X$: the same eigenvalue problem as always ([[11 Standard Eigenvalue Problems]]).
- $T$: $T' = -(\alpha^2\mu^2 + \beta^2)T$, so $T_n = e^{-(\alpha^2\mu_n^2 + \beta^2)t}$.

==Every mode decays by an extra factor $e^{-\beta^2t}$==, including the constant ($n = 0$) mode. With homogeneous BCs that's the whole story: $u = e^{-\beta^2t}\times$ (the ordinary heat-equation solution).

## Steady state
$\alpha^2w'' - \beta^2w = 0$. With $k = \frac\beta\alpha$:
$$
w = A\cosh kx + B\sinh kx
$$
Use cosh and sinh rather than $e^{\pm kx}$. Since $\cosh0 = 1$, $\sinh0 = 0$, and each is the other's derivative, the BCs become easy. For a refresher, see [[Hyperbolic Functions]].

**Shift trick:** for a condition at $x = L$, use $\cosh k(x - L)$ (slope $0$ at $L$) or $\sinh k(x - L)$ (value $0$ at $L$).

| BCs | $w$ |
|---|---|
| $u(0) = 1$, $u(\pi) = 2$, $\alpha = 1$ (A6 P6d) | $\dfrac{\sinh\beta(\pi - x) + 2\sinh\beta x}{\sinh\beta\pi}$ |
| $u_x(0) = 1$, $u(\pi) = 2$, $\alpha = 1$ (A6 P6e) | $\dfrac{2\cosh\beta x + \frac1\beta\sinh\beta(x - \pi)}{\cosh\beta\pi}$ |
| $u(0) = u_0$, $u_x(L) = q_1$ (L20) | $u_0\dfrac{\cosh k(x - L)}{\cosh kL} + \dfrac{q_1}{k}\dfrac{\sinh kx}{\cosh kL}$ |

The steady state ==sags below a straight line==, because heat leaks out along the length of the bar.

## Worked example (L20)
$u_t = \alpha^2u_{xx} - \beta^2u$, $u(0,t) = u_0$, $u_x(L,t) = q_1$, $u(x,0) = f(x)$.
1. Take the steady state $w$ from the last row of the table.
2. $v = u - w$ solves $v_t = \alpha^2v_{xx} - \beta^2v$ with $v(0) = 0$, $v_x(L) = 0$ and $v(x,0) = f - w$.
3. Mixed A: $X_n = \sin\mu_nx$ with $\mu_n = \frac{(2n-1)\pi}{2L}$.
$$
u = w(x) + \sum_{n\geq1}b_n\,e^{-\beta^2t}e^{-\alpha^2\mu_n^2t}\sin\mu_nx, \qquad b_n = \frac2L\int_0^L(f - w)\sin\mu_nx\,dx
$$

## Worked example: heat loss plus a source (A6 P5)
$u_t = u_{xx} - u + x$ on $(0, 1)$, $u_x(0,t) = 1$, $u_x(1,t) = 2$, $u(x,0) = x$.
1. **Steady state:** $w'' - w + x = 0$. A particular solution is $w_p = x$, so $w = x + A\cosh x + B\sinh x$. Then $w'(0) = B + 1 = 1$ gives $B = 0$, and $w'(1) = A\sinh1 + 1 = 2$ gives $A = \frac{1}{\sinh1}$:
$$
w = x + \frac{\cosh x}{\sinh1}
$$
2. **Transient:** $v_t = v_{xx} - v$ with $v_x(0) = v_x(1) = 0$ and $v(x,0) = x - w = -\frac{\cosh x}{\sinh1}$.
3. **Cosine coefficients**, using the hint integral $\int\cos Ax\cosh Bx\,dx$ from the assignment: $A_0 = \int_0^1v(x,0)\,dx = -1$ and $A_n = -\frac{2(-1)^n}{n^2\pi^2 + 1}$.
$$
u = x + \frac{\cosh x}{\sinh1} - e^{-t} - 2\sum_{n\geq1}\frac{(-1)^n}{n^2\pi^2 + 1}\,e^{-(n^2\pi^2 + 1)t}\cos n\pi x
$$
The two ends have ==different fluxes, yet there's still a steady state==. Without the $-u$ term that would be impossible ([[15 Inhomogeneous Boundary Conditions]]); here the heat loss balances the extra heat coming in.

> [!warning] Traps
> - Putting $\beta^2$ on the $X$ side changes the eigenvalue problem for no reason. Keep it with $T$.
> - The $n = 0$ mode decays like $e^{-\beta^2t}$. It isn't constant anymore.
> - With time-dependent BCs, the heat-loss term also acts on $w$, so the source for $v$ picks up $-\beta^2w$ ([[18 Time-Dependent Boundary Conditions]]).
