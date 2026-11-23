#math #DifferentialEquationsII #PDEs

# Inhomogeneous Boundary Conditions and Steady States

Separation of variables needs ==homogeneous== BCs. When the ends are held at nonzero temperatures (or fluxes), split $u$ into a part that handles the BCs and a part that separation of variables can handle:
$$
u(x,t) = \underbrace{w(x)}_{\text{steady state}} + \underbrace{v(x,t)}_{\text{transient}}
$$
This note covers BCs and sources that don't depend on $t$. For ones that do, see [[18 Time-Dependent Boundary Conditions]].

## Workflow (constant BCs)
1. **Steady state.** Set $u_t = 0$. For $u_t = \alpha^2u_{xx}$ that gives $w'' = 0$, so $w = Ax + B$. Fit $A$ and $B$ to the BCs.
2. **Transient problem.** Substitute $u = w + v$. Since $w$ already satisfies the PDE and the BCs, $v$ satisfies the same PDE with ==homogeneous== BCs, and
$$
v(x,0) = f(x) - w(x)
$$
3. **Separate** $v$ using the homogeneous BCs ([[11 Standard Eigenvalue Problems]]), and expand $f - w$ ([[12 Fourier Coefficients]]).
4. **Report** $u = w + v$. As $t \to \infty$, $v \to 0$, so $u \to w$.

## Worked example: Dirichlet (L19)
$u_t = \alpha^2u_{xx}$, $u(0,t) = u_0$, $u(L,t) = u_1$, $u(x,0) = f(x)$.
- Steady state: $w = u_0 + (u_1 - u_0)\frac xL$.
- $v$ solves the same PDE with $v(0) = v(L) = 0$ and $v(x,0) = f - w$, so it's a sine series:
$$
u = u_0 + (u_1 - u_0)\frac xL + \sum_{n\geq1}b_n\,e^{-\alpha^2(n\pi/L)^2t}\sin\frac{n\pi x}{L}, \qquad b_n = \frac2L\int_0^L(f - w)\sin\frac{n\pi x}{L}\,dx
$$

## Worked example: mixed (A6 P4)
$u_t = u_{xx}$ on $(0, 1)$, $u_x(0,t) = 1$, $u(1,t) = 0$, $u(x,0) = 0$.
1. $w = Ax + B$. $w'(0) = A = 1$ and $w(1) = 1 + B = 0$, so $w = x - 1$.
2. $v_t = v_{xx}$ with $v_x(0) = v(1) = 0$ and $v(x,0) = 0 - (x - 1) = 1 - x$.
3. Mixed B: $X_n = \cos\mu_nx$ with $\mu_n = \frac{(2n-1)\pi}{2}$. The quarter-wave integrals give $c_n = 2\int_0^1(1 - x)\cos\mu_nx\,dx = \frac{2}{\mu_n^2}$.
$$
u = x - 1 + \sum_{n\geq1}\frac{8}{(2n-1)^2\pi^2}\,e^{-\mu_n^2t}\cos\mu_nx
$$
Check at $t = 0$, $x = 0$: $-1 + \frac{8}{\pi^2}\cdot\frac{\pi^2}{8} = 0$ ✓.

## Steady states for other setups
| Setup | Steady state $w$ |
|---|---|
| $u(0) = u_0$, $u(L) = u_1$ | $u_0 + (u_1 - u_0)\frac xL$ |
| $u(0) = u_0$, $u_x(L) = 0$ | the constant $u_0$ (A6 P6b: $u(0) = 5$, $u_x(1) = 0$ gives $w = 5$) |
| Robin, e.g. $u(0) = 0$, $u_x(2) + u(2) = 4$ | $w = Ax$, then $A + 2A = 4$, so $w = \frac{4x}{3}$ (A6 P6c) |
| Both ends insulated, no source | the average $\frac1L\int_0^Lf\,dx$ (every cosine mode except $n = 0$ decays) |
| Source $S(x)$: $u_t = \alpha^2u_{xx} + S$ | solve $\alpha^2w'' = -S$ with the BCs |
| Heat loss $-\beta^2u$ | cosh/sinh, see [[16 Heat Loss]] |

**Source example (L21).** $u_t = \alpha^2u_{xx} + x$, $u(0) = u_0$, $u(L) = u_1$. Integrate $w'' = -\frac{x}{\alpha^2}$ twice and fit the BCs:
$$
w = \frac{x(L^2 - x^2)}{6\alpha^2} + \frac{u_1 - u_0}{L}x + u_0
$$
==The steady state absorbs both the BCs and the source==, so $v$ is a plain homogeneous problem.

## When there's no steady state (L19)
$u_t = \alpha^2u_{xx}$ with $u_x(0) = q_1$ and $u_x(L) = q_2$. A steady state $w = Ax + B$ would need slope $q_1$ and slope $q_2$ at once, which is impossible unless $q_1 = q_2$.

**Physically:** heat enters at one end at a different rate than it leaves at the other. The total heat keeps changing, so the temperature never settles.

**Fix:** let $w$ depend on $t$. Try $w = Ax^2 + Bx + Ct$ and require $w_t = \alpha^2w_{xx}$ plus the BCs:
$$
w = \frac{q_2 - q_1}{2L}x^2 + q_1x + \alpha^2\frac{q_2 - q_1}{L}t
$$
Then $v$ has homogeneous Neumann BCs (a cosine series), and $u$ grows linearly in $t$ forever.

In general, when both ends are Neumann and there's no heat loss, a steady state exists only if the net heat input is zero: $\alpha^2(q_2 - q_1) + \int_0^LS\,dx = 0$. Heat loss changes this ([[16 Heat Loss]]).

> [!warning] Traps
> - Forgetting to subtract $w$ from the IC. It's $v(x,0) = f - w$, not $f$.
> - Using the inhomogeneous BCs for the eigenvalue problem. The eigenfunctions come from the ==homogeneous== versions.
> - Reporting $v$ instead of $u = w + v$.
