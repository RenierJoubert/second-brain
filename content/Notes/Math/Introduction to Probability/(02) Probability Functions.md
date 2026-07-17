#stats #math #math302

# Probability Functions

First, recall the definitions of a sample space and event, namely:
> The set of all possible outcomes is the **sample space** and denoted $\Omega$
> 
> A subset of the sample space is an **event** and denoted with $\omega$

A **probability function** is function computed on events $A \in \beta$ s.t.
$$
\mathbb{P}: \beta \to [0, 1]
$$
Where $\beta$ is a collection of events.

## Axioms

1. $\mathbb{P}(\Omega)=1$
2. $\mathbb{P}(\emptyset) = 0$
3. $\mathbb{P}(A) \geq 0 \quad \forall A \in \beta$
4. if $\{ A_{n} \}_{n\geq_{1}}$ is a sequence of *disjoint* events then:

$$
\mathbb{P}\left( \bigcup_{n=1}^\infty A_{n}\right) = \sum_{n=1}^\infty \mathbb{P}(A_{n})
$$
Formally, a sequence of events is disjoint when:
$$
A_{i} \cap A_{j} = \emptyset \quad \text{if} \quad i \neq j
$$


> [!Danger] Disjoint vs Independent
> Disjointedness and independence are two fundamentally different concepts and are not the same thing. Disjointedness implies a sequence of events are mutually exclusive, but independence implies one event happening or not happening has no impact on the probability of the other happening or not happening.

## Properties

1. Complement: $\quad\mathbb{P}(A^c) = 1 - \mathbb{P}(A)$
2. Monotonicity: $\quad A \subset B \implies \mathbb{P}(A) \leq \mathbb{P}(B)$
3. Union when not necessarily disjoint: $\quad \mathbb{P}(A \cup B) = \mathbb{P}(A) + \mathbb{P}(B) - \mathbb{P}(A \cap B)$
4. Boole's inequality: $\quad \mathbb{P}\left( \bigcup_{i=1}^m A_{i} \right)\leq \sum_{i=1}^m \mathbb{P}(A_{i})$

## Some Proofs

### Proving the Complement Property
$$
\begin{align}
\mathbb{P}(A \cup A^c) & = \mathbb{P}(A)+\mathbb{P}(A^c) \\
\mathbb{P}(\Omega) & = \mathbb{P}(A)+\mathbb{P}(A^c) \\
1 & = \mathbb{P}(A) + \mathbb{P}(A^c) \\ 
\mathbb{P}(A^c) & = 1 - \mathbb{P}(A) 

\end{align}
$$

### Proving Monotonicity

First let us prove two auxiliary problems first, namely:
$$
B = (B \cap A) \cup (B \cap A^c)
$$
As we can see that:
$$
\begin{align}
B & = (B \cap A) \cup (B \cap A^c) \\
B & = B \cap (A \cup A^c) \\
B & = B \cap \Omega \\
B & = B
\end{align}
$$
Moreover, we can trivially prove that:
$$
A \subset B \implies A \cap B = A
$$
Now, to show that $A \subset B \implies \mathbb{P}(A) \leq \mathbb{P}(B)$ we can write the following:
$$
\begin{align}
\mathbb{P}(B) & = \mathbb{P}(B \cap A) + \mathbb{P}(B \cap A^c) \\
\mathbb{P}(B) & = \mathbb{P}(A) + \mathbb{P}(B \cap A^c) \\
\mathbb{P}(B \cap A^c) \geq 0 &\therefore \mathbb{P}(A) \leq \mathbb{P}(B)
\end{align}
$$
### Proving the Union Equality

Namely, we want to show that:
$$
\mathbb{P}(A \cup B) = \mathbb{P}(A) + \mathbb{P}(B) - \mathbb{P}(A \cap B)
$$
So, using $A \cup B = A \cup (B \cap A^c)$ we see that:
$$
\begin{align}
\mathbb{P}(A \cup B) & = \mathbb{P}(A \cup (B \cap A^c)) \\
& = \mathbb{P}(A) + \mathbb{P}(B \cap A^c) \\

\end{align}
$$
Now, observe that:
$$
\begin{align}
\mathbb{P}(B) & = \mathbb{P}(B \cap \Omega) \\
 & =\mathbb{P}(B \cap (A \cup A^c)) \\
 & =\mathbb{P}(B \cap A) + \mathbb{P}(B \cap A^c)
\end{align}
$$
Thus, we have that:
$$
\mathbb{P}(B \cap A^c) = \mathbb{P}(B) - \mathbb{P}(B \cap A)
$$
So substituting this into (13) we recover:
$$
\mathbb{P}(A \cup B) = \mathbb{P}(A) + \mathbb{P}(B) - \mathbb{P}(A \cap B)
$$
### Proving Boole's Inequality

We want to show that:
$$
\quad \mathbb{P}\left( \bigcup_{i=1}^m A_{i} \right)\leq \sum_{i=1}^m \mathbb{P}(A_{i})
$$
We will prove this by induction, the base cases $m=0,1$ are trivially true, however using the union equality above we can see that for $m=2$ we recover:
$$
\mathbb{P}(A_{1} \cup A_{2}) = \mathbb{P}(A_{1}) + \mathbb{P}(A_{2}) - \mathbb{P}(A_{1} \cap A_{2}) \leq \mathbb{P}(A_{1}) + \mathbb{P}(A_{2})
$$
Hence:
$$
\quad \mathbb{P}\left( \bigcup_{i=1}^2A_{i} \right)\leq \sum_{i=1}^2 \mathbb{P}(A_{i}),
$$
holds.

For our inductive hypothesis assume that for all $m$ we have that:
$$
\quad \mathbb{P}\left( \bigcup_{i=1}^m A_{i} \right)\leq \sum_{i=1}^m \mathbb{P}(A_{i})
$$
Now, we will show that this also holds for $m+1$:
$$
\begin{align}
\quad \mathbb{P}\left( \bigcup_{i=1}^{m+1} A_{i} \right)& \leq \sum_{i=1}^{m+1} \mathbb{P}(A_{i}) \\
\quad \mathbb{P}\left( \bigcup_{i=1}^{m} A_{i} \cup A_{m+1} \right) & \leq \sum_{i=1}^{m} \mathbb{P}(A_{i}) + \mathbb{P}(A_{m+1})\\ 
\quad \mathbb{P}\left( \bigcup_{i=1}^{m} A_{i} \right) + \mathbb{P}(A_{m+1})& \leq \sum_{i=1}^{m} \mathbb{P}(A_{i}) + \mathbb{P}(A_{m+1})
\end{align}
$$
Now subtracting $\mathbb{P}(A_{m+1})$ from both sides we recover:
$$
\quad \mathbb{P}\left( \bigcup_{i=1}^m A_{i} \right)\leq \sum_{i=1}^m \mathbb{P}(A_{i})
$$
Which holds as per the inductive hypothesis.