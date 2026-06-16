#stats #math #stats302 

# Random Variables and Distributions


> [!Theorem] Random Variable 
> A *random variable* $X$ is a function of $\omega$ mapping from the sample space $\Omega$ to the subset of real numbers such that: $$X: \Omega \to \mathbb{R}$$ and $$X(\omega) \in \mathbb{R} \quad \forall \omega \in \Omega$$

Namely, every event in our sample space needs to be mapped to some real number.

RVs (random variables) are used to describe events of interest and allow us to naturally abstract from our sample space. For example, $\{ X > x \}$ is an event such that:

$$
\big\{  X > x\big\} = \big\{ \omega \in \Omega : X(\omega) > x\big\}
$$

## The Indicator Function


> [!THeorem] Indicator Function
> The indicator function can be thought as a sort of step function or impulse. The indicator function however is also a **random variable** and hence a function mapping from $\Omega \to \mathbb{R}$. The indicator function is as follows: $$I_{A}(\omega)= \begin{cases}
> 1 \quad \omega \in A \\
> 0 \quad \text{otherwise}
> \end{cases}$$
 

For example, let $A= \{ 1,2,3 \}$, $I_{A}(2)=1$ but $I_{A}(4)=0$.

Notably, we can compose indicator functions of events to create a new indicator function. For example, let $A,B$ be events. Then the random variable:
$$
X = I_{A} \times I_{B}

$$
is too an indicator function of the event $A \cap B$ such that $X = I_{A \cap B}$.


## Distributions

A probability associates each $\omega \in \Omega$ with a number in $[0, 1]$ and satisfies the probability axioms. Whats more, a random variable also operates on the sample space and we take these together to induce a probability on $\mathbb{R}$.

Namely, if we flip a fair coin s.t. $\Omega = \{ H, T \}$ where $\mathbb{P}(H)=\mathbb{P}(T)=0.5$. Then consider the random variable $I_{H}$, we have that:
$$
\mathbb{P}(I_{H}=1)=\mathbb{P}(\omega: I_{H}(\omega)=1)=\mathbb{P}(H).
$$

> [!Theorem] Distribution
> If $X$ is a random variable, then the **distribution** of $X$ is the collection of probabilities $\mathbb{P}(X \in B)$ *for all* subsets $B$ of $\mathbb{R}$. 

That is to fully specify the distribution, we need to know $\forall B \subset \mathbb{R}$ what is:
$$
\mathbb{P}(X \in B) = \mathbb{P}(\{ \omega \in \Omega : X(\omega) \in B\})
$$
## An Example
> Suppose the Canucks are playing 2 games next week, and the odds for each game are given as follows:

$$
\mathbb{P}(\omega) = \begin{cases}
0.3 \quad \omega= W \\
0.2 \quad \omega = O \\
0.5 \quad \omega = L
\end{cases}
$$
Let $X$ be a RV representative of the number of wins, find $\mathbb{P}(X = x)\quad \forall x \in \mathbb{R}$.

Because they are playing only two games, we have that $x \in [0, 2]$ hence:
$$
\begin{align}
\mathbb{P}(X = 0) = \mathbb{P}(\{  \omega : X(\omega) =0\}) & = \mathbb{P}(\{ LL, OL, LO, OO \}) \\
& = \mathbb{P}(W^c)\mathbb{P}(W^c)  \\
& = (1-0.3)^2=0.49
\end{align}
$$
$$
\begin{align}
\mathbb{P}(X = 1) = \mathbb{P}(\omega : X(\omega)=1) & =\mathbb{P}(\{ WL, LW, OW, WO \})  \\
& = (0.3)(0.5)+(0.5)(0.3)+(0.2)(0.3)+(0.3)(0.2)  \\
& = 0.42
\end{align}
$$
$$
\mathbb{P}(X = 2) = \mathbb{P}(\{ WW \}) = 0.3^2=0.09
$$
Hence our distribution is given as:
$$
\mathbb{P}(X = x) = \begin{cases}
0.49 \quad x = 0 \\
0.42 \quad x = 1 \\
0.09 \quad x = 2 \\
0 \quad o.w.
\end{cases}
$$

> [!Danger] Distributions
> Always remember to include all possible subsets of $\mathbb{R}$ in a given distribution, namely this usually means including a probability of 0 for any event not possible in your sample space and denoting it with "otherwise" as shown above.

Moreover, we can write a formula for $\mathbb{P}(X \in B), \forall B \subset \mathbb{R}$ by using indicators as follows:
$$
\mathbb{P}(X \in B) = 0.49I_{B}(0)+ 0.42I_{B}(1) + 0.09I_{B}(2)
$$

