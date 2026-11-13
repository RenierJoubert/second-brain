#math #math220 #proof
## Solutions to homework 8

1. Question 1.

> [!proof] Proof
> 
> If $R$ and $S$ are two equivalence relations on a set $A$, then indeed for $R \cup S$ to be an equivalence relation it must also be reflexive, symmetric, and transitive. However, we can prove this is not true with the following counterexample.
>
> For instance, let $A$ be a set and let $R,S\subseteq A\times A$ be equivalence relations on $A$, and let $A=\left\{ a,b,c \right\}$ which then yields:
> $$
> R = (\{a,b\}\times\{a,b\}) \cup (\{c\}\times\{c\})
> = \{(a,a),(a,b),(b,a),(b,b),(c,c)\},
> $$
> $$
> S = (\{a\}\times\{a\}) \cup (\{b,c\}\times\{b,c\})
> = \{(a,a),(b,b),(b,c),(c,b),(c,c)\}.
> $$
> Now, $R \cup S$ is as follows,
> $$
> R\cup S = \{(a,a),(a,b),(b,a),(b,b),(b,c),(c,b),(c,c)\}.
> $$
> Thus we can see that $(a,b)\in R\cup S$ and $(b,c)\in R\cup S$, but $(a,c)\notin R\cup S$. Therefore transitivity indeed fails for $R\cup S$, and $R\cup S$ cannot be an equivalence relation. ◻

2. Question 2.

> [!proof] Proof
> 
> Let $R$ be a relation on $\mathbb{R}$ such that:
> $$
> xRy \iff \cos^2(x)+\cos^2(y)=1.
> $$
> Now, for $R$ to indeed be an equivalence relation it must hold for reflexivity, symmetry, and transitivity, so verifying reflexivity first we must show $xRx$ for every $x\in\mathbb{R}$. Thus, for $xRx$ we need
> $$
> \cos^2(x)+\cos^2(x)=1 \quad\Longrightarrow\quad 2\cos^2(x)=1 \quad\Longrightarrow\quad \cos^2(x)=\tfrac12.
> $$
> However, it follows that $\cos^2(x)=\tfrac12$ is satisfied only by $x$ such that $\cos x=\pm\tfrac{1}{\sqrt2}$. Hence not every $x$ satisfies $xRx$, so indeed the relation $R$ is not reflexive and therefore cannot be an equivalence relation. ◻

3. Question 3.

> [!proof] Proof
> 
> For part (a) we have that $P$ denotes the set of all lines in the $xy$-plane which are parallel to the line $y=3x$. Then, for each $b\in\mathbb{R}$ we can define the line:
> $$
> L_b = \{(x,y)\in\mathbb{R}^2 : y=3x+b\}.
> $$
> Now, each $L_b$ is a nonempty subset of $\mathbb{R}\times\mathbb{R}$. So, let us claim $\left\{ L_b : b\in\mathbb{R} \right\}$ is a partition of $\mathbb{R}\times\mathbb{R}$ and that the corresponding equivalence relation is an equality of the intercept $y-3x$.
>
> Then, every point $(x_0,y_0)\in\mathbb{R}^2$ must lie on exactly one such line, for instance if $(x_0,y_0)$ is given then take $b=y_0-3x_0$ and then $(x_0,y_0)\in L_b$. Whereas if $(x_0,y_0)$ lies in both $L_{b_1}$ and $L_{b_2}$ then $y_0=3x_0+b_1$ and $y_0=3x_0+b_2$, hence $b_1=b_2$, and thus each point lies in precisely one $L_b$. Therefore $\{L_b:b\in\mathbb R\}$ is a partition of $\mathbb R^2$, and we may conclude $P$ is also indeed a partition of $\mathbb R\times\mathbb R$.
>
> Now, for part (b) let $R$ define a relation on $\mathbb R \times \mathbb R$ whose set of all equivalence classes is $P$ such that
> $$
> (x_1,y_1)R(x_2,y_2) \iff y_1-3x_1 = y_2-3x_2.
> $$
> Similarly $(x_1,y_1)$ and $(x_2,y_2)$ then lie on the same line $L_b$. Then, verifying reflexivity, symmetry, and transitivity we see indeed $R$ is reflexive as $y-3x = y-3x$ for every $(x,y)$, so $(x,y)R(x,y)$. Furthermore, $R$ is also symmetric for if $y_1-3x_1=y_2-3x_2$ then also $y_2-3x_2=y_1-3x_1$, so symmetry indeed holds. Finally, if $y_1-3x_1=y_2-3x_2$ and $y_2-3x_2=y_3-3x_3$ then $y_1-3x_1=y_3-3x_3$, so transitivity holds.
>
> Therefore, we have proven $R$ is an equivalence relation on $\mathbb{R}^2$, and further that the equivalence classes of $R$ are exactly the lines $L_b$, that is to say, the set of all lines parallel to $y=3x$ is the set of equivalence classes of $R$. ◻

4. Question 4.

> [!proof] Proof
> 
> For part (a), let $R$ be a relation on $\mathbb Z_n$ by $[x]_nR[y]_n$ when $[x]_n[u]_n = [y]_n$ for some invertible $[u]_n\in \mathbb Z_n$.
>
> Now, in order to prove $R$ is indeed an equivalence relation we will show that $R$ is reflexive, symmetric, and transitive as follows.
>
> Regarding reflexivity we have that for any $[x]_n \in \mathbb{Z}_n$, it follows that
> $$
> x \cdot 1 = x,
> $$
> then since $[1]_n$ is invertible in $\mathbb{Z}_n$, then indeed $[x]_n R [x]_n$ and our relation is reflexive.
>
> Now, for symmetry we can see if $[x]_n\cdot[u]_n=[y]_n$ and $[v]_n$ is the inverse of $[u]_n$, then $[y]_n\cdot[v]_n = [x]_n$, so $[y]_nR[x]_n$ and $yv=x$. Thus, because $[v]_n$ is invertible, we obtain $[y]_n R [x]_n$ and our relation is indeed symmetric.
>
> Finally, to prove $R$ is transitive suppose $[x]_n R [y]_n$ and $[y]_n R [z]_n$, then $xu = y$ and $yv = z$ for invertible $[u]_n, [v]_n$. Now, substituting we see,
> $$
> x(uv) = z.
> $$
> Then, because the product of invertible elements is invertible, $[uv]_n$ is indeed invertible, and we have that $[x]_n R [z]_n$, and therefore $R$ is transitive and indeed an equivalence relation as it holds for all criteria.
>
> For part (b), we will first find the following invertible elements in $\mathbb Z_6$:
> $$
> U = \{[1]_6, [5]_6\}.
> $$
> Then, computing the equivalence classes of $R$ we see that
> $$
> [[0]_6] = \{[y]_6 \in \mathbb{Z}_6 : [y]_6 = [0]_6[u]_6 \text{ for some invertible } [u]_6 \in \mathbb{Z}_6\}.
> $$
> Since $[0]_6 u = [0]_6$ for all $u \in U$, we get
> $$
> [[0]_6] = \{[0]_6 u : u \in U\} = \{[0]_6\}.
> $$
> Again we see that,
> $$
> [[1]_6] = \{[1]_6 u : u \in U\} = \{[1]_6, [5]_6\}.
> $$
> Now, for $[2]_6$ it follows that,
> $$
> [[2]_6] = \{[2]_6 u : u \in U\} = \{[2]_6, [4]_6\},
> $$
> since $2\cdot 1 \equiv 2 \pmod{6}$ and $2\cdot 5 \equiv 10 \equiv 4 \pmod{6}$.
>
> Finally,
> $$
> [[3]_6] = \{[3]_6 u : u \in U\} = \{[3]_6\},
> $$
> as $3u \equiv 3 \pmod{6}$ for every $u \in U$. ◻