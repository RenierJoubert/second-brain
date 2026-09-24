#math 


> [!question]- Let $A = \{ x \in \mathbb Q : x \geq 0, x^2 < 1 \}$ Prove that $\text{sup(A)}=1$. 
> $A$ is non-empty as $x=0\in A$, namely, $x^2=0<1$. Furthermore, $A$ is bounded by $y=1$, as by the definition of $A$, if $x \in A$ then $x^2<1$, so $\sqrt{ x^2 }<\sqrt{ 1 }$, and $|x|<1$ but we have that $x\geq{0}$ so $x<1$ for all $x \in A$. Hence $y=1$ is an upper bound. By the LUB (least upper bound) property we know that $\text{sup(A)}$ exists. Now, I will prove that $y=1$ is the supremum of A. Namely, I will prove that if any upper bound is less than 1, then it fails to be an upper bound. That is, there exists some element greater that is in $A$. 
> 
> Let $z$ be any upper bound less than $y=1$ such that $z < y =1$. Then, let $x=\frac{{z+y}}{2}$. We know that $x \in \mathbb Q$ because the rationals are closed under addition and division. This obtains the following inequalities:
>$$
> 	\begin{align}
>	2z  & < z + y \\
>	z + y  & < 2y \\
>	z < x & < y
>	\end{align}
>$$
>So, if $z<y=1$ it cannot be an upper bound. Thus we can conclude $\text{sup(A)}=1$

> [!question]- Let $A$ be a non-empty set of real numbers with supremum $s=\text{sup(A)}$. If we define $B=\{ -a : a \in A \}$ prove that $\text{inf(B)}=-\text{sup(A)}$. 
> We have that $s = \text{sup(A)}$, meaning $s \geq a$ for all $a \in A$.  Hence, $-s \leq -a$ for all $a \in A$. This is equivalent to saying $-s \leq b$ for all $b \in B$. So, $-s$ is a lower bound for the set $B$. Now, to prove that $-s$ is the greatest lower bound of $B$, first take an arbitrary lower bound $w$ of $B$. Namely, such that $w \leq -a$ for all $a \in A$, and $-w \geq a$. This means though that $-w$ is an upper bound of $A$. Because $s=\text{sup}(A)$ we have that $-w\geq s$ so it follows that $w \leq -s$. Meaning that $-s$ is the greatest lower bound, and $\text{inf(B)}=-\text{sup(A)}$.

> [!question]- Suppose $A \subset \mathbb{R}$ has a maximal element. Namely, there is some $x \in A$ such that $y \leq x$ for all $y \in A$. Prove that the maximal element is the supremum.  
> Let $x \in A$ be the maximal element of $A$ such that $x \geq y$ for all $y\in A$. Necessarily, $x$ must be the supremum, because if there exists any element $z \in A$ such that $z < x$ then $z$ cannot be the supremum, as $z \ngeq y$ for all $y \in A$,for $z < x$ and $x \in A$. Hence, the maximal element $x$ must be the supremum of $A$.

> [!question]- Let $A = \{ y \in \mathbb{R}: y >0 , y^2 < 2 \}$. Prove the following: (a) prove that $A$ is non-empty and bounded above, hence the supremum exists. (b) prove that $A$ does not have a maximum. (c) let $x = \text{sup(A)}$ and prove that $x \not\in A$ and so $x^2 \geq 2$. (d) let $c \in \mathbb{R}$ so that $c>0$ and $c^2 > 2$ prove that there exists a real number $y>0$ so that $y<c$ and $y^2>2$. (e) let $x=\text{sup(A)}$ and prove that $x^2\leq 2$, conclude that $x^2=2$. 
> 
> (a)
> $A$ is non-empty as $y=1$ is clearly an element of $A$. $A$ is also bounded above as $y=2$ cannot be in $A$ given $y^2=2^2=4 > 2$, so $y < 2$ for all $y \in A$ and 2 is an upper bound of $A.$ By the LUB property this implies that the supremum of $A$ exists.
> 
> (b)
> $A$ does not have a maximum, because for any $a \in A$ we can take $b = a + \frac{1}{n}$ for some $n \in \mathbb N$ so that $b >a$. Where $n$ is chosen as follows:
>$$
>	\begin{align}
>	\left( a+\frac{1}{n} \right)^2  & < 2 \\
>	a^2 + \frac{2a}{n} + \frac{1}{n^2}  & <2 \\
>	a^2 + \frac{2a}{n} + \frac{1}{n} & < 2 \quad \left( \frac{1}{n^2} \leq \frac{1}{n} \right) \\
>	n  & > \frac{{2a+1}}{(2-a^2)}
>	\end{align}
>$$
>And by the Archimedean property of the real numbers we know that this $n\in \mathbb N$ exists, and so for such an $n$ we have that $b^2 = (a+\frac{1}{n})^2 < 2$. Hence, $b\in A$ and for any $a \in A$ we can always find some larger $b \in A$ so $A$ cannot have a maximal element.
>
>(c)
>In (b) I proved that $A$ can have no maximal element, this means that there cannot exist some $x \in A$ such that $x \geq y$ for all $y \in A$, therefore the supremum of $A$ cannot be in $A$. So, if $x = \text{sup(A)}$ then $x \not\in A$, meaning $x^2 \not< 2$ and $x^2 \geq2$.
>
>(d)
>Let $y = c - \frac{1}{n}$ for some $n \in \mathbb N$. $y^2 > 2$ then holds for the following $n$:
>$$
>	\begin{align}
>	\left( c-\frac{1}{n} \right)^2  & > 2 \\
>	c^2 - \frac{2c}{n}+\frac{1}{n^2}  & > 2 \\
>	c^2 - \frac{2c}{n}  & > 2 \quad \left( c^2-\frac{2c}{n}+\frac{1}{n^2} > c^2 - \frac{2c}{n} \right) \\
>	n & > \frac{{2c}}{c^2-2}.
>	\end{align}
>$$
> Such an $n\in \mathbb N$ exists as per the Archimedean property of the real numbers, and if we choose such an $n$ then $y=c-\frac{1}{n}< c$ and $y^2>2$.
> 
> (e)
> If $x^2>2$ then from part (d) I proved that this implies the existence of some $y<x$ such that $y^2>2$.Hence, if $x^2>2$ then $x$ cannot be the supremum of $A$. So, if $x=\text{sup(A)}$ then $x^2 \leq 2$. Additionally, from part (c) I proved that if $x=\text{sup(A)}$ then $x^2\geq {2}$. These inequalities both hold only for $x^2 = 2$. 

> [!question]- Let $A, B \subset \mathbb{R}$ and suppose that $A, B$ are bounded above. Define $A+B = \{ a+b : a \in A, b \in B \}$. (a) prove that $A+B$ is bounded above and $\text{sup(A+B)}=\text{sup(A)}+\text{sup(B)}$, and (b) explain what additional assumption is needed in order to discuss $A-B$.
> (a)
> $A$ is bounded so the LUB property implies that $\text{sup(A)}$ exists. The same follows for $\text{sup(B)}$. Let $x=\text{sup(A)}$ s.t. $x \geq a$ for all $a \in A$. Let $y = \text{ sup(B)}$ s.t. $y\geq b$ for all $b \in B$. Combining these inequalities we obtain $a+b \leq x+y$ for all $a \in A$, $b\in B$. Hence $a+b \leq \text{sup(A)}+\text{sup(B)}$ and $\text{sup(A)}+\text{sup(B)}$ by definition is an upper bound of the set $A+B$. Therefore, $\text{sup(A+B)}\leq \text{sup(A)}+\text{sup(B)}$. The inequality $\text{sup(A+B)}\geq \text{sup(A)}+\text{sup(B)}$ also holds, namely if we take some $\epsilon>0$  then $\text{sup(A)}-\frac{\epsilon}{2}$ is not an upper bound, similarly $\text{sup(B)}-\frac{\epsilon}{2}$ is also not an upper bound. This means there exists $a >\text{sup(A)}-\frac{\epsilon}{2}$ and $b > \text{sup(B)}-\frac{\epsilon}{2}$. This yields the following inequality: $a+b > \text{sup(A)}+\text{sup(B)}-\epsilon$. So, for any $\epsilon>0$ $\text{sup(A)}+\text{sup(B)}-\epsilon$ is not an upper bound of $A+B$, hence $\text{sup(A+B)}\geq \text{sup(A)}+\text{sup(B)}$. Both of these inequalities can only hold if $\text{sup(A+B)} = \text{sup(A)}+\text{sup(B)}$.
> 
> (b)
> For $A-B = \{ a-b : a\in A, b\in B \}$ to have a supremum $A$ must be bounded from above, and $B$ must be bounded from below. That is, a least upper bound on $-b$ is equivalent to a greatest lower bound on $b$. This is demonstrated in a prior proof. 
