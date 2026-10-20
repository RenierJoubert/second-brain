#math 

We are familiar with the basic number systems: $\mathbb{Z}, \mathbb N, \mathbb N_{0}$ and their ordering. Moreover, we also understand how addition is associative, commutative, and that 0 is the additive identity. Further, how multiplication is associative, commutative,  and that 1 is the multiplicative identity. But, another fundamental property we need to take as an axiom is as follows.

## The Well-Ordering Principle
> Every non-empty subset of the natural numbers has a least element.

Corollary: Let $A \subset \mathbb{Z}$ be non-empty and $k \in \mathbb{Z}$
- if $k \leq a \quad \forall a \in A$ then $A$ has a least element 
- if $k \geq a \quad \forall a \in A$ then $A$ has a maximal element

What's particularly interesting is that the well-ordering principle is equivalent to the principle of mathematical induction and this can be proven. 

## Induction $\iff$ Well-Ordering

$(\implies)$ Assume the hypothesis of induction such that $P(1)$ and $P(k) \implies P(k +1)$ is true. I want to show that $P(n)$ is true for all $n \in \mathbb N$. So, lets take all bad values where $P(n)$ is not true and put them in some set $B=\{ n \in \mathbb N : \sim P(n) \}$. Now, if $B$ is non-empty then the well ordering principle of the natural numbers implies that it has a least element $k$, hence $k-1 \not\in B$. But this yields that $\sim P(k) \land P(k-1)$ and contradicts the inductive hypothesis. So $B$ must be empty. The reverse direction is ELFS.

## Fields
> A field $F$ is an algebraic object with the following properties

- Associativity: $x+(y+z)=(x+y)+z$ and $x(yz)=(xy)z$
- Commutativity: $x+y = y +x$ and $xy=yx$
- Distributive: $x(y+z)=xy+xz$
- Identity: $x + 0 = x$ and $x \cdot 1 = x$
- Inverse: $x + (-x) = 0$ and $x \cdot \frac{1}{x}  = 1 \quad x \neq 0$
- Closure: $x+y \in F$ and $xy \in F$

## Ordered Fields
> An ordered field $F$ is a field with an ordering that grants it the following additional properties. $\mathbb Q$ is an ordered field. 

- Trichotomy: For any two elements $x,y \in F$ exactly one of the following must be true: $x< y\quad x = y \quad y<x$
- Transitive: $(x < y) \land (y < z) \implies (x < z)$
- Order and addition: $(x < y) \implies (x +z < y + z)$
- Order and multiplication: $(0 < x) \land (0 <y) \implies (0 < xy)$

