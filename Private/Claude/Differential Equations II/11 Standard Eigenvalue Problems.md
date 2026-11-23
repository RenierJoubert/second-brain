#math #DifferentialEquationsII #PDEs

# Standard Eigenvalue Problems

Separating the heat equation $u_t = \alpha^2u_{xx}$ always produces the same spatial problem, $X'' + \mu^2X = 0$, plus two BCs. Only five kinds of BCs come up in this course, so it's worth knowing all five answers.

## The five problems
| BCs on $X$ | Physical setup | $\mu_n$ | $X_n$ | $n$ |
|---|---|---|---|---|
| $X(0) = X(L) = 0$ | both ends in ice (Dirichlet) | $\frac{n\pi}{L}$ | $\sin\mu_nx$ | $1, 2, \dots$ |
| $X'(0) = X'(L) = 0$ | both ends insulated (Neumann) | $\frac{n\pi}{L}$ | $1$ and $\cos\mu_nx$ | $0, 1, \dots$ |
| $X(-L) = X(L)$, $X'(-L) = X'(L)$ | thin ring (periodic) | $\frac{n\pi}{L}$ | $1$, $\cos\mu_nx$, $\sin\mu_nx$ | $0, 1, \dots$ |
| $X(0) = 0$, $X'(L) = 0$ | ice at $0$, insulated at $L$ (mixed A) | $\frac{(2n-1)\pi}{2L}$ | $\sin\mu_nx$ | $1, 2, \dots$ |
| $X'(0) = 0$, $X(L) = 0$ | insulated at $0$, ice at $L$ (mixed B) | $\frac{(2n-1)\pi}{2L}$ | $\cos\mu_nx$ | $1, 2, \dots$ |

Each mode decays like $T_n = e^{-\alpha^2\mu_n^2t}$, so
$$
u(x,t) = \sum_n c_n\,e^{-\alpha^2\mu_n^2t}\,X_n(x)
$$
The $c_n$ come from the IC ([[12 Fourier Coefficients]]).

## Reading the table without memorizing it
- **Sine or cosine?** Look at $x = 0$. $X(0) = 0$ needs sine, which vanishes there. $X'(0) = 0$ needs cosine, which is flat there.
- **Half waves or quarter waves?** If both ends are the same type, whole half-waves fit and $\mu_n = \frac{n\pi}{L}$. If the ends are different types, only odd numbers of quarter-waves fit, so $\mu_n = \frac{(2n-1)\pi}{2L}$. Check for mixed A: $X = \sin\mu x$ has $X'(L) = \mu\cos\mu L = 0$ exactly when $\mu L = \frac\pi2, \frac{3\pi}2, \dots$
- **Constant mode?** $X_0 = 1$ (i.e. $\mu = 0$) only survives when ==neither end is Dirichlet==: both Neumann, or periodic.
- **Periodic BCs** get both sines and cosines, because nothing fixes where the wave starts.

## Deriving one on the exam
"Find all eigenvalues" means showing all three cases ([[10 Separation of Variables]]). For these five problems:
- $\lambda < 0$: $X = A\cosh\mu x + B\sinh\mu x$, and the BCs always force $X = 0$, because cosh is never $0$ and sinh is only $0$ at $x = 0$ ([[Hyperbolic Functions]]).
- $\lambda = 0$: $X = A + Bx$. It survives as $X = 1$ only for Neumann and periodic BCs.
- $\lambda > 0$: $X = A\cos\mu x + B\sin\mu x$. The BC at $0$ kills one coefficient, and the BC at $L$ gives the $\mu_n$.

If the question says "only show cases that give non-trivial solutions" (the 2023 wording), skip $\lambda < 0$.

> [!note] Sign convention
> The lectures write $\frac{T'}{\alpha^2T} = \frac{X''}{X} = \lambda$, so the prof's eigenvalues are negative: $\lambda_n = -\mu_n^2$. These notes and [[10 Separation of Variables]] use $X'' + \lambda X = 0$, so $\lambda_n = +\mu_n^2$. The eigenfunctions and the final answer are the same either way. Just say which convention you're using.

## Worked example (A5 P3)
$u_t = u_{xx}$ on $-2 \le x \le 2$, with periodic BCs and $u(x,0) = \cos\frac{\pi x}{2} + \sin\pi x$.
1. Periodic with $L = 2$: the modes are $1$, $\cos\frac{n\pi x}{2}$ and $\sin\frac{n\pi x}{2}$, decaying like $e^{-n^2\pi^2t/4}$.
2. Match the IC. $\cos\frac{\pi x}{2}$ is the $n = 1$ cosine, and $\sin\pi x = \sin\frac{2\pi x}{2}$ is the $n = 2$ sine. No integrals needed.
$$
u = e^{-\pi^2t/4}\cos\frac{\pi x}{2} + e^{-\pi^2t}\sin\pi x
$$

> [!warning] Traps
> - Mixed BCs are ==not== $\frac{n\pi}{L}$.
> - Before matching a term of the IC, check it's actually in your family. With $u(0) = u_x(\pi) = 0$ the family is $\sin\frac x2, \sin\frac{3x}{2}, \dots$, so $\sin x$ isn't in it and must be projected (A5 P4, worked in [[12 Fourier Coefficients]]).
> - Don't forget the $n = 0$ mode for Neumann and periodic BCs.
> - Recompute $\mu_n$ for the actual interval. On $(0, \frac\pi2)$ with mixed A, $\mu_n = \frac{(2n-1)\pi}{2(\pi/2)} = 2n - 1$, so the family is $\sin x, \sin3x, \sin5x, \dots$
