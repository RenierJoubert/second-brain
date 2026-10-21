#math 

# MATH 319 Midterm Review (Thursday, Oct 22, 2026)

> [!info] Scope
> Lectures 1–11, which is textbook Chapter 1 through §3.2 (Rechnitzer & Martens notes).
> - **Not on it this year:** chains and constructing $\mathbb{R}$ (Appendix A). Skip those questions on old exams.
> - **New this year:** series (§2.6). Old midterms have no series questions, so expect at least one with no precedent. The textbook's Exercise 2.6.8 #10 literally says "Fully justify your answers (like you would on a midterm... cough cough)".
> - Continuity (Lectures 10–11) is the newest material, so check where the cutoff is.


!! Remind me to do proof of geometric series convergence and prove that polynomials are continuous !!

| Lecture | Topic | Textbook |
| --- | --- | --- |
| [[content/Notes/Math/Real Analysis/Lecture 1\|1]] | Well-ordering, induction, ordered fields | §1.4 |
| [[content/Notes/Math/Real Analysis/Lecture 2\|2]] | Density of $\mathbb{Q}$, Archimedes, sup/inf, LUB property | §1.4–1.5 |
| [[content/Notes/Math/Real Analysis/Lecture 3\|3]] | Triangle inequality, Archimedes in $\mathbb{R}$, density, nested intervals | §2.0–2.2 |
| [[content/Notes/Math/Real Analysis/Lecture 4\|4]] | Open and closed sets, bounded sets | §2.2 |
| [[content/Notes/Math/Real Analysis/Lecture 5 and 6\|5–6]] | Sequences, monotone convergence, B-W, Cauchy | §2.3 |
| [[content/Notes/Math/Real Analysis/Lecture 7\|7]] | Completeness, closed and bounded sets | §2.3–2.5 |
| [[content/Notes/Math/Real Analysis/Lecture 8\|8]]–[[content/Notes/Math/Real Analysis/Lecture 9\|9]] | Series | §2.6 |
| [[content/Notes/Math/Real Analysis/Lecture 10\|10]] | Limits of functions | §3.1 |
| [[content/Notes/Math/Real Analysis/Lecture 11\|11]] | Continuity, Bolzano, IVT | §3.2 |

## The Big Ideas

1. **$\mathbb{Q}$ has holes and $\mathbb{R}$ doesn't.** $\mathbb{R}$ is an ordered field with the least upper bound property, and it is the only one. For example $\sup\{ x : x^2<2 \} = \sqrt{2}$ exists in $\mathbb{R}$ but not in $\mathbb{Q}$. Almost every theorem in the course traces back to the supremum.
2. **Completeness has three equivalent forms.** LUB property $\iff$ nested interval property $\iff$ every Cauchy sequence converges (Theorem 2.4.1). We started from the LUB property and derived the other two. The textbook proves the reverse directions by bisection.
3. **Proving a limit exists without finding it.** Monotone + bounded $\implies$ converges (the limit is the sup). B-W gives a convergent subsequence. Cauchy $\implies$ convergent. Bolzano's root is the sup of a set. None of these tell you the value.
4. **Only the tail matters.** Finitely many terms never affect convergence, boundedness or comparison ("for sufficiently large $n$"). The usual pattern is to control the tail with $\varepsilon$ and the head with a max of finitely many terms.
5. **A series is a sequence of partial sums.** Every series result reduces to a sequence result: the Cauchy criterion for series, absolute $\implies$ convergent, and nonnegative series converge iff their partial sums are bounded. Absolute convergence makes series behave like finite sums (rearrangements, products). Conditional convergence is fragile (Riemann).
6. **Function limits reduce to sequences.** $\lim_{x\to a}f(x)=L$ iff $f(x_{n})\to L$ for every $x_{n}\to a$ with $x_{n}\neq a$. This lets you reuse sequence results (arithmetic of limits), and it is the easiest way to show a function is *not* continuous.
7. **Continuity + completeness $\implies$ IVT.** Bolzano: let $c=\sup\{ x : f(x)<0 \}$, then rule out $f(c)>0$ and $f(c)<0$ using sign persistence. It fails over $\mathbb{Q}$.
8. **Closed sets are the ones that keep their limits.** Closed $\iff$ contains the limit of every convergent sequence in it $\iff$ complete. Closed + bounded $\iff$ every sequence has a subsequence converging inside the set ("sequentially compact", which the compactness chapter builds on).

## High-Value Topics
★★★ = expect it, ★★ = likely, ★ = know the statement.

### ★★★ Definitions, stated exactly
Be able to write these with the quantifiers in the right order:
- sup and inf, the LUB property
- $a_{n}\to L$, Cauchy, subsequence, bounded
- open, closed, dense
- $\sum a_{n}$ converges (via partial sums), converges absolutely, converges conditionally
- $\lim_{x\to a}f(x)=L$ (with $0<|x-a|<\delta$), continuity at $c$

Also be able to write their negations:
- $a_{n}\not\to L$: $\exists\varepsilon>0,\ \forall N,\ \exists n\geq N$ s.t. $|a_{n}-L|\geq\varepsilon$
- not Cauchy: $\exists\varepsilon>0,\ \forall N,\ \exists n,m\geq N$ s.t. $|a_{n}-a_{m}|\geq\varepsilon$
- $f$ not continuous at $c$: $\exists\varepsilon>0,\ \forall\delta>0,\ \exists x$ with $|x-c|<\delta$ and $|f(x)-f(c)|\geq\varepsilon$
- $A$ not open: $\exists x\in A,\ \forall r>0,\ (x-r,x+r)\not\subseteq A$

### ★★★ Supremum arguments
- **The working definition:** $s=\sup A$ iff (i) $s$ is an upper bound, and (ii) $\forall\varepsilon>0,\ \exists a\in A$ with $a>s-\varepsilon$. Most sup proofs are two inequalities: $\leq$ because something is an upper bound, and $\geq$ by an $\varepsilon$ argument.
- $\sup(A+B)=\sup A+\sup B$, a max is the sup, $\sqrt{2}=\sup\{ x:x^2<2 \}$ (all on [[content/Notes/Math/Real Analysis/Homework 2|Homework 2]]).
- If $x\leq y+\varepsilon$ for every $\varepsilon>0$ then $x\leq y$ (§2.1 Ex 3).
- Archimedean property and its three equivalent forms, density of $\mathbb{Q}$ and of the irrationals, no smallest positive real.

### ★★★ Sequences and $\varepsilon$–$N$ proofs
- Prove a specific limit from the definition: do scratch work backwards, then write it forwards: "Let $\varepsilon>0$. Choose $N>\dots$ (Archimedes). Then for $n\geq N$…"
- Arithmetic of limits: the sum uses $\varepsilon/2$; the product needs "convergent $\implies$ bounded"; the quotient needs $|b_{n}|>|b|/2$ eventually.
- Convergent $\implies$ bounded (fix $\varepsilon=1$, then take a max over the head).
- Monotone convergence, and recursive sequences (§2.3.3 #10–11): e.g. $x_{1}=\sqrt{2}$, $x_{n+1}=\sqrt{x_{n}+2}$. Show $x_{n}<2$ and increasing by induction, so it converges; then the limit satisfies $L=\sqrt{L+2}$, so $L=2$.

### ★★★ Subsequences, Bolzano–Weierstrass, Cauchy
- Every sequence has a monotone subsequence (the peak argument, proof below).
- B-W = monotone subsequence + monotone convergence.
- Convergent $\implies$ Cauchy; Cauchy $\implies$ bounded; Cauchy + convergent subsequence $\implies$ convergent ("Cleveland"); so $\mathbb{R}$ is complete.
- **Marked "MT" in [[content/Notes/Math/Real Analysis/Lecture 7|Lecture 7]]:** a Cauchy sequence in a finite set is eventually constant (proof below).
- $x_{n}=\sqrt{n}$ has $x_{n+1}-x_{n}\to 0$ but is not Cauchy (§2.3.3 #12). Consecutive terms being close is not enough.
- $x_{n}\to x$ iff every subsequence converges to $x$ (§2.3.3 #6).

### ★★★ Series convergence (new this year)
How to decide whether $\sum a_{n}$ converges, and whether absolutely or conditionally:
1. **$a_{n}\not\to 0$?** Then it diverges.
2. **Nonnegative terms?** Compare with $\sum r^n$ ($|r|<1$) or $\sum \frac{1}{n^p}$ ($p>1$). Write the inequality $0\leq a_{n}\leq b_{n}$ explicitly, "for all $n\geq N$".
3. **Factorials or products → ratio test; $n$-th powers → root test.** $L=1$ is inconclusive ($\sum\frac{1}{n}$ and $\sum\frac{1}{n^2}$ both give $L=1$).
4. **Alternating with $|a_{n}|$ decreasing to 0 → alternating series test** (§2.6.8 #4). Then check $\sum|a_{n}|$ separately to decide absolute or conditional.
5. **Decreasing, nonnegative, with logs → dyadic (Cauchy condensation):** $\sum a_{n}$ converges iff $\sum 2^k a_{2^k}$ converges.

> [!question]- Practice: §2.6.8 #10 and #5 (answers)
> - $\frac{1}{n^2+1}$: converges (compare $\frac{1}{n^2}$)
> - $\frac{\sin n}{n^2}$: converges absolutely ($\left|\frac{\sin n}{n^2}\right|\leq\frac{1}{n^2}$)
> - $\frac{(-3)^n}{n!}$: converges absolutely (ratio $\frac{3}{n+1}\to 0$)
> - $\frac{1}{n^{3/4}}$: diverges ($p=\frac{3}{4}\leq 1$)
> - $\frac{1}{n\ln n}$: diverges (dyadic gives $\frac{1}{k\ln 2}$, which is harmonic)
> - $(-1)^n\frac{n}{n^2+1}$: converges conditionally (AST; $\frac{n}{n^2+1}\geq\frac{1}{2n}$)
> - $(-1)^{n+1}\frac{1}{\sqrt{n}}$: converges conditionally (AST; $p=\frac{1}{2}$)
> - $\frac{3^n}{5^n+n}$: converges (compare $\left( \frac{3}{5} \right)^n$)
> - $\frac{(-1)^{n+1}}{n^{3/2}}$: converges absolutely
> - $\frac{(-1)^n}{\ln n}$: converges conditionally (AST; $\frac{1}{\ln n}\geq\frac{1}{n}$)
> - $(-1)^{n+1}\frac{n}{n+1}$: diverges (terms do not go to 0)

Proofs to know: the necessary condition, the comparison test, absolute $\implies$ convergent (Cauchy criterion + triangle inequality), the root test, the harmonic series diverging (grouping), and the geometric sum ($2S_{N}-S_{N}$).

### ★★ Open, closed and bounded sets
- Any union of open sets is open, and so is a finite intersection (take the min radius). Infinite intersections fail: $\bigcap(-\frac{1}{n},\frac{1}{n})=\{ 0 \}$. Take complements for the closed versions.
- $(a,b)$ is open, $[a,b]$ is closed, $(0,1]$ is neither, and only $\varnothing$ and $\mathbb{R}$ are both (§2.2.3 #2, #7, #8).
- Nested intervals need to be closed: $I_{n}=(0,\frac{1}{n})$ has empty intersection (§2.2.3 #1).
- Closed $\iff$ contains its limits $\iff$ complete. Closed + bounded $\iff$ sequentially compact, in both directions (proofs below).
- Complete or not (§2.3.3 #2): $(0,1)\cup[2,4]$ is not; a finite set is; $\{ \frac{1}{n} \}\cup\{ 0 \}$ is.

### ★★ Limits and continuity (Lectures 10–11)
- $\varepsilon$–$\delta$ proofs: linear ($\delta=\frac{\varepsilon}{3}$); $x^2\to 4$ with $\delta=\min\{ 1,\frac{\varepsilon}{5} \}$ (first force $\delta\leq 1$ to bound the other factor); $\sqrt{x}\to 3$ with $\delta=3\varepsilon$.
- The sequential criterion in both directions, used to show discontinuity: sign function at 0 ($x_{n}=\frac{1}{n}$), $\sin(1/x)$ at 0, and $x$ on $\mathbb{Q}$ / $0$ off $\mathbb{Q}$ (continuous only at 0).
- Composition of continuous functions (use $\delta_{g}$ as the "$\varepsilon$" for $f$). A limit of a composition needs $g$ continuous at $d$.
- Sign persistence (choose $\varepsilon=f(c)$), Bolzano's proof via sup, and IVT from Bolzano.
- IVT applications: $x^3+x-1=0$ has a root in $(0,1)$; a continuous $f:[0,1]\to[0,1]$ has a fixed point (use $g(x)=f(x)-x$); $x^3=2x^2+3x-3$ has at least 3 roots (§3.2.5 #5, #6, #9).

### ★ Know the statements
- Induction $\iff$ well-ordering, and uniqueness of $\mathbb{R}$ (it needs the LUB property).
- LUB $\iff$ nested intervals $\iff$ completeness (Theorem 2.4.1, bisection proofs).
- Cauchy product, Mertens' theorem (one series must converge absolutely), absolute convergence and rearrangements, the $a^+/a^-$ lemma, Riemann rearrangement.
- The root test is stronger than the ratio test.

## Proof Toolkit
- **Showing $s=\sup A$:** upper bound, plus $\forall\varepsilon\ \exists a>s-\varepsilon$.
- **Splitting $\varepsilon$:** use $\varepsilon/2$ (or $\varepsilon/3$) and the triangle inequality.
- **Head and tail:** take a max over finitely many terms and use $\varepsilon$ on the tail. Fix $\varepsilon=1$ when you only need boundedness.
- **Several conditions at once:** take the min of the $\delta$'s or the max of the $N$'s.
- **Choose $\varepsilon$ as a gap:** $\varepsilon=L-b$ (closed intervals keep limits), $\varepsilon=f(c)$ (sign persistence), $\varepsilon=$ min distance between points (finite sets), $\varepsilon=\beta-\alpha$ (uniqueness in nested intervals).
- **Build a bad sequence:** in a contrapositive, fix the bad $\varepsilon$ and take $\delta=\frac{1}{n}$ to get one point per $n$.
- **Bisection:** halve, keep the half with the property, and the lengths $2^{1-n}|I_{1}|\to 0$ by Archimedes.
- **Sup of a set, then contradiction on both sides** (Bolzano).

## Counterexample Bank

| False claim | Counterexample |
| --- | --- |
| bounded $\implies$ convergent | $(-1)^n$ |
| $a_{n}\to 0\implies\sum a_{n}$ converges | harmonic series |
| consecutive differences $\to 0\implies$ Cauchy | $\sqrt{n}$ |
| nested intervals always intersect | $(0,\frac{1}{n})$ |
| any intersection of open sets is open | $\bigcap(-\frac{1}{n},\frac{1}{n})=\{ 0 \}$ |
| any union of closed sets is closed | $\bigcup[\frac{1}{n},1-\frac{1}{n}]=(0,1)$ |
| Cauchy $\implies$ convergent (in $\mathbb{Q}$) | decimal truncations of $\sqrt{2}$ |
| closed $\implies$ every sequence has a convergent subsequence | $x_{n}=n$ in $\mathbb{N}$ |
| bounded $\implies$ subsequence converges inside the set | $x_{n}=\frac{1}{n}$ in $(0,1)$ |
| Cauchy product of convergent series converges | $\frac{(-1)^{n-1}}{\sqrt{n}}$ with itself |
| rearranging never changes the sum | alternating harmonic series |
| $\lim g(f(x))=\lim g(t)$ always | $f=1$; $g(t)=2$ for $t\neq 1$, $g(1)=3$ |
| intermediate value property $\implies$ continuous | $\sin(1/x)$ with $f(0)=0$ |
| IVT over $\mathbb{Q}$ | $x^2-2$ on $[0,2]$ |
| root test with $L=1$ decides | $\sum\frac{1}{n}$ diverges, $\sum\frac{1}{n^2}$ converges |

## Proofs Worth Having Ready
These are the ones marked "omitted", "do later", "FINISH LATER" or "HW" in my lecture notes.

> [!theorem]- Every sequence has a monotone subsequence
> Call $n$ a *peak* if $a_{n}>a_{m}$ for all $m>n$. If there are infinitely many peaks $n_{1}<n_{2}<\cdots$ then $a_{n_{1}}>a_{n_{2}}>\cdots$ is decreasing. Otherwise, let $n_{1}$ be past the last peak (or $n_{1}=1$ if there are none). $n_{1}$ is not a peak, so some $n_{2}>n_{1}$ has $a_{n_{2}}\geq a_{n_{1}}$. $n_{2}$ is not a peak either, so some $n_{3}>n_{2}$ has $a_{n_{3}}\geq a_{n_{2}}$. Repeating gives an increasing subsequence.

> [!theorem]- A Cauchy sequence in a finite set $A$ is eventually constant
> If $A$ has one point we are done. Otherwise let $\delta=\min\{ |a-b| : a,b\in A,\ a\neq b \}>0$, which exists because it is a min of finitely many positive numbers. Take $\varepsilon=\delta$: $\exists N$ s.t. $\forall n,m\geq N$, $|x_{n}-x_{m}|<\delta$. Distinct points of $A$ are at least $\delta$ apart, so $x_{n}=x_{m}$. Hence $x_{n}=x_{N}$ for all $n\geq N$.

> [!theorem]- Cauchy + convergent subsequence $\implies$ convergent
> Let $x_{n_{k}}\to L$ and $\varepsilon>0$. Cauchy gives $N$ with $|x_{n}-x_{m}|<\frac{\varepsilon}{2}$ for $n,m\geq N$. Convergence gives $K$ with $|x_{n_{k}}-L|<\frac{\varepsilon}{2}$ for $k\geq K$. Pick $k\geq\max(K,N)$, so $n_{k}\geq k\geq N$. Then for $n\geq N$:
> $$|x_{n}-L|\leq|x_{n}-x_{n_{k}}|+|x_{n_{k}}-L|<\varepsilon$$

> [!theorem]- Contains its limits $\implies$ closed (Lecture 7, $2\implies 1$)
> Suppose $A$ contains the limit of every convergent sequence in $A$, but $A^c$ is not open. Then some $y\in A^c$ has every ball $(y-r,y+r)$ meeting $A$. For each $n$ pick $x_{n}\in A$ with $|x_{n}-y|<\frac{1}{n}$. Then $x_{n}\to y$, so $y\in A$, which contradicts $y\in A^c$.

> [!theorem]- Sequentially compact $\implies$ closed and bounded (Lecture 7, $2\implies 1$)
> **Bounded:** if not, pick $x_{n}\in A$ with $|x_{n}|>n$. Every subsequence has $|x_{n_{k}}|>n_{k}\geq k$, so it is unbounded and cannot converge. This is a contradiction.
> **Closed:** let $x_{n}\in A$ with $x_{n}\to x$. Some subsequence converges to a point $a\in A$. Every subsequence of a convergent sequence has the same limit, so $x=a\in A$. By the previous proof, $A$ is closed.

> [!theorem]- $\sum a_{n}$ converges $\implies a_{n}\to 0$
> $a_{n}=S_{n}-S_{n-1}\to S-S=0$.

> [!theorem]- Alternating series test
> Let $a_{n}\geq 0$ decrease to $0$ and $S_{n}=\sum_{k=1}^n(-1)^{k+1}a_{k}$. Then $S_{2k+2}-S_{2k}=a_{2k+1}-a_{2k+2}\geq 0$, so the even partial sums increase, and similarly the odd ones decrease. Also $S_{2}\leq S_{2k}\leq S_{2k+1}\leq S_{1}$ (since $S_{2k+1}=S_{2k}+a_{2k+1}$), so the evens are bounded above by $S_{1}$ and the odds are bounded below by $S_{2}$. Both converge (monotone convergence), and $S_{2k-1}-S_{2k}=a_{2k}\to 0$, so they have the same limit $S$. Given $\varepsilon$, take $N$ large enough for both the evens and the odds; then $|S_{n}-S|<\varepsilon$ for all $n\geq N$.

> [!theorem]- Dyadic test $\implies$ $p$-series
> For $a_{n}\geq 0$ decreasing, the block $a_{2^k}+\cdots+a_{2^{k+1}-1}$ has $2^k$ terms, each between $a_{2^{k+1}}$ and $a_{2^k}$. So
> $$2^k a_{2^{k+1}}\leq\sum_{n=2^k}^{2^{k+1}-1}a_{n}\leq 2^k a_{2^k}$$
> Summing over $k$ and using the comparison test both ways: $\sum a_{n}$ converges iff $\sum 2^k a_{2^k}$ converges. For $a_{n}=\frac{1}{n^p}$ with $p>0$: $2^k a_{2^k}=(2^{1-p})^k$ is geometric, and converges iff $2^{1-p}<1$ iff $p>1$. (For $p\leq 0$ the terms do not go to 0.)

## Traps
All of these were in my lecture notes at some point (now fixed).
- $\mathbb{R}$ is **not** well-ordered ($(0,1)$ has no least element). Case splits on $f(c)$ use trichotomy.
- The limit definition needs $0<|x-a|<\delta$.
- The $p$-series is $\sum\frac{1}{n^p}$. $\sum\frac{1}{p^n}$ is geometric.
- Root or ratio test with $L>1$: show $a_{n}\not\to 0$. Comparison only shows $\sum|a_{n}|$ diverges.
- Absolutely convergent $\implies$ every rearrangement has the same sum. It is *conditionally* convergent series that can be rearranged to anything.
- Uniqueness of $\mathbb{R}$ needs the LUB property, since $\mathbb{Q}$ is an ordered field too.
- Regrouping (adding brackets, same order) is not rearranging (changing the order).
- To apply a definition for a tolerance you need (like $\delta_{g}$), plug it in as the $\varepsilon$. Don't write $|f(x)-f(c)|<\varepsilon<\delta_{g}$.
- Fix $\varepsilon$ before choosing $N$ (e.g. "fix $\varepsilon=1$"), not "for all $\varepsilon$" after the fact.

## Practice Set
There are no old midterms with series questions, so use the textbook exercises, roughly most valuable first:
1. §2.6.8 #10 and #5 (answers above), #4 (AST), #6–7 (dyadic and $p$-series), #1 ($\sum\frac{1}{3^n}$ by hand)
2. §2.3.3 #10–11 (recursive sequences), #2, #5, #6, #12
3. §2.5 Ex 1, 3, 4, 5 (closed, bounded, complete)
4. §2.2.3 #1, #2, #8
5. §3.1.3 #2, #6, #8
6. §3.2.5 #3, #5, #9
7. §2.1 Ex 2, 4
8. The Lecture 7 "MT" question (Cauchy sequence in a finite set)
