#math 

# Real Analysis So Far: An Essay

This essay retells the first half of MATH 319 (Lectures 1–11, text Ch 1 to §3.2, §2.6, HW5–6) as one connected story. The same results are laid out one by one, with textbook numbers, in [[Course Recap|Course Recap]].

## The Question

Calculus works with limits, derivatives and infinite sums, and it mostly works. But first-year calculus never explains *why* a limit should exist, or what kind of number it lands on. Real analysis answers this by starting from the number system itself. The first half of the course has a single plot. We find one property that the real numbers have and the rationals lack, and we watch nearly every theorem grow out of it. Along the way, sequences become the main tool, and almost everything we do turns out to be a question about whether two limiting processes can be swapped.

## What the Rationals Are Missing

We begin with the natural numbers and two equivalent ways of reasoning about them. The **well-ordering principle** says that every non-empty subset of $\mathbb N$ has a least element. **Induction** says that if $P(1)$ holds and $P(k)\implies P(k+1)$ for every $k$, then $P(n)$ holds for every $n\in\mathbb N$. Each implies the other, and they let us prove statements about all natural numbers at once.

The rationals look like a perfectly good number system. They form an ordered field, so addition, multiplication and order behave as expected. They are dense in themselves: between any two rationals $x<y$ sits another, $\frac{x+y}{2}$. They are also Archimedean: for positive rationals $x$ and $y$ there is some $n\in\mathbb N$ with $nx>y$.

Yet $\mathbb Q$ has holes. No rational squares to $2$, so the set $\{ q\in\mathbb Q:q>0,\ q^2<2 \}$ is bounded above in $\mathbb Q$ but has no smallest upper bound in $\mathbb Q$. The rationals crowd up against $\sqrt{ 2 }$ from both sides without ever reaching it. This one defect is the reason so much of calculus fails over $\mathbb Q$. Increasing bounded sequences need not converge, Cauchy sequences need not converge, and a continuous function can change sign without ever being zero. The rest of the course is, in a sense, an account of what changes once the hole is filled.

## The Least Upper Bound Property

A number $b$ is an **upper bound** of a set $A\subseteq\mathbb R$ if $a\leq b$ for every $a\in A$. The **supremum** $\sup A$ is the least upper bound: it is an upper bound, and it is $\leq$ every other upper bound. The **infimum** is the greatest lower bound, defined the same way with the inequalities reversed.

The real numbers are an ordered field with one extra axiom, the **least upper bound property**:

> Every non-empty subset of $\mathbb R$ that is bounded above has a supremum in $\mathbb R$.

Equivalently, every non-empty set that is bounded below has an infimum. This axiom fixes $\mathbb R$ completely. Any ordered field with the least upper bound property is a copy of $\mathbb R$, in the sense that there is an order-preserving bijection to $\mathbb R$ that respects addition and multiplication.

In proofs, the supremum is used in an $\varepsilon$ form. For a non-empty set $A$ that is bounded above, $s=\sup A$ exactly when $s$ is an upper bound and, for every $\varepsilon>0$, some $a\in A$ satisfies $a>s-\varepsilon$. The second condition just says that anything smaller than $s$ fails to be an upper bound. This becomes a pattern. Whenever a proof needs to *produce* a real number, such as a limit, a point in an intersection, or a root, it builds a set and takes its supremum. Then it uses the $\varepsilon$ form to show the supremum does what we want.

## First Consequences: Distance and Smallness

Two tools follow almost immediately and appear in every later proof.

The first is the **triangle inequality**, $|x+y|\leq|x|+|y|$, with its reverse form $\big||x|-|y|\big|\leq|x-y|$. Nearly every $\varepsilon$-argument in the course works the same way. You want $|x-y|$ to be small, but you only control other quantities. So you add and subtract a convenient middle term and split the distance into pieces you can bound.

The second is the **Archimedean property**: for every $x>0$, the set $\{ nx:n\in\mathbb N \}$ has no upper bound, so for any $y$ there is $n$ with $nx>y$. Its proof is the first use of the least upper bound property. If the multiples of $x$ were bounded, they would have a supremum $u$. Then $u-x$ would not be an upper bound, so some $nx>u-x$, which gives $(n+1)x>u$, a contradiction. The most useful form is that for every $x>0$ there is $n$ with $0<\frac{1}{n}<x$. This is why $\frac{1}{n}\to 0$, and it is where the $N$ comes from in every $\varepsilon$–$N$ proof.

From the Archimedean property we get the **density of $\mathbb Q$ in $\mathbb R$**: between any two reals $x<y$ there is a rational $q$. The irrationals are dense too, since adding $\sqrt{ 2 }$ to a rational between $x-\sqrt{ 2 }$ and $y-\sqrt{ 2 }$ gives an irrational between $x$ and $y$. So the reals are the rationals with the holes filled in, and every real number can be approached by rationals. That fact is useful later for building sequences and for showing that certain functions are discontinuous.

## Nested Intervals and the Shape of the Line

The first structural consequence of the least upper bound property is the **nested interval property**. Let $I_{n}=[a_{n},b_{n}]$ be closed, non-empty intervals with $I_{n+1}\subseteq I_{n}$ for every $n$. Then
$$
\bigcap_{n\in\mathbb N}I_{n}\neq\varnothing,
$$
and if the lengths $b_{n}-a_{n}$ shrink to $0$, the intersection is exactly one point. The proof follows the familiar pattern. Nesting forces every left endpoint to sit below every right endpoint, $a_{k}\leq b_{m}$ for all $k$ and $m$. So the left endpoints have a supremum $\alpha$. Then $a_{n}\leq\alpha$ because $\alpha$ is an upper bound, and $\alpha\leq b_{n}$ because each $b_{n}$ is an upper bound and $\alpha$ is the least. Hence $\alpha$ lies in every interval.

The word *closed* matters. The open intervals $\left( 0,\frac{1}{n} \right)$ are nested, but their intersection is empty: they close in on $0$, which none of them contains. This is the first sign that "closed" will matter in what follows. A set $A$ is **open** if every point of $A$ has a small interval $(x-r,x+r)$ around it inside $A$. A set is **closed** if its complement is open. It is **bounded** if it sits inside some $[a,b]$. Any union of open sets is open, but only finite intersections are guaranteed to be: $\bigcap_{n}\left( -\frac{1}{n},\frac{1}{n} \right)=\{ 0 \}$. Taking complements gives the matching facts for closed sets. Some sets, like $(0,1]$, are neither open nor closed, and only $\varnothing$ and $\mathbb R$ are both. These ideas come back once we have sequences: closed sets turn out to be exactly the sets that keep their limits.

## Sequences

A sequence $(a_{n})$ **converges** to $L$ if
$$
\forall\varepsilon>0,\ \exists N\in\mathbb N \text{ such that } n>N\implies|a_{n}-L|<\varepsilon .
$$
In words, every tolerance, however small, is eventually met by every remaining term. Its negation matters just as much. $a_{n}\not\to L$ means there is one $\varepsilon>0$ such that, no matter how far out you go, some later term is at least $\varepsilon$ away from $L$. A related idea is divergence to infinity: $a_{n}\to+\infty$ means that for every $M>0$, eventually $a_{n}\geq M$. Such a sequence has no finite limit.

The basic rules come from the triangle inequality. If $a_{n}\to a$ and $b_{n}\to b$, then $a_{n}\pm b_{n}\to a\pm b$, $a_{n}b_{n}\to ab$, and $\frac{a_{n}}{b_{n}}\to \frac{a}{b}$ when $b\neq 0$. The sum uses $\frac{\varepsilon}{2}$. The product needs one more fact, that **every convergent sequence is bounded**. To see this, take $\varepsilon=1$: past some $N$ every term satisfies $|a_{n}|<|L|+1$, and only finitely many terms come before $N$. The quotient needs $b_{n}$ to stay away from zero, and it does: eventually $|b_{n}|>\frac{|b|}{2}$. The converse of "convergent implies bounded" is false, since $(-1)^n$ is bounded and does not converge. Most of what follows deals with this gap between bounded and convergent.

The least upper bound property now gives the first big theorem about sequences, the **monotone convergence theorem**. If $(a_{n})$ is increasing and bounded above, then it converges, and its limit is $\sup\{ a_{n} \}$. Similarly, a decreasing sequence that is bounded below converges to its infimum. The proof is short. Let $s$ be the supremum. Since $s-\varepsilon$ is not an upper bound, some term $a_{N}$ exceeds it, and every later term is squeezed between $a_{N}$ and $s$. Over $\mathbb Q$ this fails: the decimal approximations $1, 1.4, 1.41, \dots$ of $\sqrt{ 2 }$ increase and are bounded, but have no rational limit. So the monotone convergence theorem really depends on the least upper bound property.

Monotone convergence only applies to monotone sequences. To reach general bounded sequences we use subsequences. A **subsequence** $(a_{n_{k}})$ keeps infinitely many terms in their original order, with $n_{1}<n_{2}<\cdots$ (so $n_{k}\geq k$). If a sequence converges, all of its subsequences converge to the same limit. The key combinatorial fact is that **every sequence has a monotone subsequence**. Call a term a *peak* if it is larger than everything after it. If there are infinitely many peaks, they form a decreasing subsequence. If there are only finitely many, then past the last peak every term is beaten by some later term, and following those gives an increasing subsequence. Combine this with monotone convergence and we get the **Bolzano–Weierstrass theorem**:

> Every bounded sequence has a convergent subsequence. If the sequence lies in $[a,b]$, the limit lies in $[a,b]$ too.

So $(-1)^n$ does not converge, but it has convergent subsequences, its even and odd terms. The last part of the theorem uses the fact that **closed intervals contain their limits**: if $a\leq x_{n}\leq b$ and $x_{n}\to L$, then $a\leq L\leq b$. More generally, a closed set contains the limit of any convergent sequence inside it.

## Cauchy Sequences and Completeness

The definition of convergence has a practical problem: to check it, you must already know the limit $L$. Cauchy's idea is to compare terms with each other instead. A sequence is **Cauchy** if
$$
\forall\varepsilon>0,\ \exists N \text{ such that } n,m>N\implies|a_{n}-a_{m}|<\varepsilon .
$$
This is stronger than consecutive terms getting close. $\sqrt{ n }$ has $\sqrt{ n+1 }-\sqrt{ n }\to 0$, but it is not Cauchy, because distant terms drift apart without bound.

Three short lemmas connect Cauchy sequences to convergence. First, **every convergent sequence is Cauchy**: both $a_{n}$ and $a_{m}$ are within $\frac{\varepsilon}{2}$ of $L$, so the triangle inequality puts them within $\varepsilon$ of each other. Second, **every Cauchy sequence is bounded**: with $\varepsilon=1$, all late terms are within $1$ of a single term $a_{N+1}$. Third, **if a Cauchy sequence has a subsequence converging to $\alpha$, then the whole sequence converges to $\alpha$**. Each term is close to a far-out term of the subsequence, and that term is close to $\alpha$.

Chaining these together gives the **completeness of $\mathbb R$**. Take a Cauchy sequence. It is bounded, so by Bolzano–Weierstrass it has a convergent subsequence. By the third lemma, the whole sequence converges. This gives the **Cauchy criterion**: a sequence of reals converges if and only if it is Cauchy. A set $A$ is called **complete** if every Cauchy sequence in $A$ converges to a point *of $A$*. The condition that the limit lies in $A$ is essential. The sequence $\frac{1}{n+1}$ is Cauchy inside $(0,1)$, but its limit $0$ is outside, so $(0,1)$ is not complete. Neither is $\mathbb Q$. Closed sets are complete, because they contain their limits. Finite sets are complete, because a Cauchy sequence in a finite set must eventually be constant once $\varepsilon$ is smaller than the smallest gap between points.

At this point the three main properties of $\mathbb R$ turn out to be equivalent. The **least upper bound property, the nested interval property and completeness** each imply the others, so any one of them could have been our starting axiom. The section also proves that closed, bounded sets are exactly the sets in which every sequence has a subsequence converging to a point of the set. This is Bolzano–Weierstrass combined with the fact that closed sets keep their limits.

## Series

An infinite sum cannot be added up directly, so we define it through a sequence. The series $\sum_{n=1}^\infty a_{n}$ means the sequence of partial sums $S_{N}=\sum_{n=1}^N a_{n}$, and it converges to $S$ when $S_{N}\to S$. Because of this definition, everything we proved about sequences applies to series at once.

The model example is the **geometric series**: $\sum_{n=0}^\infty r^n$ converges exactly when $|r|<1$, and then it equals $\frac{1}{1-r}$. The proof subtracts $rS_{N}$ from $S_{N}$, which cancels almost everything and leaves $1-r^{N+1}$. A first necessary condition is the **divergence test**: if $\sum a_{n}$ converges, then $a_{n}\to 0$, since $a_{n}=S_{n}-S_{n-1}$ and both partial sums approach $S$. The converse fails. The harmonic series $\sum \frac{1}{n}$ has terms tending to zero, yet it diverges, because its terms can be grouped into infinitely many blocks that each add up to at least $\frac{1}{2}$.

Completeness applied to partial sums gives the **Cauchy criterion for series**. $\sum a_{n}$ converges if and only if for every $\varepsilon>0$ there is $N$ with
$$
\left| \sum_{k=n}^m a_{k} \right|<\varepsilon\quad\text{whenever } m\geq n\geq N,
$$
since that sum is just $S_{m}-S_{n-1}$. A series **converges absolutely** if $\sum|a_{n}|$ converges, and **conditionally** if it converges but not absolutely. The alternating harmonic series is the standard example of conditional convergence. The Cauchy criterion together with the triangle inequality shows that **absolute convergence implies convergence**, with $\left| \sum a_{n} \right|\leq\sum|a_{n}|$: the tail sums of $\sum a_{n}$ are no bigger than those of $\sum|a_{n}|$. Convergent series can also be added term by term and multiplied by constants.

## The Convergence Tests

When every $a_{n}\geq 0$, the partial sums can only increase. By monotone convergence, such a series converges if and only if its partial sums are bounded. Every test in this part follows from that observation. The **comparison test** says that if $0\leq a_{n}\leq b_{n}$ for all large $n$, then $\sum b_{n}$ converging forces $\sum a_{n}$ to converge, and $\sum a_{n}$ diverging forces $\sum b_{n}$ to diverge.

The **dyadic comparison test** (HW5) is sharper. If $(a_{n})$ is nonnegative and decreasing, then
$$
\sum_{n=1}^\infty a_{n}\ \text{converges}\iff\sum_{k=0}^\infty 2^ka_{2^k}\ \text{converges}.
$$
The idea is to cut the series into blocks of length $1,2,4,8,\dots$. The block from $2^k$ to $2^{k+1}-1$ has $2^k$ terms, each between $a_{2^{k+1}}$ and $a_{2^k}$. So the block lies between $2^ka_{2^{k+1}}$ and $2^ka_{2^k}$, and the partial sums of the two series bound each other. Applying it to $\frac{1}{n^p}$ turns the $p$-series into a geometric series with ratio $2^{1-p}$. This proves that **$\sum \frac{1}{n^p}$ converges if and only if $p>1$**. Applying it to $\frac{1}{n(\log n)^p}$ gives a constant times a $p$-series, so the log $p$-series also converges exactly when $p>1$.

The **root test** and **ratio test** compare a series with a geometric one. Let $L=\lim\sqrt[n]{ |a_{n}| }$, or $L=\lim\left| \frac{a_{n+1}}{a_{n}} \right|$ when all $a_{n}\neq 0$. If $L<1$, the series converges absolutely. If $L>1$, it diverges. If $L=1$, the test gives no information. If $L<r<1$, the terms are eventually bounded by a constant times $r^n$. If $L>1$, the terms cannot go to zero. The case $L=1$ really is inconclusive: $\sum \frac{1}{n}$ and $\sum \frac{1}{n^2}$ both have $L=1$, and one diverges while the other converges. Whenever the ratio test gives an answer, the root test gives the same one, so the root test is the stronger of the two.

For series whose signs alternate there is the **alternating series test**. If $a_{n}\geq 0$ decreases to $0$, then $\sum(-1)^{n+1}a_{n}$ converges. The even partial sums increase, the odd ones decrease, both are bounded, and they differ by $a_{n}\to 0$. So monotone convergence makes them converge, and they converge to the same limit.

## Multiplying and Reordering Series

The difference between absolute and conditional convergence matters most when we multiply or rearrange series. Multiplying two power series and collecting the $x^n$ terms suggests the **Cauchy product** of $\sum a_{n}$ and $\sum b_{n}$, the series $\sum c_{n}$ with
$$
c_{n}=\sum_{k=0}^n a_{k}b_{n-k}.
$$
**Mertens' theorem** (HW5) says that if $\sum a_{n}$ converges absolutely to $A$ and $\sum b_{n}$ converges to $B$, then the Cauchy product converges to $AB$. The proof writes the partial products as $C_{n}=A_{n}B+\gamma_{n}$, where $\gamma_{n}=\sum_{k}a_{k}(B_{n-k}-B)$ is the error, and shows $\gamma_{n}\to 0$. It splits $\gamma_{n}$ into two pieces. In one, $B_{n-k}-B$ is small and is multiplied by the finite total $\sum|a_{k}|$. In the other there are only a fixed number of terms, and $a_{k}$ is small. The absolute convergence is needed. With $a_{n}=b_{n}=\frac{(-1)^n}{\sqrt{ n+1 }}$, both series converge conditionally, but every term of the Cauchy product has size at least $1$, so the product diverges.

Rearrangements show the same contrast. If a series converges absolutely, **every rearrangement converges to the same sum**. If it converges only conditionally, its positive terms and its negative terms each sum to $\infty$. **Riemann's rearrangement theorem** then shows that it can be reordered to converge to any real number you choose, or to diverge. So absolute convergence is what makes an infinite sum behave like a finite one.

## Power Series

HW6 turns series into functions. A **power series** $f(x)=\sum a_{n}x^n$ assigns to each $x$ the sum of a series. The root test tells us where it makes sense. With
$$
R=\lim_{n\to\infty}\frac{1}{\sqrt[n]{ |a_{n}| }},
$$
we have $\sqrt[n]{ |a_{n}x^n| }\to \frac{|x|}{R}$. So the series **converges absolutely for $|x|<R$ and diverges for $|x|>R$**. At $|x|=R$ anything can happen: $\sum \frac{x^n}{n}$ has $R=1$, diverges at $x=1$ and converges at $x=-1$. Inside the radius, **$f$ is continuous**. Near a point $x$ with $|x|<\rho<R$, write $f$ as a polynomial plus a tail. The polynomial is continuous, and the tail is uniformly small because $\sum|a_{n}|\rho^n$ converges. Splitting $|f(y)-f(x)|$ into three pieces, each less than $\frac{\varepsilon}{3}$, finishes the proof.

The advice on HW6 pointed out that most of analysis comes down to asking whether two limits can be swapped. **Abel's theorem** is a clear example. If $\sum a_{n}$ converges to $S$, then
$$
\lim_{x\to 1^-}\sum_{n=0}^\infty a_{n}x^n=S,
$$
which means: for every $\varepsilon>0$ there is $\delta>0$ such that $1-\delta<x<1$ implies $\left| \sum a_{n}x^n-S \right|<\varepsilon$. So the limit $x\to 1^-$ and the limit $N\to\infty$ give the same answer. The proof rewrites the series using its partial sums $s_{n}$:
$$
f(x)-S=(1-x)\sum_{n=0}^\infty(s_{n}-S)x^n.
$$
The first few terms are killed by the factor $1-x\to 0$, and the rest are small because $s_{n}\to S$ and $(1-x)\sum x^n=1$. The converse is false: $\sum(-1)^nx^n=\frac{1}{1+x}\to \frac{1}{2}$, yet $\sum(-1)^n$ diverges.

The homework ends with a result that combines these ideas: **improved Mertens**. If $\sum a_{n}=A$, $\sum b_{n}=B$, and their Cauchy product $\sum c_{n}=C$ all converge, then $C=AB$, with no absolute convergence needed. Turn the three series into power series. For $|x|<1$ they converge absolutely, so ordinary Mertens gives $\sum c_{n}x^n=\left( \sum a_{n}x^n \right)\left( \sum b_{n}x^n \right)$. Letting $x\to 1^-$ and applying Abel to all three gives $C=AB$.

## Limits of Functions

The last part of the course moves from sequences to functions. A neighbourhood of a point is a set containing some interval around it, and a punctured neighbourhood leaves the point itself out. For $f$ defined on a punctured neighbourhood of $a$,
$$
\lim_{x\to a}f(x)=L\iff\forall\varepsilon>0,\ \exists\delta>0 \text{ such that } 0<|x-a|<\delta\implies|f(x)-L|<\varepsilon .
$$
This is the $\varepsilon$–$N$ definition with "far enough along the sequence" replaced by "close enough to $a$". The condition $0<|x-a|$ means the value $f(a)$ has no effect, and $f(a)$ need not even exist. The negation says that some $\varepsilon$ defeats every $\delta$: however small the window, some $x$ in it has $f(x)$ at least $\varepsilon$ away from $L$. The same template handles infinite limits. Replace $|f(x)-L|<\varepsilon$ by $f(x)\geq M$ for $f\to\infty$, and replace $0<|x-a|<\delta$ by $x\geq R$ for $x\to\infty$.

The **sequential criterion** connects functions back to sequences:
$$
\lim_{x\to a}f(x)=L\iff f(x_{n})\to L \text{ for every sequence } x_{n}\to a \text{ with } x_{n}\neq a.
$$
The forward direction feeds the $\delta$ for $f$ in as the $\varepsilon$ for $x_{n}$. The reverse direction is proved by contrapositive: if the limit fails for some $\varepsilon$, take $\delta=\frac{1}{n}$ to pick bad points $x_{n}$ that approach $a$ while $f(x_{n})$ stays away from $L$. As a result, sequence theorems transfer to functions. The **arithmetic of limits** for functions (sums, products and quotients when $G\neq 0$) follows directly from the sequence version, and so polynomials satisfy $\lim_{x\to a}P(x)=P(a)$. The **sandwich theorem** says that if $f\leq g\leq h$ near $a$ and $f$ and $h$ both tend to $L$, then so does $g$. The criterion is also the standard way to show a limit does not exist: find one sequence along which $f$ does not converge, or two sequences along which it converges to different values.

## Continuity, Bolzano and the IVT

A function is **continuous** at $c$ if $\lim_{x\to c}f(x)=f(c)$. That is, for every $\varepsilon>0$ there is $\delta>0$ with $|x-c|<\delta\implies|f(x)-f(c)|<\varepsilon$. One-sided continuity uses only the points on one side of $c$, and continuity on $[a,b]$ means continuity at every point, one-sided at the endpoints. In sequence form, $f$ is continuous at $a$ exactly when $x_{n}\to a$ always gives $f(x_{n})\to f(a)$. This is the usual way to prove a function is discontinuous. The sign function jumps at $0$, $\sin \frac{1}{x}$ oscillates near $0$, and the function equal to $x$ on $\mathbb Q$ and $-x$ off $\mathbb Q$ is continuous only at $0$, as density of $\mathbb Q$ and of the irrationals shows. Continuity behaves well under composition. If $f$ is continuous at $c$ and $g$ is continuous at $f(c)$, then $g\circ f$ is continuous at $c$. For limits of compositions, $g$ must be continuous at the inner limit point, and a function $g$ that has been redefined at that single point gives a counterexample.

One small lemma does most of the work at the end. **Sign persistence**: if $f$ is continuous at $c$ and $f(c)>0$, then $f$ stays positive on some interval $(c-\delta,c+\delta)$. Apply the definition with $\varepsilon=f(c)$. The same holds for $f(c)<0$.

Finally, the least upper bound property returns. **Bolzano's theorem** says that if $f:[a,b]\to\mathbb R$ is continuous and $f(a)$ and $f(b)$ have opposite signs, then $f(c)=0$ for some $c\in(a,b)$. Suppose $f(a)<0<f(b)$ and let
$$
c=\sup\{ x\in[a,b]:f(x)<0 \}.
$$
If $f(c)$ were negative, sign persistence would give negative values just to the right of $c$, contradicting that $c$ is an upper bound. If $f(c)$ were positive, sign persistence would make $f$ positive on a whole interval to the left of $c$, giving a smaller upper bound and contradicting that $c$ is the least. So $f(c)=0$. Applying this to $f(x)-y$ gives the **intermediate value theorem**: a continuous $f$ on $[a,b]$ takes every value $y$ between $f(a)$ and $f(b)$.

Over the rationals the IVT fails. On $[0,2]\cap\mathbb Q$, the function $x^2-2$ is negative at $0$ and positive at $2$, but it is never zero. That is the same hole we started with. The theorem about continuous functions that ends this half of the course is the least upper bound property again, applied to functions.

## Looking Back

Looking back, the first half of the course rests on three ideas.

The first is a single axiom. The least upper bound property gives the Archimedean property and density. It gives nested intervals and monotone convergence, then Bolzano–Weierstrass and completeness, then the Cauchy criterion for series and absolute convergence. Finally it gives Bolzano's theorem and the IVT. Each time we need a number to exist, we take a supremum.

The second is that sequences are the main tool. A series is a sequence of partial sums. A limit of a function is equivalent to a statement about every sequence approaching the point. Continuity is preserved under sequential limits. So once the theory of sequences is in place, the rest mostly follows.

The third is a single technique: split the quantity you want to control into pieces you already control, using the triangle inequality. It appears as $\frac{\varepsilon}{2}$ in "convergent implies Cauchy", as $\frac{\varepsilon}{3}$ in the continuity of power series, and as "a finite head plus a small tail" in Mertens' theorem and Abel's theorem.

Each hypothesis in these theorems has a counterexample showing it is needed. $\mathbb Q$ has no supremum for $\{ q:q^2<2 \}$. Open nested intervals can have empty intersection. Bounded sequences need not converge, and terms tending to zero do not make a series converge. Conditionally convergent series can lose their sum when multiplied or rearranged. The IVT fails without completeness. The theorems hold because of exactly the hypotheses they assume.
