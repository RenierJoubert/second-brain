#math 


> [!question]-  1.) Let G be finite. In its Cayley table, prove that every element appears exactly once in each row.
> Assume for contradiction that every element did not appear once in each row, and that in row $x$, the same element appears twice. Namely, that $xy = xz$. Now, $G$ is a group so $x^{-1}$ exists and we see that $x^{-1}xy=x^{-1}xz$ but this yields $y=z$ which is a clear contradiction.


> [!question]- 3a.) Let $H, K \leq G$. Prove that $H \cap K$ is a subgroup of $G$. 
> $H, K$ are both groups so $e\in H \cap K$ and $H\cap K$ is not empty. Now using the subgroup criterion theorem we must prove two things:
> 1. Closure under $*$:
> Take $g, g' \in H \cap K$, then $gg' \in H$ and $gg' \in K$ because they are groups and hence they must be closed. Thus, $gg' \in H \cap K$. 
> 2. Closure under inverses:
> Take $g \in H \cap K$, then it must have an inverse in both $H$ and $K$, so $g^{-1} \in H \cap K$.
> Thus, by the subgroup criterion theorem, $H\cap K$ is a subgroup of $G$.


> [!question]- 3b.) Show by example that $H \cup K$ need not be a subgroup of $G$. 
> Take $\mathbb{Z} / 2\mathbb{Z} \times \mathbb{Z} / 2\mathbb{Z}$ as a counter example. This is the group $\{ (0,0), (1, 0), (0, 1), (1, 1) \}$, now let $K = \{ (0, 0), (1, 0) \}$ and let $H = \{ (0, 0), (0, 1) \}$. These are both subgroups but their union does not contain $(1, 0) * (0,1)=(1, 1)$ so $H \cup K$ is not a subgroup of $G$.


> [!question]- 4.) Let $H \leq G$ and for some $x \in G$ consider $x^{-1}Hx=\{ x^{-1}ax: a \in H \}$. Prove that $x^{-1}Hx \leq G$.
> $x^{-1}Hx$ is non empty because $x^{-1}ex  = e\in x^{-1}Hx$. Consider some $x^{-1}h_{1}x \in x^{-1}Hx$ and some  $x^{-1}h_{2}x \in x^{-1}Hx$. Combining these two elements yields $x^{-1}h_{1}xx^{-1}h_{2}x = x^{-1}h_{1}h_{2}x$ which is in $x^{-1}Hx$ because $H$ is a group so $h_{1}h_{2} \in H$. Hence $x^{-1}Hx$ is closed under its operation. Also, because $H$ is a group we have that $h^{-1} \in H$, so $x^{-1}hx * x^{-1}h^{-1}x=e$ and $x^{-1}Hx$ is closed under inverses. Thus by the subgroup criterion it is a subgroup of $G$.



