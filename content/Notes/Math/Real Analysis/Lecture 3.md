#math 

## Triangle Inequality
> [[content/Notes/Math/Real Analysis/Definitions and Theorems|Definitions and Theorems]]

## Archimedean Property of the Real Numbers
> [[content/Notes/Math/Real Analysis/Definitions and Theorems|Definitions and Theorems]]

Corollary: TFAE
- (a) $\forall x, y > 0, \exists n \in \mathbb N$ s.t. $nx >y$
- (b) $\forall x > 0, \exists n \in \mathbb N$ s.t. $n > x$
- (c) $\forall x >0,\exists n \in \mathbb N$ s.t. $\frac{1}{n} < x$

## $\mathbb Q$ is dense in $\mathbb{R}$
> [[content/Notes/Math/Real Analysis/Definitions and Theorems|Definitions and Theorems]]

## Dense
>A set $A$ is dense in $\mathbb{R}$ if for any $x,y \in \mathbb{R}$ s.t. $x<y$, $\exists a \in A$ s.t. $x<a<y$.
## ELFS 
> Show that a set is dense if and only if for all $x \in \mathbb{R}$, $\varepsilon > 0, \exists a \in A$ s.t. $|x -a| < \varepsilon$.

## ELFS
> Show that the irrationals are dense in $\mathbb{R}$.

## Closed and Open Intervals

- The closed interval $[a,b]=\{ x : a \leq x \leq b \}$
- The open interval $(a, b)=\{ x : a < x < b \}$
## The Nested Interval Property
If the sequence of intervals $(I_{n})$ is nested s.t. $I_{n} \subseteq I_{n-1} \subseteq \cdots \subseteq I_{1}$ and $|I_{n}| \to 0$ s.t. $\forall \varepsilon>0, \exists N \in \mathbb N s.t. \forall n \geq \mathbb N, |I_{n}|=|b_{n}-a_{n}|< \varepsilon$. Then, the intersection of all of of them: $\bigcap_{n=1}^{\infty}I_{n}$ contains exactly one real number.

The proof for this relies on proving both existence and uniqueness. Firstly, observe that for the sequence of intervals $I_{n}=[a_{n}, b_{n}]$ we have that $a_{k} \leq b_{\ell}$ because the intervals are nested. Now, consider $A = \{ a_{n}:n \in \mathbb N \}$ this set is bounded above by $b_{1}$ and non-empty so the LUB implies the supremum exists and $\text{Sup}(A)=\alpha$ s.t. $a_{n}\leq \alpha, \forall n \in \mathbb{N}$. Furthermore, because $\alpha$ is the supremum we can take any $x < \alpha$ and find an $x < a_{k}$ so $\alpha \leq b_{n}$ for all $n$. 

This gives $a_{n}\leq \alpha \leq b_{n}$ for all $n$ so $\alpha \in \bigcap_{n}^{\infty}I_{n}$. Now to prove uniqueness, suppose if there was some distinct real number $\beta \in \bigcap_{n}^{\infty}I_{n}$ with $\alpha < \beta$, then $b_{n} - a_{n} > \beta - \alpha$. But this contradicts the assumption that $|b_{k}-a_{k}|< \varepsilon$ because we can pick $\varepsilon = \beta - \alpha$.


> [!danger] Open vs. Closed 
> Here our intervals need to be closed for this to work, because if they were open then the infinite intersection would be empty.
> 


