#math #DifferentialEquationsII #PDEs

# Fourier Coefficients

At $t = 0$ a separated solution becomes $f(x) = \sum c_nX_n(x)$. Finding the $c_n$ is a projection, just like finding the components of a vector in an orthogonal basis.

> [!tip] On the formula sheet
> The full series on $[-L, L]$, the sine and cosine series on $[0, L]$ (with their coefficients), and the Sturm–Liouville expansion $c_n = \frac{\int f\phi_nr}{\int\phi_n^2r}$. Use that last one with $r = 1$ for mixed BCs, which don't get a formula of their own.

## One formula for everything
$$
c_n = \frac{\langle f, X_n\rangle}{\langle X_n, X_n\rangle} = \frac{\int f\,X_n\,dx}{\int X_n^2\,dx}
$$
**Why it works:** multiply $f = \sum c_mX_m$ by $X_n$ and integrate. Orthogonality kills every term with $m \neq n$ ([[Orthogonality]]), which leaves $\int fX_n = c_n\int X_n^2$. ==Write this step out if a question says "derive the coefficients".==

It's the same idea as for vectors: if $\mathbf f = \sum\alpha_k\mathbf v_k$ and the $\mathbf v_k$ are orthogonal, then $\alpha_k = \frac{\mathbf f\cdot\mathbf v_k}{\mathbf v_k\cdot\mathbf v_k}$. The integral plays the role of the dot product.

The denominators you'll need:

| $X_n$ | Interval | $\int X_n^2$ |
|---|---|---|
| $\sin$, $\cos$ ($n \geq 1$), quarter-wave $\sin$ or $\cos$ | $[0, L]$ | $\frac L2$ |
| $1$ | $[0, L]$ | $L$ |
| $\sin$, $\cos$ ($n \geq 1$) | $[-L, L]$ | $L$ |
| $1$ | $[-L, L]$ | $2L$ |

## The resulting formulas
| Series | Expansion | Coefficients |
|---|---|---|
| Sine on $[0, L]$ | $\sum b_n\sin\frac{n\pi x}{L}$ | $b_n = \frac2L\int_0^Lf\sin\frac{n\pi x}{L}\,dx$ |
| Cosine on $[0, L]$ | $\frac{a_0}{2} + \sum a_n\cos\frac{n\pi x}{L}$ | $a_n = \frac2L\int_0^Lf\cos\frac{n\pi x}{L}\,dx$, $\ n \geq 0$ |
| Full on $[-L, L]$ | $\frac{a_0}{2} + \sum\big(a_n\cos\frac{n\pi x}{L} + b_n\sin\frac{n\pi x}{L}\big)$ | $a_n = \frac1L\int_{-L}^Lf\cos\frac{n\pi x}{L}\,dx$, $\ b_n = \frac1L\int_{-L}^Lf\sin\frac{n\pi x}{L}\,dx$ |
| Quarter-wave on $[0, L]$ | $\sum c_n\sin\mu_nx$ or $\sum c_n\cos\mu_nx$ | $c_n = \frac2L\int_0^Lf\sin\mu_nx\,dx$ (or $\cos$) |

- $\frac{a_0}{2}$ is ==the average of $f$==. Writing the constant as $\frac{a_0}{2}$ lets the $a_n$ formula cover $n = 0$ too.
- For the full series you can integrate over any interval of length $2L$, e.g. $[0, 2L]$.

## Shortcuts
- **IC already built from eigenfunctions:** just match coefficients, no integrals. For example, $f = 3\sin2x - \sin5x$ with sine modes on $(0, \pi)$ gives $b_2 = 3$ and $b_5 = -1$.
- **Even or odd $f$ on $[-L, L]$:** if $f$ is even, all $b_n = 0$; if $f$ is odd, all $a_n = 0$. (even·odd is odd, and $\int_{-L}^L\text{odd} = 0$.)
- **Piecewise $f$:** split the integral wherever the formula for $f$ changes, and skip any piece where $f = 0$.

## Integrals you'll need
**Antiderivatives**, for when the limits aren't $0$ and $L$ (e.g. a piecewise $f$ that's nonzero only on $[\frac L2, L]$):
$$
\int x\sin ax\,dx = -\frac{x\cos ax}{a} + \frac{\sin ax}{a^2}, \qquad \int x\cos ax\,dx = \frac{x\sin ax}{a} + \frac{\cos ax}{a^2}
$$
**Product-to-sum**, for when $f$ is a sine or cosine that isn't in your family. These follow from the sum formulas on the formula sheet:
$$
\sin A\cos B = \tfrac12\big[\sin(A + B) + \sin(A - B)\big], \quad \sin A\sin B = \tfrac12\big[\cos(A - B) - \cos(A + B)\big], \quad \cos A\cos B = \tfrac12\big[\cos(A - B) + \cos(A + B)\big]
$$

**Definite integrals** with $a = \frac{n\pi}{L}$ on $[0, L]$ (by parts; all checked numerically):

| Integral | Value |
|---|---|
| $\int_0^L\sin ax\,dx$ | $\frac{L(1 - (-1)^n)}{n\pi}$ |
| $\int_0^L\cos ax\,dx$ | $0$ |
| $\int_0^Lx\sin ax\,dx$ | $\frac{L^2(-1)^{n+1}}{n\pi}$ |
| $\int_0^Lx\cos ax\,dx$ | $\frac{L^2((-1)^n - 1)}{(n\pi)^2}$ |
| $\int_0^Lx^2\cos ax\,dx$ | $\frac{2L^3(-1)^n}{(n\pi)^2}$ |

**Quarter-wave**, with $\mu = \frac{(2n-1)\pi}{2L}$: $\int_0^L\sin\mu x = \frac1\mu$, $\ \int_0^L\cos\mu x = \frac{(-1)^{n+1}}{\mu}$, $\ \int_0^Lx\sin\mu x = \frac{(-1)^{n+1}}{\mu^2}$, $\ \int_0^Lx\cos\mu x = \frac{L(-1)^{n+1}}{\mu} - \frac{1}{\mu^2}$.

**Values:** $\cos n\pi = (-1)^n$. $1 - (-1)^n$ is $0$ for even $n$ and $2$ for odd $n$. $\sin\frac{n\pi}{2}$ runs $1, 0, -1, 0, \dots$ $\ \sin\frac{(2n-1)\pi}{2} = (-1)^{n+1}$ and $\cos\frac{(2n-1)\pi}{2} = 0$.

## Worked example: insulated bar (L15)
$u_t = \alpha^2u_{xx}$, $u_x(0,t) = u_x(1,t) = 0$, $u(x,0) = x$.
1. Neumann with $L = 1$: $X_n = \cos n\pi x$, $n \geq 0$.
2. $a_0 = 2\int_0^1x\,dx = 1$, so the average is $\frac12$.
3. $a_n = 2\int_0^1x\cos n\pi x\,dx = \frac{2((-1)^n - 1)}{(n\pi)^2}$. That's $-\frac{4}{(n\pi)^2}$ for odd $n$ and $0$ for even $n$.
$$
u = \frac12 - \frac{4}{\pi^2}\sum_{k\geq0}\frac{e^{-\alpha^2(2k+1)^2\pi^2t}}{(2k+1)^2}\cos(2k+1)\pi x
$$
As $t \to \infty$, $u \to \frac12$: an insulated bar settles at the average of its initial temperature.

## Worked example: an IC that isn't an eigenfunction (A5 P4)
$u_t = 3u_{xx}$ on $(0, \pi)$, $u(0,t) = u_x(\pi,t) = 0$, $u(x,0) = \sin x + \sin\frac{3x}{2}$.
1. Mixed A: $X_n = \sin\mu_nx$ with $\mu_n = \frac{2n-1}{2}$. So $\sin\frac{3x}{2}$ is the $n = 2$ mode, but ==$\sin x$ is not in the family==.
2. Project $\sin x$. Using product-to-sum, $\int_0^\pi\sin x\sin\mu_nx\,dx = \frac{(-1)^{n+1}}{1 - \mu_n^2}$, so its coefficients are $\frac2\pi\cdot\frac{(-1)^{n+1}}{1 - \mu_n^2} = \frac{8(-1)^{n+1}}{\pi(3-2n)(2n+1)}$.
$$
u = \sum_{n\geq1}\left[\frac{8(-1)^{n+1}}{\pi(3-2n)(2n+1)} + \delta_{n2}\right]e^{-3\mu_n^2t}\sin\mu_nx
$$
($\delta_{n2}$ is $1$ when $n = 2$ and $0$ otherwise.)

> [!example]- Series worth recognizing
> - Sine series of $x$: $x = \sum\frac{2L(-1)^{n+1}}{n\pi}\sin\frac{n\pi x}{L}$
> - Cosine series of $x$: $x = \frac L2 - \frac{4L}{\pi^2}\sum_{k\geq0}\frac{1}{(2k+1)^2}\cos\frac{(2k+1)\pi x}{L}$
> - Sine series of $1$: $1 = \frac4\pi\sum_{n\text{ odd}}\frac1n\sin\frac{n\pi x}{L}$
> - Triangle ($x$ on $[0, \frac L2]$, $L - x$ on $[\frac L2, L]$, A5 P5): $b_n = \frac{4L}{n^2\pi^2}\sin\frac{n\pi}{2}$
> - Full series of $x^2$ on $(-\pi, \pi)$: $x^2 = \frac{\pi^2}{3} + 4\sum\frac{(-1)^n}{n^2}\cos nx$
> - From A5: $\cos\frac{\pi x}{L} = \frac8\pi\sum_{k\geq1}\frac{k}{4k^2 - 1}\sin\frac{2k\pi x}{L}$ and $\sin\frac{\pi x}{L} = \frac2\pi - \frac4\pi\sum_{k\geq1}\frac{1}{4k^2 - 1}\cos\frac{2k\pi x}{L}$

> [!warning] Traps
> - The prefactor is $\frac2L$ on $[0, L]$ but $\frac1L$ on $[-L, L]$.
> - The constant term is $\frac{a_0}{2}$, not $a_0$.
> - For $n \geq 1$, $\int_0^L\cos\frac{n\pi x}{L}\,dx = 0$, but the quarter-wave $\int_0^L\cos\mu x\,dx = \frac{(-1)^{n+1}}{\mu}$ is not zero.
> - If a formula has a denominator like $n^2 - 1$, work out $n = 1$ separately (HW5).
