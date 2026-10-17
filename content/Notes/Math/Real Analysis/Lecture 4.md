#math 

## Open vs. Closed Sets
> We say a set $\cal{U} \subseteq \mathbb{R}$ is open if for all $x \in \cal{U}, \exists r >0$ s.t. $(x-r, x+r) \subseteq \cal{U}$. Namely, if the r-ball for all $x$ is contained in $\cal{U}$ then the set $\cal{U}$ is open. On the contrary, we say a set $\cal{K} \subseteq \mathbb{R}$ is closed if it's complement $\cal{K}^c=\mathbb{R}-\cal{K}$ is open.

## Open Sets are Open Under Union
If $\{ \cal{U}_{\alpha} \}_{\alpha \in A}$ is a set of open sets in $\mathbb{R}$ then the union $\bigcup_{\alpha \in A}\cal{U}_{\alpha}$ is also open.


> [!theorem]- Proof 
> Let $x \in \bigcup_{\alpha \in A}\cal{U}_{\alpha}$ then $x \in \cal{U}_{\alpha}$ for some $\alpha \in A$. Because $\cal{U}_{\alpha}$ is open $\exists r>0$ s.t $(x-r, x+r) \subseteq \cal{U}_{\alpha}$ hence $(x-r, x+r) \subseteq \bigcup_{\alpha \in A}\cal{U}_{\alpha}$. So, by definition $\bigcup_{\alpha \in A}\cal{U}_{\alpha}$ is open.


## Closed Sets are Closed Under Intersection
If $\{ \cal{K}_{\alpha} \}_{\alpha \in A}$ is a set of close sets then $\bigcap_{\alpha \in A}\cal{K}_{\alpha}$ is closed. 


> [!theorem]- Proof 
> To prove this we can just show that $(\bigcap_{\alpha \in A}\cal{K}_{\alpha})^c$ is open. Using DeMorgan's laws this is equivalent to $\bigcup_{\alpha \in A}\cal{K}_{\alpha}^c$. Hence, $\cal{K}_{\alpha}^c$ is open and the union of open sets is open, so $(\bigcap_{\alpha \in A}\cal{K}_{\alpha})^c$ is open. 


## An Open Interval $(a, b)$ Is Open

> [!theorem]- Proof 
> Let $x \in (a, b)$ so $a< x< b$. By Archimedes we have that $\exists n_{1} \in \mathbb{N}$ 
