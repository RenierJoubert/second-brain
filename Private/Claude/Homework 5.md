#math 

# Series (HW5)

> [!question]- 1. Let $r\in\mathbb R$ and $S=\sum_{n=0}^\infty r^n$. Prove that $S$ converges if and only if $|r|<1$, and find its value.
> **Idea:** $S_{N}-rS_{N}$ telescopes.
>
> Let $S_{N}=\sum_{n=0}^N r^n$. Then $S_{N}-rS_{N}=1-r^{N+1}$, so for $r\neq 1$:
>$$
> S_{N}=\frac{1-r^{N+1}}{1-r}
>$$
> - **If $|r|<1$:** $r^{N+1}\to 0$, so $S_{N}\to \frac{1}{1-r}$. (Why $|r|^N\to 0$: for $r\neq 0$ write $|r|=\frac{1}{1+h}$ with $h>0$. Then $(1+h)^N\geq 1+Nh$, so $|r|^N\leq \frac{1}{1+Nh}\to 0$.)
> - **If $|r|\geq 1$:** $|r^n|=|r|^n\geq 1$, so the terms don't go to $0$ and $S$ diverges.
>
> So $S$ converges if and only if $|r|<1$, and then $S=\frac{1}{1-r}$.

> [!question]- 2. Dyadic Comparison Test: let $(a_{n})$ be nonnegative and decreasing. Show that $\sum_{n=1}^\infty a_{n}$ converges if and only if $\sum_{k=0}^\infty 2^k a_{2^k}$ converges. (a) Show $2^ka_{2^{k+1}}\leq \sum_{n=2^k}^{2^{k+1}-1}a_{n}\leq 2^ka_{2^k}$. (b) Conclude the result.
> **Idea:** cut the series into blocks of length $1,2,4,8,\dots$ Each block is squeezed between its first and last term times its length.
>
> **(a)** The block $n=2^k,\dots,2^{k+1}-1$ has $2^k$ terms. Since $(a_{n})$ is decreasing, each term satisfies $a_{2^{k+1}}\leq a_{n}\leq a_{2^k}$. Adding the $2^k$ terms:
>$$
> 2^ka_{2^{k+1}}\leq \sum_{n=2^k}^{2^{k+1}-1}a_{n}\leq 2^ka_{2^k}
>$$
>
> **(b)** Let $S_{N}=\sum_{n=1}^N a_{n}$ and $T_{K}=\sum_{k=0}^K 2^ka_{2^k}$. Both have nonnegative terms, so each converges if and only if it is bounded.
> - **$T$ bounded $\implies$ $S$ bounded:** given $N$, take $K$ with $N\leq 2^{K+1}-1$. Adding the right inequality of (a) over $k=0,\dots,K$ gives $S_{N}\leq S_{2^{K+1}-1}\leq T_{K}$.
> - **$S$ bounded $\implies$ $T$ bounded:** adding the left inequality over $k=0,\dots,K$ gives
>$$
> S_{2^{K+1}-1}\geq \sum_{k=0}^K 2^ka_{2^{k+1}}=\frac{1}{2}\sum_{k=0}^K 2^{k+1}a_{2^{k+1}}=\frac{1}{2}(T_{K+1}-a_{1})
>$$
> So $T_{K+1}\leq a_{1}+2S_{2^{K+1}-1}$.
>
> Each sequence of partial sums bounds the other, so one series converges if and only if the other does.

> [!question]- 3. Let $p>0$. Prove that the $p$-series $\sum_{n=1}^\infty \frac{1}{n^p}$ converges if and only if $p>1$.
> **Idea:** the dyadic series is geometric.
>
> $a_{n}=\frac{1}{n^p}$ is positive and decreasing (since $p>0$), so Q2 applies. The dyadic terms are
>$$
> 2^ka_{2^k}=\frac{2^k}{(2^k)^p}=\left( 2^{1-p} \right)^k
>$$
> This is a geometric series with $r=2^{1-p}>0$. By Q1 it converges if and only if $2^{1-p}<1$, i.e. $1-p<0$, i.e. $p>1$. By Q2, so does $\sum \frac{1}{n^p}$.

> [!question]- 4. Let $p>0$. Prove that the log $p$-series $\sum \frac{1}{n\log(n)^p}$ converges if and only if $p>1$.
> **Idea:** the dyadic series is a constant times a $p$-series.
>
> The series starts at $n=2$, since $\log 1=0$. For $n\geq 2$, $n$ and $\log n$ are positive and increasing, so $a_{n}=\frac{1}{n(\log n)^p}$ is positive and decreasing. (Set $a_{1}=a_{2}$ to start the test at $n=1$; one term doesn't change convergence.) For $k\geq 1$, using $\log(2^k)=k\log 2$:
>$$
> 2^ka_{2^k}=\frac{2^k}{2^k(k\log 2)^p}=\frac{1}{(\log 2)^p}\cdot \frac{1}{k^p}
>$$
> This is a constant times the $p$-series, which converges if and only if $p>1$ (Q3). By Q2, so does the log $p$-series.

> [!question]- 5. Prove the ratio test. Let $a_{n}\neq 0$ with $\lim\left| \frac{a_{n+1}}{a_{n}} \right|=L$ and $S=\sum a_{n}$. (a) If $L<1$, $S$ converges absolutely. (b) If $L>1$, $S$ diverges. (c) If $L=1$, $S$ could converge or diverge.
> **Idea:** eventually each term is at most $r$ times the one before, so compare with a geometric series.
>
> **(a)** Pick $r$ with $L<r<1$. Using $\varepsilon=r-L$, there is $N$ with $\left| \frac{a_{n+1}}{a_{n}} \right|<r$, i.e. $|a_{n+1}|<r|a_{n}|$, for $n\geq N$. By induction,
>$$
> |a_{n}|\leq |a_{N}|\,r^{n-N}\quad \text{for } n\geq N
>$$
> $\sum |a_{N}|r^{n-N}$ is geometric with $r<1$, so it converges. By comparison, $\sum|a_{n}|$ converges.
>
> **(b)** Using $\varepsilon=L-1$, there is $N$ with $\left| \frac{a_{n+1}}{a_{n}} \right|>1$, i.e. $|a_{n+1}|>|a_{n}|$, for $n\geq N$. So $|a_{n}|\geq|a_{N}|>0$ for $n\geq N$. The terms don't go to $0$, so $S$ diverges.
>
> **(c)** $\sum \frac{1}{n}$ diverges and $\sum \frac{1}{n^2}$ converges, but both have $L=1$: $\frac{n}{n+1}\to 1$ and $\frac{n^2}{(n+1)^2}\to 1$.

> [!question]- 6. Mertens' Theorem (Text §2.6.8 Exercise 9): if $A=\sum_{n=0}^\infty a_{n}$ converges absolutely and $B=\sum_{n=0}^\infty b_{n}$ converges, then the Cauchy product $\sum_{n=0}^\infty \sum_{k=0}^n a_{k}b_{n-k}$ converges to $AB$.
> **Idea:** write the error as $\gamma_{n}=\sum a_{k}\beta_{n-k}$, where $\beta_{j}=B_{j}-B$. Split $\gamma_{n}$ into a piece where $\beta$ is small and a piece where $a_{k}$ is small.
>
> **Setup.** Let $A_{n}, B_{n}$ be the partial sums, $C_{n}=\sum_{j=0}^n\sum_{k=0}^j a_{k}b_{j-k}$, and $\beta_{j}=B_{j}-B\to 0$.
>
> **(a)** Swapping the order of summation (over $0\leq k\leq j\leq n$):
>$$
> C_{n}=\sum_{k=0}^n a_{k}\sum_{j=k}^n b_{j-k}=\sum_{k=0}^n a_{k}B_{n-k}=\sum_{k=0}^n a_{k}(B+\beta_{n-k})=A_{n}B+\gamma_{n}
>$$
> where $\gamma_{n}=a_{0}\beta_{n}+a_{1}\beta_{n-1}+\cdots+a_{n}\beta_{0}$.
>
> **(b)** $A_{n}B\to AB$, so $C_{n}\to AB$ if and only if $\gamma_{n}\to 0$.
>
> **(c)** Let $\alpha=\sum|a_{k}|<\infty$. Since $\beta_{j}\to 0$, it is bounded: $|\beta_{j}|\leq M$ for all $j$. Let $\varepsilon>0$.
> - Choose $N$ with $|\beta_{j}|<\frac{\varepsilon}{2(\alpha+1)}$ for $j\geq N$.
> - Since $\sum a_{k}$ converges, $a_{k}\to 0$. Choose $N'$ with $|a_{k}|<\frac{\varepsilon}{2N(M+1)}$ for $k\geq N'$.
>
> For $n\geq N+N'$, split $\gamma_{n}$:
>$$
> |\gamma_{n}|\leq \underbrace{ \sum_{k=0}^{n-N}|a_{k}||\beta_{n-k}| }_{ n-k\geq N\text{, so }\beta\text{ small} }+\underbrace{ \sum_{k=n-N+1}^n|a_{k}||\beta_{n-k}| }_{ N\text{ terms, }k\geq N'\text{, so }a_{k}\text{ small} }
>$$
>$$
> \leq\alpha\cdot \frac{\varepsilon}{2(\alpha+1)}+N\cdot \frac{\varepsilon}{2N(M+1)}\cdot M<\frac{\varepsilon}{2}+\frac{\varepsilon}{2}=\varepsilon
>$$
> So $\gamma_{n}\to 0$, and the Cauchy product converges to $AB$.
