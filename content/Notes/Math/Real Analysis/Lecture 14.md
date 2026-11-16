#math #RealAnalysis 

# Increasing, Decreasing, and the Derivative
> Proving a function increases if its derivative is positive, and decreases when it is negative.

## Positive Derivative
Let $f:D \to \mathbb{R}$ and $c \in D$, $w>0$ such that $(c-w,c+w)\subseteq D$. If $f$ is differentiable at $c$ with $f'(c)>0$ then:

There exists some $\delta>0$ such that

1. if $x \in(c,c+\delta)$ then $f(c)<f(x)$ 
2. if $x \in(c-\delta, c)$ then $f(x)<f(c)$

## Negative Derivative
If $f'(c)<0$ then:

There exists some $\delta>0$ such that

1. if $x \in(c,c+\delta)$ then $f(x)<f(c)$ 
2. if $x \in(c-\delta, c)$ then $f(c)<f(x)$


> [!theorem]- Proof 
> Using our [[lecture 13|Tiny Lemma to Prove Chain Rule]], we can write $f(x)-f(c)=\varphi(x)(x-c)$. Since $\varphi=f'(c)>0$ and $\varphi$ is continuous we know $\exists \delta>0$ such that $\varphi(x)>0$ for all $x \in(c-\delta, c+\delta)$. I am unsure if I have written this proof in my notes, but it Lemma 3.2.14 if you are curious. 
> 
> So if $c<x<c+\delta$ then $(x-c)>0$ thus $f(x)-f(c)=\varphi(x)(x-c)>0$ and $f(x)>f(c)$. Similarly if $c-\delta<x<c$ then $f(x)<f(c)$. The proof for $f'(c)<0$ is similar.


## Local Maximum
Let $f:D\to \mathbb{R}$ be a function, the point $c \in D$ is a **local maximum** if $\exists \delta>0$ such that:
$$
f(x)\leq f(c) \quad \forall x \in(c-\delta, c+\delta)\cap D
$$

## Local Minimum
The point $c\in D$ is a local minimum if $\exists \delta>0$ such that:
$$
f(x)\geq f(c)\quad \forall  x \in(c-\delta, c+\delta) \cap D
$$
Here we take the intersection with the functions domain to allow for endpoints to still be extrema.

## Fermat's Theorem
> No, not that one.

Let $f$ be a continuous function on a closed interval $[a, b]$. If $f$ takes its maximum or minimum value at $x =c$ then:

1. $f$ is not differentiable at $c$, or
2. $f'(c)=0$, or
3. $c=a$ or $c=b$

So an extreme point must either be at an end-point, a point of non-differentiability, or at a point where the derivative is zero. 

> [!theorem]- Proof 
> $f$ must be differentiable at $c$ or not. If it is not we are done. If $c$ is an endpoint we are also done. So assume that $c \in(a, b)$ and $f'(c)$ exists. 
> 
> Assume $c$ is a local maximum, so $\exists \delta>0$ such that $f(x)\leq f(c)$ for all $x \in(c-\delta, c+\delta)$. Now, if $f'(c)>0$ then we know we can find a point $z$ to the right of $c$ such that $f(c)<f(z)$ which is a contradiction that $c$ is a local maximum. Similarly, if $f'(c)<0$ then we can find a point $y$ to the left of $c$ such that $f(y)>f(c)$ which is another contradiction. Hence $f'(c)=0$.

## Rolle's Theorem
Let $f:[a,b]\to \mathbb{R}$ be continuous on $[a, b]$ and differentiable on $(a, b)$. If $f(a)=f(b)$ then there exists $c \in (a, b)$ so that $f'(c)=0$.


> [!theorem]- Proof 
> By the [[lecture 12 | EVT]] $\exists c, d \in [a, b]$ such that $f(c)\leq f(x)\leq f(d)$ for all $x$. Now if $c,d$ are local minima or maxima then by Fermat's theorem the derivative at those points are zero and we are done. So assume these points are endpoints, such that the maxima and minima occur at the ends of the interval. Because $f(a)=f(b)$ this means that $f(x)\leq f(a)=f(b)$ and $f(a)=f(b)\leq f(x)$ for all $x \in [a,b]$. Hence $f(x)$ is constant and its derivative is zero at every point in $[a, b]$.

## The Mean Value Theorem
> Or, more appropriately, the most valuable theorem.

Let $[a, b]$ be a closed interval and let $f$ be continuous on $[a, b]$ and differentiable on $(a, b)$. Then, there is some $c \in(a, b)$ such that:
$$
f'(c)=\frac{{f(b)-f(a)}}{b-a}
$$
This means there is some point in the interval such that the derivative at that point is equal to the slope of the line connection the function's endpoints. 


> [!theorem]- Proof 
> Define the function $g$ on $[a, b]$:
>$$
> g(x)=f(x)-(x-a) \frac{{f(b)-f(a)}}{b-a} 
>$$
>Taking the derivative we obtain:
>$$
>g'(x)=f'(x)- \frac{{f(b)-f(a)}}{b-a}
>$$
>$f$ is continuous on this domain, meaning $g$ must then also be, also $f$ is differentiable on this domain as well, so it follows that $g$ is also. Finally, notice that $g(a)=f(a)$ and $g(b)=f(a)$. This means we can apply Rolle's theorem as $g(a)=g(b)$ and hence there exists a point $c$ such that $g'(c)=0$. So we get our desired result:
>$$
>f'(c)=0+ \frac{{f(b)-f(a)}}{b-a}.
>$$


## Cauchy MVT / Generalized MVT

Let $[a, b]$ be a closed interval and let $f, g$ be functions that are continuous on $[a, b]$ and differentiable on $(a, b)$, there exists a point $c \in (a, b)$ so that:
$$
f'(c)(g(b)-g(a))=g'(c)(f(b)-f(a))
$$
If we set $g(x)=x$ we immediately get the original MVT.


> [!theorem]- Proof 
> Let $h(x)=f(x)(g(b)-g(a))-g(x)(f(b)-f(a))$ and apply Rolle's theorem. 
> 

