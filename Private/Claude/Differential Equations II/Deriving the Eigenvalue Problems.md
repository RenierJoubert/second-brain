#math #DifferentialEquationsII #PDEs

# Deriving the Eigenvalue Problems

[[11 Standard Eigenvalue Problems]] lists the answers for the five BC types. This note shows how to ==derive== each one, for when a question says "find all eigenvalues and eigenfunctions" and you have to show every case. Dirichlet is also worked in [[10 Separation of Variables]].

Mixed BCs use $(2n+1)$ starting at $n = 0$ here. Note 11 writes the same functions as $(2n-1)$ starting at $n = 1$.

## The template (same for all five)
After separating, $X'' + \lambda X = 0$ plus two BCs. Do three cases, each with its general solution **and its derivative** written out first:

| Case | $X$ | $X'$ |
|---|---|---|
| $\lambda = -\mu^2 < 0$ | $A\cosh\mu x + B\sinh\mu x$ | $\mu(A\sinh\mu x + B\cosh\mu x)$ |
| $\lambda = 0$ | $A + Bx$ | $B$ |
| $\lambda = \mu^2 > 0$ | $A\cos\mu x + B\sin\mu x$ | $\mu(-A\sin\mu x + B\cos\mu x)$ |

In each case:
1. Apply the BC at $x = 0$. It kills one constant, because $\sinh 0 = \sin 0 = 0$ and $\cosh 0 = \cos 0 = 1$.
2. Apply the BC at $x = L$ to the constant that's left.
3. If it's forced to $0$, write "trivial, so no eigenvalue". If it can be nonzero, the condition you get is the eigenvalue equation.

Facts you'll use (see [[Hyperbolic Functions]]):
- $\cosh z \geq 1$, so ==cosh is never $0$==. $\sinh z = 0$ only at $z = 0$.
- $\sin z = 0 \iff z = n\pi$.
- $\cos z = 0 \iff z = \frac{(2n+1)\pi}{2}$.

## 1. Dirichlet: $X(0) = 0$, $X(L) = 0$
- $\lambda < 0$: $X(0) = A = 0$. Then $X(L) = B\sinh\mu L = 0$, and $\sinh\mu L \neq 0$, so $B = 0$. Trivial.
- $\lambda = 0$: $X(0) = A = 0$. Then $X(L) = BL = 0$, so $B = 0$. Trivial.
- $\lambda > 0$: $X(0) = A = 0$. Then $X(L) = B\sin\mu L = 0$. For $B \neq 0$, $\sin\mu L = 0$, so $\mu L = n\pi$.
$$
\lambda_n = \left(\frac{n\pi}{L}\right)^2, \qquad X_n = \sin\frac{n\pi x}{L}, \qquad n = 1, 2, \dots
$$
($n = 0$ would give $X = 0$, so it's excluded.)

## 2. Neumann: $X'(0) = 0$, $X'(L) = 0$
- $\lambda < 0$: $X'(0) = \mu B = 0$, so $B = 0$. Then $X'(L) = \mu A\sinh\mu L = 0$, so $A = 0$. Trivial.
- $\lambda = 0$: $X' = B = 0$, and both BCs hold for any $A$. ==Non-trivial:== $X_0 = 1$.
- $\lambda > 0$: $X'(0) = \mu B = 0$, so $B = 0$. Then $X'(L) = -\mu A\sin\mu L = 0$, so $\mu L = n\pi$.
$$
\lambda_n = \left(\frac{n\pi}{L}\right)^2, \qquad X_n = \cos\frac{n\pi x}{L}, \qquad n = 0, 1, 2, \dots
$$
($n = 0$ is the constant mode, $\lambda_0 = 0$.)

## 3. Mixed A: $X(0) = 0$, $X'(L) = 0$
- $\lambda < 0$: $X(0) = A = 0$. Then $X'(L) = \mu B\cosh\mu L = 0$, and cosh is never $0$, so $B = 0$. Trivial.
- $\lambda = 0$: $X(0) = A = 0$. Then $X' = B = 0$. Trivial.
- $\lambda > 0$: $X(0) = A = 0$. Then $X'(L) = \mu B\cos\mu L = 0$, so $\mu L = \frac{(2n+1)\pi}{2}$.
$$
\mu_n = \frac{(2n+1)\pi}{2L}, \qquad \lambda_n = \mu_n^2, \qquad X_n = \sin\mu_nx, \qquad n = 0, 1, 2, \dots
$$

## 4. Mixed B: $X'(0) = 0$, $X(L) = 0$
- $\lambda < 0$: $X'(0) = \mu B = 0$, so $B = 0$. Then $X(L) = A\cosh\mu L = 0$, so $A = 0$. Trivial.
- $\lambda = 0$: $X' = B = 0$. Then $X(L) = A = 0$. Trivial.
- $\lambda > 0$: $X'(0) = \mu B = 0$, so $B = 0$. Then $X(L) = A\cos\mu L = 0$, so $\mu L = \frac{(2n+1)\pi}{2}$.
$$
\mu_n = \frac{(2n+1)\pi}{2L}, \qquad \lambda_n = \mu_n^2, \qquad X_n = \cos\mu_nx, \qquad n = 0, 1, 2, \dots
$$

## 5. Periodic: $X(-L) = X(L)$, $X'(-L) = X'(L)$
Here neither constant dies from a single BC. Subtract the two sides of each BC instead (cosh and cos are even; sinh and sin are odd):
- $\lambda < 0$:
  - $X(L) - X(-L) = 2B\sinh\mu L = 0$, so $B = 0$.
  - $X'(L) - X'(-L) = 2\mu A\sinh\mu L = 0$, so $A = 0$. Trivial.
- $\lambda = 0$: $X(L) - X(-L) = 2BL = 0$, so $B = 0$. $X' = 0$ on both sides. ==Non-trivial:== $X_0 = 1$.
- $\lambda > 0$:
  - $X(L) - X(-L) = 2B\sin\mu L = 0$
  - $X'(L) - X'(-L) = -2\mu A\sin\mu L = 0$
  - For $A$ or $B$ to be nonzero, $\sin\mu L = 0$, so $\mu L = n\pi$. Then ==both== $A$ and $B$ are free.
$$
\lambda_n = \left(\frac{n\pi}{L}\right)^2, \qquad X_n = \cos\frac{n\pi x}{L} \text{ and } \sin\frac{n\pi x}{L}, \qquad n = 1, 2, \dots, \qquad \text{plus } X_0 = 1
$$
For periodic BCs on $[0, \ell]$ (A6 P2), the period is $\ell$, so use $L = \frac{\ell}{2}$.

## Writing it up
> [!example]- Model write-up (mixed B on $[0, \pi]$)
> $X'' + \lambda X = 0$, $X'(0) = 0$, $X(\pi) = 0$.
>
> **Case $\lambda = -\mu^2 < 0$.** $X = A\cosh\mu x + B\sinh\mu x$, $X' = \mu(A\sinh\mu x + B\cosh\mu x)$. $X'(0) = \mu B = 0 \Rightarrow B = 0$. $X(\pi) = A\cosh\mu\pi = 0$ and $\cosh\mu\pi \neq 0 \Rightarrow A = 0$. Only the trivial solution.
>
> **Case $\lambda = 0$.** $X = A + Bx$. $X'(0) = B = 0$, $X(\pi) = A = 0$. Only the trivial solution.
>
> **Case $\lambda = \mu^2 > 0$.** $X = A\cos\mu x + B\sin\mu x$. $X'(0) = \mu B = 0 \Rightarrow B = 0$. $X(\pi) = A\cos\mu\pi = 0$; for $A \neq 0$, $\cos\mu\pi = 0 \Rightarrow \mu\pi = \frac{(2n+1)\pi}{2}$.
>
> **Answer:** $\lambda_n = \left(\frac{2n+1}{2}\right)^2$, $X_n = \cos\frac{(2n+1)x}{2}$, $n = 0, 1, 2, \dots$

> [!note] Sign convention
> The lectures write $\frac{T'}{T} = \frac{X''}{X} = \lambda$, which makes the eigenvalues negative ($\lambda_n = -\mu_n^2$). This note uses $X'' + \lambda X = 0$, so $\lambda_n = +\mu_n^2$. The eigenfunctions are the same. State which one you're using.

> [!warning] Traps
> - Applying a BC on $X'$ without writing $X'$ out first. The $\mu$ in front matters when you divide by it: it's allowed because $\mu > 0$.
> - Saying "$A = 0$ and $B = 0$" in the $\lambda > 0$ case. Nontrivial means the surviving constant is ==nonzero==, which is what forces the condition on $\mu$.
> - Skipping $\lambda = 0$ for Neumann or periodic BCs, even under "only show non-trivial cases". It ==is== non-trivial there.
> - Starting $n$ in the wrong place. Dirichlet starts at $n = 1$. Neumann and periodic include $n = 0$ (the constant). Mixed starts at $n = 0$ with $(2n+1)$.
> - Forgetting that periodic gives ==two== eigenfunctions per $\lambda_n$.
