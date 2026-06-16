#stats #math #stats302 

## Convergence I

Topics covered include:
1. Defining convergence in probability
2. Determining when a sequence converges
3. Define and apply the *Weak Law of Large Numbers*

## Convergence in Probability

> [!Theorem] Convergence 
> A sequence of random variables $X_{1}, X_{2}, \cdots, X_{n}$ converges in probability to a random variable $X$ if $\forall \epsilon > 0$:
> $$
> \lim_{ n \to \infty } \mathbb{P}(|X_{n} - X| < \epsilon) = 1
> $$ 

This is commonly expressed with the notation,
$$
X_{n} \to^p X. \quad \text{Xn converges in probability to X}
$$
Note that we can also use $\lim_{ n \to \infty } \mathbb{P}(|X_{n} - X| \geq \epsilon) = 0$ in a proof and this is equivalent as it is just the complement.

> [!Todo] An example 
> Suppose $\mathbb{P}\left( X_{n} = 1 - \frac{1}{n} \right)=1$ and $\mathbb{P}(Y=1)=1$. Show that the sequence $\{ X_{n} \}$ converges in probability to $Y$.

Let $\epsilon > 0$, 
$$
|X_{n} - Y| = |1-\frac{1}{n} - 1| = |-\frac{1}{n}| = \frac{1}{n}.
$$
Hence, $\mathbb{P}(|X_{n} - X| < \epsilon) = \mathbb{P}\left( \frac{1}{n}< \epsilon \right)$. Thus, choose $N > \frac{1}{\epsilon}$, therefore we have that $\forall n > N$, $\frac{1}{n} < \epsilon$ will hold and $\mathbb{P}\left( \frac{1}{n} < \epsilon \right)=1$ since $\forall \epsilon > 0, \exists n$ where this holds, and we may conclude $X_{n} \to^p Y$.


> [!Todo] Another example 
> Let $U \sim \text{Unif}(0, 1)$ and define
> $$
> X_{n} = U + B_{n}
> $$ 
> Where $B_{n} \sim \text{Bern}\left( \frac{1}{n} \right)$ are independent Bernoulli random variables. Show that $X_{n} \to^p U$.

$$
\mathbb{P}(|X_{n} - U| \geq \epsilon) \iff \mathbb{P}(|B_{n}| \geq \epsilon) \quad \text{as} \quad B_{n} = X_{n} - U
$$
We have that $\mathbb{P}(B_{n}=1)=\frac{1}{n}$ as $B_{n} \sim \text{Bern}\left( \frac{1}{n} \right)$. Hence,
$$
\lim_{ n \to \infty } \mathbb{P}(|X_{n}-U|\geq \epsilon) \leq \lim_{ n \to \infty } \left( \frac{1}{n} \right) = 0.
$$
Therefore $X_{n} \to^p U$.

## The Weak Law of Large Numbers


> [!Theorem] WLLN 
>  Let $\{ X_{n} \}$ be independent and identically distributed random variables with finite mean $\mu = \mathbb{E}(X)$, then:
>  $$
>  \overline{X}_{n} = \frac{1}{n}\sum_{i=1}^n X_{i} \to^p \mu
> $$

Intuitively, this means that the distribution of $\overline{X}_{n}$ gets more and more concentrated around $\mu$ as $n \to \infty$.


> [!Todo] An example 
> Let $X_{n}$ be the sum of squares of $n$ independent rolls of a fair six-sided die, that is
> $$
> X_{n} = \sum_{i=1}^n X_{i , n}^2
> $$ 
> Where $X_{n, i}$is the result of the $i-th$ dice roll.
> Show that $\frac{1}{n}X_{n} \to^p m$ for some $m$.


By the WLLN we have that:
$$
\frac{1}{n} \sum_{i=1}^n X_{i, n}^2 \to^p \mu = \mathbb{E}(X_{i, n}^2) = \frac{1}{6}(1^2 + 2^2 + 3^2 + 4^2 + 5^2 +6^2) = \frac{91}{6}
$$
Hence $m = \frac{91}{6}$.

## Proof of WLLN
First assume that $\text{Var}(X_{i}) = \sigma^2 < \infty \quad \forall i$. Then by *Chebyshev's* inequality we have that $\forall \epsilon > 0$,
$$
\mathbb{P}(|\overline{X_{n}}- \mu| \geq \epsilon) \leq \frac{\text{Var}(\overline{X_{n}})}{\epsilon^2}= \frac{\frac{\sigma^2}{n}}{\epsilon^2} \to 0.
$$

## Convergence Almost Surely 

> [!Theorem] Convergence Almost Surely 
> A sequence of random variables $\{ X_{n} \}$ converges almost surely (with probability of 1), to a random variable $X$ if $\forall \epsilon >0$,
> $$
> \mathbb{P}(\lim_{ n \to \infty } |X_{n}-X|<\epsilon)=1
> $$

Generally, this is a stronger notion of convergence than *convergence in probability* covered above. This is commonly expressed with the notation:
$$
X_{n} \to^{\text{a.s.}}X.
$$
Similarly we can also use $\mathbb{P}(\lim_{ n \to \infty }|X_{n} - X| \geq \epsilon) = 0$ in a proof and this is equivalent as it is just the complement.
> [!Todo] An example 
> Let $Y \sim \text{Unif}(0, 1)$ and $X_{n}=Y^n$. Prove that $X_{n}\to^{\text{a.s.}}0$.

We have that $0 \leq y < 1 \implies \lim_{ n \to \infty }Y^n=0$. Hence, $X_{n}\to^{\text{a.s.}}0$.
