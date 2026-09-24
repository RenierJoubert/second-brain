#math 

## Supremum
The supremum of a set $A$ is the least upper bound of that set. Namely, $x=\text{sup(A)}$ if $x\geq a$ for all $a \in A$, and $x\leq y$ for every upper bound $y$.

## Infimum
The infimum of a set $A$ is the greatest lower bound of that set. Namely $x=\text{inf(A)}$ if $x\leq a$ for all $a \in A$, and $x\geq y$ for every lower bound $y$.

## Least Upper Bound Property
The least upper bound property states that for a set $A$, if it is non-empty and bounded above, then it's supremum exists.

## Greatest Lower Bound Property
The greatest lower bound property states that if a set $A$ is non-empty and bounded below, then it's infimum exists. 

## Archimedean property of  $\mathbb Q$
Given any two rational (or real) numbers $x> 0$ and $y>0$, you can always find a natural number $n\in \mathbb N$ such that $nx >y$.


> [!theorem]- Proof of the Archimedean property for the rationals 
> Let $x =\frac{a}{b}$ and $y=\frac{c}{d}$ where $a,b,c,d>0$. It follows that $c\geq \frac{c}{d}$ and  $c\leq ac= \frac{a}{b} \cdot bc$. Combining these we get that:
>$$
> 	\frac{a}{b} \cdot bc \geq c \geq \frac{c}{d} = y
>$$
>So:
>$$
>	x \cdot bc \geq y
>$$
>Therefore let $n=bc+1$ and we are done. 

## Archimedean property of $\mathbb R$
For any $x>0$ the set $S = \{ nx :n\in \mathbb N \}$ is not bounded above. Consequently, for all $y>0$, there exists $n\in\mathbb N$ s.t. $nx>y$.


> [!theorem]- Proof of the Archimedean property for the reals 
> If $S$ were bounded above then there exists some $u$ such that $u=\text{sup(S)}$ and that $u\geq nx$ for all $nx \in S$. Since $x>0$ we know that $u-x$ is not an upper bound and $u>u-x$. Hence there exists some $nx$ s.t. $nx>u-x$ but this proves that $(n+1)x>u$ so $u$ is not an upper bound.  


## Density of the rationals in $\mathbb Q$
For any $x,y \in \mathbb Q$ s.t. $x<y$ there exists some $z\in \mathbb Q$ such that $x<z<y$. 

> [!theorem]- Proof of the density of the rationals 
>  If $x<y$ then $2x < x+y$ and $x+y < 2y$. If we let $z = \frac{{x+y}}{2}$ we are done, as the rationals are closed under addition and multiplication, and this yields $x<z<y$.


## Triangle Inequality
Let $x,y \in \mathbb{R}$, then $|x+y| \leq |x| + |y|$. Likewise, $|x-y|\geq |x| -|y|$.