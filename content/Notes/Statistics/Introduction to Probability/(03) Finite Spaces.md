#stats #math #stats302 

# Uniform Probability on Finite Spaces, Combinations, Permutations

## Some Applied Probability Problems


> 1. Marley borrows 2 books. Suppose that there is a ==0.5== probability they like the first book, ==0.4== that they like the second book, and ==0.3== that they like both. What is the probability that they will NOT like both books? (i.e. that they will not like either book?)

$$
\begin{align}
\mathbb{P}(A)  & = \mathbb{P}(\text{Likes book1}) = 0.5 \\
\mathbb{P}(B)  & = \mathbb{P}(\text{Likes book2}) = 0.4 \\
\mathbb{P}(A \cap B)  & = \mathbb{P}(\text{likes both}) = 0.3
\end{align}
$$
$$
\begin{align}
\mathbb{P}(\text{Doesnt like either})=\mathbb{P}(A^c \cap B^c) & = \mathbb{P}([A \cup B]^c) \\
& = 1 - \left(\mathbb{P}(A \cup B) - \mathbb{P}(A \cap B)\right) \\
& = 1 - ((0.5 + 0.4) - 0.3) \\
& = 0.4
\end{align}

$$

> 2. Jane must take two tests, call them T1 and T2. The probability that she passes test 1 is 0.8, that she passes test 2 is 0.7, and that of passing both tests is 0.6. Calculate the probability that: 
> a. She passes at least one test. 
> b. She passes at most one test. 
> c. She fails both tests. 
> d. She passes only one test.

$$
\mathbb{P}(\text{Passes at least 1}) = \mathbb{P}(T_{1} \cup T_{2}) = \mathbb{P}(T_{1})+\mathbb{P}(T_{2}) - \mathbb{P}(T_{1} \cap T_{2}) = 0.8+0.7-0.6=0.9
$$
$$
\mathbb{P}(\text{Passes at most 1}) = \mathbb{P}((T_{1}\cap T_{2})^c) = 1 - \mathbb{P}(T_{1} \cap T_{2}) = 1 - 0.6 = 0.4
$$
$$
\mathbb{P}(\text{Fails both tests}) = \mathbb{P}(T_{1}^c \cap T_{2}^c) = \mathbb{P}((T_{1} \cup T_{2})^c) = 1 - \mathbb{P}(T_{1} \cup T_{2}) = 1-0.9=0.10
$$
$$
\begin{align}
\mathbb{P}(\text{Passes only one test}) = \mathbb{P}(T_{1} \Delta T_{2}) & = \mathbb{P}((T_{1}\cap T_{2}^c) \cup(T_{1}^c \cap T_{2})) \\
& = (\mathbb{P}(T_{1})-\mathbb{P}(T_{1}\cap T_{2}))+(\mathbb{P}(T_{2})-\mathbb{P}(T_{1} \cap T_{2})) \\
& = 0.8 - 0.6 + 0.7 -0.6  \\
& = 0.3
\end{align}
$$
> 3. Suppose that $\mathbb{P}(A)=0.85$ and $\mathbb{P}(B)=0.75$, show that: $\mathbb{P}(A \cap B) \geq 0.60$. This is known as the [Bonferroni Inequality](https://mathmonks.com/inequalities/bonferroni-inequality)

$$
\begin{align}
\mathbb{P}(A \cap B) & = \mathbb{P}[(A^c \cup B^c)^c] \\
& = 1- \mathbb{P}(A^c \cup B^c) \\
& \geq 1 - [\mathbb{P}(A^c)+\mathbb{P}(B^c)] \quad \text{per Boole's Inequality} \\
& = 1 - [(1-\mathbb{P}(A))+(1-\mathbb{P}(B))] \\
& = 1-0.4 = 0.6
\end{align}
$$
[[(02) Probability Functions|Boole's Inequality]]


## Uniform Probability on Finite Spaces 

> When there are finitely many outcomes and they are all equally as likely then we can calculate the probability of an event $A \in \Omega$ such that:

$$
\mathbb{P}(A) = \frac{\text{number of elements in A}}{\text{number of elements in $\Omega$}}
$$
Eg. What is the probability of flipping three heads in a row?

$$
|\Omega| = 2^3=8 \quad \therefore \quad \mathbb{P}(\{ \text{HHH} \}) = \frac{1}{8}
$$
## The Multiplicative Principle

> If a random experiment has $k$ steps, and step 1 has $n_{1}$ possible outcomes, and step $k$ has $n_{k}$ possible outcomes, then the total number of outcomes is given by: (assuming independence)

$$
\prod_{i=1}^kn_{i} = n_{1} \cdot n_{2} \cdots n_{k}
$$
Eg. What is the the probability of drawing 5 cards in a row that are all clubs?
$$
\text{A quarter of a deck are clubs} \quad \therefore \quad \mathbb{P}(\text{Draw 5 clubs in a row}) = \frac{1}{4} \cdot \frac{1}{4} \cdot \frac{1}{4} \cdot \frac{1}{4} \cdot \frac{1}{4} = \frac{1}{1024}
$$
## Combinations
> A *combination* of size $m$ is a subset of $m$ items from a set of size $n$ where necessarily $m\leq n$.


> [!Theorem] Binomial Coefficient Formula
> The number of combinations, namely the number of subsets of size $m$ from a set of size $n$ such that $m\leq n$ is given by:
>$$
> \begin{pmatrix}
> n  \\
> m
> \end{pmatrix}
>= {}_nC_m = \frac{n!}{m!(n-m)!}
>$$
>


## Permutations

>A permutation is an arrangement of a set's elements in a specific order, that is permutation is unique. The number of permutations for a set of size $n$ is given by $n!$

For example, there are 720 different ways to arrange the letters $ABCDEF$, for in this case the set has a size of 6, hence $6! = 720$.


> [!Question] But what about duplication?
> When a set contains duplicates, naturally this decreases the number of permutations of that set, as two identical elements can be swapped to yield the same result. To account for this, we **remove the factor of duplication by dividing by the number of duplicate permutations.** Namely, for a set of size $n$ with $m$ duplicates of one item in $n$, the number of permutations is then given by:
>$$ \frac{n!}{m!}$$
>Now if it had more than one duplicated item we again would just divide by the number of duplicate permutations.


For example, the string `"pepper"` can be arranged in 60 different ways:
$$
6! \cdot \frac{1}{3!} \cdot \frac{1}{2!} = 60
$$
## Conditional Probability

> Conditional probability occurs when partial information is known about an otherwise still unknown event. That is, there is an event of interest, and a conditioning event that tells us something about the event of interest.


> [!Theorem] Conditional Probability
> The probability of event $A$ conditional on event $B$ is:
>$$
> \mathbb{P}(A | B)
>$$
>Let $A,B \subseteq \Omega$, $\mathbb{P}(B) > 0$, then:
>$$
>\mathbb{P}(A | B) = \frac{\mathbb{P}(A \cap B)}{\mathbb{P}(B)}
>$$

### A Useful Result
$$
\begin{align}
\mathbb{P}(A | B) + & \mathbb{P}(A^c | B) = 1 \\
& \therefore \\
 \mathbb{P}(A^c | B) &= 1 - \mathbb{P}(A | B)
\end{align}
$$
