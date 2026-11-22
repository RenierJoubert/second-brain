#math #DifferentialEquationsII #PDEs

# Eigenfunction Expansions (Time-Dependent Sources)

When the source depends on $t$, there's no steady state to absorb it. Instead, expand ==everything== in the eigenfunctions and solve one ODE per mode. The problem looks like
$$
v_t = \alpha^2v_{xx} + F(x,t), \qquad \text{homogeneous BCs}, \qquad v(x,0) = g(x)
$$
If the BCs aren't homogeneous yet, subtract a $w$ first ([[15 Inhomogeneous Boundary Conditions]] or [[18 Time-Dependent Boundary Conditions]]).

## Workflow
1. **Eigenfunctions** $X_n$ and $\mu_n$ from the homogeneous BCs ([[11 Standard Eigenvalue Problems]]).
2. **Expand the source.** At each fixed $t$, $F(x,t) = \sum F_n(t)X_n(x)$ with
$$
F_n(t) = \frac{\int F(x,t)\,X_n\,dx}{\int X_n^2\,dx}
$$
3. **Expand the IC:** $g = \sum c_nX_n$.
4. **Guess** $v = \sum T_n(t)X_n(x)$ with unknown $T_n$. This satisfies the BCs automatically.
5. **Substitute.** $v_t = \sum T_n'X_n$ and $v_{xx} = \sum T_nX_n'' = -\sum\mu_n^2T_nX_n$, so
$$
\sum_n\big[T_n' + \alpha^2\mu_n^2T_n - F_n(t)\big]X_n(x) = 0
$$
The $X_n$ are linearly independent, so ==each bracket must be zero==:
$$
\boxed{T_n' + \alpha^2\mu_n^2T_n = F_n(t), \qquad T_n(0) = c_n}
$$
6. **Solve** each ODE (next section) and put the $T_n$ back into $v = \sum T_nX_n$.

Compare with plain separation of variables: there $F = 0$ and $T_n = c_ne^{-\alpha^2\mu_n^2t}$. The source just adds a forced part to each mode.

## Solving $T' + kT = F(t)$ with $T(0) = c$
Multiply by the integrating factor $e^{kt}$ (refresher: [[1.4 The Integrating Factor]]) to get $(e^{kt}T)' = e^{kt}F$, then integrate from $0$ to $t$:
$$
T(t) = c\,e^{-kt} + \int_0^te^{-k(t-s)}F(s)\,ds
$$
Common cases (checked numerically):

| $F(t)$ | $T(t)$ |
|---|---|
| $A$ | $\frac Ak + \left(c - \frac Ak\right)e^{-kt}$ |
| $Ae^{-bt}$, with $b \neq k$ | $\frac{A}{k - b}\left(e^{-bt} - e^{-kt}\right) + ce^{-kt}$ |
| $Ae^{bt}$ | $\frac{A}{k + b}\left(e^{bt} - e^{-kt}\right) + ce^{-kt}$ |
| $At$ | $A\left(\frac tk - \frac{1 - e^{-kt}}{k^2}\right) + ce^{-kt}$ |
| $Ae^{-kt}$ (resonance) | $(At + c)e^{-kt}$ |
| anything, with $k = 0$ (the $n = 0$ mode) | $c + \int_0^tF(s)\,ds$ |

- For a sum of forcings, add the forced parts. The $ce^{-kt}$ term appears only once.
- An exam saying "assume $\beta$ is not an integer" is ruling out resonance.

## The single-mode shortcut
Exam sources are usually one eigenfunction times a function of $t$, like $e^{-2t}\sin5\pi x$. Then $F_n = e^{-2t}\delta_{n5}$ ($\delta_{n5}$ is $1$ when $n = 5$, else $0$). Only mode 5 is forced, and the only other modes that appear are the ones with $c_n \neq 0$. ==Check that the given function really is in your family==, i.e. that its frequency is on your $\mu_n$ list.

## Worked example (L21)
$u_t = \alpha^2u_{xx} + xt$ on $(0, \frac\pi2)$, $u(0,t) = 0$, $u_x(\frac\pi2, t) = 0$, $u(x,0) = x$.
1. Mixed A on $(0, \frac\pi2)$: $X_n = \sin(2n-1)x$, so $\mu_n = 2n - 1$.
2. **Source:** $F_n(t) = t\cdot\frac{2}{\pi/2}\int_0^{\pi/2}x\sin(2n-1)x\,dx = A_n\,t$, where $A_n = \frac{4(-1)^{n+1}}{\pi(2n-1)^2}$.
3. **IC:** $x$ has the same coefficients (just without the $t$), so $c_n = A_n$.
4. **Mode ODE:** $T_n' + k_nT_n = A_nt$ with $T_n(0) = A_n$ and $k_n = \alpha^2(2n-1)^2$. The $At$ row of the table gives
$$
u = \sum_{n\geq1}A_n\left[\frac{t}{k_n} - \frac{1 - e^{-k_nt}}{k_n^2} + e^{-k_nt}\right]\sin(2n-1)x
$$

> [!warning] Traps
> - Forgetting $T_n(0) = c_n$, which drops the homogeneous part $c_ne^{-kt}$.
> - Expanding the source in the wrong eigenfunctions. Use the same $X_n$ as for $v$.
> - Skipping the justification for going from $\sum[\dots]X_n = 0$ to "each bracket is $0$". Write "by linear independence (orthogonality) of the $X_n$".
