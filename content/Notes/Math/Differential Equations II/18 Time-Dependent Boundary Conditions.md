#math #DifferentialEquationsII #PDEs

# Time-Dependent Boundary Conditions

This is the full problem, and ==Q1 on every past MT2==:
$$
u_t = \alpha^2u_{xx} - \beta^2u + S(x,t), \qquad \text{BCs that depend on } t, \qquad u(x,0) = f(x)
$$
($\beta = 0$ when there's no heat loss.) There's no steady state, so pick the ==simplest== $w(x,t)$ that satisfies the BCs, and let an eigenfunction expansion ([[17 Eigenfunction Expansions]]) handle the rest.

## Recipe
1. **Eigenfunctions** from the homogeneous version of the BCs ([[11 Standard Eigenvalue Problems]]).
2. **Pick $w$** from the table below, and let $v = u - w$.
3. **Write the $v$ problem:**
$$
v_t = \alpha^2v_{xx} - \beta^2v + F, \qquad F = S - \big(w_t - \alpha^2w_{xx} + \beta^2w\big)
$$
with homogeneous BCs and $v(x,0) = f(x) - w(x,0)$.
4. **Expand and solve** the mode ODEs $T_n' + (\alpha^2\mu_n^2 + \beta^2)T_n = F_n$ with $T_n(0) = c_n$ ([[17 Eigenfunction Expansions]]).
5. **Report** $u = w + \sum T_nX_n$. Check the BCs and the value at $t = 0$.

## Choosing $w$ (L22)
| BCs | $w(x,t)$ |
|---|---|
| $u(0) = \phi_0(t)$, $u(L) = \phi_1(t)$ | $\phi_0 + (\phi_1 - \phi_0)\frac xL$ |
| $u(0) = \phi_0(t)$, $u_x(L) = q_1(t)$ | $\phi_0 + q_1x$ |
| $u_x(0) = q_0(t)$, $u(L) = \phi_1(t)$ | $\phi_1 + q_0(x - L)$ |
| $u_x(0) = q_0(t)$, $u_x(L) = q_1(t)$ | $q_0x + (q_1 - q_0)\frac{x^2}{2L}$ |

**Where these come from:** try $w = A(t)x + B(t)$ and solve the two BCs for $A$ and $B$. When both ends are Neumann, a line can't have two different slopes, so use $A(t)\frac{x^2}{2} + B(t)x$ instead.

> [!tip] Exams are built so things cancel
> In all three past MT2 Q1s, $w_t - \alpha^2w_{xx}$ (plus $\beta^2w$, with heat loss) exactly cancels the polynomial part of $S$. What's left of $F$ is one eigenfunction times a function of $t$. And $f - w(x,0)$ is either one eigenfunction, zero, or comes with a hint integral. ==Compute $F$ and look for cancellation before you project anything.==

## Worked example (L22)
$u_t = u_{xx} + e^{-2t}\sin5\pi x + (1 - x)$ on $(0, 1)$, $u(0,t) = t$, $u(1,t) = 0$, $u(x,0) = \sin\pi x$.
1. Dirichlet: $X_n = \sin n\pi x$, $\mu_n = n\pi$.
2. Row 1: $w = t(1 - x)$, so $w_t = 1 - x$ and $w_{xx} = 0$.
3. $F = e^{-2t}\sin5\pi x + (1 - x) - (1 - x) = e^{-2t}\sin5\pi x$. And $v(x,0) = \sin\pi x - 0 = \sin\pi x$.
4. Only mode 5 is forced, and only mode 1 has initial data:
   - $T_1' + \pi^2T_1 = 0$ with $T_1(0) = 1$, so $T_1 = e^{-\pi^2t}$.
   - $T_5' + 25\pi^2T_5 = e^{-2t}$ with $T_5(0) = 0$, so $T_5 = \frac{e^{-2t} - e^{-25\pi^2t}}{25\pi^2 - 2}$.
$$
u = t(1 - x) + e^{-\pi^2t}\sin\pi x + \frac{e^{-2t} - e^{-25\pi^2t}}{25\pi^2 - 2}\sin5\pi x
$$
(The handwritten notes have $(5\pi)^2 - 5$ in one denominator. It should be $(5\pi)^2 - 2$.)

## Worked example with heat loss (A7 P4)
$u_t = u_{xx} - u + e^{-t}\sin x$ on $(0, \frac\pi2)$, $u(0,t) = 0$, $u_x(\frac\pi2, t) = e^{-t}$, $u(x,0) = x$.
1. Mixed A on $(0, \frac\pi2)$: $X_n = \sin(2n-1)x$, so $\sin x$ is mode 1.
2. Row 2: $w = xe^{-t}$.
3. $w_t - w_{xx} + w = -xe^{-t} - 0 + xe^{-t} = 0$, so $F = e^{-t}\sin x$. ==The heat-loss term cancels $w_t$.== And $v(x,0) = x - x = 0$.
4. Mode 1 has $k = 1^2 + 1 = 2$: $T_1' + 2T_1 = e^{-t}$ with $T_1(0) = 0$, so $T_1 = e^{-t} - e^{-2t}$.
$$
u = xe^{-t} + \left(e^{-t} - e^{-2t}\right)\sin x
$$

## When nothing cancels (A7 P2)
$u_t = \alpha^2u_{xx} + 1 - xe^{-t}$, $u(0,t) = e^{-t}$, $u_x(1,t) = t$, $u(x,0) = \sin\frac{3\pi x}{2} + 1$.
- Row 2 gives $w = e^{-t} + xt$, which leaves $F = (1 - x)(1 + e^{-t})$. This has to be projected onto $\sin\mu_nx$ with $\mu_n = \frac{(2n-1)\pi}{2}$: $F_n = b_n(1 + e^{-t})$, where $b_n = 2\int_0^1(1 - x)\sin\mu_nx\,dx = \frac{2}{\mu_n} + \frac{2(-1)^n}{\mu_n^2}$.
- $v(x,0) = \sin\frac{3\pi x}{2}$, so $c_n = \delta_{n2}$.
- Adding the $A$ and $Ae^{-bt}$ rows of the ODE table, with $k_n = \alpha^2\mu_n^2$:
$$
T_n = \delta_{n2}e^{-k_nt} + b_n\left[\frac{1 - e^{-k_nt}}{k_n} + \frac{e^{-t} - e^{-k_nt}}{k_n - 1}\right]
$$

> [!warning] Traps
> - Forgetting $w_t$. It's nonzero whenever the BCs depend on $t$.
> - With heat loss, forgetting the $+\beta^2w$ inside $F$.
> - Using $f$ instead of $f - w(x,0)$ as the IC for $v$.
> - Reporting $v$ instead of $u$.
> - Mixed BCs use odd multiples of $\frac{\pi}{2L}$, not $\frac{n\pi}{L}$.
