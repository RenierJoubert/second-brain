#math #RealAnalysis

# MATH 320 Final Prep
Topics in MATH 320 that are not in the MATH 319 textbook, taken from Loewen's 2025 lecture notes. Section references like (IV.B) point to those notes, and § numbers point to the 319 text. In total it's about 40–60 hours, including practice.

- [ ] Get the 2026 syllabus and a past 320 final, since these notes are from 2025

## Cardinality
About 3–5 h. Countability is review from MATH 220.

- [ ] Finite and countable defined as bijections with $\{1,\dots,n\}$ and $\mathbb N$; every subset of a countable set is finite or countable (I.C)
- [ ] Proving countability with a 1-1 map into a countable set, or an onto map from one: $\mathbb Q$, $\mathbb N^k$, countable unions of countable sets, the finite subsets of $\mathbb N$ (I.C)
- [ ] Cardinal inequalities $|X|\leq|Y|$ and $|X|<|Y|$ (I.D)
- [ ] Cantor's theorem $|X|<|\mathcal P(X)|$, using the set $S=\{x\in X : x\notin f(x)\}$ (I.D)
- [ ] Schröder–Bernstein: if $A_0\supseteq A_1\supseteq A_2$ and $A_0\sim A_2$, then $A_0\sim A_1$, proved by shifting the pieces $D_k=A_k\setminus A_{k+1}$ (I.E)
- [ ] Applications: $(a,b)\sim[c,d]$ and $[0,1)^2\sim[0,1)$ (I.E)

## Constructing ℝ
About 4–6 h. In 319 this only appears as the completion exercise in §5.4.

- [ ] Reals as equivalence classes of rational Cauchy sequences, where $x\sim y \iff x_n-y_n\to 0$ (III.A)
- [ ] Showing $+$, $\cdot$ and $<$ are well-defined on equivalence classes (III.B–E)
- [ ] Proof of the least upper bound property using the dyadic upper bounds $b_n=\min\{k/2^n : \alpha\leq k/2^n \ \forall \alpha\in A\}$ (III.F)
- [ ] Archimedean property from the LUB property (III.G)

## lim sup and lim inf
About 5–7 h. Not in 319 at all, and 320 uses it in the series and Cauchy proofs.

- [ ] $\limsup x_n=\inf_{n}\sup_{k\geq n}x_k$ and $\liminf x_n=\sup_{n}\inf_{k\geq n}x_k$, using the tail sups $s_n$ and tail infs $i_n$, with values in $\mathbb R\cup\{\pm\infty\}$ (IV.B)
- [ ] Extended conventions: $\sup\emptyset=-\infty$, and $\sup S=+\infty$ when $S$ is unbounded above (IV.A)
- [ ] $x_n\leq y_n$ carries over to lim sup and lim inf; strict inequalities don't (IV.B)
- [ ] $\liminf x_n\leq\limsup x_n$, and $x_n\to L$ iff both equal $L$ (IV.B)
- [ ] Cauchy implies convergent, proved with lim sup and lim inf (IV.C)
- [ ] Every subsequential limit lies between lim inf and lim sup, and some subsequences converge to each of them (IV.E)
- [ ] Proof method: show $\alpha\leq\liminf x_n\leq\limsup x_n\leq\beta$ for all $\alpha<L<\beta$ (IV.F)

## Series
About 3–4 h. Everything else is in §2.6.

- [ ] Root test with $\alpha=\limsup|a_n|^{1/n}$, and ratio test with the lim sup and lim inf of $|a_{n+1}/a_n|$ (V)
- [ ] Kummer's test and its telescoping proof (V)
- [ ] Raabe's test as Kummer's test with $D_k=k$ (V)
- [ ] Alternating series test via the even and odd partial sums (V)
- [ ] Summation by parts and Dirichlet's test; the AST is the case $b_n=(-1)^n$ (V)

## Topological Spaces
About 5–7 h. §5.1–5.3 covers the metric versions; 320 states everything for a Hausdorff topological space (HTS).

- [ ] The HTS axioms, the discrete topology, and the non-Hausdorff example on $\{1,2,3\}$ (VI.A)
- [ ] The metrics $d_1$, $d_\infty$, $d_p$ on $\mathbb R^k$, and the metric on $\ell^2$ (VI.A)
- [ ] Neighbourhoods $\mathcal N(x)$; a set is open iff it is a neighbourhood of each of its points (VI.B)
- [ ] Interior is the largest open subset, closure is the smallest closed superset, and $\overline A=((A^c)^\circ)^c$ (VI.B–C)
- [ ] The axioms restated for closed sets; singletons are closed (VI.C)
- [ ] Boundary: $\partial A=\overline A\cap\overline{A^c}$, $\overline A=A\cup\partial A$, $A^\circ=A\setminus\partial A$ (VI.D)
- [ ] Limit points $A'$, isolated points, $\overline A=A\cup A'$; in a metric space, $x\in A'$ iff some sequence of distinct points of $A$ converges to $x$ (VI.E)
- [ ] Sequential descriptions of closed sets, boundary points and isolated points in metric spaces (VI.F)
- [ ] The weak topology on $\ell^2$, a Hausdorff topology that doesn't come from a metric (VI.G)
- [ ] Relative topology $\mathcal T_Y=\{G\cap Y : G\in\mathcal T\}$ and "open relative to $Y$"; bases and second countability (VI.H)

## Compactness and Completeness
About 6–9 h. This overlaps with §5.4, §5.6 and Ch 6. 319 Ch 6 has no exercises, so if lectures skip it, learn §6.1–6.3 too (another 10–15 h).

- [ ] Open-cover compactness: finite sets are compact; $\mathbb Z$ and $\{1/n\}$ are not, but $\{1/n\}\cup\{0\}$ is (VII.A)
- [ ] Compact implies bounded (in a metric space) and closed (in any HTS); a closed subset of a compact set is compact (VII.A)
- [ ] Every infinite subset of a compact set has a limit point (VII.A)
- [ ] Finite intersection property: $K$ is compact iff every family of closed subsets with the FIP has nonempty intersection; nested nonempty closed sets in a compact set (VII.A)
- [ ] Compact iff sequentially compact in a metric space, both directions with 320's proof (VII.B)
- [ ] Heine–Borel in $\mathbb R^k$, and why the set must be closed in $\mathbb R^k$ itself (VII.B)
- [ ] Cauchy sequences and completeness in metric spaces: closed subsets of complete spaces are complete, a Cauchy sequence with a convergent subsequence converges, compact implies complete (VII.C)
- [ ] $M(S)$, the bounded functions on $S$ with the sup metric, is complete (VII.C)
- [ ] Cantor's intersection theorem: a space is complete iff every nested sequence of nonempty closed sets with $\operatorname{diam}F_n\to 0$ meets in exactly one point (VII.C)
- [ ] Completing a metric space with equivalence classes of Cauchy sequences, using $\mathbb Q\to\mathbb R$ as the example (VII.D and the §5.4 exercise)
- [ ] The Cantor set is nonempty, compact, has empty interior, is uncountable and is perfect (VII.E)

## Continuity
About 5–7 h. §3, §5.5 and §6.2 cover ε–δ, preimages, uniform continuity and the generalised EVT.

- [ ] Continuity defined by preimages of open sets in an HTS, and the closed-set version (VIII.A)
- [ ] $\{x : f_1(x)=f_2(x)\}$ is closed, so continuous functions that agree on a dense set agree everywhere (VIII.A)
- [ ] The continuous image of a compact set is compact, giving boundedness and extrema; a continuous $f:\mathbb R^n\to\mathbb R$ with $f(x)\geq g(|x|)$ and $g\to\infty$ attains its minimum (VIII.B)
- [ ] A continuous bijection from a compact space has a continuous inverse (VIII.B)
- [ ] Connectedness: disconnections; the connected subsets of $\mathbb R$ are exactly the intervals; the continuous image of a connected set is connected; the IVT as a corollary; the equator example (VIII.C)
- [ ] Continuity at a point in an HTS, and its ε–δ form in metric spaces (VIII.D)
- [ ] Proof that a continuous function on a compact metric space is uniformly continuous, which 319 only states (VIII.E)
- [ ] Examples in $\mathbb R^2$: $xy$ is continuous at the origin, a function discontinuous at $(0,0)$, a function continuous at exactly one point (VIII.E)
- [ ] A nondecreasing $f$ is discontinuous at $c$ iff $\sup_{x<c}f(x)<\inf_{x>c}f(x)$, so it has at most countably many discontinuities (VIII.E)
- [ ] Limits of functions at limit points of the domain, and the sequential version (VIII.F)

## Derivatives
About 1 h. Everything else is in Ch 4.

- [ ] Darboux corollary: $f'(X)$ is an interval when $X$ is connected (IX.B)
- [ ] Proof of L'Hôpital's rule (IX.D, §4.2 Ex 9)

## Practice
About 8–12 h.

- [ ] Timed past finals
- [ ] Open-cover and connectedness proofs written out without notes
