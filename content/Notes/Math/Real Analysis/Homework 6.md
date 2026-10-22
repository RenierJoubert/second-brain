#math 

# Power Series (HW6)

Throughout, $f(x)=\sum_{n=0}^\infty a_{n}x^n$ (centred at $x_{0}=0$).

> [!question]- 1. Let $R=\lim_{n\to\infty}\frac{1}{\sqrt[n]{ |a_{n}| }}$ (assume it exists). Prove that the power series converges absolutely if $|x|<R$ and diverges if $|x|>R$. Give an example showing that at $|x|=R$ it could converge or diverge.
> **Idea:** apply the root test to $\sum a_{n}x^n$.
>
>$$
> \sqrt[n]{ |a_{n}x^n| }=|x|\sqrt[n]{ |a_{n}| }\longrightarrow \frac{|x|}{R}
>$$
> (Read $\frac{|x|}{R}$ as $0$ if $R=\infty$, and as $\infty$ if $R=0$ and $x\neq 0$.)
> - **$|x|<R$:** the limit is less than $1$, so the series converges absolutely by the root test.
> - **$|x|>R$:** the limit is greater than $1$, so the series diverges by the root test.
>
> **Example at $|x|=R$:** $\sum_{n=1}^\infty \frac{x^n}{n}$. Since $\sqrt[n]{ n }\to 1$, $R=1$.
> - At $x=1$ it is $\sum \frac{1}{n}$, which diverges.
> - At $x=-1$ it is $\sum \frac{(-1)^n}{n}$, which converges (alternating series test).

> [!question]- 2. Prove that a power series is continuous on $(-R,R)$.
> **Idea:** $\frac{\varepsilon}{3}$ split. A power series is a polynomial (continuous) plus two tails (small).
>
> Fix $x$ with $|x|<R$ and let $\varepsilon>0$. Pick $\rho$ with $|x|<\rho<R$ (e.g. $\rho=\frac{|x|+R}{2}$, or $\rho=|x|+1$ if $R=\infty$). By Q1, $\sum|a_{n}|\rho^n$ converges, so there is $N$ with
>$$
> \sum_{n>N}|a_{n}|\rho^n<\frac{\varepsilon}{3}
>$$
> Let $P(y)=\sum_{n=0}^N a_{n}y^n$. For any $|y|<\rho$, the tail satisfies $\left| \sum_{n>N}a_{n}y^n \right|\leq \sum_{n>N}|a_{n}|\rho^n<\frac{\varepsilon}{3}$. So for $|y|<\rho$,
>$$
> |f(y)-f(x)|\leq |P(y)-P(x)|+\left| \sum_{n>N}a_{n}y^n \right|+\left| \sum_{n>N}a_{n}x^n \right|<|P(y)-P(x)|+\frac{2\varepsilon}{3}
>$$
> $P$ is a polynomial, so it is continuous at $x$: there is $\delta_{1}$ with $|P(y)-P(x)|<\frac{\varepsilon}{3}$ when $|y-x|<\delta_{1}$. Let $\delta=\min\{ \delta_{1},\rho-|x| \}$. If $|y-x|<\delta$, then $|y|<\rho$ and $|f(y)-f(x)|<\varepsilon$.

> [!question]- 3. Abel's Theorem (WLOG $R=1$): if $S=\sum_{n=0}^\infty a_{n}$ converges, then $\lim_{x\to 1^-}\sum_{n=0}^\infty a_{n}x^n=S$. (i) Write the precise logical statement of this limit. (ii) Prove it.
> **Idea:** rewrite $f(x)-S=(1-x)\sum(s_{n}-S)x^n$. The first few terms are killed by $(1-x)\to 0$, and the tail is small because $s_{n}\to S$.
>
> **(i)**
>$$
> \forall\varepsilon>0,\ \exists\delta>0 \text{ such that } \forall x \text{ with } 1-\delta<x<1:\quad \left| \sum_{n=0}^\infty a_{n}x^n-S \right| <\varepsilon
>$$
>
> **(ii)** Let $s_{n}=a_{0}+\dots+a_{n}\to S$. Since $s_{n}$ converges it is bounded, so for $|x|<1$, $\sum s_{n}x^n$ converges (compare with a geometric series) and $s_{N}x^N\to 0$. Letting $N\to\infty$ in the identity
>$$
> \sum_{n=0}^N a_{n}x^n=s_{N}x^N+(1-x)\sum_{n=0}^{N-1}s_{n}x^n
>$$
> gives $f(x)=(1-x)\sum_{n=0}^\infty s_{n}x^n$. Also $S=(1-x)\sum_{n=0}^\infty Sx^n$, since $(1-x)\sum x^n=1$. Subtracting:
>$$
> f(x)-S=(1-x)\sum_{n=0}^\infty (s_{n}-S)x^n
>$$
> Let $\varepsilon>0$. Choose $N$ with $|s_{n}-S|<\frac{\varepsilon}{2}$ for $n>N$, and let $M=\max_{n\leq N}|s_{n}-S|$. For $0<x<1$, split at $N$:
>$$
> |f(x)-S|\leq (1-x)\sum_{n=0}^N |s_{n}-S|x^n+(1-x)\sum_{n>N}\frac{\varepsilon}{2}x^n\leq (1-x)(N+1)M+\frac{\varepsilon}{2}
>$$
> using $x^n\leq 1$ in the first sum and $(1-x)\sum x^n=1$ in the second. Let $\delta=\min\left\{  1,\frac{\varepsilon}{2(N+1)(M+1)}  \right\}$. If $1-\delta<x<1$, then $(1-x)(N+1)M<\frac{\varepsilon}{2}$, so $|f(x)-S|<\varepsilon$.

> [!question]- 4. Improved Mertens: if $A=\sum a_{n}$ and $B=\sum b_{n}$ both converge, and the Cauchy product $C=\sum c_{n}$ (with $c_{n}=\sum_{k=0}^n a_{k}b_{n-k}$) converges, then $C=AB$.
> **Idea:** turn all three into power series. Use Mertens inside $|x|<1$, then let $x\to 1^-$ using Abel.
>
> Let $f(x)=\sum a_{n}x^n$, $g(x)=\sum b_{n}x^n$ and $h(x)=\sum c_{n}x^n$.
> 1. **They converge absolutely for $|x|<1$.** $\sum a_{n}$ converges, so $a_{n}\to 0$ and $|a_{n}|\leq K$ for some $K$. Then $\sum|a_{n}x^n|\leq K\sum|x|^n<\infty$. The same holds for $b_{n}$ and $c_{n}$.
> 2. **Mertens for $|x|<1$.** The Cauchy product of $\sum a_{n}x^n$ and $\sum b_{n}x^n$ has terms $\sum_{k}a_{k}x^kb_{n-k}x^{n-k}=c_{n}x^n$. Since $f(x)$ converges absolutely, Mertens gives $h(x)=f(x)g(x)$.
> 3. **Let $x\to 1^-$.** By Abel (Q3), $f(x)\to A$, $g(x)\to B$ and $h(x)\to C$. So
>$$
> C=\lim_{x\to 1^-}h(x)=\lim_{x\to 1^-}f(x)g(x)=AB
>$$
>
> The convergence of $C$ is needed in step 3, to apply Abel to $h$.
