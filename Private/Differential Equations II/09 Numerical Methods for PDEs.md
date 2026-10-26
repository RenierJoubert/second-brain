#math #math316 #PDEs

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

> [!warning] Traps
> - Sign errors when moving terms across; regroup the coefficients carefully.
> - Saying "second order" without saying "in space" or "in time".
> - For hand calculations, compute $s$ first and only evaluate the grid points you actually need.
