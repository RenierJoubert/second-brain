#math #AbstractAlgebra


> [!question]- 2.) Let $G$ be a group and let $\text{Inn}(G)$ be the set of all automorphisms of $G$ of the form $f_{c}(a)=c^{-1}ac$ for $c \in G$. Prove $\text{Inn}(G)$ is a subgroup of $\text{Aut}(G)$.
> First, every inner automorphism $f_{c}$ is an isomorphism from $G$ to itself (bijection preserving the group operation), so $\text{Inn}(G) \subseteq \text{Aut}(G)$. We now verify the subgroup criteria for $\text{Inn}(G)$.
> 
> Non-emptiness: The identity mapping $\text{id}_{G}$ is in $\text{Inn}(G)$ because for the identity element $e \in G$ we have:
>$$
> f_{e}(a)=e^{-1}ae=a=\text{id}_{G}(a)
>$$
> Thus, $\text{Inn}(G) \neq \emptyset$.
> 
> Closure under composition and inverses: Let $f_{c}, f_{d} \in \text{Inn}(G)$ for some $c, d \in G$.
> 
> Composition: For any $a \in G$,
>$$
> \begin{align}
> (f_{c} \circ f_{d})(a) & = f_{c}(d^{-1}ad) \\
>  & = c^{-1}(d^{-1}ad)c \\
>  & = (dc)^{-1}a(dc) \\
>  & = f_{dc}(a)
> \end{align}
>$$
> Since $dc \in G$, the composition $f_{c} \circ f_{d} = f_{dc} \in \text{Inn}(G)$.
> 
> Inverses: The inverse of $f_{c}$ is $f_{c^{-1}}$, since:
>$$
> \begin{align}
> (f_{c} \circ f_{c^{-1}})(a) & = f_{c}(cac^{-1}) \\
>  & = c^{-1}(cac^{-1})c \\
>  & = a \\
>  & = \text{id}_{G}(a)
> \end{align}
>$$
> Thus, $(f_{c})^{-1} \in \text{Inn}(G)$. Therefore, $\text{Inn}(G)$ is a subgroup of $\text{Aut}(G)$.


> [!question]- 3.) Let $\alpha: G \to H$ and $\beta: H \to K$ be homomorphisms. Prove that $\text{Ker}(\beta \circ \alpha) = \alpha^{-1}(\text{Ker}(\beta))$.
> ($\subseteq$) If $x \in \text{Ker}(\beta \circ \alpha)$, then $\beta(\alpha(x)) = e_{K}$ (the identity in $K$), so $\alpha(x) \in \text{Ker}(\beta)$. Then $x \in \alpha^{-1}(\alpha(x))$, so $x \in \alpha^{-1}(\text{Ker}(\beta))$.
> 
> ($\supseteq$) If $y \in \alpha^{-1}(\text{Ker}(\beta))$, then $\alpha(y) \in \text{Ker}(\beta)$. So $\beta(\alpha(y)) = e_{K}$, implying that $y \in \text{Ker}(\beta \circ \alpha)$.


> [!question]- 4.) How many elements of $S_{5}$ have order six?
> The order of a permutation in $S_{5}$ is the lcm of the cycle lengths in its cycle decomposition. Possible cycle lengths are from 1 to 5, and the sum of all the cycle lengths in an $S_{5}$ permutation is 5 (if you include trivial cycles). Therefore, the only way to obtain an lcm of 6 is to have cycle lengths of 2 and 3.
> 
> For the 2-cycle, we have 5 choices for the first number, and 4 choices for the second number. However, for these 20 choices, since $(x \quad y) = (y \quad x)$, we should divide this by two to get 10 choices.
> 
> For the remaining 3-cycle, given elements $a, b, c$, we only have two choices, either $(a \quad b \quad c)$ or $(a \quad c \quad b)$. So in total we have 20 elements of order 6.
