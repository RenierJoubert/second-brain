#RealAnalysis


> [!question]- Prove that the alternating harmonic series is equal to $\log(2)$. Namely, that $\sum_{n=1}^{\infty}(-1)^{n+1} \frac{1}{n}=\log(2)$. 
> By Abel's theorem we have that if $\sum a_{n}\to S$ then $\lim_{ x \to 1^- }\sum_{n=0}^{\infty}a_{n}x^n=S$. This means $\forall\varepsilon>0$ $\exists \delta>0$ s.t. for $1-\delta<x<1$ we have $|\sum_{n=0}^{\infty}a_{n}x^n-S|<\varepsilon$. $\frac{1}{n}$ is decreasing and goes to zero, so by the alternating series test $\sum_{n=0}^{\infty}(-1)^{n+1} \frac{1}{n}=S$ converges. 
> t
> the Taylor series of $\log(x)$ about $x=1$ is written in terms of $1+x$ as follows:
>$$
> \log(1+x)=\sum_{n=1}^{\infty} (-1)^{n+1} \frac{x^n}{n}=\sum_{n=0}^{\infty} a_{n}x^n
>$$
>Where $a_{n}=(-1)^{n+1} \frac{1}{n}$. This means that $S=\log(1+x)$ for $0<x<1$. Now, let $\varepsilon>0$, By Abel's theorem $\exists \delta_{1}>0$ s.t. $1-\delta_{1}<x<1 \implies |\sum_{n=0}^{\infty}a_{n}x^n-S|< \frac{\varepsilon}{2}$. 
>
>$\log(x)$ is continuous so at $x=2$ we know $\exists \delta_{2}>0$ s.t. $|y-2|<\delta_{2} \implies |\log(y)-\log(2)|< \frac{\varepsilon}{2}$. 
>
>Let $\delta=\min \{ \delta_{1}, \delta_{2} \}$ and fix $1-\delta<x<1$.
>
>This means that $0<x<1$,$S = \log(1+x)$, and $|(1+x)-2|=1-x<\delta$.
>
>By triangle inequality we get that
>$$
>\begin{align}
>|S-\log(2)| & \leq |S-\log(1+x)|+|\log(1+x)-\log(2)| \\
> & < \frac{\varepsilon}{2}+  \frac{\varepsilon}{2} \\
> & < \varepsilon
>\end{align}
>$$
>So $S\to \log(2)$ and $\sum_{n=0}^{\infty} (-1)^{n+1} \frac{1}{n}=\log(2)$.


> [!question]- If $f$ and $g$ are continuous functions, show that their product is continuous 
> Fix a point $c$ in the domain of $f$ and $g$. This means if $\varepsilon=1$ then $\exists \delta_{1}>0$ s.t. $|x-c|<\delta_{1} \implies |f(x)-f(c)|<1$. 
> By triangle inequality:
>$$
> |f(x)|\leq|f(x)-f(c)|+|f(c)|<1+|f(c)|
>$$
> So let $M=|f(c)|+1$ and $K=|g(c)|+1$.
> Using continuity once more, we know $\exists \delta_{2},\delta_{3}>0$ such that the following hold:
>$$
> \begin{align}
> |x-c| < \delta_{2}  & \implies |f(x)-f(c)|< \frac{\varepsilon}{2K} \\
> |x-c|<\delta_{3} & \implies|g(x)-g(c)|< \frac{\varepsilon}{2M}
> \end{align}
>$$
>If we take $\delta = \min \{ \delta_{1}, \delta_{2}, \delta_{3} \}$ then by triangle inequality:
>$$
>\begin{align}
>|f(x)g(x)-f(c)g(c)|  & = |f(x)g(x)-f(x)g(c)+f(x)g(c)-f(c)g(c)| \\
> & \leq |f(x)||g(x)-g(c)| + |g(c)||f(x)-f(c)| \\
>  & \leq M|g(x)-g(c)| + K|f(x)-f(c)| \\
>   & < \varepsilon
>\end{align}
>$$
>So $fg$ is continuous at $c$.


> [!question]- Show that the following are equivalent for a function $f: \mathbb{R} \to \mathbb{R}$
> 1. $f$ is continuous
> 2. For any open $U \subseteq \mathbb{R}$, $f^{-1}(U)$ is also open
> 3. For any closed $K \subseteq \mathbb{R}$, $f^{-1}(K)$ is also closed. 
> 
> $1 \implies 2$
> $f$ is continuous and let $U$ be open so that $\exists\varepsilon>0$ s.t. $(f(x)-\varepsilon, f(x)+\varepsilon) \subseteq U$, also $\exists \delta>0$ s.t. $|y-x|<\delta \implies |f(y)-f(x)|<\varepsilon$. This means for any $y \in (x-\delta, x+\delta)$ that $f(y)\in(f(x)-\varepsilon, f(x)+ \varepsilon) \subseteq U$. Thus $(x-\delta, x+\delta) \subseteq f^{-1}(U)$ and $f^{-1}(U)$ is open.
> 
> $2 \implies 1$
> Fix some $c \in \mathbb{R}$ and let $\varepsilon>0$, then $U=(f(c)-\varepsilon, f(c)+\varepsilon)$ is open. This means that $f^{-1}(U)$ is open and $c \in f^{-1}(U)$. Therefore, $\exists \delta>0$ s.t. $(c-\delta, c+\delta) \subseteq f^{-1}(U)$. Hence $|x-c|<\delta \implies |f(x)-f(c)|<\varepsilon$ and $f$ is continuous.
> 
> $2 \implies 3$
> Let $K \subseteq \mathbb{R}$ be closed so $K^c$ is open. it follows that $f^{-1}(K^c)$ is open, taking the complement we get that then $f^{-1}(K)$ must be closed.
> 
> $3 \implies 2$
> Let $U \subseteq \mathbb{R}$ be open,  so $(U^c)^c$ is open and $U^c$ is closed. Thus $f^{-1}(U^c)$ is closed and $f^{-1}(U^c)^c$ is open. This is the same as saying $f^{-1}(U)$ is open.


> [!question]- Let $f: \mathbb{R} \to \mathbb{R}$ be a continuous function. Show that the zero set is closed. 
> The zero set of $f$ is just $\{ x \in \mathbb{R} : f(x)=0 \}=f^{-1}(\{ 0 \})$. We have that $\{ 0 \}=[0, 0]$ which is closed, so $f^{-1}(\{ 0 \})$ is closed. 


> [!question]- Consider the function $g:(0, 1) \to \mathbb{R}$ defined as $\frac{1}{q}$ if $x=\frac{p}{q}$ where $\gcd(p,q)=1$, otherwise $g(x)=0$ if $x \in \mathbb{R} / \mathbb Q$.  Let $c$ be a rational point in $(0, 1)$, prove that $g$ is not continuous at $x=c$.
> $g$ is continuous at $x=c$ if $\forall(x_{n})$, $x_{n}\to c \implies g(x_{n})\to g(c)$. I want to find some $(x_{n})$ s.t. $x_{n}\to c$ but $g(x_{n})\not\to g(c)$. Let $c=\frac{p}{q}$ for $\gcd(p, q)=1$. $c<1$ so $\left( c, \min\left\{  c + \frac{1}{n}, 1  \right\} \right)$ is non-empty. By density of $\mathbb{R} / \mathbb Q$ we can find irrational $x_{n}$ in this interval s.t. $x_{n} \in (0, 1)$  and $0<x_{n}-c< \frac{1}{n}$ so $x_{n}\to c$. But because $x_{n}$ is irrational we have $g(x_{n})=0$.
> 


> [!question]- Let $f: \mathbb{R} \to \mathbb{R}$ and $g: \mathbb{R} \to \mathbb{R}$ be two continuous functions. Show that if $\forall q \in \mathbb Q$ $f(q)=g(q)$, then $f(x)=g(x)$ for all $x \in \mathbb{R}$. 
> Fix some $x \in \mathbb{R}$, then because $\mathbb Q$ is dense we know that $\forall n \in \mathbb{N}$, $\exists q_{n} \in \mathbb Q$ s.t. $x < q_{n}<x + \frac{1}{n}$. This means that $q_{n}\to x$. Because $f,g$ are continuous we have $f(q_{n})\to f(x)$ and $g(q_{n})\to g(x)$. Limits are unique so $f(x)=g(x)$











