#stats #math #stat302 


# A Review of Set Theory

> The entire space of possible outcomes, *the sample space* is denoted by Omega, $\Omega$

## Set Operations

> 1. Union:
$$
A \cup B \implies (x \in A \lor x \in B )
$$
> 2. Intersection
$$
A \cap B \implies (x \in A \land x \in B)
$$

> 3. Subset
$$
\begin{align}
A & \subseteq B \implies (x \in A \implies x \in B) \\
A & \subseteq B \land B \subseteq A \iff A = B
\end{align}
$$
> 4. Difference
$$
A - B \implies \{ x \in A \land x \not\in B \}
$$
>5. Complement
$$
\begin{align}
x \in A^c & \iff x \not\in A \\
A \cup A^c & = \Omega 
\end{align}
$$
>6. Symmetric Difference (XOR)
$$
A \Delta B = (A \cap B^c) \cup (A^c \cap B)
$$
> 7. The Empty Set
$$
\emptyset
$$
## Properties of Set Operations

- Commutative
- Distributive
- Associative
- Equality

## DeMorgan's Law

$$
(A \cup B)^c = A^c \cap B^c
$$

## Power Sets
> A power set of a given set is the set containing all possible subsets of that set. In this class it is denoted $2^\Omega$ where $\Omega$ is our sample space.

## Cardinality
> $|\Omega| \quad$ Denotes the size of our sample space 

## Partitioning
> A partition of a set is a grouping of elements into non-empty disjoint subsets s.t. every element in $\Omega$ belongs to exactly one subset. 