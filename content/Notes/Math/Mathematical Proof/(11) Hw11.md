#math #math220 #proof
## Solutions to homework 11

### 1. Determine if the set of all functions $f:\{0,1\}\to\mathbb N$ is countable.

> [!proof]
> 
> We can show that this set is indeed countable by identifying each such function with an ordered pair of natural numbers.
>
> Let
> $$
> \mathcal F=\{f:\{0,1\}\to\mathbb N\}.
> $$
> Every function $f\in\mathcal F$ is completely determined by the two values
> $$
> f(0) \quad \text{and} \quad f(1).
> $$
> So define a function
> $$
> \Phi:\mathcal F\to \mathbb N\times \mathbb N
> $$
> by
> $$
> \Phi(f)=(f(0),f(1)).
> $$
>
> Now we can show that $\Phi$ is a bijection by proving it is both injective and surjectie as follows:
>
> To prove our function is injective suppose $\Phi(f)=\Phi(g)$. Then
> $$
> (f(0),f(1))=(g(0),g(1)).
> $$
> So $f(0)=g(0)$ and $f(1)=g(1)$. Since the domain is exactly $\{0,1\}$, thus $f=g$ and $\Phi$ is injective.
>
> To prove $\Phi$ is surjective let $(m,n)\in\mathbb N\times\mathbb N$. Then define $f$ as follows
> $$
> f:\{0,1\}\to\mathbb N
> $$
> by
> $$
> f(0)=m, \qquad f(1)=n.
> $$
> Then $\Phi(f)=(m,n)$, so every pair in $\mathbb N\times\mathbb N$ has a preimage and $\Phi$ by definition is surjective and hence bijective.
>
> Therefore we have that:
> $$
> \mathcal F \approx \mathbb N\times\mathbb N.
> $$
> Since $\mathbb N\times\mathbb N$ is countable, it follows that the set of all functions $f:\{0,1\}\to\mathbb N$ is **countable**. ◻

---

### 2. Prove the following statements.

#### (a) If $A$ is countable but $B$ is uncountable, then $B-A$ is uncountable.

> [!proof]
> We will prove this by contradiction.
>
> First, assume that $A$ is countable and $B$ is uncountable. We want to show that $B- A$ must be uncountable.
>
> Suppose instead for contradiction that $B-A$ is countable.
>
> Now notice that
> $$
> B = (B-A)\cup (B\cap A).
> $$
> Thus the set $B\cap A$ is a subset of $A$, so since $A$ is countable, $B\cap A$ is also countable.
>
> By our assumption, $B-A$ is countable as well.
>
> But then $B$ is a union of two countable sets such that:
> $$
> B=(B- A)\cup(B\cap A).
> $$
> And a union of two countable sets is countable, therefore $B$ would be countable.
>
> Thus contradicting the assumption that $B$ is uncountable.
>
> Therefore, our assumption was false and $B- A$ must be uncountable. ◻

#### (b) Between any real numbers $a,b$ such that $a<b$ there are uncountably many irrationals.

> [!proof]
> Let $a,b\in\mathbb R$ with $a<b$. We want to show that the set of irrational numbers in the interval $(a,b)$ is uncountable.
>
> First recall that the interval $(a,b)$ itself is uncountable.
>
> Also, the set of rational numbers $\mathbb Q$ is countable, so the set
> $$
> (a,b)\cap\mathbb Q
> $$
> is countable as a subset of a countable set.
>
> Now split $(a,b)$ into rationals and irrationals:
> $$
> (a,b)=\big((a,b)\cap\mathbb Q\big)\cup\big((a,b)\setminus\mathbb Q\big).
> $$
> Here:
> - $(a,b)$ is uncountable,
> - $(a,b)\cap\mathbb Q$ is countable.
>
> Now if the set of irrationals defined as:
> $$
> (a,b)-\mathbb Q
> $$
> were countable, then $(a,b)$ would be a union of two countable sets, hence countable. But that is impossible as the interval $(a,b)$ is uncountable and cannot be written as a union of two countable sets
>
> Therefore we have that the set
> $$
> (a,b)-\mathbb Q
> $$
> must be uncountable, that is between any two real numbers $a<b$, there are uncountably many irrational numbers. ◻
>


---

### 3. Let $S,T$ be sets. Prove the following.

#### (a) If $|S|\le |T|$, then $|\mathcal P(S)|\le |\mathcal P(T)|$.

> [!proof]
> The statement $|S|\le |T|$ by definition means that there exists an injective function
> $$
> f:S\to T.
> $$
> So, to construct an injective function from $\mathcal P(S)$ to $\mathcal P(T)$.
>
> First define a function $F$ such that:
> $$
> F:\mathcal P(S)\to \mathcal P(T)
> $$
> where
> $$
> F(A)=f(A)=\{f(a):a\in A\}.
> $$
>
> Now to prove that $F$ is injective let $A,B\subseteq S$ and suppose
>
> 
> $$
> F(A)=F(B).
> $$
> Then we must show that $A=B$.
>
> So, take any $x\in A$. Then $f(x)\in F(A)=F(B)$, so there exists some $y\in B$ such that
> $$
> f(y)=f(x).
> $$
> Since $f$ is injective, we get $y=x$. Thus $x\in B$.
>
> So every element of $A$ lies in $B$, hence $A\subseteq B$.
>
> By the same argument, every element of $B$ lies in $A$, so $B\subseteq A$.
>
> Therefore $A=B$, and so $F$ is injective.
>
> Hence
> $$
> |\mathcal P(S)|\le |\mathcal P(T)|.
> $$
> ◻

#### (b) If $|S|=|T|$, then $|\mathcal P(S)|=|\mathcal P(T)|$.

> [!proof]
> If $|S|=|T|$, then by definition there exists a bijection
> $$
> f:S\to T.
> $$
> So, to construct a bijective function from  $\mathcal P(S)$ to $\mathcal P(T)$.
> first define a function $F$ such that:
> $$
> F:\mathcal P(S)\to \mathcal P(T)
> $$
> where
> $$
> F(A)=f(A)=\{f(a):a\in A\}.
> $$
>
> Now to show that $F$ is a bijection we will prove that it is both injective and surjective.
>
> Firstly, we can see $F$ is injective as it follows exactly the same argument as in part (a). Since $f$ is injective, different subsets of $S$ have different images in $T$.
>
> Then, to prove $F$ is surjective let $B\subseteq T$. Since $f$ is bijective, it has an inverse $f^{-1}:T\to S$, so we can define:
> $$
> A=f^{-1}(B)=\{x\in S:f(x)\in B\}.
> $$
> Then we have that:
> $$
> F(A)=B.
> $$
> Thus every subset of $T$ is hit by $F$ and therefore $F$ is a bijection, and hence
>
> 
> $$
> |\mathcal P(S)|=|\mathcal P(T)|.
> $$
> ◻

---

### 4. Show that there exist infinitely many pairs of distinct natural numbers $a,b$ such that $17^a-17^b$ is divisible by $2025$.

> [!proof]
> We will first use the pigeonhole principle to find one such pair, and then show that this gives infinitely many pairs.
>
> Consider the numbers
> $$
> 17^1,17^2,17^3,\dots,17^{2026}.
> $$
> Then, reduce each of these modulo $2025$.
>
> There are only $2025$ possible remainders modulo $2025$, but we have $2026$ numbers. Therefore, by the pigeonhole principle, two of them must have the same remainder modulo $2025$.
>
> So there exist distinct natural numbers $a,b$ with
> $$
> 1\le a<b\le 2026
> $$
> such that
> $$
> 17^a \equiv 17^b \pmod{2025}.
> $$
> This means exactly that
> $$
> 2025 \mid (17^b-17^a).
> $$
> Since divisibility does not care about order up to sign, this also means $2025$ divides $17^a-17^b$.
>
> Thus we have found at least one pair of distinct natural numbers with the desired property.
>
> Now we can further produce infinitely many such pairs. For instance, fix one pair $a\ne b$ such that
> $$
> 2025\mid (17^a-17^b).
> $$
> Then for every natural number $n$,
> $$
> 17^{a+n}-17^{b+n}=17^n(17^a-17^b).
> $$
> Since $2025$ divides $(17^a-17^b)$, it also divides $17^n(17^a-17^b)$. Therefore
> $$
> 2025\mid (17^{a+n}-17^{b+n})
> $$
> for every $n\in\mathbb N$.
>
> Thus the pairs
> $$
> (a+n,b+n)
> $$
> give infinitely many distinct pairs of natural numbers satisfying the condition.
>
> Hence there exist infinitely many pairs of distinct natural numbers $a,b$ such that $17^a-17^b$ is divisible by $2025$. ◻

---

### 5. Assume that $\mathbb R$ and $\mathbb R^+ = \{x\in\mathbb R:x>0\}$ are equinumerous. Prove that $(-\infty,-29)$ and $\mathbb R$ are equinumerous.

> [!proof]
> We are given that
> $$
> \mathbb R \approx \mathbb R^+.
> $$
> So it is enough to show that
> $$
> (-\infty,-29)\approx \mathbb R^+.
> $$
>
> So let $f$ be defined as follows:
> $$
> f:\mathbb R^+\to (-\infty,-29)
> $$
> such that
> $$
> f(x)=-x-29.
> $$
>
> We then need to show that $f$ is a bijective function.
>
> To prove injectivity suppose
> $$
> f(x_1)=f(x_2).
> $$
> Then
> $$
> -x_1-29=-x_2-29,
> $$
> so $x_1=x_2$.
>
> To prove surjectivity let $y\in(-\infty,-29)$. Then $y<-29$, so
> $$
> x=-y-29 > 0.
> $$
> Thus $x\in\mathbb R^+$, and
> $$
> f(x)=-(-y-29)-29=y.
> $$
> Therefore every element of $(-\infty,-29)$ has a preimage.
>
> And thus
> $$
> (-\infty,-29)\approx \mathbb R^+.
> $$
>
> Since $\mathbb R^+\approx \mathbb R$, by transitivity of equinumerosity we may then conclude
> $$
> (-\infty,-29)\approx \mathbb R.
> $$
> ◻

---

### 6. Prove or disprove: for any non-empty sets $A,B,C$, if $|A\times B| = |A\times C|$ then $|B|=|C|$.

> [!proof]
> 
> We will prove this statement is false by use of a counterexample.
>
> Firstly let
> $$
> A=\mathbb N, \qquad B=\{0\}, \qquad C=\{0,1\}.
> $$
> such that all three sets are non-empty.
>
> Now:
> - $A\times B \approx \mathbb N\times\{0\}\approx \mathbb N$,
> - $A\times C \approx \mathbb N\times\{0,1\}$.
>
> But $\mathbb N\times\{0,1\}$ is also countable, hence
> $$
> |A\times B|=|A\times C|.
> $$
>
> However,
> $$
> |B|=1 \qquad \text{and} \qquad |C|=2,
> $$
> so $|B|\ne |C|$.
>
> Therefore the statement is **false**. ◻

---

### 7. Let $A$ be a finite set and $f:\mathbb R\to A$. Show that there exists some $a\in A$ such that $f^{-1}(\{a\})$ is uncountable.

> [!proof]
> For each $a\in A$, consider the fiber
> $$
> f^{-1}(\{a\})=\{x\in\mathbb R:f(x)=a\}.
> $$
> These fibers partition $\mathbb R$, because every real number has exactly one image under $f$.
>
> So we have
> $$
> \mathbb R=\bigcup_{a\in A} f^{-1}(\{a\}).
> $$
>
> Since $A$ is finite, this is a finite union.
>
> Suppose, for contradiction, that every fiber $f^{-1}(\{a\})$ were countable.
> Then $\mathbb R$ would be a finite union of countable sets. But a finite union of countable sets is countable.
>
> That would imply that $\mathbb R$ is countable, which is false.
>
> Therefore, at least one of the fibers must be uncountable. In other words, there exists some $a\in A$ such that
> $$
> f^{-1}(\{a\})
> $$
> is uncountable. ◻

---

### 8. For a set $X$ we define $F_X$ to be the set of all functions $X\to\{0,1\}$.

For each subset $Y\subseteq X$, define $f_Y$ to be the function
$$
f_Y:X\to\{0,1\}
$$
given by
$$
f_Y(x)=
\begin{cases}
1 & \text{if } x\in Y,\\
0 & \text{if } x\in X\setminus Y.
\end{cases}
$$

This is called the characteristic function of $Y$.

#### (a) When $X=\mathbb R$, draw the graph of $f_Y$ in the following cases:
1. $Y=[0,1]$,
2. $Y=[0,+\infty)$,
3. $Y=[-1,2]\cup[3,4]$.

> [!proof]
>  Since each characteristic function only takes the values $0$ and $1$, its graph consists of horizontal pieces at height $1$ above the set $Y$, and at height $0$ above the complement of $Y$.
>
> **1. $Y=[0,1]$**
>
> $$
> f_Y(x)=
> \begin{cases}
> 1 & \text{if } 0\le x\le 1,\\
> 0 & \text{otherwise.}
> \end{cases}
> $$
>
> 
>
> **2. $Y=[0,+\infty)$**
>
> $$
> f_Y(x)=
> \begin{cases}
> 1 & \text{if } x\ge 0,\\
> 0 & \text{if } x<0.
> \end{cases}
> $$
>
>
>
> **3. $Y=[-1,2]\cup[3,4]$**
>
> $$
> f_Y(x)=
> \begin{cases}
> 1 & \text{if } x\in[-1,2]\cup[3,4],\\
> 0 & \text{otherwise.}
> \end{cases}
> $$
>
>
>
> In all three cases, the graph simply records whether a given real number belongs to $Y$ or not. ◻

#### (b) Prove that the function
$$
F:\mathcal P(X)\to F_X,\qquad Y\mapsto f_Y
$$
is a bijection by giving the inverse of $F$.

> [!proof]
> We can define the inverse explicitly. For example,
>
> let $g\in F_X$, so $g:X\to\{0,1\}$.
>
> Then, define a subset of $X$ such that
> $$
> Y_g=\{x\in X:g(x)=1\}.
> $$
>
> We then claim that
> $$
> F(Y_g)=g.
> $$
> Indeed, for every $x\in X$ we have that:
> - if $x\in Y_g$, then by definition $g(x)=1$, so $f_{Y_g}(x)=1$,
> - if $x\notin Y_g$, then $g(x)=0$, so $f_{Y_g}(x)=0$.
>
> Thus
> $$
> f_{Y_g}(x)=g(x) \qquad \text{for all } x\in X,
> $$
> and therefore
> $$
> F(Y_g)=f_{Y_g}=g.
> $$
>
> So every $g\in F_X$ has a preimage under $F$, which shows that $F$ is surjective.
>
> To see injectivity, suppose
> $$
> F(Y_1)=F(Y_2).
> $$
> That is,
> $$
> f_{Y_1}=f_{Y_2}.
> $$
> We must then show $Y_1=Y_2$.
>
> So let $x\in Y_1$. Then $f_{Y_1}(x)=1$. Since $f_{Y_1}=f_{Y_2}$, we also have $f_{Y_2}(x)=1$, so $x\in Y_2$. Hence $Y_1\subseteq Y_2$.
>
> By the same argument we see that $Y_2\subseteq Y_1$.
>
> Therefore we have that $Y_1=Y_2$, and $F$ is injective.
>
> Hence $F$ is a bijection and the inverse is:
>
> 
> $$
> F^{-1}(g)=\{x\in X:g(x)=1\}.
> $$
> ◻

#### (c) Prove that $F_{\mathbb N}$ is not countable.

> [!proof]
> From part (b), we know that for every set $X$ there exists a bijection such that
> $$
> \mathcal P(X)\approx F_X.
> $$
> So, taking $X=\mathbb N$, we get
> $$
> \mathcal P(\mathbb N)\approx F_{\mathbb N}.
> $$
>
> But $\mathcal P(\mathbb N)$ is uncountable by Cantor’s theorem.
>
> Therefore $F_{\mathbb N}$ is also uncountable, and in particular it is **not countable**. ◻

#### (d) For $n\in\mathbb N$, what is the cardinality of the power set of $\{1,2,\dots,n\}$? Justify your answer using part (b).

> [!proof]
> Let $X$ be a set defined as:
> $$
> X=\{1,2,\dots,n\}.
> $$
> Then, by part (b) we have that:
> $$
> \mathcal P(X)\approx F_X,
> $$
> where $F_X$ is the set of all functions $X\to\{0,1\}$.
>
> To specify a function $g:X\to\{0,1\}$, for each of the $n$ elements of $X$ we choose either $0$ or $1$. That gives:
> - $2$ choices for $g(1)$,
> - $2$ choices for $g(2)$,
> - $\dots$,
> - $2$ choices for $g(n)$.
>
> Therefore, the total number of such functions is given by
> $$
> 2\cdot 2\cdots 2 = 2^n.
> $$
> Thus the cardinality of $X$ is given by:
> $$
> |\mathcal P(\{1,2,\dots,n\})|=2^n.
> $$
> ◻