#stats #math #stat302 

# Conditional and Bayesian Probability

Recall the definition of probability from [[content/Notes/Statistics/Introduction to Probability/Lecture 3|Lecture 3]].

## The Multiplication Property

> [!Theorem] The Multiplication Property
> if $$\mathbb{P}(A_{1}>0)$$then, $$\mathbb{P}(A_{1}\cap A_{2})=\mathbb{P}(A_{2}|A_{1})\cdot \mathbb{P}(A_{1})$$


> [!Tip] Corollary
> The multiplication property can be expanded, such that if The multiplication property can be expanded, such that if $$\begin{aligned}
\mathbb{P}(A_1 \cap A_2 \cap \cdots \cap A_n)
  &= \mathbb{P}(A_n \mid A_1 \cap \cdots \cap A_{n-1}) \\
  &\quad \times\, \mathbb{P}(A_{n-1} \mid A_1 \cap \cdots \cap A_{n-2}) \\
  &\quad \times\, \cdots \\
  &\quad \times\, \mathbb{P}(A_3 \mid A_1 \cap A_2) \\
  &\quad \times\, \mathbb{P}(A_2 \mid A_1) \\
  &\quad \times\, \mathbb{P}(A_1)
\end{aligned}$$
> 

An informal proof of this fact can be accomplished rather easily using the formula for the conditional probability of $\mathbb{P}(A_{1}|A_{2})$.

## Partitions and Total Probability

> We can say that $B_{1}, B_{2}, \cdots B_{n}$ is a *partition* of $\Omega$ if $\forall B_{i}B_{j} \in \Omega$, they are disjoint. Namely, for $i\neq j$:
> 
> $$
> B_{i} \cap B_{j} = \emptyset
> $$
> **And**, if they cover the whole sample space, such that:
> $$
> \bigcup_{i=1}^nB_{i}=\Omega
> $$

For example, a simple partition could be any event $A$ and it's complement $A^c$.


> [!Theorem] Total Probability
> if $B_{1}, B_{2}, \cdots B_{n}$ is a *partition* of $\Omega$, then $\forall A \subseteq \Omega$:
> $$
> \mathbb{P}(A)=\sum_{i=1}^n\mathbb{P}(A|B_{i})\mathbb{P}(B_{i})
> $$

Because $B$ is a partition of the sample space, this too includes the complement of $B$ such that:
$$
\mathbb{P}(A)=\mathbb{P}(A|B)\mathbb{P}(B) + \mathbb{P}(A|B^c)\mathbb{P}(B^c)
$$
### A Proof of Total Probability
$$
A = A \cap \Omega \iff A \cap \bigg(\bigcup_{i=1}^nB_{i}\bigg) \iff \bigcup_{i=1}^n(A \cap B_{i})
$$
$A \cap B_{i}$ are disjoint, hence:
$$
\begin{align}
\mathbb{P}(A) & = \mathbb{P}\left(  \bigcup_{i=1}^nA \cap B_{i}\right) \\
& = \sum_{i=1}^n \mathbb{P}(A\cap B_{i}) \\
& = \sum_{i=1}^n \mathbb{P}(A|B_{i})\mathbb{P}(B_{i})
\end{align}
$$
## Bayes' Theorem
- Bayes's Theorem allows us to relate the conditional probabilities $\mathbb{P}(A|B)$ and $\mathbb{P}(B|A)$

> [!Theorem] Bayes' Theorem
> Let $A$ and $B$ be arbitrary sets with $\mathbb{P}(A)>0$, we have that:
> $$
> \mathbb{P}(B|A)=\frac{\mathbb{P}(A|B)\mathbb{P}(B)}{\mathbb{P}(A)}
> $$

We can also consider $B_{1}, B_{2}, \cdots B_{n}$ as a *partition* of $\Omega$, allowing us to use:
$$
\mathbb{P}(B|A)=\frac{\mathbb{P}(A|B)\mathbb{P}(B)}{\sum_{i=1}^n \mathbb{P}(A|B_{i})\mathbb{P}(B_{i})}
$$
We can obtain Bayes' Theorem by simple using the definition of conditional probability, then applying the multiplication rule as follows:

$$
\mathbb{P}(B|A) = \frac{\mathbb{P}(A \cap B)}{\mathbb{P}(A)} = \frac{\mathbb{P}(A|B)\mathbb{P}(B)}{\mathbb{P}(A)}
$$


> [!Danger] The conditional probability fallacy
> In general, $\mathbb{P}(A|B)\neq \mathbb{P}(B|A)$ but this is often misunderstood so often to the point where evidence as a conditional probability has now been banned in some court systems.




> [!Todo] Flu Prevalence and Bayes'
> Suppose that 30% of patients test positive for the flu, but a patient with the flu only actually tests positive 90% of the time, and a patient without the flu tests negative 80% of the time. What is the probability that a patient has the flu if they test positive?

$$
\begin{align}
 A = \{ \text{patiest has flu} \} & \quad B = \{ \text{patient tests positive} \} 
\end{align}

\\
 \mathbb{P}(\text{has the flu if they test positive})=\mathbb{P}(A | B) \\
 \mathbb{P}(\text{has the flu if they test negative})=\mathbb{P}(A|B^c) \\

 
$$

We have that $\mathbb{P}(B)=0.30$, $\mathbb{P}(B | A)=0.90$, and $\mathbb{P}(B^c | A^c)$. Hence, to find the probability of a patient having the flu if they test positive we need to solve for $\mathbb{P}(A)$ as follows:
$$
\begin{align}

\mathbb{P}(B)  & = \mathbb{P}(B|A)\mathbb{P}(A) + \mathbb{P}(B|A^c)\mathbb{P}(A^c) \quad \text{using the L.T.P from above} \\
\mathbb{P}(B)&=\mathbb{P}(B|A)+(1-\mathbb{P}(B^c|A^c)(1-\mathbb{P}(A))) 
\end{align}
$$
And after solving for $\mathbb{P}(A)$ we recover $\mathbb{P}(A) = \frac{1}{7}$, now substituting this into the formula for $\mathbb{P}(A|B)$ above we see that:
$$
\mathbb{P}(A|B)=\frac{\mathbb{P}(B|A)\mathbb{P}(A)}{\mathbb{P}(B)}=\frac{0.9\left( \frac{1}{7} \right)}{0.3} \approx0.429
$$
Hence the probability that the patient has the flu if they test positive is approximately 0.429.

## The Monty Hall Problem
> This an infamous probability problem as it can be quite un-intuitive and deceptive. The problem goes like this: Suppose you are on a game show with three doors, behind one door is a brand new car, and behind the other two are goats. So you pick a door, but then the host opens one of the *remaining* two doors and the host asks if you would like to change your choice of door?

You should **switch** doors and we can prove it. First let us define our sample space.
$$
\begin{align}
D_{you} &  = \{ 1, 2, 3 \} \\
D_{car} & = \{ 1, 2, 3 \} \\
D_{host} & = \{ 1, 2, 3 \}
\end{align}
$$
For this particular example say we chose door number 1 so $D_{you}=1$. Now our sample space $\Omega$ is given by:
$$
\Omega=\{ (D_{you}, D_{car}, D_{host}) \} = \{ (1,1,2), (1, 1, 3), (1, 2, 3), (1, 3, 2) \}
$$
As the host will obviously not reveal the door with the car behind it. The probability that we will have won is given by $\mathbb{P}(D_{you}=D_{car})$:
$$
\begin{align}
\mathbb{P}(D_{you}=D_{car})=\mathbb{P}(win)=& \mathbb{P}(win | D_{host} =1)\mathbb{P}(D_{host}=1) \\ 
+& \mathbb{P}(win|D_{host}=2)\mathbb{P}(D_{host}=2) \\
+& \mathbb{P}(win | D_{host}=3)\mathbb{P}(D_{hoost}=3) \\
= & 0 + \frac{1}{3}\left( \frac{1}{2} \right) + \frac{1}{3}\left( \frac{1}{2} \right) \\
= & \frac{1}{3}
\end{align}
$$
Hence the probability of winning if we **do not** switch doors is 0.33, therefore, the probability of losing is $1-\mathbb{P}(win)=\frac{2}{3}$ and this is just $\mathbb{P}(win)$ if we did switch. 

## Independence

> [!Theorem] Independence
> We say that two events $A,B$ are **independent** if the following result holds
> 
> $$
> \mathbb{P}(A \cap B)=\mathbb{P}(A)\mathbb{P}(B)
> $$

Namely, if two events are **independent**, then we also have the following property:


> [!Tip] Corollary
> If $\mathbb{P}(B)>0$ and $A,B$ are independent, then:
> 
> $$
> \mathbb{P}(A|B)=\frac{\mathbb{P}(A \cap B)}{\mathbb{P}(B)}=\frac{\mathbb{P}(A)\mathbb{P}(B)}{\mathbb{P}(B)}=\mathbb{P}(A)
> $$

## Triviality

If some event $A$ has probability such that $0 < \mathbb{P}(A) < 1$ then $A$ is non-trivial. Moreover, if $A,B$ are both non-trivial events then:
- If $A \cap B= \emptyset$ then $A,B$ are **not** independent
- if $A \subset B$ then $A,B$ are **not** independent

We can see this is the case as:

$$
\mathbb{P}(A \mid B) = \dfrac{\mathbb{P}(A \cap B)}{\mathbb{P}(B)} = \dfrac{0}{\mathbb{P}(B)} = 0 \neq \mathbb{P}(A)
$$ 
and
$$
\mathbb{P}(A \mid B) = \dfrac{\mathbb{P}(A \cap B)}{\mathbb{P}(B)} = \dfrac{\mathbb{P}(A)}{\mathbb{P}(B)} \neq \mathbb{P}(A)
$$ 

> [!Todo] Independance
> If $A$ and $B$ are independent then are $A^c$ and $B$ also independent? Yes, namely we have that:
> $$
> \begin{align}
> \mathbb{P}(A \cap B) = \mathbb{P}(A)\mathbb{P}(B)
> \end{align}
> $$
> So,
> $$
> \begin{align}
> \mathbb{P}(A^c \cap B) & = \mathbb{P}(B) - \mathbb{P}(A \cap B) \\
>  & = \mathbb{P}(B) - \mathbb{P}(A)\mathbb{P}(B) \\
>   & = \mathbb{P}(B)(1-\mathbb{P}(A)) \\
>    & = \mathbb{P}(B)\mathbb{P}(A^c)
> \end{align}
> 
> $$
> Hence, $A^c$ and $B$ are independent too.

## More Than 2 Events
> The events $A_{1}, A_{2} \cdots$ are independent if for any finite collection $K=\{ (i_{1}, \cdots, i_{k}) \}$, we have that:

$$
\mathbb{P}\left( \bigcap_{i \in K}A_{i} \right)= \prod_{i \in K}\mathbb{P}(A_{i})
$$
For example, if $n = 3$, then $A_1$, $A_2$, and $A_3$ are independent **if and only if** all of the following hold:

$$\mathbb{P}(A_1 \cap A_2) = \mathbb{P}(A_1)\mathbb{P}(A_2),$$
$$\mathbb{P}(A_1 \cap A_3) = \mathbb{P}(A_1)\mathbb{P}(A_3),$$
$$\mathbb{P}(A_2 \cap A_3) = \mathbb{P}(A_2)\mathbb{P}(A_3),$$
$$\mathbb{P}(A_1 \cap A_2 \cap A_3) = \mathbb{P}(A_1)\mathbb{P}(A_2)\mathbb{P}(A_3).$$
Note, some events *can* be pairwise independent, but not necessarily truly independent. For example, if $A$ denotes a first coin flip being heads, $B$ denotes the second flip being heads, and $C$ denotes the flips showing the same result, then the events are pairwise independent but not independent overall.