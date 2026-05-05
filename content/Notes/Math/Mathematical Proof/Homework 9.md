#math #math220 #proof 

## Solutions to homework 9

1. Question 1.

> [!proof] Proof
> 
> Given the following functions,
>
> $$
> \begin{aligned}
> f : \mathbb{R} &\longrightarrow \mathbb{R} \\
> x &\longmapsto \frac{2x}{\,x^{2}+1\,},
> \end{aligned}
> $$
>
> $$
> \begin{aligned}
> g : \mathbb{R} - \{0\} &\longrightarrow \mathbb{R} \\
> x &\longmapsto \frac{1}{x},
> \end{aligned}
> $$
>
> for part (a), for any $t\in\mathbb R - \{0\}$ we have that $(f\circ g)(t)$ can be expressed as follows:
>
> $$
> g(t) = \frac{1}{t} \quad \text{for $t\neq 0$},
> $$
> $$
> (f \circ g)(t) = f\left(\frac{1}{t}\right),
> $$
> $$
> \begin{aligned}
> f\left(\frac{1}{t}\right) & = \frac{\frac{2}{t}}{\left(\frac{1}{t}\right)^2+1} \\
>                           & = \frac{2t}{1+t^2}.
> \end{aligned}
> $$
>
> For part (b) in order to demonstrate $f$ is not injective we can simply observe the result from part (a), that is $f(t)$ and $f\left(\frac{1}{t}\right)$ both yield the same result, for example:
>
> $$
> \begin{aligned}
> f(t) & = \frac{2t}{1+t^2}, \\
> f\left(\frac{1}{t}\right) & = \frac{\frac{2}{t}}{\left(\frac{1}{t}\right)^2+1} = \frac{2t}{1+t^2}.
> \end{aligned}
> $$
>
> Therefore, we have shown $\exists x_1 \neq x_2$ such that $f(x_1)=f(x_2)$ and thus by definition, $f$ is not injective.
>
> For part (c), let us first manipulate our function $f(x)$ as follows:
> $$
> \begin{aligned}
> f(x) & = \frac{2x}{x^2+1}, \\
> y & = \frac{2x}{x^2+1}, \\
> 0 & = yx^2 -2x + y.
> \end{aligned}
> $$
> Now, we can see that $f^{-1}(\{1\})$ delivers the function $x^2-2x +1=0$ which only has 1 solution $x=1$, hence $f^{-1}(\{1\}) = \{1\}$.
>
> Then, for $f^{-1}(\{\frac{1}{2}\})$ we obtain the function $\frac{1}{2}x^2-2x+\frac{1}{2}=0$, which simplifies to $x^2-4x+1 = 0$, with solutions $x=2 \pm \sqrt3$, thus $f^{-1}(\{\frac{1}{2}\}) = \{2 - \sqrt3, 2 + \sqrt3\}$.
>
> Finally, for $f^{-1}(\{2\})$ let us first observe the following inequality using $a^2 + b^2 \geq 2ab$ such that $a=|x|$, $b=1$.
>
> $$
> \begin{aligned}
> x^2 + 1 & \geq 2|x|, \\
> \left|\frac{2x}{x^2+1}\right| &\leq \frac{2|x|}{2|x|}=1.
> \end{aligned}
> $$
>
> Therefore, we have that,
> $$
> \forall x \in\mathbb R, \qquad \left|\frac{2x}{x^2+1}\right| \leq 1,
> $$
> and thus $f^{-1}(\{2\}) = \emptyset$.
>
> For part (d), we have already demonstrated that indeed
> $$
> \forall x \in\mathbb R, \qquad \left|\frac{2x}{x^2+1}\right| \leq 1,
> $$
> which is sufficient to show that indeed Range($f$) $=[-1, 1]$
>
> For part (e), $f$ is indeed not surjective, given that Range$(f)=[-1, 1]$, yet $f:\mathbb R \to \mathbb R$. That is to say, $\exists y\in\mathbb R,\forall x \in\mathbb R$ such that $f(x) \neq y$.
>
> For part (f) we want to show the following function is injective,
>
> $$
> \begin{aligned}
> j : [1, +\infty) &\longrightarrow \mathbb{R} \\
> x &\longmapsto \frac{2x}{\,x^{2}+1\,},
> \end{aligned}
> $$
>
> that is we want to show:
>
> $$
> f(x_1)=f(x_2) \quad \Longrightarrow \quad x_1=x_2 \quad \forall x_1,x_2 \in [1,+\infty).
> $$
>
> So, first assume $x_1,x_2 \in [1,\infty)$ and then suppose
> $$
> \frac{2x_1}{x_1^2+1} = \frac{2x_2}{x_2^2+1}.
> $$
> Now, simplifying we find
> $$
> \begin{aligned}
> 2x_1(x_2^2+1)           & = 2x_2(x_1^2+1), \\
> x_1x_2^2 + x_1          & = x_2x_1^2 + x_2, \\
> x_1x_2^2 - x_2x_1^2     & = x_2 - x_1, \\
> x_1x_2(x_2 - x_1)       & = (x_2 - x_1), \\
> (x_2 - x_1)(x_1x_2 - 1) & = 0.
> \end{aligned}
> $$
>
> Therefore, either $x_2 - x_1 = 0$, thus implying $x_1 = x_2$, or
> $$
> x_1x_2 = 1.
> $$
>
> However, if $x_1,x_2 \ge 1$ and $x_1x_2 = 1$, the only possibility is $x_1 = x_2 = 1$. Hence in every case we may conclude $x_1 = x_2$. And thus by definition, $j$ is indeed injective. ◻

2. Question 2.

> [!proof] Proof
> 
> For part (a), an example of a function such that $f(f^{-1}(X)) \neq X$ is as follows:
> $$
> \begin{aligned}
> f : \mathbb{R} &\longrightarrow \mathbb{R} \\
> x &\longmapsto x^2.
> \end{aligned}
> $$
> Where $X = \{-1\} \subseteq \mathbb R$, as then we have that $f^{-1}(X) = \emptyset$, and thus $f(f^{-1}(X)) = \emptyset \neq X$.
>
> For part (b), suppose we have some function $f: A \to B$ that is a surjection and $X\subseteq B$, then to show that $f(f^{-1}(X)) = X$ we need to show $f(f^{-1}(X) \subseteq X$ and $X \subseteq f(f^{-1}(X))$.
>
> So, if we have some $a\in f^{-1}(X)$, it follows that $f(a) \in X$, which demonstrates that $f(f^{-1}(X)) \subseteq X$. Then, if we have some $b\in X$, we know that there is some $a\in A$ such that $f(a) = b$ as $f$ is a surjective function, so similarly, we then have that $a\in f^{-1}(X)$ and $f(a) = b \in f(f^{-1}(X))$, and thus $X \subseteq f(f^{-1}(X))$. ◻

3. Question 3.

> [!proof] Proof
> 
> For part (a), an example of a function such that $f^{-1}(f(X)) \neq X$ is as follows:
>
> $$
> \begin{aligned}
> f : \mathbb{R} &\longrightarrow \mathbb{R} \\
> x &\longmapsto x^2.
> \end{aligned}
> $$
>
> Where $X = \{2\}$, as then we have that $f(X) = \{4\}$, and $f^{-1}(f(X))=\{-2,2\} \neq \{2\}$.
>
> Then, for part (b) suppose that $f$ is an injective function, now for any $X\subseteq A$ in order to show $X = f^{-1}(f(X))$ we again similarly need to show both:
>
> $$
> X \subseteq f(f^{-1}(X), \quad \text{and}
> $$
> $$
> f(f^{-1}(X)) \subseteq X.
> $$
>
> So, firstly if $x\in X$ we have that $f(x)\in f(X)$ so indeed $x \in f^{-1}(f(x))$ and $X \subseteq f^{-1}(f(X))$.
>
> Then, suppose $x\notin X$, since $f$ is injective $f(x)\neq f(y)$ for any $y\in X$, and thus $f(x) \notin f(X)$, so $x\notin f^{-1}(f(X))$, hence $f^{-1}(f(X)) \subseteq X$. ◻

4. Question 4.

> [!proof] Proof
> 
> For some function $f: A \to A$ such that $f \circ f$ is bijective, it follows that $f$ is indeed also bijective, for instance, let $x_1,x_2\in A$ such that we have $f(x_1) = f(x_2)$, now again apply $f$ providing $f(f(x_1)) = f(f(x_2))$. Finally, since $f\circ f$ is injective, $x_1=x_2$ and $f$ is also injective.
>
> Then, let $y_1 \in A$, now because $f \circ f$ is surjective, $\exists y_2 \in A$ such that $f(f(y_2))=y_1$, and similarly $\exists y_3 = f(y_2) \in A$ where $f(y_3) = y_1$ , therefore, $f$ is also surjective. ◻

5. Question 5.

> [!proof] Proof
> 
> We are given the following function:
>
> $$
> \begin{aligned}
> f : \mathbb N \times \mathbb N &\longrightarrow \mathbb{N} \\
> (x,y) &\longmapsto 2^{x-1}(2y-1).
> \end{aligned}
> $$
>
> Then, in order to show $f$ is a bijection, we will use the statement:
> $$
> \forall n \in\mathbb N, \exists k\in\mathbb Z \quad \text{with} \quad k \geq 0 \quad \text{such that} \quad 2^k | n  \quad \text{and}  \quad \frac{n}{2^k} \quad \text{is an odd natural number}.
> $$
> However, first we will demonstrate the following identity, that is for the equation $2^au=2^bv$ with $a,b\geq 0 \in\mathbb Z$ and $u,v$ are both odd natural numbers, it follows that $a=b$ and $u=v$. For example, assume $a\leq b$ we can simplify the above equation to obtain $u=2^{b-a}v$, then if $b-a\geq 1$ the right-hand side is even and $u$ must then be even reaching a contradiction, therefore necessarily $a=b$ and the equation becomes $u=v$.
>
> So, having this identity we will first demonstrate that $f$ is injective, so suppose $(x,y),(x',y')\in\mathbb N \times \mathbb N$ and $f(x,y)=f(x',y')$, namely:
> $$
> 2^{x-1}(2y-1)=2^{x'-1}(2y'-1).
> $$
> It is clear to see both $(2y-1)$ and $(2y'-1)$ are both odd natural numbers, thus by applying the identity such that $a=x-1$, $b=x'-1$, $u=2y-1$, and $v=(2y'-1)$ we have that:
> $$
> \begin{aligned}
> x-1& = x'-1,\\
> 2y-1&=2y'-1,
> \end{aligned}
> $$
> therefore $x=x'$ and $y=y'$ and thus $f$ is injective.
>
> Now, to prove $f$ is surjective, let $n\in\mathbb N$, then by our statement there must exist an integer $k\geq 0$ and an odd natural number $m$ such that $n=2^km$, moreover, because $m$ is odd we can express it as follows: $m=2y-1$, then set $x=k+1$ which yields:
> $$
> f(x,y) = 2^{x-1}(2y-1) = 2^km = n.
> $$
> Thus, indeed for every $n$ there is a preimage $(x,y)$ and therefore $f$ is surjective.
>
> Given we have shown $f$ is both injective and surjective the proof is complete. ◻

6. Question 6.

> [!proof] Proof
> 
> Suppose we have some function $f$ that is additive, then in order to prove $f(1)=1$ if and only if $f$ is both injective and surjective, let us prove both the forward and backward implications, that is we need to show:
> $$
> f(1)=1 \implies f \quad \text{is injective and surjective},
> $$
> $$
> f \quad \text{is injective and surjective} \implies f(1) =1.
> $$
> To begin, let us first use proof by induction to show:
> $$
> \forall n \in \mathbb N, f(n) = n,
> $$
> so let $n\in\mathbb N$, and assume $f(n) =n$ as stated in the forward implication, then our base case $n=1$ holds as $f(1)=1$. Then, for our base case assume $f(n) = n$ for some $n\in\mathbb N$, now because $f$ is additive it follows that $f(n+1) = f(n) + f(1) = f(n) + 1$. Therefore our inductive step indeed holds and in fact $\forall n \in\mathbb N, \quad f(n) = n$.
>
> Now, to show $f$ is injective, assume $f(x)=f(y)$ for arbitrary $x,y\in\mathbb N$, since $f(n) = n$ as demonstrated above it follows that $f(x) =x$, and $f(y) = y$, thus $x=y$ and $f$ is injective.
>
> Secondly, to show $f$ is surjective, for some $y \in\mathbb N$ let $n=y$, since we have $f(n) =n, \quad \forall n \in\mathbb N$ it follows that $f(y) = y$ and $f$ is indeed surjective.
>
> Thus we have proven the forward implication:
> $$
> f(1)=1 \implies f \quad \text{is injective and surjective}.
> $$
> So, moving onwards we now need to prove:
> $$
> f \quad \text{is injective and surjective} \implies f(1) =1,
> $$
> we will do so by using proof by contrapositive, that is we will prove:
> $$
> f(1)\neq1 \implies f\quad \text{is not injective and surjective}.
> $$
> So, assuming $f(1) \neq 1$ it then follows that $f(1)>1$ such that $f(1)\geq 2$ as $f: \mathbb N\to \mathbb N$. Then, similarly let us now use proof by induction to show $\forall n \in\mathbb N, f(n) \geq 2$, so let $n\in\mathbb N$, then our base case $n=1$ holds as $f(1)\geq 2$, and for our inductive step we will assume $f(n) \geq 2$ for arbitrary $n\in\mathbb N$. Now, since $f$ is additive we may observe the following:
> $$
> f(n+1) = f(n) + f(1),
> $$
> and given $f(n)\geq 2$, $f(1)\geq 2$ we obtain the following inequality:
> $$
> f(n) +f(1) \geq 4,
> $$
> and thus $f(n+1)\geq 2$ and our inductive step holds and it follows that $\forall n\in\mathbb N, f(n) \geq 2$.
>
> Finally, we let $y=1$, however, because we have shown:
> $$
> \forall n\in\mathbb N, \quad f(n) \geq 2,
> $$
> there is no $n\in\mathbb N$ that satisfies $f(n) =1$ thus our function $f$ is not surjective and the contrapositive holds true, and therefore the orignal statement:
> $$
> f \quad \text{is injective and surjective} \implies f(1) =1,
> $$
> holds true and we have demonstrated indeed that $f(1)=1$ if and only if $f$ is both injective and surjective. ◻