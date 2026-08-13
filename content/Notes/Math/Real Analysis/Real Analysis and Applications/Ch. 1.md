#math #analysis 

# Review

## Calculus

> [!theorem]- The Mean Value Theorem
> If a function is continuously differentiable on $(a, b)$ then the secant line through the endpoints is parallel to the tangent line at some interior point $c$ such that:
>$$
> f'(c)= \frac{{f(b)-f(a)}}{b-a}
>$$
> ![[Pasted image 20260728123155.png]]



> [!theorem]- The Fundamental Theorem of Calculus 
> If $f(x)$ is continuous over an interval $(a, b)$ and the function $F(x)$ is defined by
>$$
> F(x) = \int_{a}^x f(t) dt
>$$
>then $F'(x)=f(x)$ over $(a, b)$.


## Linear Algebra


> [!theorem]- Linear Independence 
> A subset $S$ of a vector space $V$ is linearly independent if whenever $v_{1}, v_{2}, \cdots, v_{k} \in V$ and scalars $r_{1}, r_{2}, \cdots, r_{k} \in \mathbb{R}$ satisfy
>$$
> r_{1}v_{1}+r_{2}v_{2}+\cdots + r_{k}v_{k}= 0 
>$$
>it implies that $r_{1}=r_{2}=\cdots=r_{k}=0$. That is, only the trivial solution holds. 


> [!theorem]- Basis
> $B = \{ v_{1}, v_{2}, \cdots, v_{k} \}$ is a **basis** for a vector space $V$ when every element of $V$ can be written uniquely as a finite linear combination of the elements of $B$.
>
>Note that if $V$ is a vector space with finitely many elements, then every basis for $V$ has the same finite number of elements, called the dimension of $V$ and denoted $\text{dim}V$.



> [!theorem]- Linear Transformation
> A linear transformation $A$ from vector space $V$ to $W$ is a function $A: V \to W$ satisfying
>$$
> A(r_{1}v_{1}+r_{2}v_{2})=r_{1}Av_{1}+r_{2}Av_{2} 
>$$


> [!theorem]- Kernel, Range, and Rank 
> The **kernel** of a linear transformation $A \in L(V, W)$ where $L(V, W)$ is the set of all linear transformation from $V$ to $W$ is defined $\text{ker}A=\{ v\in V : Av=0 \}$.
> 
> The **range** of $A$ is defined $\text{ran}A=\{ Av : v \in V \}$.
> 
> The **rank** of $A$ is defined $\text{rank}A= \text{dim ran}A$
> 
> Namely, putting this all together we get
>$$
> \begin{align}
> \text{dim ker}A + \text{rank}A & =\text{dim}V \\
> \text{dim ker}A + \text{dim ran}A  & = \text{dim} V
> \end{align}
>$$
>

> [!theorem]- Invertibility 
> For $A \in L(V)$ where $V$ is finite, 
>$$
> \text{A is invertible} \iff \text{A is one-to-one and onto} 
>$$
> Wherein , $A$ is one-to-one if it is *injective*, namely every element in it's range is mapped to by **at most** one element in the domain. 
> 
> $A$ is onto if it is *surjective*, namely every element in it's range is mapped to by **at least** one element in the domain.
> 
> If $A$ is both *injective* and *surjective* then $A$ is *bijective* and invertible. That is, every element in the domain maps to an element in the range, and every element in the range is mapped to by an element in the domain. 
> ![[Pasted image 20260728134722.png]]
> 
> More rigorously, $A$ is one-to-one if $\text{ker}A= \{ 0 \}$. We can prove this by contradiction, because if the kernel of $A$ contained some vector $v$ not equal to zero, then both $Av=0$ and $A\cdot 0 = 0$. Hence, $v$ and the zero-vector would both map to the same output, and $A$ would not be injective. 
> 
> $A$ is onto if $\text{ran}A=V$. We can also prove this by contradiction, because if the range of $A$ is not $V$ then there exists an element in $V$ that is not mapped to by anything. Thus, $A$ cannot be surjective. 


## Equivalence Relations
> A relation denoted $R$ or $\sim$ is an **equivalence relation** if it is:
> 1. Reflexive: $xRx \quad \forall x \in X$
> 2. Symmetric: $xRy \iff yRx \quad \forall x,y \in X$
> 3. Transitive: $xRy \land yRz \implies xRz \quad \forall x,y,z \in X$





