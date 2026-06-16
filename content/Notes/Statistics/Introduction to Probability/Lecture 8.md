#stats #math #stat302

# Cumulative Distribution Functions


> [!Theorem] Cumulative Distribution Function 
> The cumulative distribution function of a random variable $X$ is denoted with a capital $F$ such that:
>$$
> F_{X}(x)=\mathbb{P}(X \leq x)
>$$
>That is, what is the probability that $X$ is *at most* some value $x$?


> [!Tip] Corollary 
> Let $X$ be a random variable with CDF $F_{X}$, then:
> - $0 \leq F_{X}(x) \leq 1 \quad \forall x \in \mathbb{R}$
> - $F(x) \leq F(y) \quad \forall x \leq y$
> - $\lim_{ a \to -\infty }F_{X}(a)=0$
> - $\lim_{ a \to \infty }F_{X}(a)=1$

![[Pasted image 20260601172859.png]]

We can see that it is never decreasing.

> [!Todo] Continuous CDF Example 
> Let $X \sim \text{Exp}(\lambda)$ with pdf:
>$$
> f_{X}(x)=(\lambda e^{-\lambda x})I_{[0, \infty)}(x) 
>$$
>Find $F_{X}(x)$, and use the CDF to calculate $\mathbb{P}(x \leq 10)$ when $\lambda = \frac{1}{5}$.

$$
\begin{align}
F_{X}(x) & = \int_{-\infty}^x\lambda e^{-\lambda x}I_{[0, \infty)}xdx \\
 & = \int_{0}^xx\lambda e^{-\lambda x}I_{[0, \infty)}xdx  \\
 & = \frac{\lambda e^{-\lambda x}}{-\lambda}\bigg |_{x=0}^{x}=1-e^{-\lambda x}
\end{align}
$$
$$
\text{Hence,} \quad F_{X}(x) = (1-e^{-\lambda x})I_{[0, \infty)}(x) 
$$
$$
\text{and,} \quad \mathbb{P}(X \leq 10) = (1-e^{-10/5})I_{[0, \infty)}(10)= 0.864
$$


> [!Todo] Discrete CDF Example 
> Consider rolling a fair six-sided die, let $X$ be the number showing on the die, what is $F_{X}(x)$, and use this to find $\mathbb{P}(X \leq 5)$.
> 

$$
F_{X}(x)=\mathbb{P}(X \leq x)= \sum_{{\omega \in \Omega}, \omega \leq x}p(\omega)= \frac{1}{6}(\{ \omega \in \Omega, \omega \leq x \}).
$$
$$
\text{Hence,} \quad F_{X}(x) = \mathbb{P}(X \leq x)= \begin{cases}
0 \quad x<1 \\
\frac{1}{6} \quad 1 \leq x < 2 \\
\frac{2}{6} \quad 2 \leq x < 3 \\
\frac{3}{6} \quad 3 \leq x < 4 \\
\frac{4}{6} \quad 4 \leq x < 5  \\
\frac{5}{6} \quad 5 \leq x < 6 \\
1 \quad x \geq 6
\end{cases}
$$
And, $\mathbb{P}(X \leq 5)=\frac{5}{6}$. This question is asking essentially, in one single roll, what is the probability that the dice shows a number less than or equal to 5, which is just $\frac{5}{6}$ because there are $\frac{5}{6}$ die faces that are all less than or equal to 5. To elaborate, the CDF is just $\mathbb{P}(X \leq x)$, meaning we are asking what the probability of $X$ being at most some $x$, in this particular dice example we see that as $x$ increasing the probability of $X$ being at most that value also increases as the range of acceptable $x$ increases, for example the probability of $X$ being at most 1 is $\frac{1}{6}$ because the only acceptable case would be to roll a 1, but the probability of $X$ being at most 2 is $\frac{2}{6}$ as we can roll either a 1 or a 2 and so forth...


> [!Tip] Determining $\mathbb{P}(X \in B)$ 
> Let $X$ be any random variable with CDF $F_{X}$ and let $B$ be any subset of $\mathbb{R}$. Then, $\mathbb{P}(X \in B)$ can be determined solely from $F_{X}$.
> 
> That is, the CDF contains all the information about the distribution of $X$, and it does not matter if the RV is continuous or discrete.


> [!Tip] Corollary
> Let $X$ be an *absolutely* continuous variable with CDF $F_{X}$, and let:
>$$
> f_{X}(x) = \frac{d}{dx}F_{X}(x)=F'(x).
>$$
>Then, $f(x)$ is the PDF of $X$.


For example, with the dice example from above, we have that:
$$
\begin{align}
\mathbb{P}(X=5) & =\mathbb{P}(X \leq 5)-\mathbb{P}(X <5) \\
 & = \mathbb{P}(X \leq 5) - \mathbb{P}(X \leq 4) \\
 & = F_{X}(5)- F_{X}(4)
\end{align}
$$
## Mixture Distributions

Let $X_{1}, X_{2}, \cdots$ be random variables with respective CDFS $F_{X_{1}}, F_{X_{2}} \cdots$. Then for any constants $p_{i}$ (weights) such that $p_{i}\geq 0$ and $\sum_{i=1}^k p_{i} = 1$, then
$$
F_{G}(x) = \sum_{i=1}^k p_{i} F_{X_{i}}(x)
$$
is the CDF of the *mixture* of $F_{X_{i}}$, this is similar to a linear combination such that:
$$
\begin{align}
G = & X_{1} + X_{2}, \\
F_{G}(x) = &p_{1}F_{X_{1}}(x)+p_{2}F_{X_{2}}(x).
\end{align}
$$

> [!Todo] Mixture Example 
> Suppose a bag contains two coins, you choose one at random and flip it once. Let $X$ be the number of heads. Coin A is a fair coin but Coin B is a loaded coin with $\mathbb{P}(Heads)=0.9$, write the CDF for the number of heads flipped.
> 

We know that each coin has a probability of being chosen of $\frac{1}{2}$, meaning our weights are as follows: $p_{A}=0.5$ and $p_{B} = 0.5$. We also have that:
$$
F_{A}(x)=\mathbb{P}(X< 1) = \mathbb{P}(X = 0)=0.5
$$
$$
F_{B}(x)=\mathbb{P}(X < 1) = \mathbb{P}(X =0)=1-0.9=0.10
$$
Hence,
$$
F_{G}(x)=0.5 \cdot 0.5 + 0.5 \cdot 0.1=0.30 \quad \text{ for}\quad 0 \leq x < 1
$$
Moreover, the number of heads can only be 0 or 1, hence when $x \geq 1$ we have that $F_{A}(x)=1$ and $F_{B}(x)=1$, thus
$$
F_{G}(x)= \begin{cases}
0 \quad x < 0 \\
0.30 \quad 0 \leq x < 1 \\
1 \quad x \geq 1
\end{cases}
$$

> [!Todo] Mixture Example 
> Consider the following question: 

![[Pasted image 20260601181809.png]]


> [!Tip] Normal Distribution CDF 
> If $X \sim N(\mu, \sigma)$, then
>$$
> F_{X}(x) = \Phi\left(\frac{x - \mu}{\sigma} \right)
>$$

In the particular example above, our weights are given as simply 0.30, 0.60, and 0.10, hence our mixture CDF by using the tip above is simply given by:
$$
\begin{align}
F_{G}(x) & = 0.3F_{X_{1}}(x)+ 0.6F_{X_{2}}(x)+0.10F_{X_{3}}(x) \\
& = 0.3\Phi\left( \frac{{x-50}}{10} \right) + 0.60\Phi\left( \frac{{x-80}}{8} \right) +0.10I_{[0, \infty)}(x)
\end{align}
$$
## Transformations

> There are times when we want to perform a transformation on a random variable, namely, this is when we change our variable. For example, let $X$ be a random variable with some distribution, let $Y=g(X)$, we want to then find the distribution of $Y$.

This can be accomplished either with the *distribution* method, or the *jacobian* method.

## Distribution Method

The definition of the distribution method is as follows:

$$
\mathbb{P}(Y \in A) = \mathbb{P}(g(X) \in A)=\mathbb{P}(\{ x : g(x) \in A \})
$$
==This method always works, and is easy for discrete random variables.==

Let $X$ be a discrete random variable with PMF $p_{X}(x)$. Let $Y=g(X)$, then the PMF of $Y$ is given by:
$$
p_{Y}(y)=\sum_{x:g(x)=y}p_{X}(x)=\sum_{x\in g^{-1}(y)}p_{X}(x)
$$
Namely, if we want to find the distribution of $Y=g(X)$, then we need to:
- Start with the definition above
- Use the function to rewrite the probability in terms of $X$
- Use the distribution of $X$ to compute the probability that $g(X) \in A$
- Simplify and massage the form to possibly match a known PDF or CDF.


> [!Todo] An example 
> Let $X \sim \text{Binom}(n, \theta)$ for some $\theta \in (0, 1)$, and let $Y = n -X$. Find the PMF of $Y$.
> 

Hence, $X = n -y$, thus
$$
\begin{align}
p_{Y}(y)  & =\sum_{x:g(x)=y}p_{X}(x)=\sum_{x:(n-X)=y}p_{X}(x) \\
 & p_{X}(n-y)=\begin{pmatrix}
 n \\
 n-y
 \end{pmatrix}\theta^{n-y}(1-\theta)^yI_{\{ 0, 1 \cdots \}}(n-y)
\end{align}
$$

> [!Tip] Symmetry of The Binomial Coefficient 
>$$
>\begin{pmatrix}
>n \\
>k
>\end{pmatrix} = \begin{pmatrix}
>n \\
>n-k
>\end{pmatrix}
>$$ 

Using the symmetry above, we have that:
$$
p_{X}(n-y)=\begin{pmatrix}
n \\
y 
\end{pmatrix}(1-\theta)^y\theta^{n-y}I_{\{ 0, 1, \cdots, n \}}(y)
$$
Using $\theta = (1 - (1-\theta))$ we then have that:
$$
Y \sim \text{Bin}(n, 1 - \theta).
$$


> [!Tip] Useful results 
> - $Y = X + c \implies F_{Y}(y) = F_{X}(y-c)$ 
> - $Y = kX \implies F_{Y}(y)=F_{X}\left( \frac{y}{k} \right)$

## Jacobian Method
> For continuous random variables you can always use the distributive method, and sometimes this is easiest. But, we can also use the *Jacobian* method.

Let $X$ be an absolutely continuous random variable with PDF $f_{X}$ and let $Y=h(X)$ such that $h$ is continuously differentiable and *monotonic*, meaning it is strictly increasing or decreasing.

Then, $Y$ is absolutely continuous and its density function $f_{Y}$ is given by:
$$
f_{Y}(y)=f_{X}(h^{-1}(y)) \cdot \left|\frac{d}{dy}h^{-1}(y)\right|
$$
Where of course $h^{-1}(y)=x$ such that $h(x)=y$.


> [!Todo] An example 
> Let $X \sim \text{Unif}(0, 1)$ and let $Y= -\log(X)$, what is the PDF of Y? 

We know that $\log$ is continuously differentiable and strictly increasing, hence we can use the Jacobian method as follows:

$$
Y=h(x)=-\log(X) \implies h^{-1}(y)=e^{-y}
$$
$$
\text{Hence, } \quad \frac{d}{dy}h^{-1}(y)=-e^{-y}
$$
And we have that $f_{X}(x)=1\cdot I_{[0,1]}(x)$, thus
$$
\begin{align}
f_{y}(y)& =f_{X}(h^{-1}(y)) \cdot \frac{d}{dy} \left|(h^{-1}(y)) \right| \\
 & =f_{X}(e^{-y})|-e^{-y}| \\
 & = 1 \cdot I_{[0, 1]} (e^{-y}) \cdot e^{-y} \\
 & = I_{[0, \infty]}(y)\cdot e^{-y} \\
 & \implies Y \sim \text{Exp}(1).
\end{align}
$$
