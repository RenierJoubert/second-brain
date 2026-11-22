#math #DifferentialEquationsII #PDEs

# Numerical Methods for PDEs (Finite Differences)

Replace each derivative with a difference quotient on a grid ($x_i = i\Delta x$, $t_n = n\Delta t$), then march forward in time.

## Taylor expansions (printed on the exam)
$$
\begin{align}
f(x + \Delta x) &= f(x) + f'(x)\Delta x + \frac{f''(x)}{2!}\Delta x^2 + \frac{f'''(x)}{3!}\Delta x^3 + O(\Delta x^4) && \text{(I)} \\
f(x - \Delta x) &= f(x) - f'(x)\Delta x + \frac{f''(x)}{2!}\Delta x^2 - \frac{f'''(x)}{3!}\Delta x^3 + O(\Delta x^4) && \text{(II)}
\end{align}
$$

## The four formulas

| Derivative | Formula | Error | From |
|---|---|---|---|
| $f'$ forward | $\dfrac{f(x+\Delta x) - f(x)}{\Delta x}$ | $O(\Delta x)$ | (I) |
| $f'$ backward | $\dfrac{f(x) - f(x-\Delta x)}{\Delta x}$ | $O(\Delta x)$ | (II) |
| $f'$ centred | $\dfrac{f(x+\Delta x) - f(x-\Delta x)}{2\Delta x}$ | $O(\Delta x^2)$ | (I) − (II) |
| $f''$ centred | $\dfrac{f(x+\Delta x) - 2f(x) + f(x-\Delta x)}{\Delta x^2}$ | $O(\Delta x^2)$ | (I) + (II) |

==Derive these on the exam.== For example, (I) − (II):
$$
f(x+\Delta x) - f(x-\Delta x) = 2f'(x)\Delta x + O(\Delta x^3) \implies f'(x) = \frac{f(x+\Delta x) - f(x-\Delta x)}{2\Delta x} + O(\Delta x^2)
$$
and (I) + (II): $f(x+\Delta x) + f(x-\Delta x) = 2f(x) + f''(x)\Delta x^2 + O(\Delta x^4)$, then solve for $f''$ and divide by $\Delta x^2$.
The same formulas work in time with $\Delta t$.

## Exam workflow
1. Write (I) and (II), and derive each formula you need along with its error.
2. Substitute into the PDE term by term ($u_t$, $u_{tt}$, $u_x$, $u_{xx}$).
3. ==Solve for the newest time level== $u(x, t+\Delta t)$, grouping the coefficients of $u(x+\Delta x, t)$, $u(x,t)$ and $u(x-\Delta x, t)$.
4. **Order of accuracy**: give it separately for time and space. Each is the lowest order among the formulas used for that variable.
5. **Explain the time stepping** in words (below).

## Example: heat equation $u_t = \alpha^2u_{xx}$
Forward in time, centred in space:
$$
\frac{u(x, t+\Delta t) - u(x,t)}{\Delta t} = \alpha^2\,\frac{u(x+\Delta x, t) - 2u(x,t) + u(x-\Delta x, t)}{\Delta x^2}
$$
$$
\boxed{u(x, t+\Delta t) = s\,u(x+\Delta x, t) + (1 - 2s)\,u(x,t) + s\,u(x-\Delta x, t), \qquad s = \frac{\alpha^2\Delta t}{\Delta x^2}}
$$
- Accuracy: $O(\Delta t)$ in time, $O(\Delta x^2)$ in space.
- Stability: this explicit scheme only works well if $s \leq \frac12$. Otherwise errors grow each step.

**How to march:**
1. At $t = 0$, the IC gives $u(x_i, 0) = f(x_i)$ at every grid point.
2. Apply the formula at each interior point to get $u(x_i, \Delta t)$. The BCs give the values at the ends.
3. Repeat for $t = 2\Delta t, 3\Delta t, \dots$

## Second derivative in time (wave-type equations)
A centred $u_{tt}$ uses $u(x, t+\Delta t)$, $u(x,t)$ ==and $u(x, t-\Delta t)$==, so the scheme needs ==two previous time levels==. To start, use $u(x,0) = f(x)$ and get the first step from the velocity IC, e.g. $u(x, \Delta t) \approx f(x) + \Delta t\,g(x)$.

## First derivative in space (terms like $cu_x$)
- Centred: $O(\Delta x^2)$.
- One-sided (forward or backward): $O(\Delta x)$. This drops the whole scheme to first order in space.

Either one is acceptable. Say which you chose and what order it gives.

## Stability
The explicit heat scheme amplifies errors unless
$$
s = \frac{\alpha^2\Delta t}{\Delta x^2} \leq \frac12 \qquad\Longleftrightarrow\qquad \Delta t \leq \frac{\Delta x^2}{2\alpha^2}
$$
So halving $\Delta x$ forces $\Delta t$ down by a factor of 4.

**A4 P4.** $u_t = u_{xx}$ on $(0, \pi)$ with $u = 0$ at both ends and $u(x,0) = \sin x + \sin3x$. Take one step with $\Delta x = \frac{\pi}{10}$, $\Delta t = 0.1$:
- Exact: $u(\frac\pi2, 0.1) = e^{-0.1} - e^{-0.9} \approx 0.498$.
- Scheme: $s = \frac{10}{\pi^2} \approx 1.01$. We have $u(\frac\pi2, 0) = 0$, and both neighbours equal $\sin\frac{2\pi}{5} - \sin\frac\pi5 \approx 0.363$, so the scheme gives $2s(0.363) \approx 0.736$.
- That's way off: $s > \frac12$ breaks stability, and one big step of an $O(\Delta t)$ scheme is inaccurate anyway.

## Convection–diffusion (A4 P3)
$u_t + cu_x = Du_{xx}$, forward in time and centred in space. With $s = \frac{D\Delta t}{\Delta x^2}$ and $p = \frac{c\Delta t}{2\Delta x}$:
$$
u(x, t + \Delta t) = (s + p)\,u(x - \Delta x, t) + (1 - 2s)\,u(x, t) + (s - p)\,u(x + \Delta x, t)
$$
This is $O(\Delta t)$ in time and $O(\Delta x^2)$ in space. An upwind (backward) difference for $u_x$ drops space to $O(\Delta x)$.

## Wave equation scheme (L12)
Centred in both time and space, with Courant number $r = \frac{c\Delta t}{\Delta x}$:
$$
u_n^{k+1} = r^2u_{n+1}^k + 2(1 - r^2)u_n^k + r^2u_{n-1}^k - u_n^{k-1}
$$
- **Starting it:** the scheme uses three time levels. Rather than the rough start $f + \Delta t\,g$, L12 centres the velocity IC, $\frac{u_n^1 - u_n^{-1}}{2\Delta t} = g_n$, solves for the ghost value $u_n^{-1}$, and substitutes into the scheme at $k = 0$:
$$
u_n^1 = \tfrac12\left[r^2u_{n+1}^0 + 2(1 - r^2)u_n^0 + r^2u_{n-1}^0\right] + \Delta t\,g_n
$$
- Stable iff $r \leq 1$, i.e. $\Delta t \leq \frac{\Delta x}{c}$. Second order in both time and space.

## Laplace's equation (L12)
With $\Delta x = \Delta y$, the 5-point stencil says each interior value is the ==average of its four neighbours==:
$$
u_{n,m} = \tfrac14\big(u_{n-1,m} + u_{n+1,m} + u_{n,m-1} + u_{n,m+1}\big)
$$
There's no time to march in, so solve by **Jacobi iteration**. Start from a guess. Each sweep, replace every interior value by the average of its neighbours from the previous sweep, keeping the boundary values fixed. Stop when the RMS change $E = \big[\frac{1}{MN}\sum(u^{k+1} - u^k)^2\big]^{1/2}$ is small.

## Matrix form
Written for all nodes at once, the heat scheme is $\mathbf u^{k+1} = A\mathbf u^k$, where $A$ is tridiagonal with rows $s,\ 1 - 2s,\ s$. The first and last rows are $(1, 0, \dots)$ and $(\dots, 0, 1)$, so the Dirichlet boundary values carry over unchanged.

> [!warning] Traps
> - Sign errors when moving terms across; regroup the coefficients carefully.
> - Saying "second order" without saying "in space" or "in time".
> - For hand calculations, compute $s$ first and only evaluate the grid points you actually need.
