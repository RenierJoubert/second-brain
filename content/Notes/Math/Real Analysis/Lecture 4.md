#math 

## Open vs. Closed Sets
> We say a set $\cal{U} \subseteq \mathbb{R}$ is open if for all $x \in \cal{U}, \exists r >0$ s.t. $(x-r, x+r) \subseteq \cal{U}$. Namely, if the r-ball for all $x$ is contained in $\cal{U}$ then the set $\cal{U}$ is open. On the contrary, we say a set $\cal{K} \subseteq \mathbb{R}$ is closed if its complement $\cal{K}^c=\mathbb{R}-\cal{K}$ is open.

## Open Sets are Open Under Union
If $\{ \cal{U}_{\alpha} \}_{\alpha \in A}$ is a set of open sets in $\mathbb{R}$ then the union $\bigcup_{\alpha \in A}\cal{U}_{\alpha}$ is also open.


> [!theorem]- Proof 
> Let $x \in \bigcup_{\alpha \in A}\cal{U}_{\alpha}$ then $x \in \cal{U}_{\alpha}$ for some $\alpha \in A$. Because $\cal{U}_{\alpha}$ is open $\exists r>0$ s.t $(x-r, x+r) \subseteq \cal{U}_{\alpha}$ hence $(x-r, x+r) \subseteq \bigcup_{\alpha \in A}\cal{U}_{\alpha}$. So, by definition $\bigcup_{\alpha \in A}\cal{U}_{\alpha}$ is open.


## Closed Sets are Closed Under Intersection
If $\{ \cal{K}_{\alpha} \}_{\alpha \in A}$ is a set of closed sets then $\bigcap_{\alpha \in A}\cal{K}_{\alpha}$ is closed. 


> [!theorem]- Proof 
> To prove this we can just show that $(\bigcap_{\alpha \in A}\cal{K}_{\alpha})^c$ is open. Using DeMorgan's laws this is equivalent to $\bigcup_{\alpha \in A}\cal{K}_{\alpha}^c$. Hence, $\cal{K}_{\alpha}^c$ is open and the union of open sets is open, so $(\bigcap_{\alpha \in A}\cal{K}_{\alpha})^c$ is open. 


## An Open Interval $(a, b)$ Is Open

> [!theorem]- Proof 
> Let $x \in (a, b)$ so $a< x< b$. By Archimedes we have that $\exists n_{1} \in \mathbb{N}$  s.t. $\frac{1}{n_{1}}<b-x$ and $\exists n_{2} \in \mathbb{N}$ s.t. $\frac{1}{n_{2}}<x-a$. Finally, let $r = \min\left( \frac{1}{n_{1}}, \frac{1}{n_{2}} \right)$ then $(x-r, x+r) \subseteq (a, b)$.


## A Closed Interval $[a, b]$ Is Closed

> [!theorem]- Proof 
> To prove this it suffices to show that $[a, b]^c$ is open. $[a, b]^c=(-\infty, a) \cup (b, \infty)$. The union of two open sets is open so we are done.


## Open Sets are Open Under Finite Intersections
If $\cal{U_{1}}, \cdots, \cal{U_{k}}$ are open then $\bigcap_{j=1}^k \cal{U}_{j}$ is open.


> [!theorem]- Proof 
> Let $x \in \bigcap_{j=1}^k \cal{U}_{j}$ then $x \in \cal{U}_{j}$ for each $j \in \{ 1, \cdots, k \}$. For each $j$ $\exists r_{j}$ s.t. $(x-r_{j}, x+r_{j}) \subseteq \cal{U}_{j}$. Now, let $r  = \min\{ r_{1}, \cdots, r_{k} \}>0$, then $(x-r, x+r) \subseteq \cal{U}_{j}$ for each $j$ and $(x-r,x+r) \subseteq \bigcap_{j=1}^k \cal{U}_{j}$

## ELFS
> Show that closed sets are closed under finite unions. 

## Boundedness
>TFAE:

A set $A \subseteq \mathbb{R}$ is bounded if $\exists a,b  \in \mathbb{R}$ s.t. $A  \subseteq [a, b]$.

A set $A \subseteq \mathbb{R}$ is bounded if $\exists M >0$ s.t. $A \subseteq [-M, M]$.

A set $A \subseteq \mathbb{R}$ is bounded if $\exists M > 0$ s.t. $A \subseteq (-M, M)$.

