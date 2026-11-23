#math #DifferentialEquationsII #PDEs

# Extensions and Convergence

A Fourier series is periodic, but $f$ is usually only given on $(0, L)$. So the series quietly extends $f$ to the whole real line, and the BCs decide *how*. Once you know the extension, you know what the series converges to and what to sketch.

> [!tip] On the formula sheet
> The pointwise convergence theorem (the jump average) is given. The extension rules are not.

## Which extension?
| Series (BCs) | Extension of $f$ from $(0, L)$ | Period |
|---|---|---|
| Sine (Dirichlet) | odd across $0$ | $2L$ |
| Cosine (Neumann) | even across $0$ | $2L$ |
| Full (periodic), with $f$ given on $(-L, L)$ | just repeat it | $2L$ |
| Quarter-wave sine (mixed A) | even across $L$, then odd across $0$ | $4L$ |
| Quarter-wave cosine (mixed B) | odd across $L$, then even across $0$ | $4L$ |

The extension copies the symmetry of the eigenfunctions. For example, every $\sin\frac{n\pi x}{L}$ is odd, so the sine series is odd too.

**"$(0, \ell)$ is one full period"** (periodic BCs on $[0, \ell]$, as in A6 P2): repeat $f$ with period $\ell$ and use $L = \frac\ell2$ in the formulas. You can integrate over $[0, \ell]$ directly, since any interval of length $2L$ works.

## Sketching recipe
1. Draw $f$ on $(0, L)$.
2. Reflect it according to the table to fill one full period.
3. Copy that period left and right until the requested interval is covered (usually three periods, e.g. $[-6, 6]$).
4. At every jump, put a dot at the midpoint. That's the value the series converges to there.

## Convergence
**Theorem** (on the sheet). If $f$ and $f'$ are piecewise continuous, the series converges at every $x$ to
$$
\tfrac12\big[\tilde f(x^-) + \tilde f(x^+)\big]
$$
where $\tilde f$ is the extension. Wherever $\tilde f$ is continuous, that's just $\tilde f(x)$.
- Jumps can appear ==at the seams== ($0$, $\pm L$) even when $f$ itself is continuous. For example, a sine series always equals $0$ at $x = 0$ and $x = L$.
- **Gibbs phenomenon:** near a jump, the partial sums overshoot by about 9%, no matter how many terms you take.
- **Smoothness and decay:** if the extension jumps, the coefficients shrink like $\frac1n$ (slow). If it's continuous but has corners, they shrink like $\frac{1}{n^2}$ (fast). That's why the cosine series of $x$ converges faster than its sine series.

## Example: $f(x) = x$ on $(0, 1)$ three ways (L16)
| BCs | Extension | Series |
|---|---|---|
| Dirichlet | odd: a sawtooth, jumping at odd integers (value $0$ there) | $\sum\frac{2(-1)^{n+1}}{n\pi}\sin n\pi x$ |
| Neumann | even: a continuous triangle wave | $\frac12 + \sum\frac{2((-1)^n - 1)}{(n\pi)^2}\cos n\pi x$ |
| Periodic with period 1 | repeat: a sawtooth, jumping at every integer (value $\frac12$ there) | $\frac12 - \sum\frac{1}{n\pi}\sin2n\pi x$ |

The periodic series has no cosines because its extension minus $\frac12$ is an odd function.

## Example: one IC, four BCs (A6 P1)
$f = 1$ on $[0, 1)$ and $0$ on $[1, 2]$, so $L = 2$. On $[-6, 6]$:
- **Neumann** (even, period 4): $1$ on $(-1, 1)$ and $0$ on $(1, 3)$, repeating.
- **Dirichlet** (odd, period 4): $-1$ on $(-1, 0)$, $1$ on $(0, 1)$, $0$ on $(1, 3)$, repeating.
- **Mixed B** (period 8): $0, -1, 0, 1, 0, -1, 0$ on $(-6,-5), (-5,-3), (-3,-1), (-1,1), (1,3), (3,5), (5,6)$.
- **Mixed A** (period 8): $1, 0, 1$ on $(0,1), (1,3), (3,4)$; the odd reflection gives $-1, 0, -1$ on $(-1,0), (-3,-1), (-4,-3)$; then repeat every 8.

## Summing a series by plugging in a point
Choose an $x$ where you know what the series converges to.
- The cosine series of $x$ on $(0, 1)$ at $x = 0$: $0 = \frac12 - \frac{4}{\pi^2}\sum_{k\geq0}\frac{1}{(2k+1)^2}$, so $\sum\frac{1}{(2k+1)^2} = \frac{\pi^2}{8}$.
- At a jump, use the average. In A6 P2 ($1 - x$ on $[0, 1)$, $0$ on $[1, 2)$, periodic), the extension jumps from $0$ to $1$ at $x = 0$. So the series equals $\frac12$ there, which again gives $\frac{\pi^2}{8}$.
- The sine series of $x$ ($L = 1$) at $x = \frac12$: $1 - \frac13 + \frac15 - \dots = \frac\pi4$.
- $x^2$ on $(-\pi, \pi)$ at $x = \pi$: $\sum\frac{1}{n^2} = \frac{\pi^2}{6}$.

## Even and odd
- even·even = even, odd·odd = even, even·odd = odd.
- Any $f$ splits into an even part and an odd part:
$$
f(x) = \underbrace{\tfrac12[f(x) + f(-x)]}_{\text{even: the cosines}} + \underbrace{\tfrac12[f(x) - f(-x)]}_{\text{odd: the sines}}
$$
- If $f$ is neither even nor odd, the full series needs both.

## Periods
$\sin\frac{n\pi x}{L}$ and $\cos\frac{n\pi x}{L}$ have period $\frac{2L}{n}$, so the series as a whole has period $2L$. To find a period, simplify first: $\sin x\cos x = \frac12\sin2x$ has period $\pi$.

> [!warning] Traps
> - Sketching $f$ itself instead of its extension, or drawing only one period.
> - Forgetting the dots at the jumps. That's exactly what "to what does the series converge?" is asking for.
> - Mixed BCs have period $4L$, not $2L$.
