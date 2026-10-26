#math #math316 #PDEs

# Intro to PDEs: Heat and Wave Equations

## Vocabulary
- **Order**: the highest derivative.
- **Linear**: $u$ and its derivatives appear to the first power, are never multiplied together, and the coefficients depend only on the independent variables. $u_t = xu_{xx}$ is linear; $u_t = uu_x$ is not.
- **Homogeneous**: every term contains $u$ (no forcing term like $f(x,t)$).
- **Superposition**: if $u_1$ and $u_2$ solve a linear homogeneous PDE with homogeneous BCs, so does $c_1u_1 + c_2u_2$. This is what makes [[10 Separation of Variables]] work.

## The three model equations

| | Equation | Conditions needed | Models |
|---|---|---|---|
| Heat / diffusion | $u_t = \alpha^2u_{xx}$ | 1 IC $u(x,0) = f(x)$, 2 BCs | temperature in a rod |
| Wave | $u_{tt} = c^2u_{xx}$ | 2 ICs $u(x,0) = f$, $u_t(x,0) = g$, 2 BCs | vibrating string |
| Laplace | $u_{xx} + u_{yy} = 0$ | BCs only | steady-state temperature |

Number of ICs = order of the time derivative.
Variants you may see: advection $u_t + cu_x = 0$, convection-diffusion $u_t + cu_x = Du_{xx}$, and wave equations with extra $u_t$ or $u_x$ terms. Numerically they're all handled the same way ([[09 Numerical Methods for PDEs]]).

## Boundary conditions (at $x = 0$ or $x = L$)

| Type | Form | Heat meaning | Wave meaning |
|---|---|---|---|
| Dirichlet | $u =$ given | fixed temperature | fixed end |
| Neumann | $u_x =$ given | $u_x = 0$: insulated end | $u_x = 0$: free end |
| Robin | $au + bu_x =$ given | heat loss to the surroundings | elastic support |

Separation of variables needs ==homogeneous== BCs (right side $= 0$).

## Quick facts
- **Steady state** of the heat equation: set $u_t = 0$, so $u_{xx} = 0$ and $u = Ax + B$. With $u(0) = T_1$ and $u(L) = T_2$: $u = T_1 + (T_2 - T_1)\frac xL$.
- **Checking a solution**: plug it in. E.g. $u = e^{-\alpha^2k^2t}\sin kx$ solves the heat equation because $u_t = -\alpha^2k^2u = \alpha^2u_{xx}$.
- Heat solutions decay and smooth out over time. Wave solutions keep oscillating.

## Good to know (may not be tested on MT1)
- **Classification** of $Au_{xx} + Bu_{xy} + Cu_{yy} + \dots = 0$: $B^2 - 4AC < 0$ elliptic (Laplace), $= 0$ parabolic (heat), $> 0$ hyperbolic (wave).
- **D'Alembert** (on the formula sheet), for the wave equation on the whole line: $u = \frac12\big[f(x+ct) + f(x-ct)\big] + \frac1{2c}\int_{x-ct}^{x+ct}g(s)\,ds$.
