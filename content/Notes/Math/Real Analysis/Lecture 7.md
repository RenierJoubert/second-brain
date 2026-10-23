#math 



> [!quote] Cleveland!! 
> "If a group of you stick together, and some of you go to Cleveland, you all go to Cleveland"

Ie, if $(x_{n})$ is Cauchy and $(x_{n_{k}})\to L$ then $x_{n}\to L$.

## Open Intervals Are Not Complete
Take the interval $(a, b)$ and $x_{n}=a+\frac{1}{n}$. Then $x_{n} \in (a, b)$ (once $\frac{1}{n} < b-a$; drop the first few terms) but $x_{n} \to a$ but $a \not\in (a, b)$.

## A Cauchy Sequence is Eventually Constant in a Finite Set

## Closed Sets Are Complete
Let $A = [a,b]$ and $(x_{n})\in A$ be Cauchy. Then, we know $(x_{n})$ converges because $\mathbb{R}$ is complete, so $x_{n} \to \alpha$. We need to show that $\alpha \in A$.

Assume $\alpha \in A^c$, then $(\alpha -r, \alpha +r) \subseteq A^c$ because $A^c$ is open. Let $\varepsilon = r$ then $|x_{n}-\alpha|<r$ but this means that $x_{n} \in (\alpha -r, \alpha+r)$  for all $n\geq N$. This contradicts that $x_{n} \in A$.


> [!summary] Closed Sets Contain Their Limits 
> TFAE: $A \subseteq \mathbb{R}$
> 1.  $A$ is closed
> 2. $A$ contains all of its limit points (for every convergent sequence in $A$, its limit is also in $A$.) eg $A$ is complete

To prove $2 \implies 1$ we can prove that $A^c$ is open. Let $y \in A^c$, we need to show there exists $r>0$ s.t. $(y-r, y+r) \subseteq A^c$. We can use the Least Upper Bound Property to show this. Let $\alpha = \text{sup}(x \in A : x < y)$ and $\beta = \text{inf}(x \in A: x >y)$ and assume these are non-empty. Now, claim that $(\alpha, \beta) \subseteq A^c$ and contains $y$. So, $\alpha \leq y \leq \beta$. (FINISH LATER)

## The Reals are Complete
> The set of real numbers is complete, such that any Cauchy sequence in $\mathbb{R}$ converges to some limit in $\mathbb{R}$.


> [!theorem]- Proof 
> Let $(a_{n})$ be a Cauchy sequence in $\mathbb{R}$, then we know that it must be bounded as Cauchy sequences are bounded. From B-W we know that bounded sequences have convergent subsequences. Finally, we proved in HW 4 that if a Cauchy sequence's subsequence converges, then the full sequence must converge.
> 

## Cauchy Criterion For Sequences
> A sequence of real numbers converges if and only if it is Cauchy.


## Closed and Bounded Sets are Nice
> TFAE: $A \subseteq \mathbb{R}$
> 1. $A$ is closed and bounded
> 2. Every sequence $(x_{n})$ contained in $A$ has a subsequence $(x_{n_{k}})$ that converges to a point $a$ in $A$.


> [!theorem]- Proof 
> $1 \implies 2$. Assume $A$ is closed and bounded, by B-W a bounded set has a convergent subsequence s.t. $(x_{n_{k}})\to a$. $A$ is closed so it contains its limit points, hence $a \in A$.
> $2 \implies 1$ LOOK AT HW 4

![[Pasted image 20261018234830.png]]








