
> [!question]- Proving the Generalized Value Theorem 
> I want to show that for a non-empty $K \subseteq \mathbb{R}$ that is closed and bounded, if $f: K \to \mathbb{R}$ is a continuous function, then $\exists c,d \in K$ s.t. $f(c)\leq f(x)\leq f(d)$, $\forall x \in K$.
> 
> A set is closed and bounded iff every sequence in the set has a subsequence converges to a point in A. 
> 
> I will first show that $f(K)$ is closed and bounded. Let $(y_{n})$ be a sequence in $f(K)$, then for each $n$ there exists $x_{n} \in K$ s.t. $f(x_{n})=y_{n}$. $K$ is closed and bounded so $(x_{n})$ has a convergent subsequence $x_{n_{k}}\to x$ for some point $x \in K$. $f$ is continuous so $y_{n_{k}}=f(x_{n_{k}})\to f(x)$ and $f(x)\in f(K)$.
> 
> This means that every sequence in $f(K)$ has a subsequence converging to a point in $f(K)$, hence $f(K)$ is closed and bounded. 
> 
> Now, because $f(K)$ is closed, bounded, and non-empty, we know $\text{sup}f(K)$ exists and equals $M$, similarly $\text{inf}f(K)=L$. $\forall n \in \mathbb{N}$ we know that $M-\frac{1}{n}$ fails to be an upper bound, and $L+\frac{1}{n}$ fails to be a lower bound. This gives:
>$$
> M-\frac{1}{n}<x_{n}\leq M \quad L \leq y < L + \frac{1}{n}
>$$
>Therefore, $|x_{n}-M|< \frac{1}{n}$ and $|y_{n} -L| < \frac{1}{n}$, and $x_{n} \to M$, $y_{n}\to L$. 
>
>Closed sets contain their limits so $M, L \in f(K)$ hence $\exists c,d \in K$ s.t. $f(c)=L$ and $f(d)=M$.


> [!question]- Suppose that a function $f: \mathbb{R} \to \mathbb{R}$ satisfies the following properties: $f$ is Darboux, $f^{-1}(\{ r \})$ is closed for every $r \in \mathbb Q$. What does it mean for $f$ to be Darboux, what does it mean for $f$ to not be continuous on $\mathbb{R}$, apply Darboux to a particular fixed value $\lambda$ to obtain a sequence $(t_{n})$ for which $f(t_{n})=\lambda$ for all $n$. Use $(t_{n})$ to derive a contrdiction. 
> A function is Darboux if it satisfies the IVT. Namely, for $f: \mathbb{R} \to \mathbb{R}$, $\forall a, b \in \mathbb{R}$, $a<b$, $f(a)\ne f(b)$, then $\forall y \in [f(a), f(b)]$, $\exists x \in [a, b]$ s.t. $f(x)=y$.
>
>A function $f$ is continuous at $c$ iff for all sequences $(x_{n})$, if $x_{n} \to c$, then $f(x_{n})\to f(c)$. The negation is: $f$ is not continuous on $\mathbb{R}$ if $\exists c \in \mathbb{R}$ s.t. $f$ is not continuous at $c$. Namely, $\exists c \in \mathbb{R}$ and $(x_{n})\in \mathbb{R}$ s.t. $(x_{n})\to c$ and $f(x_{n})\not\to f(c)$.
>
>Assume that $f$ is not continuous on $\mathbb{R}$, so $\exists c \in \mathbb{R}$ and $\varepsilon_{1}>0$ and a sequence $x_{n}\to c$ $|f(x_{n})-f(c)|\geq \varepsilon_{1}$, $\forall n \in \mathbb{N}$. Meaning for each $n$ either $f(x_{n})\geq f(c)+\varepsilon_{1}$ or $f(x_{n})\leq f(c)-\varepsilon_{1}$. By the density of $\mathbb Q$ we can pick $y \in \mathbb Q$ such that:
>$$
>f(c) < y < f(c)+\varepsilon_{1} \quad f(c)-\varepsilon_{1} < y < f(c).
>$$
>In both cases $y$ is between $f(c)$ and $f(x_{n})$, and $c \ne x_{n}$ so by Darboux there exists $t_{n}\in[x_{n}, c]$ s.t. $f(t_{n})=y$ and notice $t_{n}$ is not an endpoint. This gives the inequality:
>$$
>|t_{n}-c|<|x_{n}-c|<\varepsilon 
>$$
>Hence $t_{n}\to c$ and $f(t_{n})=y$ meaning $(t_{n})$ is a sequence in $f^{-1}(\{ y \})$ where $y \in \mathbb Q$ so $\{ y \}$ is closed and thus $f^{-1}(\{ y \})$ is closed and contains its limits. Meaning $f(c)=y$, but we picked $y$ s.t. $y \ne f(c)$ so this is a clear contradiction, and therefore $f$ must be continuous on $\mathbb{R}$.



