#math 

# The Real Numbers

## Well-Ordering Principle
Every non-empty subset of $\mathbb N$ has a least element.

*Text Axiom 1.4.2 · [[content/Notes/Math/Real Analysis/Lecture 1|Lecture 1]]*

## Principle of Mathematical Induction
Let $P(n)$ be a statement for each $n\in\mathbb N$. If $P(1)$ is true, and $P(k)\implies P(k+1)$ for all $k\in\mathbb N$, then $P(n)$ is true for all $n\in\mathbb N$. Induction is equivalent to well-ordering.

*Text Theorem 1.4.4 · [[content/Notes/Math/Real Analysis/Lecture 1|Lecture 1]]*

## Upper Bound
Let $A\subseteq\mathbb R$. A number $b\in\mathbb R$ is an upper bound of $A$ if $a\leq b$ for all $a\in A$. If $A$ has an upper bound, it is bounded above. Lower bounds and bounded below are the same with $\geq$.

*Text Definition 1.5.7*

## Supremum
The supremum of a set $A$ is the least upper bound of that set. Namely, $x=\text{sup(A)}$ if $x\geq a$ for all $a \in A$, and $x\leq y$ for every upper bound $y$.

## Infimum
The infimum of a set $A$ is the greatest lower bound of that set. Namely $x=\text{inf(A)}$ if $x\leq a$ for all $a \in A$, and $x\geq y$ for every lower bound $y$.

## Sup and Inf Using $\varepsilon$
Let $A$ be non-empty and bounded above. Then $s=\sup A$ if and only if
1. $s$ is an upper bound of $A$, and
2. for every $\varepsilon>0$ there is some $a\in A$ with $a>s-\varepsilon$ (so $s-\varepsilon$ is not an upper bound).

Similarly, $t=\inf A$ if and only if $t$ is a lower bound of $A$ and for every $\varepsilon>0$ there is some $a\in A$ with $a<t+\varepsilon$.

Most sup proofs are two inequalities: $\leq$ because something is an upper bound, and $\geq$ by an $\varepsilon$ argument. Also: if $x\leq y+\varepsilon$ for every $\varepsilon>0$, then $x\leq y$.

## Least Upper Bound Property
The least upper bound property states that for a set $A$, if it is non-empty and bounded above, then its supremum exists.

## Greatest Lower Bound Property
The greatest lower bound property states that if a set $A$ is non-empty and bounded below, then its infimum exists. 

## Archimedean property of  $\mathbb Q$
Given any two rational (or real) numbers $x> 0$ and $y>0$, you can always find a natural number $n\in \mathbb N$ such that $nx >y$.


> [!theorem]- Proof of the Archimedean property for the rationals 
> Let $x =\frac{a}{b}$ and $y=\frac{c}{d}$ where $a,b,c,d>0$. It follows that $c\geq \frac{c}{d}$ and  $c\leq ac= \frac{a}{b} \cdot bc$. Combining these we get that:
>$$
> 	\frac{a}{b} \cdot bc \geq c \geq \frac{c}{d} = y
>$$
>So:
>$$
>	x \cdot bc \geq y
>$$
>Therefore let $n=bc+1$ and we are done. 

## Archimedean property of $\mathbb R$
For any $x>0$ the set $S = \{ nx :n\in \mathbb N \}$ is not bounded above. Consequently, for all $y>0$, there exists $n\in\mathbb N$ s.t. $nx>y$.


> [!theorem]- Proof of the Archimedean property for the reals 
> If $S$ were bounded above then there exists some $u$ such that $u=\text{sup(S)}$ and that $u\geq nx$ for all $nx \in S$. Since $x>0$ we know that $u-x$ is not an upper bound and $u>u-x$. Hence there exists some $nx$ s.t. $nx>u-x$ but this proves that $(n+1)x>u$ so $u$ is not an upper bound.  


## Equivalent Forms of the Archimedean Property
The following are equivalent:
- For all $x,y>0$ there is $n\in\mathbb N$ with $nx>y$.
- For all $x>0$ there is $n\in\mathbb N$ with $n>x$.
- For all $x>0$ there is $n\in\mathbb N$ with $0<\frac{1}{n}<x$.

The last form is the one most $\varepsilon$ proofs use.

*Text Corollary 2.1.2 · [[content/Notes/Math/Real Analysis/Lecture 3|Lecture 3]]*

## Density of the rationals in $\mathbb Q$
For any $x,y \in \mathbb Q$ s.t. $x<y$ there exists some $z\in \mathbb Q$ such that $x<z<y$. 

> [!theorem]- Proof of the density of the rationals 
>  If $x<y$ then $2x < x+y$ and $x+y < 2y$. If we let $z = \frac{{x+y}}{2}$ we are done, as the rationals are closed under addition and multiplication, and this yields $x<z<y$.


## Density of $\mathbb Q$ in $\mathbb R$
For any $x,y\in\mathbb R$ with $x<y$, there exists $q\in\mathbb Q$ such that $x<q<y$.

The irrationals are dense too: apply this to $x-\sqrt2<y-\sqrt2$ to get a rational $q$, and then $q+\sqrt2$ is an irrational between $x$ and $y$.

*Text Corollary 2.1.4 · [[content/Notes/Math/Real Analysis/Lecture 3|Lecture 3]]*

## Triangle Inequality
Let $x,y \in \mathbb{R}$, then $|x+y| \leq |x| + |y|$. Likewise, $|x-y|\geq |x| -|y|$.

Swapping $x$ and $y$ in the second one gives the reverse triangle inequality in the form most proofs use: $\big||x|-|y|\big|\leq|x-y|$.

*Text Theorem 2.0.1 · [[content/Notes/Math/Real Analysis/Lecture 3|Lecture 3]]*

# Intervals and Sets

## Nested Interval Property
Let $I_{n}=[a_{n},b_{n}]$ be closed, non-empty intervals with $I_{n+1}\subseteq I_{n}$ for every $n$. Then $\bigcap_{n\in\mathbb N}I_{n}\neq\varnothing$. If also the lengths $b_{n}-a_{n}\to 0$, then the intersection is exactly one point.

The intervals must be closed: $\bigcap_{n}\left( 0,\frac{1}{n} \right)=\varnothing$.

> [!theorem]- Proof that the intersection is non-empty
> First, $a_{k}\leq b_{m}$ for all $k,m$: if $k\leq m$ then $a_{k}\leq a_{m}\leq b_{m}$, and if $k>m$ then $a_{k}\leq b_{k}\leq b_{m}$. So $A=\{ a_{n}:n\in\mathbb N \}$ is non-empty and bounded above, and $\alpha=\sup A$ exists by the LUB property. Then $a_{n}\leq\alpha$ because $\alpha$ is an upper bound, and $\alpha\leq b_{n}$ because every $b_{n}$ is an upper bound and $\alpha$ is the least one. So $\alpha\in I_{n}$ for every $n$.

*Text Theorem 2.2.2 · [[content/Notes/Math/Real Analysis/Lecture 3|Lecture 3]]*

## Open and Closed Sets
A set $A\subseteq\mathbb R$ is open if for every $x\in A$ there exists $r>0$ such that $(x-r,x+r)\subseteq A$. A set $B$ is closed if its complement $\mathbb R\setminus B$ is open.

A set can be neither, e.g. $(0,1]$. Only $\varnothing$ and $\mathbb R$ are both.

*Text Definition 2.2.3 · [[content/Notes/Math/Real Analysis/Lecture 4|Lecture 4]]*

## Unions and Intersections of Open and Closed Sets
- Any union of open sets is open, and any finite intersection of open sets is open.
- Any intersection of closed sets is closed, and any finite union of closed sets is closed.
- An infinite intersection of open sets need not be open: $\bigcap_{n}\left( -\frac{1}{n},\frac{1}{n} \right)=\{ 0 \}$.

*[[content/Notes/Math/Real Analysis/Lecture 4|Lecture 4]]*

## Bounded
A set $A\subseteq\mathbb R$ is bounded if there exist $a,b\in\mathbb R$ with $A\subseteq[a,b]$. Equivalently, there is $M$ with $|x|\leq M$ for all $x\in A$. A function is bounded if its image is a bounded set.

*Text Definitions 2.2.4 and 2.2.5 · [[content/Notes/Math/Real Analysis/Lecture 4|Lecture 4]]*

## Closed Sets and Limits
If $A$ is closed and $(x_{n})$ is a sequence in $A$ with $x_{n}\to L$, then $L\in A$. Closed subsets of $\mathbb R$ are complete.

*Text Lemma 2.3.13 (for $[a,b]$) · [[content/Notes/Math/Real Analysis/Lecture 5 and 6|Lecture 5 and 6]], [[content/Notes/Math/Real Analysis/Lecture 7|Lecture 7]]*

## Closed and Bounded Sets are Nice
For $A\subseteq\mathbb R$, the following are equivalent:
- $A$ is closed and bounded.
- Every sequence in $A$ has a subsequence that converges to a point of $A$.

*Text Theorem 2.5.1 · [[content/Notes/Math/Real Analysis/Lecture 7|Lecture 7]]*

# Sequences

## Convergence of a Sequence
A sequence $(a_{n})$ converges to $L\in\mathbb R$, written $a_{n}\to L$, if for every $\varepsilon>0$ there exists $N\in\mathbb N$ such that $n>N$ implies $|a_{n}-L|<\varepsilon$.

**Negation:** $a_{n}\not\to L$ if there exists $\varepsilon>0$ such that for every $N$ there is some $n>N$ with $|a_{n}-L|\geq\varepsilon$.

*Text Definition 2.3.1 · [[content/Notes/Math/Real Analysis/Lecture 5 and 6|Lecture 5 and 6]]*

## Diverging to Infinity
$a_{n}\to+\infty$ if for every $M>0$ there exists $N\in\mathbb N$ such that $n\geq N$ implies $a_{n}\geq M$. Such a sequence has no finite limit. For $-\infty$, use $a_{n}\leq-M$.

*Text §2.3.3 Exercise 13*

## Arithmetic of Limits (Sequences)
If $a_{n}\to a$ and $b_{n}\to b$, then $a_{n}\pm b_{n}\to a\pm b$ and $a_{n}b_{n}\to ab$. If also $b\neq 0$ and every $b_{n}\neq 0$, then $\frac{a_{n}}{b_{n}}\to \frac{a}{b}$.

Proof tools: $\frac{\varepsilon}{2}$ for the sum, "convergent $\implies$ bounded" for the product, and $|b_{n}|>\frac{|b|}{2}$ eventually for the quotient.

*Text §2.3.3 Exercise 9 · [[content/Notes/Math/Real Analysis/Lecture 5 and 6|Lecture 5 and 6]]*

## Sequences That Stay Together ("Cleveland")
If $(a_{n})$ and $(b_{n})$ converge and $a_{n}-b_{n}\to 0$, then they have the same limit.

*Text Lemma 2.3.3 · [[content/Notes/Math/Real Analysis/Lecture 7|Lecture 7]]*

## Convergent Sequences are Bounded
If $(a_{n})$ converges, then $\{ a_{n}:n\in\mathbb N \}$ is bounded.

> [!theorem]- Proof that convergent sequences are bounded
> Let $a_{n}\to L$ and take $\varepsilon=1$: there is $N$ with $|a_{n}-L|<1$ for $n>N$, so $|a_{n}|<|L|+1$ for $n>N$. Then $M=\max\{ |a_{1}|,\dots,|a_{N}|,|L|+1 \}$ bounds every term.

*Text Lemma 2.3.4 · [[content/Notes/Math/Real Analysis/Lecture 5 and 6|Lecture 5 and 6]]*

## Monotone Convergence Theorem
If $(a_{n})$ is increasing ($a_{n}\leq a_{n+1}$ for all $n$) and bounded above, then it converges to $\sup\{ a_{n}:n\in\mathbb N \}$. If it is decreasing and bounded below, it converges to the infimum.

> [!theorem]- Proof of the monotone convergence theorem
> The set $\{ a_{n} \}$ is non-empty and bounded above, so $s=\sup\{ a_{n} \}$ exists by the LUB property. Let $\varepsilon>0$. Then $s-\varepsilon$ is not an upper bound, so $a_{N}>s-\varepsilon$ for some $N$. For $n>N$, since the sequence is increasing, $s-\varepsilon<a_{N}\leq a_{n}\leq s$, so $|a_{n}-s|<\varepsilon$.

*Text Lemma 2.3.5 · [[content/Notes/Math/Real Analysis/Lecture 5 and 6|Lecture 5 and 6]]*

## Subsequence
Given a sequence $(a_{n})$ and indices $n_{1}<n_{2}<n_{3}<\cdots$, the sequence $(a_{n_{k}})_{k}$ is a subsequence. Note that $n_{k}\geq k$. If $a_{n}\to L$, then every subsequence converges to $L$.

*Text Definition 2.3.7 · [[content/Notes/Math/Real Analysis/Lecture 5 and 6|Lecture 5 and 6]]*

## Every Sequence Has a Monotone Subsequence
Every sequence of reals has a monotone subsequence. The proof looks at "peaks", terms larger than every later term.

*Text Lemma 2.3.8 · [[content/Notes/Math/Real Analysis/Lecture 5 and 6|Lecture 5 and 6]]*

## Bolzano–Weierstrass Theorem
Every bounded sequence has a convergent subsequence. If the sequence lies in $[a,b]$, the limit is in $[a,b]$.

Proof: take a monotone subsequence, which is bounded, so it converges by the monotone convergence theorem.

*Text Theorem 2.3.10 · [[content/Notes/Math/Real Analysis/Lecture 5 and 6|Lecture 5 and 6]]*

## Cauchy Sequence
A sequence $(a_{n})$ is Cauchy if for every $\varepsilon>0$ there exists $N\in\mathbb N$ such that $|a_{n}-a_{m}|<\varepsilon$ for all $n,m>N$.

**Negation:** there exists $\varepsilon>0$ such that for every $N$ there are $n,m>N$ with $|a_{n}-a_{m}|\geq\varepsilon$.

$a_{n+1}-a_{n}\to 0$ is not enough: $\sqrt{ n }$ has this but is not Cauchy. A bounded sequence need not be Cauchy, e.g. $(-1)^n$.

*Text Definition 2.3.15 · [[content/Notes/Math/Real Analysis/Lecture 5 and 6|Lecture 5 and 6]]*

## Facts About Cauchy Sequences
- Convergent $\implies$ Cauchy (Text Lemma 2.3.17).
- Cauchy $\implies$ bounded (Text Lemma 2.3.18).
- If a Cauchy sequence has a subsequence converging to $\alpha$, the whole sequence converges to $\alpha$ (Text Lemma 2.3.19).

> [!theorem]- Proof that convergent implies Cauchy
> Let $a_{n}\to L$ and $\varepsilon>0$. There is $N$ with $|a_{n}-L|<\frac{\varepsilon}{2}$ for $n>N$. For $n,m>N$,
> $$
> |a_{n}-a_{m}|\leq|a_{n}-L|+|L-a_{m}|<\frac{\varepsilon}{2}+\frac{\varepsilon}{2}=\varepsilon.
> $$

> [!theorem]- Proof that Cauchy implies bounded
> Take $\varepsilon=1$: there is $N$ with $|a_{n}-a_{m}|<1$ for $n,m>N$. Fixing $m=N+1$ gives $|a_{n}|<|a_{N+1}|+1$ for $n>N$. Then $M=\max\{ |a_{1}|,\dots,|a_{N}|,|a_{N+1}|+1 \}$ bounds every term.

*[[content/Notes/Math/Real Analysis/Lecture 5 and 6|Lecture 5 and 6]]*

## Complete
A set $A\subseteq\mathbb R$ is complete if every Cauchy sequence in $A$ converges to a point of $A$. For example, $\mathbb Q$ and $(0,1)$ are not complete.

*Text Definition 2.3.21 · [[content/Notes/Math/Real Analysis/Lecture 7|Lecture 7]]*

## The Reals are Complete
Every Cauchy sequence in $\mathbb R$ converges. So a sequence of reals converges if and only if it is Cauchy (the Cauchy criterion).

Proof: Cauchy $\implies$ bounded $\implies$ a convergent subsequence (Bolzano–Weierstrass) $\implies$ the whole sequence converges.

*Text Theorem 2.3.23 and Corollary 2.3.24 · [[content/Notes/Math/Real Analysis/Lecture 7|Lecture 7]]*

## LUB, Nested Intervals and Completeness are Equivalent
The least upper bound property, the nested interval property and the completeness of $\mathbb R$ are logically equivalent.

*Text Theorem 2.4.1*

# Series

## Series and Partial Sums
The series $\sum_{n=1}^\infty a_{n}$ is the sequence of partial sums $S_{N}=\sum_{n=1}^N a_{n}$. It converges to $S$ if $S_{N}\to S$, and diverges otherwise.

*Text Definition 2.6.5 · [[content/Notes/Math/Real Analysis/Lecture 8|Lecture 8]]*

## Absolute and Conditional Convergence
$\sum a_{n}$ converges absolutely if $\sum|a_{n}|$ converges. It converges conditionally if $\sum a_{n}$ converges but $\sum|a_{n}|$ does not. For example, the alternating harmonic series converges conditionally.

*Text Definitions 2.6.12 and 2.6.18 · [[content/Notes/Math/Real Analysis/Lecture 8|Lecture 8]]*

## Cauchy Criterion for Series
$\sum a_{n}$ converges if and only if for every $\varepsilon>0$ there exists $N\in\mathbb N$ such that
$$
\left| \sum_{k=n}^m a_{k} \right| <\varepsilon \quad \text{whenever } m\geq n\geq N.
$$

*Text Theorem 2.6.15 · [[content/Notes/Math/Real Analysis/Lecture 8|Lecture 8]]*

## Absolute Convergence Implies Convergence
If $\sum|a_{n}|$ converges, then $\sum a_{n}$ converges, and $\left| \sum a_{n} \right|\leq\sum|a_{n}|$.

Proof: apply the Cauchy criterion to $\sum|a_{n}|$, then use the triangle inequality $\left| \sum_{k=n}^m a_{k} \right|\leq\sum_{k=n}^m|a_{k}|$.

*Text Theorem 2.6.17 · [[content/Notes/Math/Real Analysis/Lecture 8|Lecture 8]]*

## Divergence Test
If $\sum a_{n}$ converges, then $a_{n}\to 0$. So if $a_{n}\not\to 0$, the series diverges. The converse is false: $\frac{1}{n}\to 0$ but $\sum \frac{1}{n}$ diverges.

*Text Corollaries 2.6.19 and 2.6.20 · [[content/Notes/Math/Real Analysis/Lecture 8|Lecture 8]]*

## Nonnegative Series
If $a_{n}\geq 0$ for all $n$, then $\sum a_{n}$ converges if and only if its partial sums are bounded (they are increasing, so use the monotone convergence theorem).

*Text Corollaries 2.6.23 and 2.6.24*

## Comparison Test
Suppose $0\leq a_{n}\leq b_{n}$ for all sufficiently large $n$.
1. If $\sum b_{n}$ converges, then $\sum a_{n}$ converges.
2. If $\sum a_{n}$ diverges, then $\sum b_{n}$ diverges.

*Text Theorem 2.6.25 · [[content/Notes/Math/Real Analysis/Lecture 8|Lecture 8]]*

## Geometric Series and p-Series
$\sum r^n$ converges if and only if $|r|<1$, and then $\sum_{n=0}^\infty r^n=\frac{1}{1-r}$. The $p$-series $\sum \frac{1}{n^p}$ converges if and only if $p>1$.

*Text Lemma 2.6.26 · [[content/Notes/Math/Real Analysis/Lecture 8|Lecture 8]], HW5*

## Root Test
Let $L=\lim_{n\to\infty}\sqrt[n]{ |a_{n}| }$. If $L<1$, then $\sum a_{n}$ converges absolutely. If $L>1$, it diverges. If $L=1$, the test is inconclusive.

*Text Theorem 2.6.27 · [[content/Notes/Math/Real Analysis/Lecture 9|Lecture 9]]*

## Ratio Test
Suppose every $a_{n}\neq 0$ and let $L=\lim_{n\to\infty}\left| \frac{a_{n+1}}{a_{n}} \right|$. If $L<1$, then $\sum a_{n}$ converges absolutely. If $L>1$, it diverges. If $L=1$, the test is inconclusive. Both $\sum \frac{1}{n}$ and $\sum \frac{1}{n^2}$ give $L=1$.

Whenever the ratio test applies, the root test does too and gives the same answer (Text Theorem 2.6.32).

*Text Theorem 2.6.28 · [[content/Notes/Math/Real Analysis/Lecture 9|Lecture 9]], HW5*

## Alternating Series Test
If $a_{n}\geq 0$, $(a_{n})$ is decreasing, and $a_{n}\to 0$, then $\sum (-1)^{n+1}a_{n}$ converges.

*Text §2.6.8 Exercise 4*

## Dyadic Comparison Test
If $(a_{n})$ is nonnegative and decreasing, then $\sum_{n=1}^\infty a_{n}$ converges if and only if $\sum_{k=0}^\infty 2^k a_{2^k}$ converges. Use it for series with logs, e.g. $\sum \frac{1}{n\log n}$ diverges.

*HW5 Question 2 · Text §2.6.8 Exercise 6*

## Adding Series
If $\sum a_{n}$ and $\sum b_{n}$ converge, then $\sum(a_{n}+b_{n})$ converges and equals $\sum a_{n}+\sum b_{n}$. Also $\sum c\,a_{n}=c\sum a_{n}$.

*Text Theorem 2.6.34 · [[content/Notes/Math/Real Analysis/Lecture 9|Lecture 9]]*

## Cauchy Product
The Cauchy product of $\sum_{n=0}^\infty a_{n}$ and $\sum_{n=0}^\infty b_{n}$ is $\sum_{n=0}^\infty c_{n}$, where
$$
c_{n}=\sum_{k=0}^n a_{k}b_{n-k}.
$$

*Text Definition 2.6.36 · [[content/Notes/Math/Real Analysis/Lecture 9|Lecture 9]]*

## Mertens' Theorem
If $\sum a_{n}$ converges absolutely to $A$ and $\sum b_{n}$ converges to $B$, then their Cauchy product converges to $AB$.

At least one series must converge absolutely. With $a_{n}=b_{n}=\frac{(-1)^n}{\sqrt{ n+1 }}$, both converge conditionally but the Cauchy product diverges (Text Example 2.6.37).

*Text Theorem 2.6.38 · [[content/Notes/Math/Real Analysis/Lecture 9|Lecture 9]]*

## Rearrangements
If $\sum a_{n}$ converges absolutely, every rearrangement converges to the same sum. If it converges conditionally, then its positive and negative parts both sum to $\infty$, and it can be rearranged to converge to any real number, or to diverge.

*Text Theorem 2.6.39 and Lemma 2.6.41 · [[content/Notes/Math/Real Analysis/Lecture 9|Lecture 9]]*

## Power Series
For $f(x)=\sum_{n=0}^\infty a_{n}x^n$, let $R=\lim_{n\to\infty}\frac{1}{\sqrt[n]{ |a_{n}| }}$ (when this limit exists). The series converges absolutely for $|x|<R$ and diverges for $|x|>R$. At $|x|=R$ anything can happen. $f$ is continuous on $(-R,R)$.

*HW6 Questions 1 and 2*

## Abel's Theorem
If $\sum_{n=0}^\infty a_{n}$ converges, then $\lim_{x\to 1^-}\sum_{n=0}^\infty a_{n}x^n=\sum_{n=0}^\infty a_{n}$. The converse is false: $\sum(-1)^n x^n=\frac{1}{1+x}\to \frac{1}{2}$, but $\sum(-1)^n$ diverges.

*HW6 Question 3*

# Limits and Continuity

## Balls and Neighbourhoods
The $\varepsilon$-ball of $q$ is $(q-\varepsilon,q+\varepsilon)=\{ x:|x-q|<\varepsilon \}$. The punctured $\varepsilon$-ball removes $q$: $\{ x:0<|x-q|<\varepsilon \}$. A neighbourhood of $q$ is a set containing some $\varepsilon$-ball of $q$, and a punctured neighbourhood contains a punctured ball.

*Text Definition 3.0.1 · [[content/Notes/Math/Real Analysis/Lecture 10|Lecture 10]]*

## Limit of a Function
Let $f$ be defined on a punctured neighbourhood of $a$. Then $\lim_{x\to a}f(x)=L$ if for every $\varepsilon>0$ there exists $\delta>0$ such that $0<|x-a|<\delta$ implies $|f(x)-L|<\varepsilon$. The value $f(a)$ plays no role, and need not exist.

**Negation:** there exists $\varepsilon>0$ such that for every $\delta>0$ there is some $x$ with $0<|x-a|<\delta$ and $|f(x)-L|\geq\varepsilon$.

*Text Definition 3.1.1 · [[content/Notes/Math/Real Analysis/Lecture 10|Lecture 10]]*

## Infinite Limits and Limits at Infinity
- $\lim_{x\to a}f(x)=+\infty$: for every $M>0$ there exists $\delta>0$ such that $0<|x-a|<\delta$ implies $f(x)\geq M$.
- $\lim_{x\to\infty}f(x)=L$: for every $\varepsilon>0$ there exists $R>0$ such that $x\geq R$ implies $|f(x)-L|<\varepsilon$.
- $\lim_{x\to\infty}f(x)=+\infty$: for every $M>0$ there exists $R>0$ such that $x\geq R$ implies $f(x)\geq M$.

*Text §3.1.3 Exercise 10*

## Sequential Criterion for Limits
$\lim_{x\to a}f(x)=L$ if and only if for every sequence $(x_{n})$ with $x_{n}\neq a$ and $x_{n}\to a$, we have $f(x_{n})\to L$.

To show a limit does not exist, find one sequence $x_{n}\to a$ (with $x_{n}\neq a$) where $f(x_{n})$ does not converge, or two sequences where $f$ has different limits.

*Text Lemmas 3.1.6, 3.1.7 and Corollary 3.1.8 · [[content/Notes/Math/Real Analysis/Lecture 10|Lecture 10]]*

## Arithmetic of Limits (Functions)
If $\lim_{x\to a}f(x)=F$ and $\lim_{x\to a}g(x)=G$, then $f\pm g\to F\pm G$ and $fg\to FG$, and $\frac{f}{g}\to \frac{F}{G}$ if $G\neq 0$. So for any polynomial $P$, $\lim_{x\to a}P(x)=P(a)$.

*Text Theorem 3.1.9 · [[content/Notes/Math/Real Analysis/Lecture 10|Lecture 10]]*

## Sandwich Theorem
If $f(x)\leq g(x)\leq h(x)$ for all $x$ near $a$ (except perhaps $x=a$), and $f(x)\to L$ and $h(x)\to L$ as $x\to a$, then $g(x)\to L$.

*Text Theorem 3.1.10 · [[content/Notes/Math/Real Analysis/Lecture 10|Lecture 10]]*

## Continuity
Let $f$ be defined on a neighbourhood of $c$. Then $f$ is continuous at $c$ if $\lim_{x\to c}f(x)=f(c)$. That is, for every $\varepsilon>0$ there exists $\delta>0$ such that $|x-c|<\delta$ implies $|f(x)-f(c)|<\varepsilon$. (The $0<$ can be dropped, since $x=c$ gives $0<\varepsilon$.)

$f$ is continuous on $[a,b]$ if it is continuous at every point, with one-sided continuity at the endpoints.

**Negation:** there exists $\varepsilon>0$ such that for every $\delta>0$ there is some $x$ with $|x-c|<\delta$ and $|f(x)-f(c)|\geq\varepsilon$.

*Text Definition 3.2.2 · [[content/Notes/Math/Real Analysis/Lecture 10|Lecture 10]], [[content/Notes/Math/Real Analysis/Lecture 11|Lecture 11]]*

## Left and Right Continuity
$f$ is left-continuous at $c$ if for every $\varepsilon>0$ there exists $\delta>0$ such that $c-\delta<x<c$ implies $|f(x)-f(c)|<\varepsilon$. Right-continuity uses $c<x<c+\delta$. A function that is both is continuous at $c$.

*Text Definition 3.2.3 · [[content/Notes/Math/Real Analysis/Lecture 11|Lecture 11]]*

## Sequential Criterion for Continuity
$f$ is continuous at $a$ if and only if for every sequence $x_{n}\to a$, we have $f(x_{n})\to f(a)$. Here $x_{n}=a$ is allowed. This is the usual way to show a function is not continuous.

*Text Corollary 3.2.10 · [[content/Notes/Math/Real Analysis/Lecture 11|Lecture 11]]*

## Composition of Continuous Functions
If $f$ is continuous at $c$ and $g$ is continuous at $f(c)$, then $g\circ f$ is continuous at $c$.

For limits: if $\lim_{x\to c}f(x)=d$ and $g$ is continuous at $d$, then $\lim_{x\to c}g(f(x))=g(d)$. Continuity of $g$ is needed here.

*Text Lemmas 3.2.7 and 3.2.8 · [[content/Notes/Math/Real Analysis/Lecture 11|Lecture 11]]*

## Sign Persistence
If $f$ is continuous at $c$ and $f(c)>0$, then there exists $\delta>0$ such that $f(x)>0$ for all $x\in(c-\delta,c+\delta)$. The same holds for $f(c)<0$.

Proof: apply continuity with $\varepsilon=f(c)$.

*Text Lemma 3.2.14 · [[content/Notes/Math/Real Analysis/Lecture 11|Lecture 11]]*

## Bolzano's Theorem
If $f:[a,b]\to\mathbb R$ is continuous and $f(a)$ and $f(b)$ have opposite signs, then there exists $c\in(a,b)$ with $f(c)=0$.

> [!theorem]- Proof of Bolzano's theorem
> Say $f(a)<0<f(b)$. The set $S=\{ x\in[a,b]:f(x)<0 \}$ contains $a$ and is bounded above by $b$, so $c=\sup S$ exists.
> - If $f(c)<0$, then $c<b$, and by sign persistence $f<0$ on some $(c-\delta,c+\delta)$. So $S$ contains points bigger than $c$, a contradiction.
> - If $f(c)>0$, then $c>a$, and by sign persistence $f>0$ on some $(c-\delta,c+\delta)$. So no point of $S$ is in $(c-\delta,c]$, and $c-\delta$ is a smaller upper bound, a contradiction.
>
> So $f(c)=0$, and $c\neq a,b$ since $f(a),f(b)\neq 0$.

*Text Theorem 3.2.13 · [[content/Notes/Math/Real Analysis/Lecture 11|Lecture 11]]*

## Intermediate Value Theorem
If $f:[a,b]\to\mathbb R$ is continuous, then for every $y$ between $f(a)$ and $f(b)$ there exists $x\in[a,b]$ with $f(x)=y$.

Proof: apply Bolzano's theorem to $g(x)=f(x)-y$. The theorem fails over $\mathbb Q$: $x^2-2$ has no rational root in $[0,2]$.

*Text Theorem 3.2.1 · [[content/Notes/Math/Real Analysis/Lecture 11|Lecture 11]]*