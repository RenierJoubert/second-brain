#math 

## Rationals are dense in $\mathbb Q$
> Proof is in [[content/Notes/Math/Real Analysis/Definitions and Theorems|Definitions and Theorems]]

Corollary: There is no smallest (positive) rational number.

For any positive rational number $x$, both $0$ and $x$ are rationals so there exists some $y$ between them. So, $x$ cannot be smallest.

## Archimedean Property of $\mathbb Q$
> Definition and proof is in  [[content/Notes/Math/Real Analysis/Definitions and Theorems|Definitions and Theorems]]

## Motivating a Construction of $\mathbb R$
The issue with $\mathbb Q$ is that it has holes. For example, there exists no rational number $q$ such that $q^2=2$. This is fixed with $\mathbb{R}$ which also satisfies all of the nice properties of $\mathbb Q$ but it has no holes. We can start by thinking about a real number as an infinite decimal expansion. 

Take the sum $\pi + e$, we can roughly approximate this as being somewhere in the interval $5 <\pi+e \leq{7}$, but as we improve our approximation more and more we can make this interval progressively more fine:
$$
\pi +e\in \left[ \frac{5859}{1000}, \frac{5860}{1000} \right] \subseteq \left[ \frac{58}{10}, \frac{59}{10} \right] \subseteq [5,7]
$$

This generates a set of *nested* intervals where $I_{n} \subseteq I_{n-1} \subseteq \cdots \subseteq I_{1}$ where $\pi + e \in\bigcap_{n=1}^{\infty}I_{n}$. To make this **unique** we need this intersection to contain only 1 element. To do this we can require the interval size to approach 0 as $n\to \infty$. For example we can refine our sequences as follows:
$$
I_{n} = \left[ \frac{k}{10^n}, \frac{k+1}{10^n} \right]
$$
This set of refinements is what we call $\mathbb{R}$.

## So What Do the Reals Do?

Well, the real numbers are an ordered field, and they contain $\mathbb Q$. But, they also fill the holes of $\mathbb Q$ because of the least upper bound property. 

## LUB of $\mathbb{R}$ Upper and Least Upper Bounds / Sup and Inf
> All covered in [[content/Notes/Math/Real Analysis/Definitions and Theorems|Definitions and Theorems]]

The reals fill the holes of $\mathbb Q$ because for example take the set $A = \{ x \in \mathbb{R} : x^2 < 2 \}$. The LUB property of the real numbers states that the supremum exists, and in this case it equals $\sqrt{ 2 }$.

## The Uniqueness of the Real Numbers
> If $(X, +, \times, <)$ is any ordered field then it is indistinguishable from $(\mathbb{R}, +, \times, <)$. Namely, the real numbers are the only possible way that the rational numbers can be extended while still preserving all the structure of $\mathbb Q$ and filling all the holes. 

