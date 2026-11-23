#math #DifferentialEquationsII

# Midterm 2 Review

**Mon Nov 23 · 50 min · closed book · formula sheet provided** (it's the same sheet as for MT1)
Covers handwritten lectures 9–22 (through Fri Nov 13) and ==all of assignments 4–7==. Some questions are taken straight from the assignments. Series solutions are excluded.

> [!info] What's in and what's out
> **In:** deriving the PDEs and their dispersion relations, finite differences (heat, wave, Laplace), separation of variables for the heat equation, Fourier sine/cosine/full/complex series, convergence and Parseval, inhomogeneous BCs (constant and time-dependent), sources and sinks, heat loss $-\beta^2u$, and eigenfunction expansions.
> **Out:** series solutions, plus separation of variables for the wave equation and D'Alembert. Neither is in L9–22, so ==skip Q2 on every past MT2== (they're all wave problems). The wave equation only appears here through its derivation (L11) and its finite-difference scheme (L12).

## Notes
1. [[08 Intro to PDEs - Heat and Wave Equations]] (L9–11: BC types, deriving the PDEs, dispersion relations)
2. [[09 Numerical Methods for PDEs]] (L12: difference formulas; heat, wave and Laplace schemes; stability)
3. [[10 Separation of Variables]] (L13–14: separability, the three-case eigenvalue procedure, orthogonality)
4. [[11 Standard Eigenvalue Problems]] (L13–17: the five BC types)
5. [[12 Fourier Coefficients]] (L13–17: sine, cosine, full and quarter-wave series)
6. [[13 Extensions and Convergence]] (L16–18: sketches, jumps, summing series)
7. [[14 Parseval and Complex Fourier Series]] (L18–19)
8. [[15 Inhomogeneous Boundary Conditions]] (L19, L21: steady states)
9. [[16 Heat Loss]] (L20)
10. [[17 Eigenfunction Expansions]] (L21: time-dependent sources)
11. [[18 Time-Dependent Boundary Conditions]] (L22: the full Q1 recipe)

The sections below condense these notes onto one page for last-minute review.

| Lecture | Topic | Here |
|---|---|---|
| 9–11 | Deriving the heat, advection, convection–diffusion, wave and Laplace equations; dispersion relations | §1 |
| 12 | Finite differences for heat, wave, Laplace (Jacobi) | §2 |
| 13–14 | Separation of variables, Dirichlet BCs, orthogonality, sine series | §3 |
| 15 | Neumann BCs, cosine series | §3 |
| 16 | Periodic BCs (ring), full series, comparing extensions of $f(x) = x$ | §3 |
| 17 | The five standard eigenvalue problems; even/odd; half- vs full-range | §3 |
| 18 | Periodic extension, convergence, Gibbs, Parseval and Bessel, complex form | §3 |
| 19 | Fourier transform; inhomogeneous constant BCs (Dirichlet and Neumann) | §3, §4 |
| 20 | Heat loss $-\beta^2u$ with inhomogeneous BCs | §4 |
| 21 | Sources: time-independent (steady state) and time-dependent (eigenfunction expansion) | §4 |
| 22 | Time-dependent BCs (four types) | §4 |

## Two-day plan
**Sat night (2–3 h)**
- [ ] Read §3 and §4
- [ ] Redo the L22 example (§4.6) from a blank page, then HW7 #1 (§4.7), then A7 P3 and P4

**Sun morning (3 h)**
- [ ] Fourier drills: A5 P1–P2 and P4, and A6 P1–P3 (sketch every extension on $[-6, 6]$); Parseval (L18 $x^2$ example, A6 supplementary 1c)
- [ ] A4 P2 eigenvalue problems, at most 10 min each

**Sun afternoon (3 h)**
- [ ] The three past MT2 Q1s, 25 min each, closed book; check them against the setup checks in §5
- [ ] Steady states and heat loss: A6 P4–P6, L20

**Sun evening (2 h)**
- [ ] Numerics: A4 P3 and P4(c); derive the heat and wave schemes from Taylor series
- [ ] Derivations: the heat equation from conservation plus Fourier's law; the dispersion relation of $u_t + cu_x = Du_{xx}$
- [ ] Practice tests

**Mon morning**
- [ ] Read the mistake log and the "Memorize" list below; do one timed Q1

## What the exam looks like
| Exam | Q1 (heat, eigenfunction expansion) | Q2 |
|---|---|---|
| 2018, sec 101 | $u_t = u_{xx} + e^{-2t}(\sin5x - 2x)$ on $(0, \frac\pi2)$; $u(0) = 1$, $u_x(\frac\pi2) = e^{-2t}$; $u(x,0) = 1 + \sin x$ (50) | wave, out of scope (50) |
| 2018, sec 102 | $u_t = u_{xx} + e^{-\beta t}\cos3x - 2$ on $(0, \pi)$; $u_x(0) = \pi$, $u_x(\pi) = 3\pi$; $u(x,0) = \cos x + x^2$ (50) | wave, out of scope (50) |
| 2023, sec 202 | $u_t = u_{xx} + e^t\cos\frac{5x}{2} + 1$ on $(0, \pi)$; $u_x(0) = 0$, $u(\pi) = t$; $u(x,0) = 0$ (60) | wave, out of scope (40) |

- ==Q1 is always the same template== (§4) and is worth 50–60 marks. Master it first.
- Q2 has always been a wave problem, which isn't on this midterm. It will probably be swapped for assignment material: an eigenvalue problem, a Fourier series with a sketch and Parseval, a finite-difference scheme, or a separability check.
- **The exams are built so things cancel.** In all three Q1s, $w_t - w_{xx}$ cancels the polynomial part of the source. What's left of the source is a single eigenfunction, and $u(x,0) - w(x,0)$ is either a single eigenfunction or comes with a hint integral. If you're grinding through a messy projection and no hint was given, recheck $w$.
- The assignment problems closest in style to the past Q1s are A7 P1–P4, A6 P4–P5 and A5 P3–P5. The best Fourier-series drill is A6 P1: one IC, four BC types, four different extensions.
- Pace: 50 min for 100 marks, so about 1 min per 2 marks.

## Which method?
- **"Derive" / "conservation law" / "dispersion relation" / "check the dimensions"** → §1
- **"Discrete form" / "$u(x, t+\Delta t)$" / "order of accuracy" / "by hand with $\Delta x = \dots$"** → §2
- **"Can separation of variables be used?"** → [[10 Separation of Variables]]
- **"Find all eigenvalues and eigenfunctions"** → all three cases, [[10 Separation of Variables]]
- **"Fourier (sine/cosine) series" / "sketch the extension" / "what does it converge to" / "use Parseval"** → §3
- **Homogeneous PDE and homogeneous BCs** → plain separation of variables using the §3.1 table
- **Constant inhomogeneous BCs and a source that doesn't depend on $t$** → steady state $w(x)$, then separation of variables for $v$ (§4 tip)
- **BCs or source depend on $t$** → $w(x,t)$, then eigenfunction expansion (§4)
- **Extra $-\beta^2u$ term** → §4.4

## Formula sheet
**Given:**
- Trig and hyperbolic sum formulas, $\sin^2$, $\sinh^2$, $\cosh^2 - \sinh^2$
- ODE solution tables (constant coefficient and Euler)
- The full Fourier series on $[-L, L]$ with $a_n$, $b_n$; the sine and cosine series on $[0, L]$ with their coefficients
- Pointwise convergence (the jump average) and Parseval for the full series
- Sturm–Liouville properties and the expansion formula $c_n = \frac{\int f\phi_nr}{\int\phi_n^2r}$. ==This covers the mixed-BC coefficients too== (take $r = 1$).
- D'Alembert (not needed this time)

**Not given (memorize):**
- Eigenvalues and eigenfunctions for each BC type (§3.1), especially the two mixed ones
- Which $w$ to use for each BC type (§4.2)
- The mode ODE $T_n' + k_nT_n = F_n$ and its integrating-factor solution (§4.3)
- Parseval for half-range series, Bessel's inequality, the complex-form formulas
- Difference formulas, the schemes, and the stability limits ($s \le \frac12$ for heat, $r \le 1$ for wave)
- Product-to-sum identities (derive them from the sum formulas) and $\int x\sin$, $\int x\cos$ by parts

---

## 1. Intro to PDEs (L9–11)
Every derivation has two parts: a **conservation law** (over a slab $[x, x+\Delta x]$ and time $\Delta t$, change = in − out; divide by $\Delta x\,\Delta t$ and let both go to 0) and a **constitutive law** relating the flux to $u$.

| Model | Conservation | Constitutive law | PDE |
|---|---|---|---|
| Heat in a bar | $\rho c\,u_t + q_x = 0$ | Fourier: $q = -ku_x$ | $u_t = \alpha^2u_{xx}$, $\ \alpha^2 = \frac{k}{\rho c}$ (m²/s) |
| Traffic | $u_t + q_x = 0$ | $q = cu$ | $u_t + cu_x = 0$, solved by $u = f(x - ct)$ (moves right) |
| Cautious drivers | $u_t + q_x = 0$ | $q = cu - Du_x$ | $u_t + cu_x = Du_{xx}$ (convection–diffusion) |
| Elastic bar | Newton: $\sigma_x = \rho u_{tt}$ | Hooke: $\sigma = Eu_x$ | $u_{tt} = c^2u_{xx}$, $\ c = \sqrt{E/\rho}$ |
| Porous flow | Mass: $u_x + v_y = 0$ | Darcy: $u = -Kh_x$, $v = -Kh_y$ | $h_{xx} + h_{yy} = 0$ |

Fick's law $q = -\alpha^2(\rho cu)_x$ gives the same heat equation directly. Heat flows from hot to cold, which is why there's a minus sign.

**Dispersion relations:** substitute $u = e^{ikx + \sigma t}$ and solve for $\sigma$.
- Heat: $\sigma = -\alpha^2k^2$, so $u = e^{ikx}e^{-\alpha^2k^2t}$. It oscillates in $x$ and decays in $t$, and ==higher wavenumbers decay faster==, which is why rough initial data smooths out. With a real exponent $e^{kx}$ you get $\sigma = +\alpha^2k^2$, which blows up, so it isn't physical.
- Advection: $\sigma = -ick$, so $u = e^{ik(x - ct)}$, a pure travelling wave. $u_t - cu_x = 0$ gives $f(x + ct)$, which moves left.
- Convection–diffusion: $\sigma = -ick - Dk^2$, so $u = e^{ik(x - ct)}e^{-Dk^2t}$. It moves right at speed $c$ and decays. In the moving frame $z = x - ct$ only diffusion is left: $U_t = DU_{zz}$.
- Wave: $(\partial_t + c\partial_x)(\partial_t - c\partial_x)u = 0$, so $u = f(x - ct) + g(x + ct)$ and $\sigma = \pm ick$.

**Dimension checks:** every term must have the same units. E.g. in $q = cu - Du_x$, $[D] = \frac{L^2}{T}$.

## 2. Finite differences (L12)
Everything in [[09 Numerical Methods for PDEs]] still applies. Here is what L12 adds.

**Heat**, with $s = \frac{\alpha^2\Delta t}{\Delta x^2}$: $u_n^{k+1} = su_{n+1}^k + (1-2s)u_n^k + su_{n-1}^k$.
- Stable iff $s \le \frac12$, i.e. $\Delta t \le \frac{\Delta x^2}{2\alpha^2}$. Accuracy is $O(\Delta t)$ in time and $O(\Delta x^2)$ in space.
- Matrix form: $\mathbf u^{k+1} = A\mathbf u^k$ with $A$ tridiagonal (rows $s,\ 1 - 2s,\ s$). The first and last rows are $(1, 0, \dots)$ and $(\dots, 0, 1)$, so the Dirichlet boundary values carry over.

**Wave** $u_{tt} = c^2u_{xx}$, with Courant number $r = \frac{c\Delta t}{\Delta x}$. Centred in both $t$ and $x$:
$$
u_n^{k+1} = r^2u_{n+1}^k + 2(1 - r^2)u_n^k + r^2u_{n-1}^k - u_n^{k-1}
$$
- This needs ==three time levels==. For the first step, centre the velocity IC: $\frac{u_n^1 - u_n^{-1}}{2\Delta t} = g(x_n)$, so $u_n^{-1} = u_n^1 - 2\Delta t\,g_n$. Substituting into the scheme at $k = 0$ gives
$$
u_n^1 = \tfrac12\left[r^2u_{n+1}^0 + 2(1 - r^2)u_n^0 + r^2u_{n-1}^0\right] + \Delta t\,g(x_n)
$$
  (The cruder start $u_n^1 \approx f(x_n) + \Delta t\,g(x_n)$ from note 09 is only $O(\Delta t)$.)
- Stable iff $r \le 1$, i.e. $\Delta t \le \frac{\Delta x}{c}$. Accuracy is $O(\Delta t^2)$ in time and $O(\Delta x^2)$ in space.

**Laplace** $u_{xx} + u_{yy} = 0$ with $\Delta x = \Delta y$: $u_{n,m} = \frac14\big(u_{n-1,m} + u_{n+1,m} + u_{n,m-1} + u_{n,m+1}\big)$. Each interior value is the average of its four neighbours (the 5-point stencil).
- **Jacobi iteration:** $u^{k+1}_{n,m}$ = the average of the four neighbours at iteration $k$. Boundary values stay fixed by the BCs. Stop when the change $E = \big[\frac{1}{MN}\sum(u^{k+1}_{n,m} - u^k_{n,m})^2\big]^{1/2}$ is small.
- If $\Delta x \ne \Delta y$, keep both denominators: $\frac{u_{n+1,m} - 2u_{n,m} + u_{n-1,m}}{\Delta x^2} + \frac{u_{n,m+1} - 2u_{n,m} + u_{n,m-1}}{\Delta y^2} = 0$.

**Derivative BCs** such as $u_x(0, t) = 0$ (on the course outline, not in the L12 slides): either use a ghost point $u_{-1} = u_1$ (centred, keeps $O(\Delta x^2)$), or set $u_0 = u_1$ (one-sided, $O(\Delta x)$).

**A4 P3, convection–diffusion** $u_t + cu_x = Du_{xx}$, forward in time and centred in space. With $s = \frac{D\Delta t}{\Delta x^2}$ and $p = \frac{c\Delta t}{2\Delta x}$:
$$
u_n^{k+1} = (s + p)\,u_{n-1}^k + (1 - 2s)\,u_n^k + (s - p)\,u_{n+1}^k
$$
This is $O(\Delta t)$ in time and $O(\Delta x^2)$ in space. A backward (upwind) $u_x$ drops space to $O(\Delta x)$. To march, the IC gives level 0, the BCs give the end values, and each interior point at level $k+1$ comes from three points at level $k$.

> [!example]- A4 P4: exact solution vs one hand-computed step
> $u_t = u_{xx}$ on $(0, \pi)$, $u = 0$ at both ends, $u(x, 0) = \sin x + \sin3x$.
> **Exact:** $u = e^{-t}\sin x + e^{-9t}\sin3x$, so $u(\frac\pi2, 0.1) = e^{-0.1} - e^{-0.9} \approx 0.498$.
> **One step** with $\Delta x = \frac{\pi}{10}$, $\Delta t = 0.1$: $s = \frac{0.1}{(\pi/10)^2} = \frac{10}{\pi^2} \approx 1.01$. At $t = 0$, $u(\frac\pi2) = 1 - 1 = 0$ and $u(\frac\pi2 \pm \frac\pi{10}) = \sin\frac{2\pi}{5} - \sin\frac\pi5 \approx 0.363$ on both sides. So
> $$u(\tfrac\pi2, 0.1) \approx s(0.363) + (1 - 2s)(0) + s(0.363) \approx 0.736$$
> **Why it's so far off:** $s \approx 1.01 > \frac12$ violates the stability condition, and a single large step with an $O(\Delta t)$ scheme carries a big error. A stable step needs $\Delta t \le \frac{\Delta x^2}{2} \approx 0.049$.

---

## 3. Separation of variables and Fourier series (L13–19)

### 3.1 The five standard eigenvalue problems
Separating $u_t = \alpha^2u_{xx}$ gives $X'' + \mu^2X = 0$ and $T_n = e^{-\alpha^2\mu_n^2t}$, so $u = \sum c_ne^{-\alpha^2\mu_n^2t}X_n(x)$.

| BCs on $X$ | Name and series | $\mu_n$ | $X_n$ | $n$ |
|---|---|---|---|---|
| $X(0) = X(L) = 0$ | Dirichlet → sine | $\frac{n\pi}{L}$ | $\sin\mu_nx$ | $1, 2, \dots$ |
| $X'(0) = X'(L) = 0$ | Neumann → cosine | $\frac{n\pi}{L}$ | $\cos\mu_nx$, with $X_0 = 1$ | $0, 1, \dots$ |
| $X(-L) = X(L)$, $X'(-L) = X'(L)$ | Periodic (ring) → full | $\frac{n\pi}{L}$ | $1$, $\cos\mu_nx$, $\sin\mu_nx$ | $0, 1, \dots$ |
| $X(0) = 0$, $X'(L) = 0$ | Mixed A → quarter-wave sine | $\frac{(2n-1)\pi}{2L}$ | $\sin\mu_nx$ | $1, 2, \dots$ |
| $X'(0) = 0$, $X(L) = 0$ | Mixed B → quarter-wave cosine | $\frac{(2n-1)\pi}{2L}$ | $\cos\mu_nx$ | $1, 2, \dots$ |

- **Sine or cosine?** It's decided by the BC at $x = 0$: $X(0) = 0$ needs sine and $X'(0) = 0$ needs cosine.
- **Odd multiples:** a Dirichlet end paired with a Neumann end fits quarter waves, so $\mu_n$ is an odd multiple of $\frac{\pi}{2L}$. L17 writes this as $(2n+1)$ with $n = 0, 1, \dots$, which is the same list.
- **Constant mode:** $\mu = 0$ (the constant $X_0 = 1$) only survives when ==both ends are Neumann, or the BCs are periodic==.
- **How much to show:** "Find all eigenvalues" means all three cases. "Only show cases that give non-trivial solutions" (2023 wording) means just $\lambda = -\mu^2$, plus $\lambda = 0$ for Neumann or periodic BCs.

> [!note] The prof's sign convention
> Lectures write $\frac{T'}{\alpha^2T} = \frac{X''}{X} = \lambda$, which gives $\lambda_n = -\mu_n^2 < 0$. [[10 Separation of Variables]] uses $-\lambda$ and gets $\lambda_n = +\mu_n^2$. The eigenfunctions and the final answer are the same either way. So the "$\lambda_n = -(2n)^2$" that note 10 calls a typo is probably just this convention. Pick one and say which. This page uses $\mu_n$, which doesn't depend on the convention.

### 3.2 One formula gives every coefficient
$$
f = \sum c_nX_n \quad\Longrightarrow\quad c_n = \frac{\langle f, X_n\rangle}{\langle X_n, X_n\rangle} = \frac{\int f\,X_n\,dx}{\int X_n^2\,dx}
$$
To derive it, multiply by $X_m$ and integrate; orthogonality removes every term except $n = m$. This is the Sturm–Liouville expansion on the formula sheet with $r = 1$. ==Show this step if asked to "derive the coefficients".==

| $X_n$ | $\int X_n^2$ |
|---|---|
| $\sin$, $\cos$ ($n \ge 1$), quarter-wave, on $[0, L]$ | $\frac L2$ |
| $1$ on $[0, L]$ | $L$ |
| $\sin$, $\cos$ on $[-L, L]$ | $L$ |
| $1$ on $[-L, L]$ | $2L$ |

So:
- **Sine:** $b_n = \frac2L\int_0^Lf\sin\frac{n\pi x}{L}\,dx$
- **Cosine:** $f = A_0 + \sum A_n\cos\frac{n\pi x}{L}$ with $A_0 = \frac1L\int_0^Lf$ (==the average==) and $A_n = \frac2L\int_0^Lf\cos\frac{n\pi x}{L}$. The sheet writes the constant as $\frac{a_0}{2}$ with $a_0 = \frac2L\int_0^Lf$, which is the same thing.
- **Full** on $[-L, L]$: $a_n = \frac1L\int_{-L}^Lf\cos$ and $b_n = \frac1L\int_{-L}^Lf\sin$, with constant term $\frac{a_0}{2}$ = the average. You can integrate over any interval of length $2L$.
- **Quarter-wave:** $\frac2L\int_0^Lf\sin\mu_nx\,dx$ or $\frac2L\int_0^Lf\cos\mu_nx\,dx$.
- **$f$ already a sum of eigenfunctions:** just match coefficients. First check that each term really belongs to the family. On $[0, \pi]$ with $X(0) = X'(\pi) = 0$ the family is $\sin\frac{(2n-1)x}{2}$, so $\sin x$ is ==not== in it and has to be projected. A5 P4 is exactly this case: the IC is $\sin x + \sin\frac{3x}{2}$ with $u(0) = u_x(\pi) = 0$.

### 3.3 Extensions, sketches, convergence
| Series of $f$ on $(0, L)$ | What it converges to | Period |
|---|---|---|
| Sine | odd extension | $2L$ |
| Cosine | even extension | $2L$ |
| Full ($f$ given on $(-L, L)$) | periodic copy of $f$ | $2L$ |
| Full, "$(0, \ell)$ is one full period" | periodic copy, so use $L = \frac\ell2$ in the formulas | $\ell$ |
| Quarter-wave sine (mixed A) | reflect evenly across $x = L$, then oddly across $0$ | $4L$ |
| Quarter-wave cosine (mixed B) | reflect oddly across $x = L$, then evenly across $0$ | $4L$ |

- **Convergence:** if $f$ and $f'$ are piecewise continuous, the series equals $f$ wherever the extension is continuous, and equals $\frac12[f(x^-) + f(x^+)]$ at jumps ==of the extension==. Check the seams at $0$ and $\pm L$. E.g. a sine series is always $0$ at $x = 0$ and $x = L$.
- **Gibbs:** near a jump, partial sums overshoot by about 9% no matter how many terms you take.
- **Sketching:** draw $f$ on $(0, L)$, reflect it per the table, copy it out to three periods, and mark a dot at the midpoint of each jump.
- **Decay rate:** a jump in the extension gives coefficients of size about $\frac1n$ (slow), while a continuous extension with corners gives about $\frac1{n^2}$ (fast). That's why the cosine series of $x$ converges faster than its sine series.
- **Example** ($f = x$ on $(0, 1)$, L16): the sine series converges to a sawtooth with jumps at the odd integers, equal to $0$ there. The cosine series converges to a continuous triangle wave. "Periodic with period 1" gives $\frac12 - \sum\frac{\sin2n\pi x}{n\pi}$, a sawtooth equal to $\frac12$ at the integers.
- $\sin\frac{n\pi x}{L}$ has period $\frac{2L}{n}$, so the series as a whole has period $2L$.

### 3.4 Even/odd shortcuts
- even·even and odd·odd are even; even·odd is odd. $\int_{-L}^L\text{odd} = 0$ and $\int_{-L}^L\text{even} = 2\int_0^L$.
- $f$ even means all $b_n = 0$. $f$ odd means all $a_n = 0$, including $a_0$.
- Any $f = \underbrace{\tfrac12[f(x) + f(-x)]}_{\text{cosine part}} + \underbrace{\tfrac12[f(x) - f(-x)]}_{\text{sine part}}$
- If $f - c$ is odd, the series is $c$ plus sines only (the L16 example above).

### 3.5 Integrals and values you'll need
**Values:** $\cos n\pi = (-1)^n$. $1 - (-1)^n$ is $0$ for even $n$ and $2$ for odd $n$. $\sin\frac{n\pi}{2}$ runs $1, 0, -1, 0, \dots$ and $\cos\frac{n\pi}{2}$ runs $0, -1, 0, 1, \dots$. $\sin\frac{(2n-1)\pi}{2} = (-1)^{n+1}$ and $\cos\frac{(2n-1)\pi}{2} = 0$.

**Antiderivatives:**
$$
\begin{align}
\textstyle\int x\sin ax\,dx &= -\tfrac{x\cos ax}{a} + \tfrac{\sin ax}{a^2} &
\textstyle\int x\cos ax\,dx &= \tfrac{x\sin ax}{a} + \tfrac{\cos ax}{a^2} \\
\textstyle\int x^2\cos ax\,dx &= \tfrac{x^2\sin ax}{a} + \tfrac{2x\cos ax}{a^2} - \tfrac{2\sin ax}{a^3} &
\textstyle\int x^2\sin ax\,dx &= -\tfrac{x^2\cos ax}{a} + \tfrac{2x\sin ax}{a^2} + \tfrac{2\cos ax}{a^3}
\end{align}
$$

**On $[0, L]$ with $a = \frac{n\pi}{L}$** (all checked numerically):

| Integral | Value |
|---|---|
| $\int_0^L\sin ax$ | $\frac{L(1 - (-1)^n)}{n\pi}$ |
| $\int_0^Lx\sin ax$ | $\frac{L^2(-1)^{n+1}}{n\pi}$ |
| $\int_0^Lx\cos ax$ | $\frac{L^2((-1)^n - 1)}{(n\pi)^2}$ |
| $\int_0^Lx^2\cos ax$ | $\frac{2L^3(-1)^n}{(n\pi)^2}$ |
| $\int_0^Lx^2\sin ax$ | $L^3\left[\frac{(-1)^{n+1}}{n\pi} + \frac{2((-1)^n - 1)}{(n\pi)^3}\right]$ |

**Quarter-wave, $\mu = \frac{(2n-1)\pi}{2L}$:** $\int_0^L\sin\mu x = \frac1\mu$, $\ \int_0^L\cos\mu x = \frac{(-1)^{n+1}}{\mu}$, $\ \int_0^Lx\sin\mu x = \frac{(-1)^{n+1}}{\mu^2}$, $\ \int_0^Lx\cos\mu x = \frac{L(-1)^{n+1}}{\mu} - \frac1{\mu^2}$.

**Series worth knowing:**
- $x = \sum\frac{2L(-1)^{n+1}}{n\pi}\sin\frac{n\pi x}{L}$ (sine) and $x = \frac L2 - \frac{4L}{\pi^2}\sum_{k\ge0}\frac{1}{(2k+1)^2}\cos\frac{(2k+1)\pi x}{L}$ (cosine)
- $1 = \frac4\pi\sum_{n\text{ odd}}\frac1n\sin\frac{n\pi x}{L}$ (sine)
- $x^2 = \frac{\pi^2}{3} + 4\sum\frac{(-1)^n}{n^2}\cos nx$ on $(-\pi, \pi)$
- Full series of ($0$ on $(-\pi, 0)$, $x$ on $(0, \pi)$): $\frac\pi4 - \frac2\pi\sum_{k\ge0}\frac{\cos(2k+1)x}{(2k+1)^2} + \sum\frac{(-1)^{n+1}}{n}\sin nx$
- From HW5: $\cos\frac{\pi x}{L} = \frac8\pi\sum_{k\ge1}\frac{k}{4k^2 - 1}\sin\frac{2k\pi x}{L}$ (sine) and $\sin\frac{\pi x}{L} = \frac2\pi - \frac4\pi\sum_{k\ge1}\frac{1}{4k^2 - 1}\cos\frac{2k\pi x}{L}$ (cosine)

**Summing a series by plugging in a point:** pick an $x$ where you know $f$ and the series converges to it. $x^2$ at $x = \pi$ gives $\sum\frac1{n^2} = \frac{\pi^2}{6}$, and at $x = 0$ gives $\sum\frac{(-1)^{n+1}}{n^2} = \frac{\pi^2}{12}$. The cosine series of $x$ at $0$ gives $\sum_{n\text{ odd}}\frac1{n^2} = \frac{\pi^2}{8}$. The sine series of $x$ ($L = 1$) at $x = \frac12$ gives $1 - \frac13 + \frac15 - \dots = \frac\pi4$.

### 3.6 Parseval and Bessel
**Full series** (on the sheet):
$$
\frac1L\int_{-L}^Lf^2\,dx = \frac{a_0^2}{2} + \sum_{n=1}^\infty(a_n^2 + b_n^2)
$$
**Half-range** (from the odd or even extension): sine series $\frac2L\int_0^Lf^2 = \sum b_n^2$; cosine series $\frac2L\int_0^Lf^2 = \frac{a_0^2}{2} + \sum a_n^2$.

**Bessel's inequality:** the mean-square error $E_N = \frac1L\int(f - S_N)^2 = \frac1L\int f^2 - \big[\frac{a_0^2}{2} + \sum_{n\le N}(a_n^2 + b_n^2)\big]$ is $\ge 0$. So the partial sums of squares are at most $\frac1L\int f^2$, and $E_N$ decreases as $N$ grows. Parseval is the statement $E_N \to 0$: the energy of $f$ equals the sum of the energies of its components (Pythagoras in infinitely many dimensions).

**Workflow:** compute the coefficients, square them and add, then solve for the unknown sum.
- **L18:** $x^2$ on $(-\pi, \pi)$, with $a_0 = \frac{2\pi^2}{3}$ and $a_n = \frac{4(-1)^n}{n^2}$. Then $\frac1\pi\int_{-\pi}^\pi x^4 = \frac{2\pi^4}{5} = \frac{2\pi^4}{9} + 16\sum\frac1{n^4}$, so $\sum\frac1{n^4} = \frac{\pi^4}{90}$.
- **A6 supplementary:** the triangle wave $\lvert x\rvert$ on $(-\ell, \ell)$, with $a_0 = \ell$ and $a_n = -\frac{4\ell}{(n\pi)^2}$ for odd $n$. This gives $\sum_{n\text{ odd}}\frac1{n^4} = \frac{\pi^4}{96}$.

### 3.7 Complex form and Fourier transform
$$
f(x) = \sum_{n=-\infty}^{\infty}c_ne^{in\pi x/L}, \qquad c_n = \frac{1}{2L}\int_{-L}^Lf(x)e^{-in\pi x/L}\,dx
$$
- The link to $a_n$, $b_n$: $c_0 = \frac{a_0}{2}$, $c_n = \frac{a_n - ib_n}{2}$, $c_{-n} = \frac{a_n + ib_n}{2}$ (so $c_{-n} = \overline{c_n}$ for real $f$). Going back: $a_n = c_n + c_{-n}$ and $b_n = i(c_n - c_{-n})$.
- Derivation: substitute $\cos\theta = \frac{e^{i\theta} + e^{-i\theta}}{2}$ and $\sin\theta = \frac{e^{i\theta} - e^{-i\theta}}{2i}$, then collect $e^{\pm in\pi x/L}$.
- **L18 example:** $f = 0$ on $(-\pi, 0)$ and $1$ on $(0, \pi)$. Then $c_n = \frac{1}{2\pi}\int_0^\pi e^{-inx}\,dx = \frac{1 - (-1)^n}{2\pi in}$, which is $\frac{1}{i\pi n}$ for odd $n$ and $0$ for even $n \ne 0$, with $c_0 = \frac12$.
- **Fourier transform** (L19, the limit $L \to \infty$ with $k = \frac{n\pi}{L}$): $\hat f(k) = \int_{-\infty}^\infty f(x)e^{-ikx}\,dx$ and $f(x) = \frac1{2\pi}\int_{-\infty}^\infty\hat f(k)e^{ikx}\,dk$.

---

## 4. Inhomogeneous heat problems (L19–22) ★
This is Q1 on every past MT2 (50–60 marks).

### 4.1 The recipe
$$
u_t = \alpha^2u_{xx} - \beta^2u + S(x,t), \qquad \text{BCs at } x = 0, L, \qquad u(x,0) = f(x)
$$
($\beta = 0$ unless there's heat loss.)

1. **Eigenfunctions.** Make the BCs homogeneous and read $X_n$ and $\mu_n$ off the §3.1 table. Write this down early; it's easy marks.
2. **Homogenize.** Choose $w(x,t)$ that satisfies the actual BCs (§4.2) and let $v = u - w$.
3. **The $v$ problem.**
$$
v_t = \alpha^2v_{xx} - \beta^2v + F(x,t), \qquad F = S - \big(w_t - \alpha^2w_{xx} + \beta^2w\big)
$$
   with homogeneous BCs and $v(x,0) = g(x) := f(x) - w(x,0)$. ==Look for cancellation in $F$ now.==
4. **Expand.** $v = \sum T_n(t)X_n(x)$, $F = \sum F_n(t)X_n(x)$ and $g = \sum c_nX_n$, where $F_n = \frac{\langle F, X_n\rangle}{\langle X_n, X_n\rangle}$ (treat $t$ as a constant) and $c_n$ is found the same way.
5. **Mode ODEs.** Substitute, using $X_n'' = -\mu_n^2X_n$, to get $\sum\big[T_n' + k_nT_n - F_n\big]X_n = 0$. The $X_n$ are linearly independent (orthogonal), so each bracket is zero:
$$
\boxed{T_n' + k_nT_n = F_n(t), \qquad T_n(0) = c_n, \qquad k_n = \alpha^2\mu_n^2 + \beta^2}
$$
6. **Solve** each ODE (§4.3) and **report** $u = w + \sum T_nX_n$. Check the BCs, the value at $t = 0$, and the behaviour as $t \to \infty$.

> [!tip] Constant BCs and a source $S(x)$ that doesn't depend on $t$
> Take $w$ to be the **steady state**: $\alpha^2w'' - \beta^2w + S(x) = 0$ with the BCs. Then $F = 0$, the $v$ problem is plain separation of variables, and $T_n = c_ne^{-k_nt}$. (L19, L20, L21a.)
> E.g. L21a: $u_t = \alpha^2u_{xx} + x$, $u(0) = u_0$, $u(L) = u_1$ gives $w = \frac{x(L^2 - x^2)}{6\alpha^2} + \frac{u_1 - u_0}{L}x + u_0$.

### 4.2 Choosing $w$
| BCs | $w(x,t)$ | $w_{xx}$ |
|---|---|---|
| $u(0) = \phi_0(t)$, $u(L) = \phi_1(t)$ | $\phi_0 + (\phi_1 - \phi_0)\frac xL$ | $0$ |
| $u(0) = \phi_0(t)$, $u_x(L) = q_1(t)$ | $\phi_0 + q_1x$ | $0$ |
| $u_x(0) = q_0(t)$, $u(L) = \phi_1(t)$ | $\phi_1 + q_0(x - L)$ | $0$ |
| $u_x(0) = q_0(t)$, $u_x(L) = q_1(t)$ | $q_0x + (q_1 - q_0)\frac{x^2}{2L}$ | $\frac{q_1 - q_0}{L}$ |

- $w$ is linear in $x$ whenever at least one end is Dirichlet. With Neumann at both ends it has to be quadratic, because a line can't have two different slopes.
- ==Any $w$ that satisfies the BCs gives the same final $u$.== A smarter $w$ just makes $F$ simpler.
- **Neumann at both ends with constant $q_0 \ne q_1$ and no source:** there's no steady state, because the net heat flux in isn't zero and the temperature keeps rising. L19 adds a $t$ term so that $w$ solves the heat equation: $w = \frac{q_1 - q_0}{2L}x^2 + q_0x + \alpha^2\frac{q_1 - q_0}{L}t$. Without the $t$ term, $F$ picks up the constant $\alpha^2\frac{q_1 - q_0}{L}$, which feeds the $n = 0$ mode through $T_0' = F_0$. Both versions work.
- **Steady state with Neumann at both ends** (and no heat loss) exists only if the net heat input is zero: $\alpha^2(q_1 - q_0) + \int_0^LS\,dx = 0$. With a $-\beta^2u$ term there's always a steady state, because the loss balances any input. A6 P5 has $u_x(0) = 1$, $u_x(1) = 2$ and still settles.
- **Robin BCs** like $u_x(2) + u(2) = 4$ (A6 P6c): substitute the general steady state ($Ax + B$, or the cosh/sinh form) into the condition like any other BC.
- **Physical meaning:** $u_x(L) = q > 0$ means heat flows ==into== the bar at $x = L$, since the flux is $-ku_x$.

### 4.3 Solving the mode ODEs
$T' + kT = F(t)$ with $T(0) = c$. Multiply by the integrating factor $e^{kt}$ to get $(e^{kt}T)' = e^{kt}F$, so
$$
T(t) = c\,e^{-kt} + \int_0^te^{-k(t-s)}F(s)\,ds
$$
All of these were checked numerically:

| $F(t)$ | $T(t)$ |
|---|---|
| $0$ | $ce^{-kt}$ |
| $A$ | $\frac Ak + \left(c - \frac Ak\right)e^{-kt}$ |
| $Ae^{-bt}$, $b \ne k$ | $\frac{A}{k - b}\left(e^{-bt} - e^{-kt}\right) + ce^{-kt}$ |
| $Ae^{bt}$ | $\frac{A}{k + b}\left(e^{bt} - e^{-kt}\right) + ce^{-kt}$ |
| $At$ | $A\left(\frac tk - \frac{1 - e^{-kt}}{k^2}\right) + ce^{-kt}$ |
| $Ae^{-kt}$ (resonance) | $(At + c)e^{-kt}$ |
| anything, with $k = 0$ (the $n = 0$ cosine mode) | $c + \int_0^tF(s)\,ds$ |

- The ODE is linear, so for a sum of forcings, add the rows (e.g. $A(1 + e^{-t})$ is row 2 plus row 3 with the same $c$ counted once).
- "Assume $\beta$ is not an integer" on an exam is there to rule out resonance ($b = k_n$).

### 4.4 Heat loss $-\beta^2u$ (L20)
$u_t = \alpha^2u_{xx} - \beta^2u$ models heat leaking out through the sides at a rate proportional to $u$. A5's chemical diffusion $C_t = kC_{xx} - LC$ has the same form.
- **Separation:** $\frac{T'}{\alpha^2T} + \frac{\beta^2}{\alpha^2} = \frac{X''}{X} = -\mu^2$. The $X_n$ are the same as before, and $T_n = e^{-(\alpha^2\mu_n^2 + \beta^2)t}$, so ==every mode picks up an extra factor $e^{-\beta^2t}$==. With homogeneous BCs this is the same as writing $u = e^{-\beta^2t}\tilde u$, where $\tilde u$ solves the plain heat equation.
- **Steady state:** $\alpha^2w'' - \beta^2w = 0$, so $w = A\cosh\frac{\beta x}{\alpha} + B\sinh\frac{\beta x}{\alpha}$. Use cosh and sinh rather than exponentials, since $\cosh 0 = 1$, $\sinh 0 = 0$ and they differentiate into each other. A useful trick: $\cosh\frac{\beta(x - L)}{\alpha}$ has zero slope at $x = L$, and $\sinh\frac{\beta(x - L)}{\alpha}$ is zero there.
- **L20 result** for $u(0) = u_0$, $u_x(L) = q_1$:
$$
w = u_0\frac{\cosh\frac\beta\alpha(x - L)}{\cosh\frac{\beta L}{\alpha}} + \frac{q_1\alpha}{\beta}\frac{\sinh\frac{\beta x}{\alpha}}{\cosh\frac{\beta L}{\alpha}}, \qquad
u = w + \sum_{n\ge1}b_ne^{-(\alpha^2\mu_n^2 + \beta^2)t}\sin\mu_nx
$$
  with $\mu_n = \frac{(2n-1)\pi}{2L}$ and $b_n = \frac2L\int_0^L(f - w)\sin\mu_nx\,dx$. As $t \to \infty$, $u \to w$, which sags below a straight line because heat leaks out along the bar.

### 4.5 Long-time behaviour
| Setup | $u$ as $t \to \infty$ |
|---|---|
| Dirichlet $0, 0$, or mixed with a $u = 0$ end | $0$ |
| Dirichlet $u_0, u_1$ | $u_0 + (u_1 - u_0)\frac xL$ |
| Insulated ($u_x = 0$ at both ends) or ring | the average of $f$: $\frac1L\int_0^Lf$ (on a ring, $\frac{1}{2L}\int_{-L}^Lf$) |
| Neumann with $q_0 \ne q_1$ | no steady state; grows like $\alpha^2\frac{q_1 - q_0}{L}t$ |
| Source $S(x)$, constant BCs | solve $\alpha^2w'' + S = 0$ |
| Heat loss | the cosh/sinh profile (or $0$ with homogeneous BCs) |
| Time-dependent BCs or source | no steady state in general; $u$ tracks $w$ plus the forced modes |

Lower modes decay slowest, so for large $t$, $u \approx w + T_1X_1$.

### 4.6 Worked example (L22)
$u_t = u_{xx} + e^{-2t}\sin5\pi x + (1 - x)$ on $0 < x < 1$, $\ u(0,t) = t$, $u(1,t) = 0$, $\ u(x,0) = \sin\pi x$.
1. Dirichlet BCs, so $X_n = \sin n\pi x$ and $\mu_n = n\pi$.
2. Row 1 of §4.2: $w = t(1 - x)$, so $w_t = 1 - x$ and $w_{xx} = 0$.
3. $F = e^{-2t}\sin5\pi x + (1 - x) - (1 - x) = e^{-2t}\sin5\pi x$ (it cancels). $g = \sin\pi x - 0 = \sin\pi x$.
4. Only one mode is forced and only one has initial data: $F_n = e^{-2t}\delta_{n5}$ and $c_n = \delta_{n1}$.
5. $T_n' + n^2\pi^2T_n = e^{-2t}\delta_{n5}$ with $T_n(0) = \delta_{n1}$.
6. $T_1 = e^{-\pi^2t}$ and $T_5 = \frac{e^{-2t} - e^{-25\pi^2t}}{25\pi^2 - 2}$; every other $T_n$ is $0$.
$$
u = t(1 - x) + e^{-\pi^2t}\sin\pi x + \frac{e^{-2t} - e^{-25\pi^2t}}{25\pi^2 - 2}\sin5\pi x
$$
The handwritten notes (L22 p. 8) have $(5\pi)^2 - 5$ in one denominator; it should be $(5\pi)^2 - 2$. I checked the residual numerically.

### 4.7 Worked example (HW7 #1, yours)
$u_t = u_{xx} + e^{-t}\cos\frac{3\pi x}{2} + 1$ on $(0, 1)$, $\ u_x(0,t) = 1$, $u(1,t) = t$, $\ u(x,0) = 1$.
- Mixed B, so $X_n = \cos\mu_nx$ with $\mu_n = \frac{(2n-1)\pi}{2}$. The source $\cos\frac{3\pi x}{2}$ is the $n = 2$ mode.
- Row 3: $w = t + (x - 1)$. Then $w_t = 1$ cancels the $+1$, leaving $F = e^{-t}\cos\frac{3\pi x}{2}$.
- $g = 1 - (x - 1) = 2 - x$ isn't an eigenfunction, so project it: $c_n = 2\int_0^1(2 - x)\cos\mu_nx\,dx = \frac{2(-1)^{n+1}}{\mu_n} + \frac{2}{\mu_n^2}$.
- $T_n = c_ne^{-\mu_n^2t} + \delta_{n2}\frac{e^{-t} - e^{-\mu_2^2t}}{\mu_2^2 - 1}$ with $\mu_2^2 = \frac{9\pi^2}{4}$.
- $u = x + t - 1 + \sum_{n\ge1}T_n(t)\cos\mu_nx$.

**HW7 #2**, where your answer left $T_n$ as an integral: here $F = (1 - x)(1 + e^{-t})$ doesn't cancel, so every mode is forced with $F_n = b_n(1 + e^{-t})$, where $b_n = \frac{4}{(2n-1)\pi} + \frac{8(-1)^n}{(2n-1)^2\pi^2}$. With $k_n = \alpha^2\mu_n^2$ the closed form is
$$
T_n = \delta_{n2}e^{-k_nt} + b_n\left[\frac{1 - e^{-k_nt}}{k_n} + \frac{e^{-t} - e^{-k_nt}}{k_n - 1}\right]
$$

> [!warning] Traps
> - Forgetting $w_t$ in $F$. When the BCs depend on $t$, $w_t \ne 0$.
> - Forgetting to subtract $w(x,0)$ from the IC.
> - Using $\frac{n\pi}{L}$ for mixed BCs. They're odd multiples of $\frac{\pi}{2L}$.
> - Claiming a function is an eigenfunction when it isn't. Check that its frequency is on your $\mu_n$ list.
> - Dropping the $n = 0$ mode for Neumann or periodic BCs. Its ODE is $T_0' = F_0$, with no decay.
> - Mixing up normalizations: the constant term is $\frac1L\int_0^Lf$ (the average), not $\frac2L\int_0^Lf$.
> - Resonance: if $b = k_n$, the answer is $(At + c)e^{-kt}$, not a fraction with a zero denominator.
> - With heat loss, every mode decays at $\alpha^2\mu_n^2 + \beta^2$, not $\alpha^2\mu_n^2$, and $F$ includes $-\beta^2w$. In A7 P4 that term is exactly what cancels $w_t$.
> - Reporting $v$ instead of $u = w + v$.

---

## 5. Practice, in priority order
Files are in `MATH316/MT2_Prep/`.
- [ ] **Past MT2 Q1s**, 25 min each, closed book: `PracticeMidterms/m257_316_midterm2_sec101_w2018.pdf`, `PracticeMidterms/m257_316_midterm2_sec102_w2018.pdf`, `PracticeMidterms/M257_316_MT_2_202.pdf`. Skip every Q2 (wave equation). Official solutions for the 2023 exam: `~/Downloads/MT2_202_Solutions.pdf`
- [ ] **A7** (`Assignments/M257_316_assignment7_2026.pdf`): P1 and P2 from a blank page (you've done them), then P3 and P4, which your HW7 scan doesn't include
- [ ] **A6** (`Assignments/M257_316_assignment6_2026.pdf`): P1 (one IC, four BC types, four extensions), P2 (periodic BCs, summing a series), P3 (complex series), P4–P5 (steady state, then separation of variables; P5 adds heat loss), P6 (steady states)
- [ ] **A5** (`Assignments/M257_316_assignment5_2026.pdf`): P1–P3 are in your HW5; P4 (the eigenfunction trap) and P5 (triangle IC) aren't
- [ ] **Lecture examples from a blank page:** L22 (§4.6), L22 example with source $xt$ and $u_x(0) = \frac{t^2}{2}$, L21 sources $x$ and $xt$, L20 heat loss, L19 Neumann with $q_1 \ne q_2$
- [ ] **A4:** P1 separability, P2 eigenvalue problems (all three cases each), P3 convection–diffusion scheme, P4 separation of variables plus finite differences by hand
- [ ] If there's time left, the supplementary sets in `AdditionalProblemSets/`: A6 supplementary P1c (triangle wave plus Parseval), A7 supplementary P1–P3, A5 supplementary P1 (sketch extensions) and P2 (diffusion with consumption, i.e. heat loss)

Every answer in the keys below was checked numerically or by substituting it back into the PDE, BCs and IC.

> [!example]- Setup checks for the past Q1s (open only after trying)
> **2018, sec 101:** mixed A on $(0, \frac\pi2)$, so $X_n = \sin(2n-1)x$. $w = 1 + xe^{-2t}$; then $-w_t = 2xe^{-2t}$ cancels the $-2xe^{-2t}$, leaving $F = e^{-2t}\sin5x$ ($n = 3$). $g = \sin x$ ($n = 1$).
> $$u = 1 + xe^{-2t} + e^{-t}\sin x + \frac{e^{-2t} - e^{-25t}}{23}\sin5x$$
> **2018, sec 102:** Neumann at both ends, so $X_n = \cos nx$ with $n \ge 0$. $w = x^2 + \pi x$; then $w_{xx} = 2$ cancels the $-2$, leaving $F = e^{-\beta t}\cos3x$. $g = \cos x - \pi x$, and using the hint, $-\pi x = -\frac{\pi^2}{2} + \sum_{n\text{ odd}}\frac{4}{n^2}\cos nx$.
> $$u = x^2 + \pi x - \frac{\pi^2}{2} + 5e^{-t}\cos x + \frac{e^{-\beta t} - e^{-9t}}{9 - \beta}\cos3x + \sum_{n\text{ odd}\ge3}\frac{4}{n^2}e^{-n^2t}\cos nx$$
> **2023, sec 202:** mixed B on $(0, \pi)$, so $X_n = \cos\frac{(2n-1)x}{2}$. $w = t$; then $w_t = 1$ cancels the $+1$, leaving $F = e^t\cos\frac{5x}{2}$ ($n = 3$, $\mu_3^2 = \frac{25}{4}$). $g = 0$.
> $$u = t + \frac{4}{29}\left(e^t - e^{-25t/4}\right)\cos\frac{5x}{2}$$
> I checked each of these by substituting it back into the PDE, BCs and IC.

> [!example]- A7 answer key
> **P1, P2:** see §4.7.
> **P3:** $w = t$ (since $w_x(0) = 0$ and $w(1) = t$), and $w_t = 1$ cancels the $+1$, leaving $F = xt$. Mixed B gives $\mu_n = \frac{(2n-1)\pi}{2}$, and $v(x,0) = 0$. Then $F_n = A_nt$ with $A_n = 2\int_0^1x\cos\mu_nx\,dx = 2\Big[\frac{(-1)^{n+1}}{\mu_n} - \frac{1}{\mu_n^2}\Big]$, and the $At$ row of §4.3 gives
> $$u = t + \sum_{n\ge1}A_n\left[\frac{t}{\mu_n^2} - \frac{1 - e^{-\mu_n^2t}}{\mu_n^4}\right]\cos\mu_nx$$
> **P4:** $w = xe^{-t}$. Then $w_t - w_{xx} + w = -xe^{-t} + xe^{-t} = 0$, so the heat-loss term cancels $w_t$ and leaves $F = e^{-t}\sin x$. Mixed A on $(0, \frac\pi2)$ gives $X_n = \sin(2n-1)x$, so $\sin x$ is the $n = 1$ mode, with $k_1 = 1^2 + 1 = 2$. And $v(x,0) = x - x = 0$.
> $$u = xe^{-t} + \left(e^{-t} - e^{-2t}\right)\sin x$$

> [!example]- A6 answer key
> **P1:** $f = 1$ on $[0, 1)$ and $0$ on $[1, 2]$, with $L = 2$, so every coefficient only needs $\int_0^1$.
> - (a) Neumann: $u = \frac12 + \sum_{n\ge1}\frac{2\sin(n\pi/2)}{n\pi}e^{-n^2\pi^2t/4}\cos\frac{n\pi x}{2}$. The extension is even with period 4: $1$ on $(4k-1, 4k+1)$ and $0$ on $(4k+1, 4k+3)$.
> - (b) Dirichlet: $b_n = \frac{2(1 - \cos(n\pi/2))}{n\pi}$, modes $e^{-n^2\pi^2t/4}\sin\frac{n\pi x}{2}$. The extension is odd with period 4: $1$ on $(4k, 4k+1)$, $0$ on $(4k+1, 4k+3)$, $-1$ on $(4k+3, 4k+4)$.
> - (c) Mixed B with $\mu_n = \frac{(2n-1)\pi}{4}$: $c_n = \frac{\sin\mu_n}{\mu_n}$, modes $e^{-\mu_n^2t}\cos\mu_nx$. The extension has period 8 (odd across $x = 2$, even across $0$). On $[-6, 6]$ it's $0, -1, 0, 1, 0, -1, 0$ on $(-6,-5), (-5,-3), (-3,-1), (-1,1), (1,3), (3,5), (5,6)$.
> - (d) Mixed A with the same $\mu_n$: $c_n = \frac{1 - \cos\mu_n}{\mu_n}$, modes $e^{-\mu_n^2t}\sin\mu_nx$. The extension has period 8 (even across $x = 2$, odd across $0$). On $[-6, 6]$ it's $0, 1, -1, 0, -1, 1, 0, 1, -1, 0$ on $(-6,-5), (-5,-4), (-4,-3), (-3,-1), (-1,0), (0,1), (1,3), (3,4), (4,5), (5,6)$.
>
> **P2:** $2L = 2$, so $L = 1$. The coefficients are $\frac{a_0}{2} = \frac14$, $a_n = \frac{1 - (-1)^n}{n^2\pi^2}$ and $b_n = \frac{1}{n\pi}$, giving $u = \frac14 + \sum e^{-n^2\pi^2t}\big[a_n\cos n\pi x + b_n\sin n\pi x\big]$. The extension ramps from 1 down to 0 on $(2k, 2k+1)$ and is 0 on $(2k+1, 2k+2)$, so it jumps at the even integers. At $x = 0$ the series gives the jump average: $\frac12 = \frac14 + \frac{2}{\pi^2}\sum_{k\ge0}\frac{1}{(2k+1)^2}$, so $\sum\frac{1}{(2k+1)^2} = \frac{\pi^2}{8}$.
> **P3:** $c_n = \frac12\int_{-1}^1e^{(\alpha - in\pi)x}\,dx = \frac{(-1)^n\sinh\alpha}{\alpha - in\pi}$ (using $e^{\pm in\pi} = (-1)^n$), so $e^{\alpha x} = \sinh\alpha\sum_{n=-\infty}^{\infty}\frac{(-1)^n}{\alpha - in\pi}e^{in\pi x}$.
> **P4:** $u_\infty = x - 1$. Then $v_t = v_{xx}$ with $v_x(0) = v(1) = 0$ and $v(x,0) = 1 - x$. Mixed B with $\mu_n = \frac{(2n-1)\pi}{2}$ gives $c_n = \frac{2}{\mu_n^2}$:
> $$u = x - 1 + \sum_{n\ge1}\frac{8}{(2n-1)^2\pi^2}e^{-\mu_n^2t}\cos\mu_nx$$
> **P5:** The steady state solves $w'' - w + x = 0$, so $w = x + A\cosh x + B\sinh x$, and the BCs give $B = 0$, $A = \frac{1}{\sinh1}$. Then $v_t = v_{xx} - v$ with Neumann BCs and $v(x,0) = -\frac{\cosh x}{\sinh1}$. The hint integral gives $A_0 = -1$ and $A_n = -\frac{2(-1)^n}{n^2\pi^2 + 1}$:
> $$u = x + \frac{\cosh x}{\sinh1} - e^{-t} - 2\sum_{n\ge1}\frac{(-1)^n}{n^2\pi^2 + 1}e^{-(n^2\pi^2 + 1)t}\cos n\pi x$$
> Because of the heat loss, even the $n = 0$ mode decays (that's the $-e^{-t}$).
> **P6:** (a) $1 + \frac x\pi$ (b) $5$ (c) $\frac{4x}{3}$ (d) $\frac{\sinh\beta(\pi - x) + 2\sinh\beta x}{\sinh\beta\pi}$ (e) $\frac{2\cosh\beta x + \frac1\beta\sinh\beta(x - \pi)}{\cosh\beta\pi}$

> [!example]- A5 answer key
> **P1:** (a) $b_n = 0$ for odd $n$, so $\cos\frac{\pi x}{L} = \frac8\pi\sum_{k\ge1}\frac{k}{4k^2 - 1}\sin\frac{2k\pi x}{L}$. (b) $b_n = \frac{L}{n\pi}\big[2(-1)^{n+1} + \cos\frac{n\pi}{2}\big] - \frac{2L}{n^2\pi^2}\sin\frac{n\pi}{2}$.
> **P2:** (a) $\sin\frac{\pi x}{L} = \frac2\pi - \frac4\pi\sum_{k\ge1}\frac{1}{4k^2 - 1}\cos\frac{2k\pi x}{L}$. (b) The constant term is $\frac{3L}{8}$, and $a_n = \frac{2L}{n^2\pi^2}\big[(-1)^n - \cos\frac{n\pi}{2}\big] - \frac{L}{n\pi}\sin\frac{n\pi}{2}$.
> **P3:** $u = e^{-\pi^2t/4}\cos\frac{\pi x}{2} + e^{-\pi^2t}\sin\pi x$. Since $L = 2$, $\sin\pi x$ is the $n = 2$ sine mode.
> **P4:** Mixed A on $(0, \pi)$ gives $X_n = \sin\frac{(2n-1)x}{2}$ with decay $e^{-3(2n-1)^2t/4}$. $\sin\frac{3x}{2}$ is the $n = 2$ mode, but ==$\sin x$ is not an eigenfunction==, so it has to be projected. By product-to-sum, $\int_0^\pi\sin x\sin\mu_nx\,dx = \frac{(-1)^{n+1}}{1 - \mu_n^2}$:
> $$u = \sum_{n\ge1}c_ne^{-3(2n-1)^2t/4}\sin\tfrac{(2n-1)x}{2}, \qquad c_n = \frac{8(-1)^{n+1}}{\pi(3 - 2n)(2n + 1)} + \delta_{n2}$$
> **P5:** Dirichlet, with $b_n = \frac{4L}{n^2\pi^2}\sin\frac{n\pi}{2}$ (zero for even $n$):
> $$u = \frac{4L}{\pi^2}\sum_{k\ge0}\frac{(-1)^k}{(2k+1)^2}e^{-\alpha^2(2k+1)^2\pi^2t/L^2}\sin\frac{(2k+1)\pi x}{L}$$

> [!example]- A4 answer key
> **P1(a)** (i) $x^2u_{xx} = tu_t$ separates: $x^2X'' - \lambda X = 0$ and $tT' - \lambda T = 0$. (ii) $u_{xx} + (x + y)u_{yy} = 0$ doesn't, since $\frac{X''}{X} = -(x + y)\frac{Y''}{Y}$ still mixes $x$ and $y$.
> **P1(b)** $\frac{T'}{\alpha^2T} = \frac{X''}{X} + \frac{Y''}{Y}$, so $X'' + \mu X = 0$, $Y'' + \nu Y = 0$ and $T' + \alpha^2(\mu + \nu)T = 0$.
> **P2** (a) $\lambda_n = \big(\frac{(2n-1)\pi}{2}\big)^2$, $y_n = \cos\frac{(2n-1)\pi x}{2}$. (b) $r = -1 \pm\sqrt{1 - \lambda}$; $\lambda \le 1$ gives only the trivial solution; $\lambda_n = 1 + n^2$, $y_n = e^{-x}\sin nx$. (c) $\lambda_n = \big(\frac{(2n-1)\pi}{2\ln2}\big)^2$, $y_n = \sin\frac{(2n-1)\pi\ln x}{2\ln2}$. (d) $\lambda_n = n^2$, $y_n = \cos nx$, $n \ge 0$ (including $\lambda_0 = 0$, $y_0 = 1$). (e) $\lambda_n = \big(\frac{n\pi}{2}\big)^2$, $y_n = \sin\frac{n\pi x}{2}$. (f) $r = -1 \pm\sqrt{1 - \lambda}$; $\lambda = 1$ is trivial; $\lambda_n = 1 + \big(\frac{n\pi}{\ln3}\big)^2$, $y_n = \frac1x\sin\frac{n\pi\ln x}{\ln3}$.
> **P3** See §2: $O(\Delta t)$ in time and $O(\Delta x^2)$ in space with a centred $u_x$.
> **P4** See the example in §2.

## Mistake log
Write down every mistake from practice problems here and read the list the night before.
- 
