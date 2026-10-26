#math #math316

# Midterm 1 Review

**Mon Oct 26 · 50 min · closed book · formula sheet provided**
Covers lectures up to Fri Oct 16 and ==all of assignments 1–4==. Some questions are taken straight from the assignments.

## Notes
1. [[01 Cauchy-Euler Equations]]
2. [[02 Series Solutions at Ordinary Points]] (ratio test, radius of convergence, Wronskian)
3. [[03 Ordinary and Singular Points]]
4. [[04 Cauchy-Euler Singular Points]]
5. [[05 Legendre Equation]]
6. [[06 Frobenius Method]]
7. [[07 Bessel Equation]]
8. [[08 Intro to PDEs - Heat and Wave Equations]]
9. [[09 Numerical Methods for PDEs]]
10. [[10 Separation of Variables]] (eigenvalue problems, orthogonality)

## Which method?
- **Euler form** $ax^2y'' + bxy' + cy = f$ → try $y = x^r$ ([[01 Cauchy-Euler Equations]])
- **Constant coefficients** → try $y = e^{rx}$
- **Anything else, or "use a series about $x_0$"**:
	1. Classify $x_0$ ([[03 Ordinary and Singular Points]])
	2. Ordinary → $\sum a_nx^n$ ([[02 Series Solutions at Ordinary Points]])
	3. Regular singular → $\sum a_nx^{n+r}$ ([[06 Frobenius Method]])
- **"Find all eigenvalues and eigenfunctions"** → three cases ([[10 Separation of Variables]])
- **PDE + "discrete form" / "$u(x,t+\Delta t)$" / "order of accuracy"** → finite differences ([[09 Numerical Methods for PDEs]])
- **PDE + homogeneous BCs + IC, "solve"** → separation of variables ([[10 Separation of Variables]])

## Formula sheet
**Given:**
- Constant coefficient and Euler solution tables (distinct / repeated / complex roots)
- Ordinary point series form; regular singular point rearrangement, the limits $b$ and $c$, the indicial equation, and the three Frobenius cases for $y_2$
- Fourier, sine and cosine series coefficients; Parseval
- Trig and hyperbolic identities (sum formulas, $\sin^2$, $\cosh^2 - \sinh^2$)
- Sturm–Liouville properties; D'Alembert's formula
- The Taylor expansion of $f(x + \Delta x)$ is printed in the finite difference question

**Not given (memorize):**
- How to classify points ($p_0$, $q_0$ limits; what "analytic" means)
- Substitute → shift → peel off → recursion
- Ratio test on a recursion; $\rho \geq$ distance to the nearest (complex) singular point
- Finite difference formulas, their error orders, the explicit heat scheme
- The three-case eigenvalue procedure
- The Bessel and Legendre equations themselves
- Orthogonality integrals and product-to-sum identities

## Past midterm question types
| Exam | Questions (marks) |
|---|---|
| 2023, sec 202 | Classify points on $[0,\infty)$ + Frobenius, 3 terms each (50) · eigenvalue problem with all cases (25) · finite differences for $u_{tt} + ku_x = c^2u_{xx}$ + order of accuracy (25) |
| 2024, sec 201 | Bessel $\nu = \frac12$: regular singular + Frobenius + radius (60), same as A3 P3 · ordinary-point series + ratio test + radius by inspection (40) |

## Mistake log
Write down every mistake from practice problems here and read the list the night before.
- 
