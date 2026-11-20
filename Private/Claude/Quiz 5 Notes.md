#math #RealAnalysis

# Quiz 5 Prep

## What's Likely

| Likelihood | What | Why |
| --- | --- | --- |
| Very likely | State a definition or theorem: derivative, MVT, Rolle, Fermat, EVT, removable discontinuity | Both earlier quizzes started with one |
| Likely | Q1 and Q2 word for word | They're short like HW5 Q1 and HW6 Q2, which were picked last time |
| Plausible | Q5 (Darboux) and Q3 | They're medium length, and the sheet already splits Q5 into parts (a)–(c) |
| Plausible | A close variant: Ex 4.2.12 (in Q6 below), Ex 4.2.1 ($\lvert\cos x-\cos y\rvert\leq\lvert x-y\rvert$), Ex 4.2.2 ($f'\neq 0$ gives at most one root) | They fit "closely related", and the text calls 4.2.12 "an excellent exam question" |
| Less likely in full | Q4 and Q6 | They're long multi-step proofs. Q6 is more likely to come up as the short MVT version |
| Unlikely in full | Q7 | It has three parts and two "iff" proofs. Part (a) alone, or (c) as a short answer, is plausible |

## Definitions

> [!info] Definition 4.1.1 · Derivative
> Let $f$ be defined on a neighbourhood of $c$. $f$ is *differentiable at $c$* if the following limit exists:
>$$
> f'(c)=\lim_{x\to c}\frac{f(x)-f(c)}{x-c}=\lim_{h\to 0}\frac{f(c+h)-f(c)}{h}
>$$

> [!info] Definition 4.2.2 · Local Maximum and Minimum
> $c\in D$ is a *local maximum* of $f:D\to\mathbb R$ if there is $\delta>0$ such that $f(x)\leq f(c)$ for all $x\in(c-\delta,c+\delta)\cap D$. For a *local minimum*, use $f(x)\geq f(c)$.
>
> The $\cap D$ lets endpoints count as local extrema.

> [!info] Limits at Infinity · Used in Q3
> $\lim_{x\to\infty}f(x)=L$: for every $\varepsilon>0$ there is $R>0$ such that $x\geq R$ implies $|f(x)-L|<\varepsilon$.
>
> $\lim_{x\to\infty}f(x)=\infty$: for every $M>0$ there is $R>0$ such that $x\geq R$ implies $f(x)\geq M$.

> [!info] Lecture 12 · Darboux Function
> $f$ has the intermediate value property: for all $a<b$ and every $y$ between $f(a)$ and $f(b)$, there is $x\in[a,b]$ with $f(x)=y$. Continuous implies Darboux, but not conversely. Every derivative is Darboux (Q5).

> [!info] Sequential Criterion for Limits
> $\lim_{x\to c}g(x)=L$ if and only if $g(x_{n})\to L$ for *every* sequence $x_{n}\to c$ with $x_{n}\neq c$.
>
> So to show a limit doesn't exist, find two sequences $x_{n},y_{n}\to c$ such that $g(x_{n})$ and $g(y_{n})$ tend to different values. Q1(b) and Q7 both work this way.

## Theorems

Each result is used to prove the next: EVT → Lemma 4.2.1 → Fermat → Rolle → MVT → Corollary 4.3.1, Q2, Q3 and Q4. Darboux (Q5) uses the EVT, Lemma 4.2.1 and Fermat, and Q6 uses Darboux.

> [!theorem] Lemma 4.1.3 · Differentiable Implies Continuous
> If $f$ is differentiable at $c$, then $f$ is continuous at $c$. The converse is false, e.g. $|x|$ at $0$. This is HW9 Q1.

> [!theorem] Theorem 3.3.5 · Extreme Value Theorem
> If $f:[a,b]\to\mathbb R$ is continuous, there are $c,d\in[a,b]$ such that $f(c)\leq f(x)\leq f(d)$ for all $x\in[a,b]$.
>
> **Trap:** the interval must be closed and bounded. Q4 and Q5 both start with "by the EVT", so say why it applies.

> [!theorem] Lemma 4.2.1 · Positive Derivative
> If $f$ is differentiable at an interior point $c$ with $f'(c)>0$, there is $\delta>0$ such that $f(x)>f(c)$ for $x\in(c,c+\delta)$ and $f(x)<f(c)$ for $x\in(c-\delta,c)$. Reverse both inequalities when $f'(c)<0$.
>
> **Trap:** this compares $f(x)$ with $f(c)$ only. It does *not* say $f$ is increasing near $c$. For example, $f(x)=x+2x^2\sin(1/x)$ with $f(0)=0$ has $f'(0)=1$, but $f'\left( \frac{1}{2\pi n} \right)=-1$. So every interval around $0$ contains points where $f'<0$.

> [!theorem] Theorem 4.2.3 · Fermat
> Let $f$ be continuous on $[a,b]$. If $f$ has its max or min at $c$, then $c=a$ or $c=b$, or $f$ is not differentiable at $c$, or $f'(c)=0$.

> [!theorem] Theorem 4.2.4 · Rolle
> If $f$ is continuous on $[a,b]$, differentiable on $(a,b)$, and $f(a)=f(b)$, then there is $c\in(a,b)$ with $f'(c)=0$.
>
> Proof idea: by the EVT, $f$ has a max and a min on $[a,b]$. If either one is at an interior point, Fermat gives $f'=0$ there. Otherwise both are at endpoints. Then $\max f=\min f=f(a)=f(b)$, so $f$ is constant and $f'=0$ on all of $(a,b)$.

> [!theorem] Theorem 4.2.5 · Mean Value Theorem
> If $f$ is continuous on $[a,b]$ and differentiable on $(a,b)$, there is $c\in(a,b)$ such that:
>$$
> f(b)-f(a)=f'(c)(b-a)
>$$
> Proof idea: apply Rolle to $g(x)=f(x)-\frac{f(b)-f(a)}{b-a}(x-a)$, which has $g(a)=f(a)=g(b)$.
>
> **Trap:** check the hypotheses every time. If $f$ is differentiable on all of $\mathbb R$, say "differentiable, hence continuous (Q1)", and the MVT applies on any $[a,b]$.

> [!theorem] Theorem 4.2.6 · Cauchy MVT
> If $f,g$ are continuous on $[a,b]$ and differentiable on $(a,b)$, there is $c\in(a,b)$ such that:
>$$
> f'(c)\bigl(g(b)-g(a)\bigr)=g'(c)\bigl(f(b)-f(a)\bigr)
>$$
> Taking $g(x)=x$ gives the MVT. Proof idea: apply Rolle to $h=f\,(g(b)-g(a))-g\,(f(b)-f(a))$.

> [!theorem] Corollary 4.3.1 · Sign of $f'$ Gives Monotonicity
> Let $g$ be continuous on $[a,b]$ and differentiable on $(a,b)$. If $g'>0$ on $(a,b)$, then $g$ is strictly increasing on $[a,b]$. If $g'=0$, then $g$ is constant.
>
> Proof idea: for $x<y$, $g(y)-g(x)=g'(c)(y-x)$, which is $>0$ (or $=0$).

> [!theorem] Ex 4.2.10 · Darboux's Theorem · HW9 Q5
> If $g$ is differentiable on $[a,b]$ and $g'(a)<\lambda<g'(b)$, then $g'(c)=\lambda$ for some $c\in(a,b)$. This holds even though $g'$ need not be continuous.

## HW9

> [!question]- 1. Differentiable implies continuous, but $|x|$ shows the converse fails.
> For $x\neq c$:
>$$
> f(x)=f(c)+(x-c)\cdot\frac{f(x)-f(c)}{x-c}\longrightarrow f(c)+0\cdot f'(c)=f(c)
>$$
> For $|x|$ at $0$, the quotient $\frac{|h|}{h}$ is $1$ along $h_{n}=\frac{1}{n}$ and $-1$ along $h_{n}=-\frac{1}{n}$. So $f'(0)$ doesn't exist.
>
> **Trap:** also prove $|x|$ is continuous at $0$ (take $\delta=\varepsilon$). Otherwise you haven't shown the converse fails.

> [!question]- 2. If $|f'|\leq M$, then $|f(b)-f(a)|\leq M|b-a|$.
> Apply the MVT once:
>$$
> |f(b)-f(a)|=|f'(c)|\,|b-a|\leq M|b-a|
>$$

> [!question]- 3. If $f'\to L>0$, then $f\to\infty$ (Ex 4.3.3).
> Take $\varepsilon=\frac{L}{2}$ to get $R_{0}$ with $f'\geq c:=\frac{L}{2}$ on $[R_{0},\infty)$. For $x>R_{0}$, the MVT on $[R_{0},x]$ gives:
>$$
> f(x)\geq f(R_{0})+c(x-R_{0})
>$$
> Given $M>0$, let $R=R_{0}+\frac{M+|f(R_{0})|}{c}$. Then $x\geq R$ gives $f(x)\geq f(R_{0})+|f(R_{0})|+M\geq M$.
>
> **Trap:** $f(R_{0})$ can be negative, which is why $|f(R_{0})|$ appears. Your $R$ must work for *every* $x\geq R$, not just one $x$.

> [!question]- 4. If $|f'|\leq|f|$ on $(0,1)$ and $f(0)=0$, then $f\equiv 0$ on $[0,1]$.
> Fix $c<1$. The EVT gives $x_{0}\in[0,c]$ with $M=|f(x_{0})|=\max_{[0,c]}|f|$. If $x_{0}=0$, then $M=0$ at once. Otherwise the MVT on $[0,x_{0}]$ gives $t\in(0,x_{0})$ with:
>$$
> M=|f'(t)|\,x_{0}\leq|f(t)|\,x_{0}\leq Mc
>$$
> Since $c<1$, this forces $M=0$, so $f\equiv 0$ on $[0,c]$. For $x\in[0,1)$, take $c=\frac{1+x}{2}$. Finally, $f(1)=0$ by continuity along $x_{n}=1-\frac{1}{n+1}\to 1$.
>
> **Trap:** say why $|f(t)|\leq M$: $t\in(0,x_{0})\subseteq[0,c]$. Say why $c<1$ matters: at $c=1$ you only get $M\leq M$.

> [!question]- 5. Darboux: if $g'(a)<L<g'(b)$, then $g'(c)=L$ for some $c\in(a,b)$ (Ex 4.2.10).
> Let $h(x)=Lx-g(x)$. $g$ is differentiable, hence continuous, so $h$ is continuous on $[a,b]$. The EVT gives a max of $h$ at some $c$.
>
> - $h'(a)=L-g'(a)>0$, so Lemma 4.2.1 gives points just right of $a$ with $h(x)>h(a)$, and $c\neq a$.
> - $h'(b)=L-g'(b)<0$, so there are points just left of $b$ with $h(x)>h(b)$, and $c\neq b$.
>
> So $c\in(a,b)$, and Fermat gives $0=h'(c)=L-g'(c)$.
>
> **Trap:** don't apply the IVT to $g'$, which need not be continuous. The sheet has a typo: the second inequality should be $h(x)>h(b)$. If $g'(a)>g'(b)$, apply the result to $-g$.

> [!question]- 6. $f'$ has no removable (or jump) discontinuity (Ex 4.2.11).
> Start by writing what "removable" means: $\lim_{x\to c}f'(x)=\ell$ exists *and* $\ell\neq f'(c)$. Here $f'(c)$ always exists, because $f$ is differentiable everywhere.
>
> **HW proof (contrapositive, with Darboux).** Suppose $\ell<f'(c)$, and let $\lambda=\frac{\ell+f'(c)}{2}$. For any $\delta>0$, let $a=c-\frac{\delta}{2}$. Either $f'(a)\geq\lambda$ already, or Darboux on $[a,c]$ gives $x\in(a,c)$ with $f'(x)=\lambda$. So there are points arbitrarily close to $c$ with $|f'(x)-\ell|\geq\lambda-\ell$, and $f'\not\to\ell$.
>
> **Direct proof (MVT only).** Suppose $f'(x)\to\ell$ as $x\to c$. Let $\varepsilon>0$ and take $\delta$ with $|f'(t)-\ell|<\varepsilon$ for $0<|t-c|<\delta$. $f$ is continuous, so for $0<|x-c|<\delta$ the MVT gives $c_{x}$ strictly between $c$ and $x$ with:
>$$
> \frac{f(x)-f(c)}{x-c}=f'(c_{x})
>$$
> Since $0<|c_{x}-c|<\delta$, the quotient is within $\varepsilon$ of $\ell$, so $f'(c)=\ell$. Doing the same one side at a time shows that both one-sided limits of $f'$, when they exist, equal $f'(c)$, which rules out a jump. If the quiz says "use Darboux", give the HW proof instead.
>
> This is text Ex 4.2.12, "an excellent exam question" ($f'\to 3$ at $0$ implies $f'(0)=3$). The text leaves out that $f$ must be continuous at $0$, and the claim is false without it: take $f(x)=3x$ for $x\neq 0$ and $f(0)=1$.

> [!question]- 7. $f(x)=x^\alpha\sin(1/x)$, $f(0)=0$: differentiable iff $\alpha>1$; $f'$ continuous iff $\alpha>2$; the discontinuity at $\alpha=2$.
> The difference quotient at $0$ is $h^{\alpha-1}\sin(1/h)$.
> - $\alpha>1$: it is bounded by $|h|^{\alpha-1}\to 0$, so by the sandwich theorem $f'(0)=0$.
> - $\alpha\leq 1$: along $\frac{1}{2\pi n}$ the quotient is $0$, but along $\frac{1}{2\pi n+\pi/2}$ it is $\geq 1$.
>
> For $x\neq 0$:
>$$
> f'(x)=\alpha x^{\alpha-1}\sin(1/x)-x^{\alpha-2}\cos(1/x)
>$$
> - $\alpha>2$: $|f'(x)|\leq\alpha|x|^{\alpha-1}+|x|^{\alpha-2}\to 0$, so $f'$ is continuous.
> - $1<\alpha\leq 2$: $f'\left( \frac{1}{2\pi n} \right)=-(2\pi n)^{2-\alpha}\leq -1$, so $f'(x)\not\to 0$.
> - $\alpha=2$: $f'$ is bounded ($|f'(x)|\leq 2|x|+1$) but oscillates between about $\pm 1$. Along $\frac{1}{2\pi n}$, $f'=-1$, and along $\frac{1}{2\pi n+\pi}$, $f'=1$. So it is an oscillating discontinuity: not removable, not a jump, not infinite.
>
> | $x_{n}\to 0^+$ | $\sin(1/x_{n})$ | $\cos(1/x_{n})$ |
> | --- | --- | --- |
> | $\frac{1}{2\pi n}$ | $0$ | $1$ |
> | $\frac{1}{2\pi n+\pi/2}$ | $1$ | $0$ |
> | $\frac{1}{2\pi n+\pi}$ | $0$ | $-1$ |
>
> **Trap:** the "only if" directions need sequences, and the "if" directions need the sandwich. For $1<\alpha<2$, $f'$ is unbounded near $0$ as well.
