#math #AbstractAlgebra


> [!question]- 1.) Find the minimum number of elements needed to generate $S_{3}$.
> Recall that $S_{3} = \{ (1), (12), (13), (23), (123), (132) \}$. We know from class that $S_{3}$ is non-abelian; therefore, it cannot be cyclic. This means that we require more than one generator.
> 
> Consider $\langle (12), (123) \rangle$. We note that $(123)^2 = (132)$. We also know that $(123) = (13)(12)$, which implies that $(123)(12) = (13)$. Lastly, we have $(123)(13) = (23)$.
> 
> This means that $\langle (12), (123) \rangle = S_{3}$. So at least two elements are needed to generate $S_{3}$.


> [!question]- 2.) Let $\alpha = (1 \ 3 \ 5 \ 7)(2 \ 6)$ in $S_{8}$. (a) Find $\alpha^{-1}$. (b) Compute $\alpha^{102}$.
> (a) By inspection we see that $(1357)^{-1} = (7531) = (1753)$. We also have that $(26)^{-1} = (26)$. These are disjoint cycles, so they commute. Therefore we can write:
>$$
> ((1357)(26))^{-1} = (1753)(26)
>$$
> (b) The LCM of the cycle lengths is 4. So $\alpha^4 = (1)$. Therefore, $\alpha^{100} = (1)$. So $\alpha^{102} = \alpha^{100}\alpha^2 = \alpha^2 = (1357)^2(26)^2 = (15)(37)$.


> [!question]- 3.) Show that the group $S_{3}$ is indecomposable, that is, that there are no non-trivial groups $G, H$ for which $S_{3} \simeq G \times H$.
> Assume $S_{3}$ is decomposable. Since it has order 6, then $G$ and $H$ must have order 2 and 3. We know that a group of prime order must be cyclic, so then $G \times H$ would be abelian. However, $S_{3}$ is not abelian, which gives a contradiction: For two elements $x, y \in S_{3}$ such that $xy \neq yx$, we have, given an isomorphism $f: S_{3} \to G \times H$:
>$$
> f(xy) = f(x)f(y) = f(y)f(x) = f(yx)
>$$
> But then since $f$ would be injective, we would have $xy = yx$. Contradiction.
