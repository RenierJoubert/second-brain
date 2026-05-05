#math #math220 #proof
## Solutions to homework 4

1. Question 1.

> [!proof] Proof
> 
> For (a) we want to prove the following:
>
> if $n \equiv 2 \mod 4$, or if $n\equiv 3 \mod 4$ then $n$ is not a perfect square.
>
> To begin our proof we know that a perfect square $n$ can be written in the form $n=k^2$ for $k\in\mathbb Z$. Therefore, it follows $k$ can either be even or odd and written as follows:
> $$
> \begin{aligned}
> \text{1.} \quad & k = 2\ell \quad \text{for even $k$} \\
> \text{2.} \quad & k = 2\ell + 1 \quad \text{for odd $k$}.
> \end{aligned}
> $$
> Then, using $n=k^2$ let us then substitute in these values for $k$ as follows, we see that for even $k$, $n$ can be expressed as such
> $$
> n = k^2 = (2\ell)^2=4\ell^2.
> $$
> To which we can clearly observe that $4\ell^2 \equiv 0 \mod 4$, and therefore likewise for even $k$ we see that necessarily $n\equiv 0 \mod 4$.
>
> Now, for odd $k$ we see that $n$ can be written as follows:
> $$
> n=k^2=(2\ell + 1)^2 = 4\ell^2+4\ell + 1 = 4\ell(\ell+1)+1.
> $$
> Similarly, we can observe that $4\ell(\ell + 1) + 1 \equiv 1 \mod 4$, and thus for odd $k$ it holds that $n \equiv 1 \mod 4$.
>
> Therefore, all possible perfect squares $n=k^2$ for $k\in Z$ are congruent to either, $0 \mod 4$, or $1 \mod 4$. Thus, indeed if $n\equiv 2 \mod 4$ or $n\equiv 3 \mod 4$ then $n$ is not a perfect square.
>
> For (b) we want to prove the following:
>
> if $n^2 + 1$ is a perfect square then $n = 0$.
>
> To begin our proof, let us assume $n^2+1$ is a perfect square, such that:
> $$
> n^2 + 1 = k^2 \quad \text{for $k\in\mathbb Z$}.
> $$
> Now, let notice that this equation can instead be written as a difference of squares as follows:
> $$
> k^2 - n^2 = 1,
> $$
> which we can then expand to see:
> $$
> (k-n)(k+n) = 1.
> $$
> Now, an important observation to be made is that the only integer factor pairs with a product of 1 are $(1, 1)$ and $(-1,-1)$. Therefore, there are two cases we must study, that is:
> $$
> \begin{aligned}
> \text{1. } \quad & (k-n) =1, (k+n) = 1 \\
> \text{2. } \quad & (k-n) = -1, (k+n) = -1
> \end{aligned}
> $$
> So, starting with our first case, let us add both $(k-n)=1$ and $(k+n) =1$ to find the following equality:
> $$
> \begin{aligned}
> (k-n)+(k+n) & = 2, \\
> 2k & = 2, \\
> k & = 1.
> \end{aligned}
> $$
> Then, substituting $k=1$ into our original equation, equation (6) and solving for $n$ we find:
> $$
> \begin{aligned}
> 1^2-n^2 & = 1, \\
> n^2 & = 0, \\
> n & = 0.
> \end{aligned}
> $$
> Now, for our second case, again let us add both $(k-n)=-1$ and $(k+n) = -1$ to find the following equality:
> $$
> \begin{aligned}
> (k-n)+(k+n) & = -2, \\
> 2k & = -2, \\
> k & = -1.
> \end{aligned}
> $$
> Moreover, substituting $k=-1$ into equation (6) and solving for $n$ we find:
> $$
> \begin{aligned}
> (-1)^2 - n^2 & =1, \\
> n^2 & = 0, \\
> n & = 0.
> \end{aligned}
> $$
> Therefore, we have shown that the only $n\in\mathbb Z$ such that $n^2+1$ is a perfect square is $n=0.$ ◻

2. Question 2.

> [!proof] Proof
> 
> In order to prove the following,
>
> "Let $a,b,c \in\mathbb Z$ such that gcd$(a,b)=1$ then $a\mid bc \implies a \mid c$."
>
> We will first use Bézout's identity to rewrite gcd$(a,b)=1$ as follows:
> $$
> ax+by=1 \quad \text{for $x,y\in\mathbb Z$}.
> $$
> Then, multiplying every term by $c$ we find the following:
> $$
> acx + bcy = c.
> $$
> Now, given we have that $a\mid bc$, it follows that $bc$ can be expressed as an integer multiple of $a$ such that:
> $$
> bc = ak \quad \text{for $k\in\mathbb Z$}.
> $$
> Thus, let us then substitute $bc = ak$ into equation (23):
> $$
> \begin{aligned}
> acx + aky & = c, \\
> a(cx + ky) & = c.
> \end{aligned}
> $$
> Therefore we have shown $c$ can be expressed as a multiple of $a$, and indeed that $a\mid bc \implies a \mid c$. ◻

3. Question 3.

> [!proof] Proof
> 
> The statement:
>
> 1\. "$\forall x \in P$, $\forall y \in P$ such that $x+y\in P$."
>
> Is **false**, as we will prove the negation:
> $$
> \exists x \in P, \exists y \in P, \quad \text{such that} \quad x + y \notin P.
> $$
> For example, let $x=3$ and $y=5$ which are both in $P$, however we have that:
> $$
> x+y = 3 + 5 = 8 \notin P.
> $$
>
> The statement:
>
> 2\. "$\forall x \in P$, $\exists y \in P$ $x+y \notin P$."
>
> Is **true** for example, $\forall x$ we may choose, let $y = x$ then we have that $x+y = 2x$, and thus $2x \notin P$ as it has factors $1,2,x$.
>
> The statement:
>
> 3\. "$\exists x \in P$, $\forall y \in P$ $x+y\in P$."
>
> Is **false**, as it's negation:
> $$
> \forall x \in P, \exists y \in P \quad \text{such that} \quad x+y\notin P,
> $$
> is proven to be true in the solution to (3b), and therefore the original statement must then be false. ◻

4. Question 4.

> [!proof] Proof
> 
> In order to prove that $\forall\epsilon>0$, $\exists M > 0$ such that:
> $$
> \left|\frac{2x^2}{x^2+1}-2\right| < \epsilon,
> $$
> whenever $x \geq M$. First let us simplify equation (30) as follows:
> $$
> \left|\frac{2x^2}{x^2+1}-2\right| = 2\left|\frac{-1}{x^2+1}\right|=\frac{2}{x^2+1}.
> $$
> Therefore, we can now further rearrange our inequality from equation (30) as follows:
> $$
> \frac{2}{x^2+1}<\epsilon \implies x^2 > \frac{2}{\epsilon}-1.
> $$
> Now, in order to find $M$ such that whenever $x\geq M$ this inequality holds $\forall \epsilon > 0$, let us work in cases, firstly for $\epsilon \geq 2$ let us pick $M=1$, then for every $x\geq M = 1$ we have that:
> $$
> \frac{2}{x^2+1} \leq \frac{2}{1^2 + 1} = 1 < \epsilon
> $$
> Then, for our second case let us examine $0< \epsilon < 2$ which provides the following inequality:
> $$
> \frac{2}{\epsilon}-1>\epsilon.
> $$
> So, let $M=\sqrt{\frac{2}{\epsilon}-1}+1$, then as per equation (32) we have that:
> $$
> x^2 \geq M^2 = \left(\sqrt{\frac{2}{\epsilon}-1}+1\right)^2=\frac{2}{\epsilon}-1+2\sqrt{\frac{2}{\epsilon}-1}+1.
> $$
> Finally, given
> $$
> \frac{2}{\epsilon}-1+2\sqrt{\frac{2}{\epsilon}-1}+1 > \frac{2}{\epsilon}-1,
> $$
> it follows that indeed:
> $$
> x^2> \frac{2}{\epsilon}-1 \implies \frac{2}{x^2+1}< \epsilon.
> $$
> Therefore, we have shown that indeed $\forall \epsilon > 0$, $\exists M > 0$ such that:
> $$
> \left|\frac{2x^2}{x^2+1}-2\right| < \epsilon,
> $$
> whenever $x \geq M$. ◻

5. Question 5.

> [!proof] Proof
> 
> For some function, $f: \mathbb R \to \mathbb R$ defined as:
> $$
> f(x)= \begin{cases}
> x^2\sin\left(\frac{1}{x}\right) &\text{\quad , \quad if $x\neq 0$} \\
> 0 &\text{\quad , \quad if $x= 0$}.
> \end{cases}
> $$
> We know that for $f(x)$ to be continuous at $x = 0$ we must show that:
> $$
> \lim_{x\to 0}f(x) = f(0) = 0.
> $$
> That is to say, $\forall\epsilon > 0$, $\exists \delta > 0$ such that if $0<|x|<\delta$ then $|f(x)-0|=|f(x)|<\epsilon$, as per the formal definition. So, we have that:
> $$
> |f(x)| = \left|x^2\sin\left(\frac{1}{x}\right)\right| = x^2 \left|\sin\left(\frac{1}{x}\right)\right|.
> $$
> Now, since $\left|\sin\left(\frac{1}{x}\right)\right|\leq 1$, $\forall x \in R$, we know that $|f(x)| \leq x^2$, and thus it is sufficient to show that $\forall \epsilon > 0$ we can find $\delta > 0$ such that $x^2 < \epsilon$ whenever $0<|x|<\delta$.
>
> Therefore we need $|x|< \sqrt\epsilon$, so let $\delta = \sqrt\epsilon$, then $\forall x$ such that $0< |x|< \delta$ we have that:
> $$
> |f(x)| \leq x^2 < \epsilon.
> $$
> Thus we have shown that $\forall \epsilon > 0$ we can indeed choose $\delta = \sqrt\epsilon$ such that if $0<|x|<\delta$ then $|f(x)| < \epsilon$ which satisfies the formal definition of the limit, and thus we can conclude:
> $$
> \lim_{x\to\ 0}f(x) = 0,
> $$
> and therefore $f(x)$ is indeed continuous at $x=0$. ◻

6. Question 6.

> [!proof] Proof
> 
> By definition, we know a given sequence $x_n$ converges to some $L\in\mathbb R$ if:
> $$
> \forall \epsilon > 0, \exists N \in \mathbb N, \forall n \in N, (n > N)\implies |x_n - L | < \epsilon.
> $$
> So, in order to prove that the sequence,
> $$
> x_n=(-1)^n+ \frac{1}{n},
> $$
> does not converge to any $L\in\mathbb R$, we will opt to implement a proof through contradiction, that is assume our sequence $x_n$ does indeed converge to some $L\in\mathbb R$ such that:
> $$
> \forall \epsilon > 0, \exists N \in \mathbb N, \forall n \in N, (n > N)\implies |(-1)^n+\frac{1}{n}-L | < \epsilon.
> $$
> However, let us first examine the cases for even and odd $n$ respectively such that:
> $$
> \begin{aligned}
> \text{1.} & \quad n = 2k \quad \text{for $k \in\mathbb Z$} \\
> \text{2.} & \quad n = 2k +1 \quad \text{for $k \in\mathbb Z$}.
> \end{aligned}
> $$
> Now, we have that our sequence $x_n$ for even $n$ can be written as follows:
> $$
> x_{2k} = 1 + \frac{1}{2k},
> $$
> and thus as $k \to \infty$, we have that $x_{2k}\to 1$. Further, our sequence $x_n$ for odd $n$ can be written as:
> $$
> x_{2k+1} = -1 + \frac{1}{2k+1},
> $$
> and thus as $k \to \infty$, we have that $x_{2k+1}\to -1$.
>
> Now, using the provided definition, we know that if $x_n$ truly does converge to some $L\in\mathbb R$, it would follow that both subsequences of even and odd $n$ would also converge to $L$. For instance, if $x_n \to L$, then for any subsequence $n_k$ we have that $n_k \to \infty$, then given some $\epsilon>0$ take an $N$ such that $n\geq N \implies |x_n - L | < \epsilon$, now since $n_k \to \infty$, $\exists K$ with $n_k\geq N$, $\forall k \geq K$, and hence $|x_{n_k}-L| < \epsilon$ for $k\geq K$.
>
> Therefore, per the definition we may conclude that if $x_n$ does converge to $L$ it follows that $x_{2k}$ and $x_{2k+1}$ must also converge to $L$, however this is not the case as demonstrated and we have reached a contradiction as $1\neq -1$, and thus there exists no $L\in\mathbb R$ which satisfies this, hence $x_n=(-1)^n+\frac{1}{n}$ then does not converge. ◻