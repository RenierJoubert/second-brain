#math #DifferentialEquationsII

# Hyperbolic Functions (cosh and sinh)

cosh and sinh are the exponential cousins of cos and sin. In this course they appear whenever an ODE looks like $y'' = \mu^2y$. That happens in the $\lambda < 0$ case of every eigenvalue problem ([[10 Separation of Variables]], [[11 Standard Eigenvalue Problems]]) and in steady states with heat loss ([[16 Heat Loss]]).

## Definitions
$$
\cosh x = \frac{e^x + e^{-x}}{2}, \qquad \sinh x = \frac{e^x - e^{-x}}{2}
$$
Adding and subtracting them gives back the exponentials: $e^x = \cosh x + \sinh x$ and $e^{-x} = \cosh x - \sinh x$.

## What they look like
| | $\cosh x$ | $\sinh x$ |
|---|---|---|
| Value at $x = 0$ | $1$ | $0$ |
| Symmetry | even, like $\cos$ | odd, like $\sin$ |
| Shape | U-shaped with minimum $1$ at $x = 0$ (a hanging chain) | S-shaped, always increasing |
| Zeros | ==none== ($\cosh x \geq 1$) | ==only at $x = 0$== |
| As $x \to \infty$ | $\approx\frac{e^x}{2}$ | $\approx\frac{e^x}{2}$ |

==They never oscillate.== That's why the $\lambda < 0$ case always gives only the trivial solution. To meet a zero BC at both ends, a function has to come back to zero (or go flat) somewhere else, and cosh and sinh can't.

## Derivatives and integrals
$$
\frac{d}{dx}\cosh\mu x = \mu\sinh\mu x, \qquad \frac{d}{dx}\sinh\mu x = \mu\cosh\mu x
$$
==No minus signs==, unlike cos and sin. Differentiating twice gives the same function back, times $\mu^2$:
$$
(\cosh\mu x)'' = \mu^2\cosh\mu x, \qquad (\sinh\mu x)'' = \mu^2\sinh\mu x
$$
So both solve $y'' - \mu^2y = 0$.

Integrals: $\int\cosh\mu x\,dx = \frac{\sinh\mu x}{\mu}$ and $\int\sinh\mu x\,dx = \frac{\cosh\mu x}{\mu}$.

## Side by side with cos and sin
| | $\cos$, $\sin$ | $\cosh$, $\sinh$ |
|---|---|---|
| Solve | $y'' = -\mu^2y$ | $y'' = +\mu^2y$ |
| Characteristic roots | $r = \pm i\mu$ | $r = \pm\mu$ |
| Appear when | $\lambda > 0$ | $\lambda < 0$, and heat-loss steady states |
| Derivatives | $\cos' = -\sin$, $\sin' = \cos$ | $\cosh' = \sinh$, $\sinh' = \cosh$ |
| Pythagorean identity | $\cos^2 + \sin^2 = 1$ | $\cosh^2 - \sinh^2 = 1$ |
| Zeros | infinitely many | $\cosh$: none; $\sinh$: only $0$ |
| From exponentials | $\cos x = \frac{e^{ix} + e^{-ix}}{2}$ | $\cosh x = \frac{e^x + e^{-x}}{2}$ |

## Why use them instead of $e^{\mu x}$ and $e^{-\mu x}$
When the roots are $r = \pm\mu$, the formula sheet gives $y = C_1e^{\mu x} + C_2e^{-\mu x}$. Writing
$$
y = A\cosh\mu x + B\sinh\mu x
$$
describes the same set of solutions with different constants, but makes the BCs easier:
- A condition at $x = 0$ kills one constant immediately: $y(0) = A$ and $y'(0) = \mu B$.
- The derivatives stay tidy.

**Shift trick** for a condition at $x = L$: use $\cosh\mu(x - L)$ and $\sinh\mu(x - L)$ instead. $\sinh\mu(x - L)$ is $0$ at $x = L$, and $\cosh\mu(x - L)$ has slope $0$ at $x = L$.

## The $\lambda < 0$ argument (template)
Start from $y = A\cosh\mu x + B\sinh\mu x$ with $\mu > 0$.
1. **The condition at $x = 0$ removes one constant.** $y(0) = 0$ gives $A = 0$; $y'(0) = 0$ gives $B = 0$.
2. **The condition at $x = L$ removes the other**, because what's left can't vanish there:
   - $y(L) = B\sinh\mu L = 0$ gives $B = 0$, since $\sinh\mu L \neq 0$ when $\mu L > 0$.
   - $y(L) = A\cosh\mu L = 0$ gives $A = 0$, since $\cosh$ is never $0$.
   - $y'(L) = B\mu\cosh\mu L = 0$ gives $B = 0$.
   - $y'(L) = A\mu\sinh\mu L = 0$ gives $A = 0$.
3. **Conclude:** only the trivial solution, so there are no negative eigenvalues.

## Worked examples (steady states)
$y'' - 4y = 0$, so $\mu = 2$ and $y = A\cosh2x + B\sinh2x$.
- $y(0) = 0$, $y(1) = 1$: $A = 0$ and $B\sinh2 = 1$, so $y = \dfrac{\sinh2x}{\sinh2}$.
- $y'(0) = 0$, $y(1) = 1$: $B = 0$ and $A\cosh2 = 1$, so $y = \dfrac{\cosh2x}{\cosh2}$.
- $y(0) = 1$, $y'(1) = 0$: use the shift trick. $y = A\cosh2(x - 1)$ already has slope $0$ at $x = 1$, and $y(0) = A\cosh2 = 1$, so $y = \dfrac{\cosh2(x - 1)}{\cosh2}$.

With no calculator, leave answers in this form; $\sinh2$ is a fine final number.

## Identities
> [!tip] On the formula sheet
> $\sinh(\alpha\pm\beta) = \sinh\alpha\cosh\beta \pm \sinh\beta\cosh\alpha$, $\ \cosh(\alpha\pm\beta) = \cosh\alpha\cosh\beta \pm \sinh\beta\sinh\alpha$, $\ \cosh^2t - \sinh^2t = 1$, and $\sinh^2t = \frac12(\cosh2t - 1)$.

Not on the sheet, but quick to derive:
- $\cosh^2t - \sinh^2t = (\cosh t - \sinh t)(\cosh t + \sinh t) = e^{-t}e^t = 1$
- $\cosh^2t = \frac12(\cosh2t + 1)$
- $\sinh2t = 2\sinh t\cosh t$

**Good to know:** $\cosh(ix) = \cos x$ and $\sinh(ix) = i\sin x$. So $\sinh$ does have zeros in the complex plane, at $x = in\pi$, which matters for radius-of-convergence questions ([[03 Ordinary and Singular Points]]).

> [!warning] Traps
> - Putting a minus sign in a cosh or sinh derivative. There isn't one.
> - Mixing forms: use either exponentials or cosh/sinh, not both in one solution.
> - Writing $\sinh\mu L \neq 0$ without saying why: it's because $\mu > 0$ and $L > 0$.
> - Writing $\cosh^2 + \sinh^2 = 1$. The plus sign belongs to cos and sin.
