#math #DifferentialEquationsII #PDEs

# Integrating Factor for Mode ODEs

Every eigenfunction expansion ends with one first-order linear ODE per mode:
$$
V_n' + k_nV_n = F_n(t), \qquad V_n(0) = c_n
$$
This note solves one step by step with an integrating factor, using A7 P4. The setup (choosing $w$, getting the $v$ problem) is in [[18 Time-Dependent Boundary Conditions]]. The table of ready-made answers is in [[17 Eigenfunction Expansions]]. For a refresher on the method itself, see [[1.4 The Integrating Factor]].

## The problem (A7 P4)
After subtracting $w = xe^{-t}$:
$$
v_t = v_{xx} - v + e^{-t}\sin x, \qquad v(0,t) = 0, \quad v_x\!\left(\tfrac\pi2, t\right) = 0, \qquad v(x,0) = 0
$$
- Eigenfunctions (mixed A on $[0, \frac\pi2]$): $X_n = \sin\mu_nx$ with $\mu_n = 2n + 1$, $n = 0, 1, 2, \dots$
- So $\sin x$ is the ==$n = 0$== mode, and the source is $S_n(t) = e^{-t}\delta_{n0}$.

> [!note] Numbering
> The official solutions use $\mu_n = 2n + 1$ starting at $n = 0$, so the source sits on $\delta_{n0}$. Note 18 uses $2n - 1$ starting at $n = 1$, so it sits on $\delta_{n1}$. Same functions. Pick one and keep it.

## Getting the mode ODE
Substitute $v = \sum V_n(t)\sin\mu_nx$ and differentiate term by term:

| Term | As a sum over $\sin\mu_nx$ |
|---|---|
| $v_t$ | $\sum V_n'\sin\mu_nx$ |
| $v_{xx}$ | $\sum -\mu_n^2V_n\sin\mu_nx$ |
| $-v$ | $\sum -V_n\sin\mu_nx$ |
| source | $\sum e^{-t}\delta_{n0}\sin\mu_nx$ |

$$
0 = v_t - v_{xx} + v - e^{-t}\sin x = \sum_{n=0}^\infty\Big[V_n' + (1 + \mu_n^2)V_n - e^{-t}\delta_{n0}\Big]\sin\mu_nx
$$
By linear independence (orthogonality) of the $\sin\mu_nx$, every bracket is $0$. The IC $v(x,0) = 0$ gives $V_n(0) = 0$:
$$
\boxed{V_n' + (1 + \mu_n^2)V_n = e^{-t}\delta_{n0}, \qquad V_n(0) = 0}
$$
- The $+1$ in $1 + \mu_n^2$ is the heat loss ($-v$). ==It adds $1$ to every decay rate.==

## Solving it with the integrating factor
**1. Standard form.** $y' + p\,y = q$ with $p = 1 + \mu_n^2$ (a constant) and $q = e^{-t}\delta_{n0}$.

**2. Integrating factor.**
$$
e^{\int p\,dt} = e^{(1 + \mu_n^2)t}
$$
The $t$ multiplies the whole bracket: it's $e^{(\mu_n^2 + 1)t}$, not $e^{\mu_n^2 + 1}\,t$.

**3. Multiply both sides by it.** The left side becomes a product-rule derivative:
$$
\frac{d}{dt}\Big[e^{(1 + \mu_n^2)t}\,V_n\Big] = e^{(1 + \mu_n^2)t}\cdot e^{-t}\,\delta_{n0}
$$

**4. Simplify the right side.** Same base, so add the exponents. The $+1$ from the integrating factor cancels the $-1$ from the source:
$$
e^{(1 + \mu_n^2)t}\cdot e^{-t} = e^{(1 + \mu_n^2)t - t} = e^{\mu_n^2t}
$$

**5. Integrate from $0$ to $t$.** $\delta_{n0}$ doesn't depend on $\tau$, so it comes out of the integral. Then use $\int e^{a\tau}\,d\tau = \frac{e^{a\tau}}{a}$ with $a = \mu_n^2$:
$$
\begin{aligned}
e^{(1 + \mu_n^2)t}\,V_n(t) - V_n(0) &= \delta_{n0}\int_0^t e^{\mu_n^2\tau}\,d\tau \\
&= \delta_{n0}\left[\frac{e^{\mu_n^2\tau}}{\mu_n^2}\right]_0^t \\
&= \delta_{n0}\,\frac{e^{\mu_n^2t} - 1}{\mu_n^2}
\end{aligned}
$$
- Dividing by $\mu_n^2 = (2n + 1)^2$ is fine because it's never $0$.
- The lower limit gives $e^0 = 1$, not $0$.

**6. Divide by the integrating factor.** Write $C_n = V_n(0)$:
$$
V_n(t) = \delta_{n0}\,\frac{e^{\mu_n^2t} - 1}{\mu_n^2}\,e^{-(1 + \mu_n^2)t} + C_n\,e^{-(1 + \mu_n^2)t}
$$
Multiply out the first term:
- $e^{\mu_n^2t}\cdot e^{-(1 + \mu_n^2)t} = e^{\mu_n^2t - t - \mu_n^2t} = e^{-t}$
- $1\cdot e^{-(1 + \mu_n^2)t} = e^{-(1 + \mu_n^2)t}$
$$
V_n(t) = \delta_{n0}\,\frac{e^{-t} - e^{-(1 + \mu_n^2)t}}{\mu_n^2} + C_n\,e^{-(1 + \mu_n^2)t}
$$

**7. Apply the IC.** $V_n(0) = 0$, so $C_n = 0$ for every $n$.

**8. Let the $\delta$ pick the mode.** Only $n = 0$ survives, with $\mu_0 = 1$:
$$
V_0(t) = \frac{e^{-t} - e^{-2t}}{1}, \qquad V_n(t) = 0 \text{ for } n \geq 1
$$
$$
\boxed{u(x,t) = xe^{-t} + \left(e^{-t} - e^{-2t}\right)\sin x}
$$

**Check:** $V_0' = -e^{-t} + 2e^{-2t}$ and $2V_0 = 2e^{-t} - 2e^{-2t}$. They add to $e^{-t}$, and $V_0(0) = 0$.

## Shortcut: set $n$ first
The $\delta$ is $0$ unless $n = 0$, so you can plug in $n = 0$ ($k = 1 + 1 = 2$) before doing anything:
$$
V_0' + 2V_0 = e^{-t} \;\Longrightarrow\; \big(e^{2t}V_0\big)' = e^{t} \;\Longrightarrow\; e^{2t}V_0 = \int_0^te^{\tau}\,d\tau = e^t - 1 \;\Longrightarrow\; V_0 = e^{-t} - e^{-2t}
$$
==This is faster on an exam.== Keeping $n$ general, as the solutions do, just shows where the $\frac{1}{\mu_n^2}$ comes from.

## The general formula
For $V' + kV = Ae^{-bt}$ with $V(0) = c$, the same steps give

| Case | $V(t)$ |
|---|---|
| $b \neq k$ | $ce^{-kt} + \dfrac{A}{k - b}\left(e^{-bt} - e^{-kt}\right)$ |
| $b = k$ (resonance) | $(At + c)\,e^{-kt}$ |

- In A7 P4: $k = 1 + \mu_n^2$ and $b = 1$, so $k - b = \mu_n^2$. That's the $\frac{1}{\mu_n^2}$ above.
- Resonance is when the exponents cancel completely in step 4. Then the integral is $\int_0^t1\,d\tau = t$.
- Without the heat loss, mode $0$ would have $k = 1 = b$, which is resonance. ==The heat loss is what avoids it here.==

## Definite or indefinite integral?
| You write | The constant is |
|---|---|
| $\int_0^t \dots\,d\tau + C_n$ | $C_n = V_n(0)$, the IC coefficient (as in A7 P4) |
| $\int \dots\,dt + C_n$ | not the IC coefficient in general. In A7 P1, $C_1 = c_1 - \frac{1}{k - 1}$. |

Both give the same $V_n$. With an indefinite integral, solve for the constant from $V_n(0)$ at the end, and don't call it $c_n$.

> [!warning] Traps
> - Writing $e^{\mu_n^2 + 1}t$ instead of $e^{(\mu_n^2 + 1)t}$.
> - Multiplying only the left side by the integrating factor.
> - Evaluating the lower limit as $0$ instead of $e^0 = 1$.
> - Dividing by $k - b$ when $k = b$. Check for resonance before using the formula.
> - Forgetting the $+1$ from heat loss in $k_n$, which here would create fake resonance.
> - Dividing only one term by the integrating factor in step 6.
