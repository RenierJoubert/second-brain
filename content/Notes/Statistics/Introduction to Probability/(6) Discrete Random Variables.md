#stats #math #stats302 

# Discrete Random Variables


> [!Theorem] Discrete Random Variable
> We say that a random variable $X$ is *discrete* if there exists a **countable set** $K = \{  x_{1}, x_{2}, \cdots x_{n}\}$  such that:
>$$
> \mathbb{P}(X \in K) = 1  
>$$
>Namely, the set $\{ x : \mathbb{P}(X=x)>0 \}$ is countable.

For discrete random variables, we call the set $\{ x : \mathbb{P}(X=x)>0 \}$ the **support** of $X$.

## Probability Mass Function (PMF)
> For discrete RVs we can be explicit about the probability associated with each value in its support.


> [!Theorem] PMF 
> The probability mass function for some discrete random variable $X$ is the function $p_{X}: \mathbb{R} \to [0,1]$ defined by: 
> $$
> p_{X}(x)=\mathbb{P}(X=x)
> $$

For example, suppose the discrete random variable $X$ denotes your happiness on a given day, and suppose it rains 30% of the time, it is cloudy but not raining 30% of the time, and sunny 40% of the time, $X$ takes on values -6, 2, and 10 respectively. **What is the PMF of $X$**?

$$
p_{X}(x) = 0.3I_{-6}+0.3I_{2}+0.4I_{10}
$$
The probability mass function can also be used to find the probabilities of events. Namely, for some event $A$ and a RV $X$:
$$
\mathbb{P}(X \in A) = \sum_{x \in A}p_{X}(x)
$$
For example, take the previous example above, if $A$ is the event such that you are happier than 0, we can find $\mathbb{P}(X \in A)$ as follows:
$$
\mathbb{P}(X \in A) = \sum_{x \in A}p_{X}(x) = p_{X}(2) + p_{X}(10) = 0.7
$$

> [!Tip] Tip 
> $$
> \mathbb{P}(A)=\mathbb{P}(X > 0) = 1 - \mathbb{P}(X \leq 0)
> $$

## Parameterization
> We can define PMFs using a random variable and some other parameter, this way we are able to express a family of distributions with a single function.

## Discrete Families
> Some examples of discrete families are as follows

## Bernoulli
> An experiment with 2 outcomes (success or failure).

Suppose for some experiment, the probability of success is $\theta \in (0, 1)$, then, a RV $X$ with PMF given by:
$$
p_{X}(x, \theta) = \theta^x(1 - \theta)^{1-x}I_{\{ 0, 1 \}}(x)
$$
is said to have the $\text{Bern}(\theta)$ distribution. The graph of this distributions looks like:
![[Pasted image 20260523205857.png]]

## Binomial
> This model is used to determine the number of successes $x$, in a sequence of $n$ *independent* Bernoulli trials, each with the same number of success, $\theta$.

Suppose the probability of success is $\theta \in (0, 1)$, a RV with PMF given by:
$$
P_{X}(x, n, \theta) = \begin{pmatrix}
n \\
x 
\end{pmatrix} \theta^x (1 - \theta)^{n-x}I_{\{ 0, 1, \cdots, n \}}(x)
$$

Is said to have the $\text{Binom}(n, \theta)$ distribution. The graph of this distribution looks like:

![[Pasted image 20260601140837.png]]


> [!Todo] Using the Binomial model 
> Suppose a test has 5 true or false questions, what is the probability that you get *at least* 4 correct answers by random guessing?
> 

We are trying to find $P(X \geq 4)$ such that:
$$
\begin{align}
\mathbb{P}(X \geq 4) & = \mathbb{P}(X = 4) + \mathbb{P}(X = 5) \\
 & = p_{X}(4, n = 5, \theta=0.5) + p_{X}(5, n = 5, \theta=0.5) \\
 & = \begin{pmatrix}
 5 \\
 4
 \end{pmatrix}(0.5)^4(0.5) + \begin{pmatrix}
 5 \\
 5
 \end{pmatrix} (0.5)^5(0.5) \\
  & = \frac{6}{32} \approx 0.1876
\end{align}
$$
Recall the formula for calculating $\begin{pmatrix}n \\  m\end{pmatrix}$, "n choose m" from [[(3) Finite Spaces|Combinations]].

## Poisson
> The Poisson distribution is good for modelling counts of things, often per unit of time, where $\lambda$ is often the average number of events per unit time, and $X$ is the count of events in a particular unit of time.

Let $\lambda > 0$, then a RV $X$ with PMF given by:
$$
p_{X}(x, \lambda)= \frac{\lambda^x}{x!}e^{-\lambda}I_{\{ 0, 1, \cdots\}}(x)
$$
Is said to have the $\text{Poiss}(\lambda)$ distribution. Its distribution looks like this:
![[Pasted image 20260523211932.png]]


> [!Todo] Using the Poisson Model 
> Suppose a coffee chop receives an *average* of 3 customers per minute, what is the probability that exactly 5 customers arrive in any given minute?

Let $X$ be the number of customers in a given minute, then this is simply given by:
$$
p_{X}(x = 5) = \frac{3^5}{5!}e^{-3}=0.1008
$$

> [!Tip] Maximizing the Poisson 
> Is there some $\lambda$ that makes $\mathbb{P}(X = x)$ as large as possible? Yes, there is.

$$
\begin{align}
\mathbb{P}(X=x) & =\frac{\lambda^x}{x!}e^{-\lambda} \\
\hat{\lambda} & = \max_{\lambda}\left( \frac{\lambda^x}{x!}e^{-\lambda} \right) \\
 & = \max_{\lambda}\left( \log\left( \frac{\lambda^x}{x!}e^{-\lambda} \right) \right) \\
 & = \max_{\lambda} (x\log(\lambda)-\log(x!)-\lambda) \\
 0 & = \frac{d}{d\lambda}(x\log(\lambda)-\log(x!)-\lambda) \\
 0  & = \frac{x}{\lambda} - 1 \\
\end{align}
$$
Hence, the Poisson distribution is maximized when $x = \lambda$.

## Geometric Distribution

> [!Theorem] Geometric Distribution 
> Suppose the probability of success is $\theta \in (0,1)$, a RV with a PMF given by:
> $$
> p_{X}(x, \theta)= (1-\theta)^x\theta I_{\{ 0, 1, 2, \cdots\}}(x)
> $$
> Is said to have a $\text{Geom}(\theta)$ distribution.

![[Pasted image 20260523222640.png]]


> [!Todo] Using the Geometric model 
> What is the probability of flipping 3 coins **before seeing the first tails?** Here we can let $X$ be the number of heads (failures), before the first tail (success):
> $$
> p_{X}(x=3, 0.5) = (1-0.5)^3(0.5)=0.0625
> $$


## Negative Binomial
> The negative binomial distribution is very useful in determining the probability that $x$ failures appear before the $r$th success in a repeated experiment. However it is a generalization of the geometric distribution.


> [!Theorem] Negative Binomial 
> If the probability of success is $\theta \in (0, 1)$, then the RV with PMF given by:
> $$
> p_{X}(x, \theta, r) = \begin{pmatrix}
> r - 1 + x \\
> x
> \end{pmatrix} \theta^r(1-\theta)^xI_{\{ 0, 1, 2, \cdots\}}(x)
> $$ 
> Is said to have a $\text{NegBinom}(r, \theta)$ distribution

![[Pasted image 20260523223444.png]]


> [!Todo] Using the Negative Binomial Model 
> What is the probability of flipping 3 heads before seeing the 2nd tails? Here $\theta = 0.5$, $r = 2$, and $x$ is the number of heads (fails) before the 2nd tail (success).
> $$
> \mathbb{P}(X=3)=p_{X}(3, 2, 0.5)=\begin{pmatrix}
> 2 -1 + 3 \\
> 3
> \end{pmatrix}0.5^2(1-0.5)^2 = 0.125
> $$

## Hypergeometric
> The hypergeometric distribution can be used to determine the probability that there are $x$ successes out of $n$ draws without *replacement*.

> [!Theorem] Hypergeometric
> Suppose we have a finite population of size $N$ containing $K$ successes and a sample size of $n$. A random variable $X$ with PMF:
> $$
> p_{X}(x, N, K, n)=\frac{\begin{pmatrix} K \\ x \end{pmatrix} \begin{pmatrix} N - K \\ n - x \end{pmatrix}}{\begin{pmatrix} N \\ n \end{pmatrix}}
> $$

![[Pasted image 20260523224354.png]]


> [!Todo] Using the Hypergeometric Distribution 
> A shipment of 50 laptops arrives at a warehouse, 15 of which are defective. A quality control inspector randomly selects 10 laptops to inspect. What is the probability that exactly 3 of the selected laptops are defective? Here we have that:
> $$
> \begin{align}
> N  & = 50 \\
> K & = 15 \\
> n & = 10 \\
> X  & = \text{number of defective laptops}
> \end{align}\\ \\
> 
> \\
> \\
> 
> \mathbb{P}(X=3)=p_{X}(3, 50, 15, 10)= \frac{\begin{pmatrix} 15 \\ 3 \end{pmatrix} \begin{pmatrix} 50 - 15 \\ 10 - 3 \end{pmatrix}}{\begin{pmatrix} 50 \\ 10 \end{pmatrix}} = 0.299
> $$

### Some Other Distributions
- Categorical - Generalization of the Bernoulli distribution to $K$ outcomes instead of 2
- Multinom - Generalization of the Binomial distribution to $K$ outcomes instead of 2