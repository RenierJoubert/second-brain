#math #DifferentialEquationsII #PDEs

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

## Deriving the equations (L9–11)
Every derivation has the same two ingredients:
1. A **conservation law** over a small slab $[x, x + \Delta x]$ during a time $\Delta t$: the change inside equals the flux in minus the flux out. Divide by $\Delta x\,\Delta t$ and let both go to $0$.
2. A **constitutive law** that says how the flux depends on $u$.

| Model | Conservation | Constitutive law | Result |
|---|---|---|---|
| Heat in a bar | $\rho c\,u_t + q_x = 0$ | Fourier: $q = -ku_x$ | $u_t = \alpha^2u_{xx}$, $\ \alpha^2 = \frac{k}{\rho c}$ |
| Traffic | $u_t + q_x = 0$ | $q = cu$ | $u_t + cu_x = 0$ |
| Cautious traffic | $u_t + q_x = 0$ | $q = cu - Du_x$ | $u_t + cu_x = Du_{xx}$ |
| Elastic bar | Newton: $\sigma_x = \rho u_{tt}$ | Hooke: $\sigma = Eu_x$ | $u_{tt} = c^2u_{xx}$, $\ c = \sqrt{E/\rho}$ |
| Porous flow | Mass: $u_x + v_y = 0$ | Darcy: $u = -Kh_x$, $v = -Kh_y$ | $h_{xx} + h_{yy} = 0$ |

- Heat flows from hot to cold, which is where the minus sign in Fourier's law comes from.
- **Units check:** every term must have the same units. $[\alpha^2] = \frac{\text{m}^2}{\text{s}}$, and in $q = cu - Du_x$, $[D] = \frac{L^2}{T}$.

## Dispersion relations
For a linear PDE with constant coefficients, try $u = e^{ikx + \sigma t}$ ($k$ is the wavenumber) and solve for $\sigma$.

| PDE | $\sigma$ | Solution | Meaning |
|---|---|---|---|
| $u_t = \alpha^2u_{xx}$ | $-\alpha^2k^2$ | $e^{ikx}e^{-\alpha^2k^2t}$ | decays; ==higher $k$ decays faster== |
| $u_t + cu_x = 0$ | $-ick$ | $e^{ik(x - ct)}$ | moves right at speed $c$ |
| $u_t + cu_x = Du_{xx}$ | $-ick - Dk^2$ | $e^{ik(x - ct)}e^{-Dk^2t}$ | moves right and decays |
| $u_{tt} = c^2u_{xx}$ | $\pm ick$ | $e^{ik(x \mp ct)}$ | waves moving both ways |

- With a real exponent $e^{kx + \sigma t}$, the heat equation gives $\sigma = +\alpha^2k^2$, which blows up, so it isn't physical. That's why the $x$-part has to oscillate.
- By the chain rule, any $f(x - ct)$ solves $u_t + cu_x = 0$: a fixed shape moving right. $u_t - cu_x = 0$ gives $f(x + ct)$, moving left.
- In the frame moving with the wave, $z = x - ct$, convection–diffusion becomes pure diffusion: $U_t = DU_{zz}$.
- The wave operator factors as $(\partial_t + c\partial_x)(\partial_t - c\partial_x)u = 0$, so $u = f(x - ct) + g(x + ct)$.
