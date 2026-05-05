#math #math220 #proof
## Solutions to homework 3

1. Question 1.

> [!proof] Proof
> 
>
> For,
> $$
> \text{(a)} \quad \forall a \in\mathbb Z, (6 \mid a \land 8 \mid a) \implies 48 \mid a,
> $$
> the negation is as follows:
> $$
> \exists a \in\mathbb Z (6\mid a \land 8 \mid a) \land 48 \nmid a.
> $$
> And the original statement is **false** given that $\exists a \in\mathbb Z$ where $(6\mid a \land 8\mid a) \implies 48 \nmid a$ for instance, $a=24$.
>
> For
> $$
> \text{(b)} \quad \exists x \in\mathbb Z \quad \text{such that} \quad (x>84) \land x\equiv 75 \mod{84},
> $$
> the negation is as follows:
> $$
> \forall x \in\mathbb Z \quad x \leq 84 \land x \equiv 75 \mod{84}.
> $$
> And the original statement is **true**, for example let $x=75+84k$ for $k\in\mathbb N$. Then, take $k=1$ which then yields $x=159$, and this holds for $x \leq 84 \land x \equiv 75 \mod{84}$.
>
> For
> $$
> \text{(c)} \quad \exists x,y \in\mathbb R \quad \text{such that} \quad (x^2\geq y^2 \land x \leq y),
> $$
> the negation is as follows:
> $$
> \forall x,y \in\mathbb R \quad (x^2 < y^2) \lor (x>y).
> $$
> And the original statement is **true**, for example, let $x=-2$ and $y=-1$, and thus we have shown that there does exist $x,y\in\mathbb R$ such that $(x^2\geq y^2 \land x \leq y)$.

2. Question 2.

> [!proof] Proof
> 
> For $a\in\mathbb R$, the set
> $$
> S_a = \left\{ x\in\mathbb R : (x\geq 0) \land (x < a -2) \right\},
> $$
> then in order to show that,
>
> $$
> S_a = \emptyset \iff a \in (-\infty, 2],
> $$
>
> we will choose to prove this by instead proving the contrapositive, that is we want to show:
> $$
> S_a \neq \emptyset \iff a > 2.
> $$
> In order to do so we must then demonstrate both
> $$
> \begin{aligned}
> \text{1.} & \quad S_a \neq \emptyset \implies a > 2, \\
> \text{2.} & \quad a> 2 \implies S_a \neq \emptyset.
> \end{aligned}
> $$
> Beginning with our first case, that is we will assume $S_a \neq \emptyset$ we then have that by definition of $S_a$, $\exists x \in\mathbb R$ such that $0\leq x < a -2$, to which we can then observe that:
> $$
> 0 \leq x < a-2 \implies 0 < a-2 \implies a > 2.
> $$
> And therefore we have shown $S_a \neq \emptyset \implies a > 2$.
>
> Then, for our second case we want to show that $a>2 \implies S_a \neq \emptyset$, so let us write $x$ as follows:
> $$
> x=\frac{a-2}{2} \qquad \text{for $a\in\mathbb R$},
> $$
> which by definition of $S_a$, $x$ holds as an element of the set $S_a$ given:
> $$
> 0\leq \frac{a-2}{2}<a-2.
> $$
> Therefore, we have shown that if $a>2$, $\exists x \in S_a$ and thus $S_a \neq \emptyset$. And thus we have shown $S_a = \emptyset \iff a \in (-\infty, 2]$ to be true by proving the contrapositive. ◻

3. Question 3.

> [!proof] Proof
> Let
> $$
> A = \left\{ n \in \mathbb N : 5 \mid n \lor 6 \mid n \right\},
> $$
> we want to show whether the following three statements a, b, c are true or false:
>
> $$
> \text{(a)} \quad \exists x \in A \quad \text{such that} \quad \exists y \in A \quad \text{such that} \quad x + y \in A.
> $$
> Statement (a) is **true**, for example, let $x=5$ and $y=10$, which are both in $A$ and hold for $(x\neq y) \land (x+y \in A)$.
>
> $$
> \text{(b)} \quad \forall x \in A , \quad \forall y \in A, \quad x+y \in A.
> $$
> Statement (b) is **false**, for example let $x=5$ and $y=6$, which are both in $A$ and hold for $x\neq y$, however, $x+y \notin A$ as $5\nmid 11$ and $6\nmid 11$. Therefore $\exists x,y \in A$ such that $x+y\notin A$.
>
> $$
> \text{(c)} \quad \exists x \in A \quad \text{such that} \quad \forall y \in A, \quad x+y \in A.
> $$
> Statement (c) is **true**, for example let $x$ be written as follows:
> $$
> x =30n \qquad \text{for $n\in\mathbb N$ with $n>1$}.
> $$
> Therefore we then have that $(5\mid x) \land (6 \mid x)$ for any $n$ we may choose.
>
> Now, suppose $5\mid y$, then it follows $5\mid (x+y)$, or suppose $6\mid y$, it also then follows that $6\mid (x+y)$. Thus, we have that $\forall y \in A, \exists x \in A$ such that $x+y\in A$. ◻

4. Question 4.

> [!proof] Proof
> 
>
> \(a\) For all integers $n$, there is a real number $y$ so that $y^n<y$, that is to say for $\forall n\in\mathbb Z, \exists y \in\mathbb R$, such that $y^n<y$. The negation for (a) is then as follows:
> $$
> \exists n \in\mathbb Z, \quad \text{such that\quad }\forall y \in\mathbb R,\quad y^n \geq y.
> $$
> Furthermore, the statement (a) is **false**, for example let $n=1$, therefore we would need to find a $y\in\mathbb R$ such that $y^1< y$ holds, however no such $y$ exists.
>
> \(b\) There is a real number $y$ such that for all $n\in\mathbb Z$ with $n>1$, we have $y^n<y$. That is to say $\exists y \in\mathbb R$ such that $\forall n \in\mathbb Z$ with $n>1$ we have $y^n > y$. The negation for (b) is then as follows:
> $$
> \forall y \in\mathbb R, \exists n \in \mathbb Z \quad \text{with $n>1$ such that} \quad y^n \geq y.
> $$
>
> Moreover, the statement (b) is **true**, for instance let $y=\frac{1}{2}$, then for all $n\in\mathbb Z$ greater than 1, $\left(\frac{1}{2}\right)^n<\frac{1}{2}$ holds.

5. Question 5.

> [!proof] Proof
> 
> In order to prove that $\forall a \in\mathbb Z$, $\exists b \in\mathbb Z$ such that $a^2 +b^2 \equiv 1 \mod3$, we will choose to use a proof by cases approach, that is we know that as per the division algorithm all $a\in\mathbb Z$ can be written as:
> $$
> a = mq + r \qquad \text{for $m\in\mathbb Z^+$, $q\in\mathbb Z$, and $r\in\mathbb Z$ with $0 \leq r <m$}.
> $$
> And that all $a\in\mathbb Z$ must then fall into the following 3 congruence cases, that is, $a$ is either:
> $$
> \begin{aligned}
> \text{1.} \quad & a \equiv 0 \mod 3. \\
> \text{2.} \quad & a \equiv 1 \mod 3. \\
> \text{3.} \quad & a \equiv 2 \mod 3.
> \end{aligned}
> $$
> Such that,
> $$
> a = 3q +r \qquad \text{for $r\in \left\{ 0,1,2 \right\}$}.
> $$
> Therefore, through proof by cases, we will show that for all of these possible values of $a$, $\exists b \in\mathbb Z$ such that $a^2 +b^2 \equiv 1 \mod 3$.
>
> So, starting with our first case, $a \equiv 0 \mod 3$, we have that that $a$ can be written as:
> $$
> a = 3k \qquad \text{for $k\in\mathbb Z$},
> $$
> thus we see that $a^2=(3k)^2=3(3k^2)$ and therefore $a^2 \equiv 0 \mod 3$ as well. Now, let $b=1$ such that $b^2 = 1 \equiv 1 \mod 3$. Then taking the sum $a^2 + b^2$ of our congruences we find:
> $$
> \begin{aligned}
> a^2 + b^2 & \equiv 0 + 1 \mod 3 \\
>            & \equiv 1 \mod 3.
> \end{aligned}
> $$
> Therefore we have shown $\exists b \in\mathbb Z$ that holds for $a^2 + b^2 \equiv 1 \mod 3$ for $a = 3k$ with $k\in\mathbb Z$.
>
> Now, for our second case, we study $a \equiv 1 \mod 3$, therefore $a$ can be expressed as:
> $$
> a = 3k + 1 \qquad \text{for $k\in\mathbb Z$},
> $$
> then we have that,
> $$
> a^2 = (3k+1)^2 = 9k^2 + 6k + 1 = 3(3k^2 + 2k) +1.
> $$
> Thus, it follows that $a^2 \equiv 1 \mod 3$. So, let $b=0$ such that,
> $$
> b^2 = 0 \equiv 0 \mod 3.
> $$
> Then similarly, taking the sum of our congruences $a^2+b^2$ we see that:
> $$
> \begin{aligned}
> a^2 + b^2 & \equiv 1 + 0 \mod 3 \\
>            & \equiv 1 \mod 3.
> \end{aligned}
> $$
> Therefore, we have again shown that $\exists b \in\mathbb Z$ which holds for $a^2+b^2 \equiv 1 \mod 3$ given $a$ of the form $a\equiv 1 \mod 3$.
>
> Finally, for our last case we study $a \equiv 2 \mod 3$, such that $a$ can be written as follows:
> $$
> a = 3k + 2 \qquad \text{for $k\in\mathbb Z$}.
> $$
> Now, again taking the square of $a$ we find,
> $$
> a^2 = (3k+2)^2 = 9k^2 + 12k + 4 = 3(3k^2 + 6k + 1) + 1.
> $$
> Again it then follows that $a^2 \equiv 1 \mod 3$, thus let $b=0$ again such that:
> $$
> b^2 = 0 \equiv 0 \mod 3.
> $$
> Ultimately, once more taking the sum $a^2 + b^2$ we find,
> $$
> \begin{aligned}
> a^2 + b^2 & \equiv 1 + 0 \mod 3 \\
>            & \equiv 1 \mod 3.
> \end{aligned}
> $$
> Thus, again $\exists b \in\mathbb Z$ such that $a^2 + b^2 \equiv 1 \mod 3$ for $a$ of the form $a \equiv 2 \mod 3$.
>
> Therefore our proof is complete given we have shown $\exists b \in\mathbb Z$, $\forall a \in\mathbb Z$, such that $a^2 +  b^2 \equiv 1 \mod 3$ holds true. ◻

6. Question 6.

> [!proof] Proof
>
>
> The given statement, "For every positive number $\epsilon$, there is a positive number $M$ for which:
> $$
> \left| 1 - \frac{x^2}{x^2 + 1} \right | < \epsilon \quad \text{whenever $x \geq M$}
> $$
> can be written more rigorously as follows:
>
> $$
> \forall \epsilon > 0, \exists M > 0 \quad \text{such that} \quad \left| 1 - \frac{x^2}{x^2 + 1} \right | < \epsilon \quad \text{whenever $x \geq M$}.
> $$
> And then the **negation** of this statement is as follows:
> $$
> \exists \epsilon > 0, \forall M > 0, \quad \text{such that} \quad \exists x \geq M \quad \text{for which} \quad \left| 1 - \frac{x^2}{x^2 + 1} \right | \geq \epsilon.
> $$

7. Question 7.

> [!proof] Proof
> For (a) we want to disprove the following statement:
>
> "Every bounded function $f: \mathbb R \to \mathbb R$ is also linearly bounded."
>
> So, let $f(x) = 1$ which we can then see is bounded as $\exists n \in \mathbb N$ such that,
> $$
> f(x) = 1 \leq n \quad \forall x\in\mathbb R.
> $$
> Now, suppose for contradiction that $f$ is linearly bounded, then $\exists j \in\mathbb N$ such that,
> $$
> |f(x)| \leq |jx| \quad \forall x \in \mathbb R.
> $$
> However, suppose we let $x = \frac{1}{2}j$ for $j\in\mathbb N$, then it follows that,
> $$
> |jx| = \frac{1}{2}<1,
> $$
> Which is a clear contradiction to $|f(x)|\leq |jx|$, as we have that, $f(x) > |jx|$, for $1 > \frac{1}{2}$.
>
> Therefore, the original statement is false, as there exists no $j\in\mathbb N$ that will hold for $1\leq|jx|$ given we let $x=\frac{1}{2}j$.
>
> For (b) we want to disprove the following statement:
>
> "Every linearly bounded function $f: \mathbb R \to \mathbb R$ is also bounded."
>
> Similarly, we will again implement a proof by contradiction, for example, let $f(x) = x$, we then can see that $f$ is linearly bounded as $\exists j \in\mathbb N$ such that,
> $$
> |f(x)| \leq |jx|.
> $$
> For instance, take $j=1$, then $\forall x \in\mathbb R$ we have that:
> $$
> |f(x)| = |x| \leq 1 \cdot |x| = |jx|.
> $$
> Thus, $\exists j \in\mathbb N$ such that $|f(x)| \leq |jx|$, $\forall x\in\mathbb R$.
>
> Now, again suppose for contradiction that $\exists n \in\mathbb N$ with $|f(x)|\leq n$, $\forall x \in\mathbb R$, but then we can simply let $x = n+1$ which then provides:
> $$
> |f(n+1)| = |n+1| = n+1 > n.
> $$
> Therefore, contradicting $|f(x)|\leq n$, and thus there exists no $n\in\mathbb N$ such that $n+1>n$ holds, and consequently the original statement is then false as $f$ is linearly bounded but not bounded.
>
> Finally, for (c) we will prove the following statement:
>
> "A function $f: \mathbb R \to \mathbb R$ is bounded if and only if $f$ is strictly bounded."
>
> Which can be rewritten as follows:
> $$
> f \quad \text{is bounded} \iff f \quad \text{is strictly bounded}.
> $$
> Therefore we need to prove both of the following cases,
> $$
> \begin{aligned}
> \text{1.} & \quad f \quad \text{is bounded } \implies f \quad \text{is strictly bounded} \\
> \text{2.} & \quad f \quad \text{is strictly bounded} \implies f \quad \text{is bounded}
> \end{aligned}
> $$
> So, for our first case, we will assume $f$ is bounded, then $\exists n \in\mathbb N$ such that $|f(x)| \leq n$, $\forall x \in\mathbb R$. Now, suppose there is some $k$ such that $k = n+1$ for $n\in\mathbb N$, then $\forall x\in\mathbb R$ we see that,
> $$
> |f(x)| \leq n < n+1 = k.
> $$
> So, $|f(x)|<k$, $\forall x \in\mathbb R$ and thus $f$ is then by definition strictly bounded.
>
> Then, for our next case, assume $f$ is strictly bounded such that $\exists k \in\mathbb N$ such that $|f(x)| < k$, $\forall x \in\mathbb R$.
>
> Now, since $|f(x)|<k$ implies that $|f(x)| \leq k$, $\forall x \in\mathbb R$, simply let $n=k$ for $k\in\mathbb N$, to which we then obtain $|f(x)| \leq n$, $\forall x \in\mathbb R$. And thus, by definition $f$ is then also bounded.
>
> Therefore, the original statement is true as we have shown both statements,
> $$
> \begin{aligned}
> \text{1.} & \quad f \quad \text{is bounded } \implies f \quad \text{is strictly bounded} \\
> \text{2.} & \quad f \quad \text{is strictly bounded} \implies f \quad \text{is bounded}
> \end{aligned}
> $$
> to hold true. ◻
   
   