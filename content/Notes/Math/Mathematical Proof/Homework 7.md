#math #math220 #proof 

## Solutions to homework 7

### 1. Write out the set
$$
\mathcal P(\{\varnothing,\{\mathbb N\},\{\varnothing\}\})-\mathcal P(\{\varnothing,\{\mathbb N\},\mathbb N\}).
$$

> [!proof]
> Let
> $$
> A=\{\varnothing,\{\mathbb N\},\{\varnothing\}\}
> \qquad \text{and} \qquad
> B=\{\varnothing,\{\mathbb N\},\mathbb N\}.
> $$
>
> Then the set we want is
> $$
> \mathcal P(A)-\mathcal P(B).
> $$
>
> Recall that $\mathcal P(A)$ is the set of all subsets of $A$, and similarly for $\mathcal P(B)$.
>
> First note that $A$ and $B$ each have three elements. In particular:
> - $\varnothing$ is an element,
> - $\{\mathbb N\}$ is an element,
> - and the third element differs:
>   - in $A$ it is $\{\varnothing\}$,
>   - in $B$ it is $\mathbb N$.
>
> So the subsets of $A$ are:
> $$
> \varnothing,\;
> \{\varnothing\},\;
> \{\{\mathbb N\}\},\;
> \{\{\varnothing\}\},\;
> \{\varnothing,\{\mathbb N\}\},\;
> \{\varnothing,\{\varnothing\}\},\;
> \{\{\mathbb N\},\{\varnothing\}\},\;
> \{\varnothing,\{\mathbb N\},\{\varnothing\}\}.
> $$
>
> Now, a subset of $A$ will also belong to $\mathcal P(B)$ when all of its elements are also elements of $B$. Since $\{\varnothing\}\notin B$, any subset containing $\{\varnothing\}$ will not be in $\mathcal P(B)$.
>
> Therefore, the set difference consists of exactly the subsets of $A$ that contain $\{\varnothing\}$. These are:
> $$
> \{\{\varnothing\}\},\quad
> \{\varnothing,\{\varnothing\}\},\quad
> \{\{\mathbb N\},\{\varnothing\}\},\quad
> \{\varnothing,\{\mathbb N\},\{\varnothing\}\}.
> $$
>
> Hence,
> $$
> \mathcal P(\{\varnothing,\{\mathbb N\},\{\varnothing\}\})-\mathcal P(\{\varnothing,\{\mathbb N\},\mathbb N\})
> =
> \left\{
> \{\{\varnothing\}\},
> \{\varnothing,\{\varnothing\}\},
> \{\{\mathbb N\},\{\varnothing\}\},
> \{\varnothing,\{\mathbb N\},\{\varnothing\}\}
> \right\}.
> $$
> ◻

---

### 2. Prove that
$$
\bigcap_{n\in\mathbb N}\left[0,\frac{2}{n}\right]=\{0\}.
$$

> [!proof]
> 
> We will prove this by proving both inclusions in turn as follows:
>
> Firstly, we show that
> $$
> \{0\}\subseteq \bigcap_{n\in\mathbb N}\left[0,\frac{2}{n}\right].
> $$
> Let $n\in\mathbb N$. Then clearly we have that:
> $$
> 0\in \left[0,\frac{2}{n}\right]
> $$
> because $0\le 0\le \frac{2}{n}$. Now since this is true for every $n\in\mathbb N$, it follows that
> $$
> 0\in \bigcap_{n\in\mathbb N}\left[0,\frac{2}{n}\right].
> $$
> Thus $\{0\}$ is contained in the intersection.
>
> Now we prove the reverse inclusion:
> $$
> \bigcap_{n\in\mathbb N}\left[0,\frac{2}{n}\right]\subseteq \{0\}.
> $$
> Let
> $$
> x\in \bigcap_{n\in\mathbb N}\left[0,\frac{2}{n}\right].
> $$
> Then by definition of intersection, for every $n\in\mathbb N$ we have
> $$
> x\in \left[0,\frac{2}{n}\right].
> $$
> This means that for every $n\in\mathbb N$,
> $$
> 0\le x\le \frac{2}{n}.
> $$
>
> Which forces $x = 0$
>
> Hence every element of the intersection is $0$, so
> $$
> \bigcap_{n\in\mathbb N}\left[0,\frac{2}{n}\right]=\{0\}.
> $$
> ◻

---

### 3. Let a relation $R$ on $A=\{0,1,2,3\}$ be such that $xRy$ if $(x+y)$ is a multiple of $3$.

---

**(a)** Write out $R$ as a set.

> [!proof]
>  $R$ is simple the set of all ordered pairs $(x,y)\in A\times A$ such that $x+y$ is divisible by $3$.
>
> So through cases we see that:
>
> - If $x=0$, then $0+y$ must be a multiple of $3$, so $y=0$ or $3$.
> - If $x=1$, then $1+y$ must be a multiple of $3$, so $y=2$.
> - If $x=2$, then $2+y$ must be a multiple of $3$, so $y=1$.
> - If $x=3$, then $3+y$ must be a multiple of $3$, so $y=0$ or $3$.
>
> Therefore $R$ is as follows:
> $$
> R=\{(0,0),(0,3),(1,2),(2,1),(3,0),(3,3)\}.
> $$
> ◻

---

**(b)** Is this relation reflexive?

> [!proof]
> A relation on $A$ is reflexive if every element shares that relationship with itself, that is specifically in this case if
> $$
> (0,0),(1,1),(2,2),(3,3)\in R.
> $$
>
> From part (a), we see that $(0,0)$ and $(3,3)$ are in $R$, but
> $$
> (1,1)\notin R
> \qquad \text{and} \qquad
> (2,2)\notin R,
> $$
> because
> $$
> 1+1=2 \not\equiv 0 \pmod 3
> \qquad \text{and} \qquad
> 2+2=4 \not\equiv 0 \pmod 3.
> $$
>
> Therefore $R$ cannot be reflexive. ◻

---

**(c)** Is it symmetric?

> [!proof]
> By definition a relation is symmetric if whenever $xRy$, then also $yRx$.
>
> And in this case we have that $R$ is defined by 
> $$
> xRy \iff x+y \text{ is a multiple of }3.
> $$
> But addition is commutative, so
> $$
> x+y=y+x.
> $$
> Therefore, if $x+y$ is a multiple of $3$, then so is $y+x$. Thus
> $$
> xRy \implies yRx.
> $$
>
> Hence $R$ is symmetric.
>◻

---

**(d)** What is the fewest number of elements that you need to add to $R$ so as to obtain a transitive relation on $A$?

> [!proof]
> We have that:
> $$
> R=\{(0,0),(0,3),(1,2),(2,1),(3,0),(3,3)\}.
> $$
>We know that a relation $R$ is transitive whenever
> $$ 
> xRy \land yRz \implies xRz 
> $$
>
> We see that $R$ is not transitive as 
>
>
> $$
> (1,2)\in R \qquad \text{and} \qquad (2,1)\in R.
> $$
> 
> But $(1,1)\notin R$, thus $xRz$ does not hold
>
> Similarly, because
> $$
> (2,1)\in R \qquad \text{and} \qquad (1,2)\in R,
> $$
> transitivity requires
> $$
> (2,2)\in R.
> $$
> But $(2,2)\notin R$.
>
> Therefore, we must both add 
> $$
> (1,1) \quad \text{and} \quad (2,2).
> $$
>
> Therefore, the fewest number of elements that must be added is 2.
>
> ◻

---

### 4. Let $R$ be a relation on a non-empty set $S$ such that:
- $\forall a\in S,\; (a,a)\notin R$,
- $\forall x\in S,\; \exists y\in S$ such that $(x,y)\in R$.

Prove that if $R$ is symmetric, then $R$ is not transitive.

> [!proof]
> First, we assume that $R$ is symmetric.
>
> 
>
> Let $x\in S$. Since $S$ is non-empty and the second condition says that every element is related to **some** element of $S$, there exists $y\in S$ such that
> $$
> (x,y)\in R.
> $$
>
> Now, because $R$ is symmetric, it follows that
> $$
> (y,x)\in R.
> $$
>
> But suppose now for contradiction, that $R$ were also transitive. Then from
> $$
> (x,y)\in R
> \qquad \text{and} \qquad
> (y,x)\in R,
> $$
> transitivity would imply
> $$
> (x,x)\in R.
> $$
>
> But this contradicts the first given condition, namely that
> $$
> (a,a)\notin R \qquad \text{for every } a\in S.
> $$
> In particular, $(x,x)\notin R$.
>
> Therefore our assumption that $R$ is transitive must be false.
>
> Hence, if $R$ is symmetric, then $R$ is **not transitive**. ◻

---

### 5. Let $R$ be a relation on a nonempty set $A$. Then the complement
$$
\overline{R}=(A\times A)-R
$$
is also a relation on $A$. Prove or disprove each statement.

---

**(a)** If $R$ is reflexive, then $\overline{R}$ is reflexive.

> [!proof]
> This statement is false.
>
> Recall that $R$ is reflexive means that for every $a\in A$,
> $$
> (a,a)\in R.
> $$
> But then by definition of complement,
> $$
> (a,a)\notin \overline{R}.
> $$
> So $\overline{R}$ cannot be reflexive.
>
> We can prove this with a counterexample. For instance, let $A=\{1\}$ and let
> $$
> R=\{(1,1)\}.
> $$
> Then $R$ is reflexive on $A$, but
> $$
> \overline{R}=\varnothing,
> $$
> and $\varnothing$ is not reflexive on $A$ because $(1,1)\notin \varnothing$.
>
> Therefore the statement is **false**. ◻

---

**(b)** If $R$ is symmetric, then $\overline{R}$ is symmetric.

> [!proof]
> Assume that $R$ is symmetric.
>
> We want to show that $\overline{R}$ is symmetric, so let
> $$
> (x,y)\in \overline{R}.
> $$
> Then, by definition of complement we have that
> $$
> (x,y)\notin R.
> $$
>
> We must then show that
> $$
> (y,x)\in \overline{R},
> $$
> that is, $(y,x)\notin R$.
>
> Now suppose for contradiction that $(y,x)\in R$. But since $R$ is symmetric, this implies
> $$
> (x,y)\in R,
> $$
> thus contradicting the fact that $(x,y)\notin R$.
>
> Therefore $(y,x)\notin R$, so
> $$
> (y,x)\in \overline{R}.
> $$
>
> Hence $\overline{R}$ is symmetric. ◻

---

**(c)** If $R$ is transitive, then $\overline{R}$ is transitive.

> [!proof]
> This statement is false.
>
> For instance, take the following counter example:
>
> Let
> $$
> A=\{1,2\}
> \qquad \text{and} \qquad
> R=\{(1,1)\}.
> $$
>
> First we can see that $R$ is indeed transitive as the only possible composition inside $R$ is
> $$
> (1,1),(1,1),
> $$
> and this indeed gives $(1,1)\in R$. So $R$ is transitive.
>
> Then we can see that the complement is as follows:
> $$
> \overline{R}=(A\times A)-R=\{(1,2),(2,1),(2,2)\}.
> $$
>
> Now, given we have that
> $$
> (1,2)\in \overline{R}
> \qquad \text{and} \qquad
> (2,1)\in \overline{R},
> $$
> for $\overline{R}$ to be transitive it would require
> $$
> (1,1)\in \overline{R}.
> $$
> But $(1,1)\notin \overline{R}$.
>
> Therefore $\overline{R}$ is not transitive.
>
> Thus we have proven the statement is false. ◻

---

### 6. We define a relation $T$ on $\mathbb R-\{0\}$ by
$$
aTb \iff \frac{a}{b}\in \mathbb Q.
$$

Show that $T$ is symmetric, reflexive, and transitive.

> [!proof]
> 
>
> We can prove $T$ is reflexive, for instance, 
> Let $a\in \mathbb R-\{0\}$. Then
> $$
> \frac{a}{a}=1.
> $$
> Since $1\in \mathbb Q$, it follows that
> $$
> aTa.
> $$
> Therefore $T$ is reflexive.
>
> Moreover, $T$ is symmetric
> for example suppose $aTb$. By definition, this means
> $$
> \frac{a}{b}\in \mathbb Q.
> $$
> Since $a,b\neq 0$, the quotient $\frac{a}{b}$ is a nonzero rational number. The reciprocal of any nonzero rational number is again rational, thus:
> $$
> \frac{b}{a}=\left(\frac{a}{b}\right)^{-1}\in \mathbb Q.
> $$
> Hence
> $$
> bTa.
> $$
> Therefore $T$ is symmetric.
>
> Finally $T$ must be transitive, for example
> suppose $aTb$ and $bTc$. Then
> $$
> \frac{a}{b}\in \mathbb Q
> \qquad \text{and} \qquad
> \frac{b}{c}\in \mathbb Q.
> $$
> The product of two rational numbers is rational, thus:
> $$
> \frac{a}{b}\cdot \frac{b}{c}=\frac{a}{c}\in \mathbb Q.
> $$
> Therefore
> $$
> aTc.
> $$
> And $T$ by definition is transitive.
>
> Ultimately, since $T$ is reflexive, symmetric, and transitive, by definition $T$ is then an equivalence relation. ◻

---

### 7. For this question, you may use the following fact without proving it: let $e$ be Euler’s number. Then for every $n\in\mathbb N$, $e^n$ is irrational.

Let $T$ be the relation on $\mathbb R-\{0\}$ from the previous question. In the previous question, you proved that $T$ is an equivalence relation.

Prove that this equivalence relation defines infinitely many distinct equivalence classes.

> [!proof]
> *Proof.* We will show that the equivalence classes
> $$
> [e],[e^2],[e^3],[e^4],\dots
> $$
> are all distinct. Since this gives infinitely many different equivalence classes, that will prove the result.
>
> Recall that under the relation $T$, two nonzero real numbers $a$ and $b$ are equivalent exactly when
> $$
> \frac{a}{b}\in \mathbb Q.
> $$
> So two numbers lie in the same equivalence class precisely when their ratio is rational.
>
> We now show that no two of the classes $[e^m]$ and $[e^n]$ are equal when $m\ne n$.
>
> Suppose, for contradiction, that for some distinct positive integers $m$ and $n$,
> $$
> [e^m]=[e^n].
> $$
> Since equal equivalence classes mean the elements are equivalent, this implies
> $$
> e^m \, T \, e^n.
> $$
> By definition of $T$, this means
> $$
> \frac{e^m}{e^n}\in \mathbb Q.
> $$
> Simplifying,
> $$
> e^{m-n}\in \mathbb Q.
> $$
>
> Now there are two cases.
>
> **Case 1:** $m>n$.  
> Then $m-n\in \mathbb N$, so $e^{m-n}$ is irrational by the fact given in the problem. This contradicts $e^{m-n}\in \mathbb Q$.
>
> **Case 2:** $m<n$.  
> Then $n-m\in \mathbb N$, and
> $$
> e^{m-n}=\frac{1}{e^{n-m}}.
> $$
> If $e^{m-n}$ were rational, then its reciprocal $e^{n-m}$ would also be rational, since the reciprocal of a nonzero rational number is rational. But this contradicts the given fact that $e^{n-m}$ is irrational.
>
> In either case we get a contradiction.
>
> Therefore, whenever $m\ne n$, the equivalence classes $[e^m]$ and $[e^n]$ must be distinct.
>
> Since there are infinitely many natural numbers $n$, this gives infinitely many distinct equivalence classes:
> $$
> [e],[e^2],[e^3],\dots
> $$
>
> Hence the equivalence relation $T$ defines infinitely many distinct equivalence classes. ◻