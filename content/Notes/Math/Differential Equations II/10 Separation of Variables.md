#math #math316 #PDEs

# Separation of Variables

Guess $u(x,t) = X(x)T(t)$, split the PDE into two ODEs, solve an eigenvalue problem for $X$, then add up all the solutions to match the IC.

## Can the PDE be separated?
Sub $u = XT$ (or $X(x)Y(y)$) and try to divide so that ==one side depends only on $x$ and the other only on $t$==. If that works, both sides equal a constant $-\lambda$.
- $u_t = u_{xx} + (x + t)u$: $\frac{T'}{T} - t = \frac{X''}{X} + x = -\lambda$ ✓ (a sum of an $x$-only part and a $t$-only part is fine)
- $u_t = u_{xx} + xt\,u$: $\frac{T'}{T} = \frac{X''}{X} + xt$ ✗ (the product $xt$ can't be split)
- With three variables ($u = XYT$), separate twice and introduce two constants.

## Workflow: heat equation with Dirichlet BCs
$$
u_t = \alpha^2u_{xx}, \qquad u(0,t) = u(L,t) = 0, \qquad u(x,0) = f(x)
$$
1. **Separate:** $XT' = \alpha^2X''T$, so $\dfrac{T'}{\alpha^2T} = \dfrac{X''}{X} = -\lambda$.
2. **ODEs:** $X'' + \lambda X = 0$ and $T' + \alpha^2\lambda T = 0$.
3. **BCs on $X$:** $u(0,t) = X(0)T(t) = 0$ for all $t$, so $X(0) = 0$. Likewise $X(L) = 0$.
4. **Eigenvalue problem** (three cases, below): $\lambda_n = \left(\frac{n\pi}{L}\right)^2$, $X_n = \sin\frac{n\pi x}{L}$, $n = 1, 2, \dots$
5. **Solve for $T$:** $T_n = e^{-\alpha^2(n\pi/L)^2t}$.
6. **Superpose:**
$$
u(x,t) = \sum_{n=1}^\infty b_n\,e^{-\alpha^2(n\pi/L)^2t}\sin\frac{n\pi x}{L}
$$
7. **Apply the IC:** $f(x) = \sum b_n\sin\frac{n\pi x}{L}$. If $f$ is already a sum of sines, ==match coefficients==. Otherwise use the sine series formula (on the formula sheet):
$$
b_n = \frac2L\int_0^L f(x)\sin\frac{n\pi x}{L}\,dx
$$

**Example.** $L = \pi$, $\alpha^2 = 1$, $f(x) = 3\sin 2x - \sin 5x$. Matching gives $b_2 = 3$, $b_5 = -1$, and all other $b_n = 0$:
$$
u(x,t) = 3e^{-4t}\sin 2x - e^{-25t}\sin 5x
$$

**Wave equation:** $T'' + c^2\lambda T = 0$ gives $T_n = A_n\cos\frac{n\pi ct}{L} + B_n\sin\frac{n\pi ct}{L}$. Get $A_n$ from $u(x,0) = f$ and $B_n\frac{n\pi c}{L}$ from $u_t(x,0) = g$.

## Eigenvalue problems: show all three cases
$y'' + \lambda y = 0$, $y(0) = 0$, $y(L) = 0$. The characteristic equation is $r^2 = -\lambda$.

**Case $\lambda < 0$** ($\lambda = -\mu^2$, $\mu > 0$): $y = A\cosh\mu x + B\sinh\mu x$. $y(0) = A = 0$. $y(L) = B\sinh\mu L = 0$ and $\sinh\mu L \neq 0$, so $B = 0$. Only the trivial solution, so no eigenvalues.

**Case $\lambda = 0$:** $y = A + Bx$. $y(0) = A = 0$ and $y(L) = BL = 0$, so $B = 0$. Trivial, so no eigenvalue.

**Case $\lambda > 0$** ($\lambda = \mu^2$, $\mu > 0$): $y = A\cos\mu x + B\sin\mu x$. $y(0) = A = 0$. $y(L) = B\sin\mu L = 0$, and $B \neq 0$ requires $\mu L = n\pi$:
$$
\lambda_n = \left(\frac{n\pi}{L}\right)^2, \qquad y_n = \sin\frac{n\pi x}{L}, \qquad n = 1, 2, \dots
$$

> [!warning] Traps
> - $\lambda = \mu^2$, so $\lambda_n = +\left(\frac{n\pi}{L}\right)^2$. The posted 2023 midterm solution writes $\lambda_n = -(2n)^2$; that's a typo.
> - With a Neumann condition ($y' = 0$) at both ends, $\lambda = 0$ ==is== an eigenvalue with $y_0 = 1$. Always check $\lambda = 0$.
> - For a different ODE, split the cases on the ==discriminant==, not just the sign of $\lambda$. E.g. $y'' + 2y' + \lambda y = 0$ has $r = -1 \pm \sqrt{1 - \lambda}$, so the cases are $\lambda < 1$, $\lambda = 1$ and $\lambda > 1$.
> - For Euler-type problems like $x^2y'' + xy' + \lambda y = 0$, $r^2 + \lambda = 0$ gives the same three cases, but in terms of $\ln x$. E.g. $\lambda = \mu^2$ gives $A\cos(\mu\ln x) + B\sin(\mu\ln x)$.

> [!example]- Reference table for $y'' + \lambda y = 0$ on $(0, L)$ (use it to check answers)
> | BCs | $\lambda_n$ | $y_n$ | $n$ |
> |---|---|---|---|
> | $y(0) = 0$, $y(L) = 0$ | $\left(\frac{n\pi}{L}\right)^2$ | $\sin\frac{n\pi x}{L}$ | $1, 2, \dots$ |
> | $y'(0) = 0$, $y'(L) = 0$ | $\left(\frac{n\pi}{L}\right)^2$ | $\cos\frac{n\pi x}{L}$ | $0, 1, 2, \dots$ |
> | $y(0) = 0$, $y'(L) = 0$ | $\left(\frac{(2n-1)\pi}{2L}\right)^2$ | $\sin\frac{(2n-1)\pi x}{2L}$ | $1, 2, \dots$ |
> | $y'(0) = 0$, $y(L) = 0$ | $\left(\frac{(2n-1)\pi}{2L}\right)^2$ | $\cos\frac{(2n-1)\pi x}{2L}$ | $1, 2, \dots$ |

## Orthogonality of trig functions (basis functions)
The eigenfunctions $\sin\frac{n\pi x}{L}$ form a basis: any reasonable $f$ on $[0, L]$ can be written as a combination of them. They are orthogonal:
$$
\int_0^L\sin\frac{m\pi x}{L}\sin\frac{n\pi x}{L}\,dx = \begin{cases}0 & m \neq n \\ \frac L2 & m = n\end{cases}
\qquad
\int_0^L\cos\frac{m\pi x}{L}\cos\frac{n\pi x}{L}\,dx = \begin{cases}0 & m \neq n \\ \frac L2 & m = n \neq 0 \\ L & m = n = 0\end{cases}
$$
and on $[-L, L]$, $\int_{-L}^L\sin\frac{m\pi x}{L}\cos\frac{n\pi x}{L}\,dx = 0$ for all $m, n$.

**Proof idea:** use the product-to-sum identities (they follow from the sum formulas on the formula sheet)
$$
\sin A\sin B = \tfrac12\big[\cos(A - B) - \cos(A + B)\big], \qquad \cos A\cos B = \tfrac12\big[\cos(A - B) + \cos(A + B)\big]
$$
together with $\int_0^L\cos\frac{k\pi x}{L}\,dx = 0$ for any integer $k \neq 0$.

**Where the $b_n$ formula comes from:** multiply $f = \sum b_n\sin\frac{n\pi x}{L}$ by $\sin\frac{m\pi x}{L}$ and integrate over $[0, L]$. Orthogonality removes every term except $n = m$, leaving $\int_0^L f\sin\frac{m\pi x}{L}\,dx = b_m\frac L2$.
