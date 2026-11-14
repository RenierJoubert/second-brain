#RealAnalysis

# Derivatives

## The Derivative
Let $f$ be a function defined in the neighborhood of a point $c$. We see that $f$ is *differentiable* at $c$ when: 
$$
\lim_{ x \to c } \frac{{f(x)-f(c)}}{x-c}=\lim_{ h \to 0 } \frac{{f(c+h)-f(c)}}{h}=f'(c)
$$
exists. $f'(c)$ is the derivative of $f$ at $c$. If $f$ is differentiable at every point in an interval then we say that it is differentiable on that interval.

## HW: Differentiable Implies Continuous
If a function is differentiable at $c$ then it is continuous at $c$. But, the converse is false. 

## Derivatives and Continuity

Let $f: D \to \mathbb{R}$ be a function and $f'$ its derivative as defined above. The domain of $f'$ is the subset of $D$ such that this limit $f'$ exists. If $f$ is differentiable on $D$ then $f$ is continuous on $D$, at the same time, $f'$ need not be continuous on $D$. This follows from the result above.

## The Tangent Line

Let $f: [a, b] \to \mathbb{R}$ be a function differentiable at $c \in (a, b)$, the tangent line to $f$ at $c$ is the linear function:
$$
T(x)=f(c)+f'(c)(x-c)
$$
The tangent line to a function at a given point $c$ is the best linear approximation in the following sense:

## Derivatives and Tangent Lines

Let $f$ be a function defined in a nbhd of a point $c$, the following are then equivalent:

1. $f$ is differentiable at $c$
2. There exists a line $T(x)$ passing through the point $(c, f(c))$ with the property that:

$$
\lim_{ x \to c } \frac{{f(x)-T(x)}}{x-c}=0
$$
If either of these are true we can say that $T(x)$ is the tangent line at $x=c$, and the slope of $T$ is $f'(c)$. 


> [!theorem]- Proof 
> A function $f$ is differentiable at $x=c$ iff $\lim_{ x \to c } \frac{{f(x)-f(c)}}{x-c}$ exists and its value is denoted $f'(c)$. This is equivalent to the following:
>$$
> \begin{align}
> 0  & = \lim_{ x \to c } \left( \frac{{f(x)-f(c)}}{x-c} - f'(c) \right)  \\
>  & = \lim_{ x \to c } \left( \frac{{f(x)-[f(c)+f'(c)(x-c)]}}{x-c} \right) \\
>   & = \lim_{ x \to c } \frac{{f(x)-T(x)}}{x-c}
> \end{align}
>$$
> To prove $2 \implies 1$ let $L$ be some linear function with the same property, such that $L = f(c)+m(x-c)$, then:
>$$
> \begin{align}
> 0  & = \lim_{ x \to c } \frac{{f(x)-m(x-c)-f(c)}}{x-c} \\
>  & =\lim_{ x \to c } \frac{{f(x)-f(c)}}{x-c} - \lim_{ x \to c } \frac{{m(x-c)}}{x-c}
> \end{align}
>$$
>Here the latter limit is just $m$ and the former limit is the limit definition of the derivative which we know exists, thus $L(x)$ is the Tangent line and $f$ is differentiable.

Furthermore, when a function is differentiable at $x=c$ it looks something like its tangent line, namely $f(x)=f(c)+ \varphi(x) \cdot(x-c)$. As $x \to c$ we have that $\varphi(x)$ has to look like $f'(c)$, namely $\lim_{ x \to c } \varphi(x)=f'(c)$. Meaning, as we get really close to $x=c$ the function must look like its tangent line.

### A Tiny Lemma to Prove Chain Rule
Let $g$ be defined on some nbhd of a point $c$. If $g$ is differentiable at $c$ then there is a function $\varphi(x)$ dependent on $g$ and $c$ such that:

$$
g(x)-g(c)=\varphi(x)(x-c) \quad \forall x \in (a, b)
$$
and $\varphi$ is continuous at $c$ with $\lim_{ x \to c } \varphi(c)=g'(c)$. Note that the converse also holds, such that if you can find a function $\varphi$ then $g$ is differentiable at $c$ with $g'(c)=\varphi(c)$.

The proof of this is straightforward and involves just setting $\varphi(x)=\begin{cases} \frac{{g(x)-g(c)}}{x-c} \quad  & x \ne c \\   g'(c)\quad  & x= c \end{cases}$

For a literal example, take $g(x) = x^3 + 2x +8$ and $c=2$, then:
$$
\begin{align}
g(x) - g(2) & =(x^3+2x+8) - 20  \\
 & = x^3+2x-12 \\
 &  =(x-2)(x^2+2x+6)
\end{align}
$$
So $\varphi(x)=x^2+2x+6$, $g'(x)=3x^2 + 2$ and $g'(2)=14$. Thus $\lim_{ x \to 2 } \varphi(x)=4+4+6=14=g'(2)$.

## The Chain Rule

Let $f,g$ be functions such that:
- $f$ is defined on a nbhd of $c$ and differentiable at $c$
- $g$ is defined on a nbhd of $f(c)$ and differentiable at $f(c)$

Then the composition $h(x)=g(f(x))$ is well-defined and differentiable at $x=c$ and the derivative is:
$$
h'(c)=(g \circ f)'(c)=g'(f(c)) \cdot f'(c)
$$

> [!theorem]- Proof of Chain Rule 
> Let $f,g,h$ be as stated, then we know there exists function $\varphi,\psi$ s.t. $f(x)=f(c)+\varphi(x)(x-c)$ and $g(t)=g(d)+\psi(t)(t-d)$ for $d$ in some nbhd around $f(c)$ and where $\varphi$ and $\psi$ are continuous with $\varphi(c)=f'(c)$ and $\psi(d)=g'(d)$.
> 
> Substituting $t \mapsto f(x)$ and $d \mapsto f(c)$ in this equation:
>$$
> \begin{align}
> g(f(x)) & =g(f(c))+\psi(f(x))(f(x)-f(c)) \quad f(x)-f(c)=\varphi(x)(x-c) \\
>  & = g(f(c))+\psi(f(x)) \cdot \varphi(x)(x-c)
> \end{align}
>$$
>Then,
>$$
>\begin{align}
>h(x)-h(c) & =g(f(x))-g(f(c)) \\
> & = \psi(f(x))\cdot \varphi(x)(x-c)
>\end{align}
>$$
>and finally:
>$$
>\begin{align}
>\lim_{ x \to c } \frac{{h(x)-h(c)}}{x-c} & =\lim_{ x \to c } \psi(f(x))\varphi(x) \\
> & = \lim_{ x \to c } \psi(f(x)) \cdot \lim_{ x \to c } \varphi(x) \\
>  & = \psi(f(c))\varphi(c) \\
>   & = g'(f(c))\cdot f'(c)
>\end{align}
>$$
## Arithmetic of Derivatives
Let $f,g$ be functions differentiable at $c$, and let $K\in\mathbb R$ be a constant.
- If $f(x)=K$ for all $x$ then $f'(c)=0$
- If $f(x)=x$ then $f'(c)=1$
- $(f\pm g)'(c)=f'(c)\pm g'(c)$
- $(f\cdot g)'(c)=f(c)g'(c)+f'(c)g(c)$
- $\displaystyle (f/g)'(c)=\frac{f'(c)g(c)-g'(c)f(c)}{g(c)^{2}}$
