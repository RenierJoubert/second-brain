#math 

# Bolzano and The Intermediate Value Theorem

## The Intermediate Value theorem
Let $f:[a,b] \to \mathbb{R}$ be a continuous function with $f(a) \neq f(b)$. Then, for all $y$ between $f(a)$ and $f(b)$ there exists some $x \in [a,b]$ so that $f(x)=y$. Note that this does not work for $\mathbb{Q}$ because it has holes, but it does work for $\mathbb{R}$, and that this fact is most likely due to the completeness of the reals, or equivalently the existence of the suprema.

## Continuous
We say that if $f$ is a real function defined in the neighborhood of some point $c \in \mathbb{R}$, then $f$ is continuous at $c$ if $\lim_{ x \to c}f(x)=f(c)$.

This is equivalent to saying that $\forall \varepsilon>0$, $\exists \delta>0$ such that when $|x-c|<\delta$ then $|f(x)-f(c)|<\varepsilon$.

So, $f$ is confined to a given $\varepsilon$ ball of $f(c)$ if $x$ is within the punctured $\delta$ ball of $c$ for some positive $\delta$.

## One-Sided Continuity
> We can change the definition slightly to handle when $f$ is left or right continuous.

Let $f: D \to \mathbb{R}$ where $D \subseteq \mathbb{R}$

1. $f$ is left-continuous

$$
\forall \varepsilon>0, \exists \delta>0 \quad c - \delta < x < c \implies |f(x)-f(c)|<\varepsilon
$$
2. $f$ is right-continuous

$$
\forall \varepsilon>0, \exists \delta>0 \quad c < x < c + \delta \implies |f(x)-f(c)|<\varepsilon
$$
So, when a function is both left and right continuous then it is continuous.

## Composition of Continuous Functions
> The composition of continuous function is continuous

Let $f,g$ be functions such that $f$ is continuous at $c$ and $g$ is continuous at $d=f(c)$. Then $h = g \circ f$ is continuous at $c$.

Let $\varepsilon>0$. $g$ is continuous at $d=f(c)$ so there exists $\delta_{g}>0$ such that $|t-d|< \delta_{g}$ implies that $|g(t)-g(d)| < \varepsilon$. Then, $f$ is continuous at $c$, so applying the definition with $\delta_{g}$ playing the role of "$\varepsilon$", there exists some $\delta_{f}>0$ so that $|x-c|< \delta_{f}$ implies $|f(x)-f(c)|<\delta_{g}$. Hence, if $|x-c|<\delta_{f}$ then $f(x) \in (f(c)-\delta_{g}, f(c)+\delta_{g})=(d-\delta_{g}, d+\delta_{g})$, so taking $t = f(x)$ gives $|g(f(x))-g(f(c))|<\varepsilon$. So $h = g \circ f$ is continuous at $c$ with $\delta = \delta_{f}$.

## Composition of Limits
Let $f,g$ be real functions so that $f$ is defined in some punctured neighborhood of $c$ and $\lim_{ x \to c }f(x)=d$,  and $g$ is defined in some punctured neighborhood of $d$ and $\lim_{ t \to d }g(t)=L$.

If $g(t)$ is continuous at $d$ then
$$
\lim_{ x \to c } g(f(x))=\lim_{ t \to d } g(t)=L
$$
To prove this we can define auxiliary functions $\hat{f}$ and $\hat{g}$ so that at $x=c$ then $\hat{f}=d$ and at $t=d$ then $\hat{g} = L$, else they are just defined by the original functions. Now, $\hat{f}$ is continuous at $c$ and $\hat{g}$ is continuous at $d$, so we can use the result that composition of continuous functions is continuous. So 

$$
\lim_{ x \to c } \hat{g}(\hat{f}(x))=\hat{g}(\hat{f}(c))=\hat{g}(d)=L
$$
We can say that the original limit is equal to this because we don't really care about what happens at the limiting point: for $x \neq c$ we have $\hat{f}(x) = f(x)$, and since $g$ is continuous at $d$ we have $g(d) = L$, so $\hat{g} = g$ everywhere. Hence $\hat{g}(\hat{f}(x)) = g(f(x))$ for all $x \neq c$.

> [!danger] Continuity of $g$ is needed
> Take $f(x) = 1$ and $g(t) = 2$ for $t \neq 1$, $g(1) = 3$. Then $\lim_{x \to 0} f(x) = 1$ and $\lim_{t \to 1} g(t) = 2$, but $\lim_{x \to 0} g(f(x)) = 3$. The problem is that $f(x)$ lands exactly on the bad point $d$.

## Continuity and Sequences
> Recall that for a function to be continuous at $a$ the limit must not only exist, but it must equal $f(a)$. Because of this, for continuous functions and sequences we can drop the $x_{n}\ne a$ condition: if some $x_{n}=a$ then $|f(x_{n})-f(a)|=0<\varepsilon$ trivially.

TFAE:

1. The function $f$ is continuous at $a$
2. For all sequences $(x_{n})$, if $x_{n}\to a$ then $f(x_{n})\to f(a)$.


> [!Abstract] Characterising continuous functions as sequences helps to prove a function is not continuous.  

## Bolzano's Theorem

let $f: [a, b] \to \mathbb{R}$ be a continuous function and suppose that $f(a)$ and $f(b)$ have opposite signs. Then there exists $c \in (a, b)$ such that $f(c)=0$. (Notice that this is almost the full IVT).

### A Proof

First, WLOG assume that $f(a)<0$ and then form the set of all points where $f(x)$ is negative:
$$
L = \{ x \in [a, b] : f(x)<0 \}
$$
$a \in L$ so it is non-empty and it is also bounded above by $b$ so the supremum exists. We then just need to show that the supremum of this set gives the desired $c$ s.t. $f(c)=0$

To do this we can use the following lemma:

Let $f$ be a continuous function, if $f(c)>0$ then there exists some $\delta>0$ so that $f(x)>0$ for all $|x-c|<\delta$.  

Meaning if a function is positive at some point $x=c$ then it must stay positive in some small region around $c$. (A similar statement holds for when $f(c)$ is negative).


> [!theorem]- Proof 
> Let $f$ be continuous and assume that $f(c)=q>0$. Apply continuity with $\varepsilon = q$: there exists some $\delta >0$ such that $|x-c|<\delta \implies |f(x)-f(c)|<q$. So $-q < f(x) - f(c) < q$, and $q = f(c)$ so $0<f(x)<2f(c)$.
> 

Finally, to prove Bolzano's theorem assume $f(a)<0$ and $f(b)>0$ otherwise multiple the function by $-1$. 

Take the following set:
$$
L = \{ x \in [a, b] : f(x)<0 \}
$$
From above we know the supremum exists so let $c = \text{sup}(L)$. We need to show that $f(c)=0$. Then, from our Lemma (one-sided at the endpoints) we have that $a<c<b$: $f<0$ on some $[a, a+\delta)$, so $c \geq a + \frac{\delta}{2} > a$; and $f>0$ on some $(b-\delta, b]$, so $b-\delta$ is an upper bound of $L$ and $c \leq b-\delta < b$. By trichotomy (exactly one holds):
1. $f(c) >0$
2. $f(c)<0$
3. $f(c)=0$

So, first assume that $f(c)>0$, $f$ is continuous so from the lemma we know that there exists some $\delta>0$ so that $f(x)>0$ when $x \in (c-\delta, c+\delta)$. But, this now means that no point of $(c-\delta, c]$ is in $L$, and no point of $L$ is above $c$ (since $c$ is an upper bound). So every $x \in L$ satisfies $x \leq c-\delta$, hence $c-\delta$ is a smaller upper bound on $L$, which contradicts that $c$ is the supremum.

So, instead assume $f(c)<0$, again we can apply the lemma so there exists some $\delta>0$ such that $x \in (c-\delta, c+\delta) \implies f(x)<0$. Shrinking $\delta$ if needed, we can assume $c + \delta \leq b$. But, then $t= c + \frac{\delta}{2} \in [a,b]$ satisfies $f(t)<0$, so $t \in L$. This contradicts that $c$ is an upper bound of the set as $t>c$.

Therefore we must have $f(c)=0$.

## Extending Bolzano to IVT

We want to prove:

Let $f:[a,b] \to \mathbb{R}$ be a continuous function with $f(a) \neq f(b)$. Then, for all $y$ between $f(a)$ and $f(b)$ there exists some $x \in [a,b]$ so that $f(x)=y$

Using Bolzano's theorem.

So, let $f$ be as stated and let $y$ be some real value strictly between $f(a)$ and $f(b)$, WLOG $f(a) < y < f(b)$ (otherwise use $-f$ and $-y$; if $y = f(a)$ or $y=f(b)$ just take $x = a$ or $x = b$). Define $g(x)=f(x)-y$, which is continuous as a difference of continuous functions. Then $g(a) = f(a) - y < 0$ and $g(b) = f(b) - y > 0$, so they have opposite signs. By Bolzano's theorem, we know there exists some $a<c<b$ so that $g(c)=0$ and hence that $f(c)=y$.

