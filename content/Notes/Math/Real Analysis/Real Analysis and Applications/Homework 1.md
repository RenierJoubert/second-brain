#math 

# Review

> [!question]- Negate "for all $x$, there exists $y$ such that $x>y$"
>$$
> \forall x, \exists \quad y \quad \text{s.t.} x >y 
>$$


> [!question]- Write down the contrapositive and converse of: "If $x > 1$ then $x^2 > x$" 
>$$
> \text{Contrapositive:} \quad x^2 \leq x \implies x \leq 1
>$$
>$$
>\text{Converse:} \quad x^2 > x \implies x< 1
>$$


> [!question]- Define $\sim$ on $\mathbb Z$ by $x \sim y$ if $x-y$ is even. Prove this is an equivalence relation, and that if $x \in\mathbb X$ then $x \sim x^2$.
> To prove this is an equivalence I will show three things:
>
>1. The relation is reflexive such that $x \sim x$
>2. The relation is symmetric such that $x \sim y \implies y \sim x$
>3. The relation is transitive such that $x \sim y \land y \sim z \implies x \sim z$
>
>Reflexivity: $x-x=0$ and $0=2n$ for $n= 0$. So $x$ is reflexive as the relation holds with itself.
>
>Symmetry: Assume $x-y=2n$ for some $n \in \mathbb Z$. Then, $y-x=-2n$ which is still even. Hence $y\sim x$ and the relation is symmetric.
>
> Transitivity: Assume $x\sim y \land y sim z$. This means $x - y = 2n_{1}$ and $y - z =2n_{2}$ for $n_{1},n_{2} \in \mathbb Z$. Adding these equations together we obtain the following: $(x-y)+(y-z) = 2n_{1}+2n_{2}$. We can simplify this to get: $x-z=2n_{3}$. So $x\sim z$ and the relation is transitive. 
> 
> I will prove $x \sim x^2$ by cases:
> 1. Assume $x$ is even such that $x=2n$ for some $n \in\mathbb Z$. Hence, $x^2=(2n)^2=4n^2$. Then, $2n-4n^2=2(n-2n^2)$ and $(2n-n^2)\in\mathbb Z$ so their difference is even. Thus, $x \sim x^2$ holds for even $x$.
> 2. Assume $x$ is odd such that $x = 2n+1$ for some $n \in \mathbb Z$. So, $x^2=(2n+1)^2=4n^2+4n +1$. Then, $(2n+1)-(4n^2+4n+1)=2(-2n^2-n)$, and $(-2n^2-n)\in\mathbb Z$ so $2(-2n^2-n)$ is even. Thus, $x \sim x^2$ holds for odd $x$.


> [!question]- Using the product rule and induction prove that $\frac{d}{dx}x^n = nx^{n-1}$. $n$ is a positive integer and we can assume that $x^0=1$ and $\frac{d}{dx}x=1$.
> 1. Base case: Let $n=1$, then:
>$$
> \begin{align}
> \frac{d}{dx}x^1 & =1\cdot x^{1-1} \\
> 1 & =1
> \end{align}
>$$
>So for $n=1$ the base case holds.
>2. Inductive hypothesis: Assume $\frac{d}{dx}x^n=nx^{n-1}$ for all $n\geq {1}$.
>3. Inductive step: I will prove that the identity holds for $n+1$:
>$$
>	\begin{align}
>	\frac{d}{dx}x^{n+1} & =(n+1)x^{(n+1)-1} \\
>	\frac{d}{dx}(x^n \cdot x)  & = (n+1)x^n \\
>	nx^{n-1} \cdot x + x^n \cdot 1  & = (n+1)x^n \quad \text{using the chain rule and out inductive hypothetis} \\
>	nx^n+x^n & = (n+1)x^n \\
>	(n+1)x^n & =(n+1)x^n
>	\end{align}
>$$
> So the identity holds for $n+1$. Thus, by induction we have that $\frac{d}{dx}x^n=nx^{n-1}$.


> [!question]- Let $a,b$ be non-zero integers. Prove that there exists non-zero coprime integers $c,d$ s.t. $ac=bd$. 
> If $a,b$ are coprime, then let $c=b$ and $d=a$ and we are done. If $a, b$ are not coprime, then by definition they both share some common factor $g \in \mathbb Z$ s.t. $g>1$. Let $g$ be the greatest of these factors. Now, if we choose $c=\frac{b}{g}$ and $d=\frac{a}{g}$ we obtain the following:
>$$
> 	ac=a \cdot \frac{b}{g}=b \cdot \frac{a}{g} = bd
>$$
>We know that $g|b$ and $g|a$ by definition, so $c,d \in \mathbb Z$. Also, $c,d$ are coprime, because if any common factors were left after division this would contradict that $g$ is greatest, for $g \cdot e$ where $e$ is some other factor would be then be greatest. Hence there always exists non-zero coprime integers $c,d$ such that $ac=bd$.


> [!question]- Suppose there exists non-zero integers $a,b$ such that $\sqrt{ 2 }=\frac{a}{b}$. Prove that there exists non-zero coprime integers $c,d$ such that $2c^2=d^2$. 
> From the previous problem we know that there always exists non-zero coprime integers $c,d$ such that $ac=bd$. We also have that $\sqrt{ 2 }=\frac{a}{b} \iff 2b^2=a^2$. Using this we can manipulate $ac=bd$ as follows:
>$$
> 	\begin{align}
>	ac & =bd \\
>	(ac)^2  & = (bd)^2 \\
>	a^2c^2 & = b^2d^2 \\
>	2b^2c^2 & =b^2d^2 \\
>	2c^2 & =d^2 \\
>	
>	\end{align}
>$$


> [!question]- Prove that there does not exist non-zero integers $a,b$ so that $\sqrt{ 2 }=\frac{a}{b}$. 
> Proof by contradiction: Suppose that there does exist non-zero integers $a,b$ so that $\sqrt{ 2 }=\frac{a}{b}$.  From the previous problem we know that this implies the existence of non-zero coprime integers $c, d$ s.t. $2c^2 = d^2$.
> Now I will show that for all possible $d$ this yields a contradiction. Firstly if $d$ is odd then $d^2$ is odd, but the LHS is even so this is an immediate contradiciton. Secondly if $d$ is even we see the following:
>$$
> 	\begin{align}
>	2c^2 & =(2n)^2\quad \text{for} \quad n \in \mathbb Z \\
>	2c^2 & =4n^2 \\
>	c^2  & =2n^2
>	\end{align} 
>$$
>Hence, $c^2$ is even meaning $c$ must also be even. However, if $c, d$ are both even then they must share a common factor of 2, contradicting that they are coprime. Thus, there cannot exist non-zero integers $a, b$ s.t. $\sqrt{ 2 }=\frac{a}{b}$.






