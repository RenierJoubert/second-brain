#math #DifferentialEquationsII

# Orthogonality

Orthogonality is why Fourier coefficients have simple formulas: it lets a single integral pick one coefficient out of an infinite sum.

## The idea
For vectors, $\mathbf u\cdot\mathbf v = \sum u_iv_i$, and perpendicular means $\mathbf u\cdot\mathbf v = 0$. For functions, the dot product becomes an integral: multiply the two functions point by point and add up.
$$
\langle f, g\rangle = \int_a^bf(x)\,g(x)\,dx
$$
$f$ and $g$ are **orthogonal** on $[a, b]$ when $\langle f, g\rangle = 0$.

## The facts
For whole numbers $m, n \geq 1$:

| Integral of | On $[0, L]$ | On $[-L, L]$ |
|---|---|---|
| $\sin\frac{m\pi x}{L}\sin\frac{n\pi x}{L}$ | $0$ if $m \neq n$; $\frac L2$ if $m = n$ | $0$ if $m \neq n$; $L$ if $m = n$ |
| $\cos\frac{m\pi x}{L}\cos\frac{n\pi x}{L}$ | $0$ if $m \neq n$; $\frac L2$ if $m = n$ | $0$ if $m \neq n$; $L$ if $m = n$ |
| $1\cdot\cos\frac{n\pi x}{L}$ | $0$ | $0$ |
| $1\cdot1$ (the $n = 0$ cosine) | $L$ | $2L$ |
| $\sin\frac{m\pi x}{L}\cos\frac{n\pi x}{L}$ | ==not always $0$== | $0$ for all $m, n$ |

The quarter-wave functions ($\sin$ or $\cos$ of $\frac{(2n-1)\pi x}{2L}$, from mixed BCs) are also orthogonal on $[0, L]$, with $\int_0^LX_n^2\,dx = \frac L2$.

## Why it's true
Use the product-to-sum identity, which follows from the sum formulas on the formula sheet:
$$
\sin A\sin B = \tfrac12\big[\cos(A - B) - \cos(A + B)\big]
$$
For $m \neq n$:
$$
\int_0^L\sin\tfrac{m\pi x}{L}\sin\tfrac{n\pi x}{L}\,dx = \tfrac12\int_0^L\Big[\cos\tfrac{(m-n)\pi x}{L} - \cos\tfrac{(m+n)\pi x}{L}\Big]dx = 0
$$
because $\int_0^L\cos\frac{k\pi x}{L}\,dx = \frac{L}{k\pi}\sin k\pi = 0$ for any whole number $k \neq 0$.

For $m = n$, use $\sin^2t = \frac12(1 - \cos2t)$ (on the sheet). The cosine part integrates to $0$, leaving $\frac L2$.

The cosine facts work the same way with $\cos A\cos B = \frac12[\cos(A - B) + \cos(A + B)]$. On $[-L, L]$, $\sin\cdot\cos$ is an odd function, so its integral is $0$.

**The deeper reason:** these functions are eigenfunctions of a symmetric operator (Sturm–Liouville property (1) on the formula sheet), just as eigenvectors of a symmetric matrix are orthogonal. So every eigenvalue problem in this course has orthogonal eigenfunctions, not just the sines and cosines (property (3)).

## Use 1: finding coefficients
Suppose $f = \sum_mc_mX_m$, where the $X_m$ are orthogonal. To find one coefficient $c_n$:
1. Multiply both sides by $X_n$.
2. Integrate over the interval.
3. Orthogonality kills every term with $m \neq n$, so the infinite sum collapses to a single term: $\int fX_n = c_n\int X_n^2$.
$$
c_n = \frac{\langle f, X_n\rangle}{\langle X_n, X_n\rangle} = \frac{\int f\,X_n\,dx}{\int X_n^2\,dx}
$$
Every coefficient formula comes from this:
- **Sine series:** $\frac2L\int_0^L$, because $\int_0^LX_n^2 = \frac L2$.
- **Full series:** $\frac1L\int_{-L}^L$, because $\int_{-L}^LX_n^2 = L$.
- **Sturm–Liouville expansion** on the formula sheet: the same formula with a weight $r(x)$.

It's vector projection: $\alpha_k = \frac{\mathbf f\cdot\mathbf v_k}{\mathbf v_k\cdot\mathbf v_k}$.

## Use 2: the shortcut
If $f$ is already a sum of eigenfunctions, the coefficients are just the numbers in front.

**Example.** Sine modes on $(0, \pi)$ with $f = \sin x + \sin3x$. Split $b_n = \frac2\pi\int_0^\pi(\sin x + \sin3x)\sin nx\,dx$ into two integrals. Each is zero unless the frequencies match, so $b_1 = 1$, $b_3 = 1$, and every other $b_n = 0$. On an exam, "by orthogonality, $b_1 = b_3 = 1$ and all other $b_n = 0$" is enough.

**Checklist before using the shortcut:**
1. Every term of $f$ is in your eigenfunction family, i.e. its frequency is on your list of $\mu_n$.
2. You're integrating over the interval the family is defined on.
3. You've split $f$ into separate terms first (integrals are linear), then applied the rule to each.

## When you can't use the shortcut
If a term isn't in the family, orthogonality tells you nothing about it. You have to integrate, and the term usually spreads across infinitely many modes.

| $f$ | Family | Why the shortcut fails | What to do |
|---|---|---|---|
| $x$, $x^2$, … | any | not a sine or cosine | integrate by parts |
| $1$ | sines on $[0, L]$ | the constant belongs to the cosine family, not the sine family | $b_n = \frac2L\int_0^L\sin\frac{n\pi x}{L}\,dx = \frac{2(1 - (-1)^n)}{n\pi}$ |
| $\sin x$ | $\sin\frac{(2n-1)x}{2}$ on $(0, \pi)$ (mixed BCs) | frequency $1$ isn't on the list $\frac12, \frac32, \frac52, \dots$ | product-to-sum, then integrate |
| $\cos2x$ | sines on $(0, \pi)$ | wrong kind of function | integrate |

**Contrast:** with cosine modes (insulated ends), $f = 3 + \cos2x$ *is* built from the family, since $1$ is the $n = 0$ mode. So $\frac{a_0}{2} = 3$, $a_2 = 1$, and every other coefficient is $0$.

## Other places orthogonality shows up
- **Eigenfunction expansions** ([[17 Eigenfunction Expansions]]): going from $\sum[T_n' + kT_n - F_n]X_n = 0$ to "each bracket is $0$" is the same multiply-and-integrate step.
- **Parseval** ([[14 Parseval and Complex Fourier Series]]): when you square a series and integrate, orthogonality kills the cross terms.

> [!warning] Traps
> - Using the wrong denominator: $\frac L2$ on $[0, L]$, $L$ on $[-L, L]$, and $L$ or $2L$ for the constant.
> - $\sin$ and $\cos$ are orthogonal on the full interval $[-L, L]$, but not on $[0, L]$. For example, $\int_0^\pi\sin x\cos2x\,dx = -\frac23$.
> - The same frequency doesn't give zero: $\int_0^\pi\sin^2x\,dx = \frac\pi2$.
> - Matching coefficients only works after you've checked that every term is in the family.
