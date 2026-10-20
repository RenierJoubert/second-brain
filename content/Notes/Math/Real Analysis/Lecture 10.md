#math 

# Starting Continuity

## Notation

- An "r-ball" at $x$ is the interval $(x-r, x+r)$.
- A "punctured r-ball" at $x$ is the interval $(x-r, x) \bigcup (x, x+r) = (x-r, x+r) - \{ x \}$.
- A "neighborhood" of $x$ is a set $\cal{U}$ which contains an r-ball at $x$.
- A "punctured neighborhood" of $x$ is a set $\cal{U}$ which contains a punctured r-ball at $x$.

## Limits

Let $f$ be a function defined on a punctured nbhd of a point $a \in \mathbb{R}$, note that $f(a)$ need not exist. We say that the limit of $f$ as $x$ approaches $a$ is $L$ if $\forall\varepsilon>0$, $\exists \delta>0$ s.t. $|x-a|< \delta$ then $|f(x)-L|<\varepsilon$. 

This is equivalent to saying:
- "f is within $\varepsilon$ of $L$ in the punctured $\delta$-ball of $a$".
- $\lim_{ x \to a }f(x)=L$

We say that $f(x)$ is continuous at $a$ if $\lim_{ x \to a }f(x)=f(a)$.


> [!example] An Example
> Let $g(x) = 3x+2$, prove that $\lim_{ x \to 1 }g(x)=5$. To do this, I want to find $\delta>0$ s.t. $|x-1|<\delta \implies |g(x)- 5|<\varepsilon$. Substituting we find:
> $|3x+2-5|<\varepsilon$ so $3|x-1| <\varepsilon$ and $|x-1|< \frac{\varepsilon}{3}$. So, we pick $\delta = \frac{\varepsilon}{3}$, then $|x-1|<\delta \implies |3x+2-5|<\varepsilon$.

## ELFS
> Prove that any linear function is continuous. 


## Sequences and Limits are Related
> In fact, they are equivalent.

### TFAE

1. $\lim_{ x \to a }f(x)=L$
2. For all sequences $(x_{n})$ with $x_{n}\ne a$ and $x_{n} \to a$, then $f(x_{n}) \to L$

That is, continuum convergence is equivalent to sequential convergence. 

$(1 \implies 2)$:

Let $(x_{n})$ be a sequence with $x_{n} \ne a$ and $x_{n} \to a$. Let $\varepsilon >0$, (1) says that $\exists \delta>0$ s.t. $|x-a|<\delta$, then $|f(x)-L| < \varepsilon$. We know $x_{n} \to a$ so $\forall \varepsilon_{1} > 0$, $\exists N \in \mathbb{N}$ such that $\forall n\geq N$, $|x_{n}-a|<\varepsilon_{1}$. Choose $\varepsilon_{1}=\delta$, then there exists $N \in \mathbb{N}$ such that $\forall n\geq N$ we have $|x_{n}-a|<\delta \implies |f(x_{n})-L|<\varepsilon$ so $f(x_{n}) \to L$.

$(2 \implies 1)$:

We prove the contrapositive. That is, we want to show that there exists a sequence $(x_{n})$ such that $x_{n} \ne a$ and $x_{n} \to a$ but $f(x_{n}) \not\to L$.

So, $\exists \varepsilon>0$ s.t. $\forall \delta>0$ there exists $x$ with $|x-a|<\delta$ and $x \ne a$ s.t. $|f(x)-L|\geq \varepsilon$. Fix this value of $\varepsilon w$ and  take $\delta_{n}=\frac{1}{n}$, then there exists $x_{n}$ s.t. $x_{n} \ne a$ and $|x_{n}-a|< \frac{1}{n}$, $|f(x)-L|\geq \varepsilon$.


## Arithmetic of Limits
> Let $\lim_{ x \to a }f(x) = F$ and $\lim_{ x \to a }g(x)=G$.

Then,
$$
\begin{align}
\lim_{ x \to a } [f(x) \pm g(x)] & = F\pm G \\
\lim_{ x \to a } [f(x) \cdot g(x)] & = F \cdot G  \\
\lim_{ x \to a } \frac{f(x)}{g(x)} & = \frac{F}{G} \quad G \ne 0
\end{align}
$$
All of these properties follow by taking the function's sequence equivalent and using the corresponding property of sequences. Or we can just use $\varepsilon / \delta$.

## The Squeeze Theorem
> Let $f,g,h$ be functions on $\mathbb{R}$ such that $f(x)\leq g(x)\leq h(x)$.

If $f(x) \to L$ and $h(x) \to L$ as $x \to a$ then $\lim_{ x \to a }g(x)=L$.


> [!theorem]- Proof 
> $f(x) \to L$ so $\exists \delta_{f}$ s.t. $|x-a|<\delta_{f}$ then $|f(x)-L|<\varepsilon$. Similarly, $h(x) \to L$ so $\exists \delta_{h}$  s.t. $|x-a|<\delta_{h}$ then $|g(x)-L|< \varepsilon$. So let $\delta = \min\{ \delta_{f}, \delta_{h} \}$ then whenever $|x-a|<\delta$ we have that:
> $$
> L-\varepsilon< f(x)\leq h(x)<L + \varepsilon
> $$
> Hence, 
>$$
> L - \varepsilon < g(x) < L + \varepsilon
> $$
> and $\lim_{ x \to a }g(x)=L$.




