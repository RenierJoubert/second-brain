#RealAnalysis

## Darboux
A function is *Darboux* if it satisfies the conclusions of the Intermediate Value Theorem. For some perspective, a continuous function $f$ is Darboux, but a Darboux function $f$ is not continuous. Moreover, on a "niceness" scale, the progression would be as follows (most to least nice)

1. Continuously differentiable
2. Differentiable
3. Continuous
4. Darboux

## Proving The Extreme Value Theorem

To start, first notice that some continuous functions do not achieve their maximum or minimum values. For example, take $g: (0, 1) \to (0, 1)$ where $g(x)=x$. The issue, this function's domain is open, and this allows us to construct some clever functions that do not achieve their maximum/minimum. Continuous functions on closed domains are much nicer.

### Boundedness

Recall the following:

1. If $D \subseteq \mathbb{R}$ and $f: D \to \mathbb{R}$ we say $f$ is bounded above if $\{ f(x) : x \in D \}$ is bounded above. Ie, $\exists M \in \mathbb{N}$ s.t. $f(x)\leq M$ for all $x$. 
2. Bounded below is similar. 

## ELFS: Boundedness of Continuous Functions
If $g: [a, b] \to \mathbb{R}$ is continuous, then it is also bounded. (Do this with nested intervals)

We will do a sequency proof instead.


> [!theorem]- proof 
> By contradiction, if $g$ is not bounded above then $\forall n \in \mathbb{N}$, $n>0$, $\exists x_{n} \in [a, b]$ s.t. $g(x_{n})\geq n$. By B-W $x_{n}$ has a convergent subsequence $(x_{n_{k}})$ s.t. $\lim_{ k \to \infty }x_{n_{k}}=x \in [a, b]$ because closed sets contain their limits. $g$ is continuous so $\lim_{ k \to \infty }g(x_{n_{k}})=g(\lim_{ k \to \infty }x_{n_{k}})=g(x)$. But, $g(x_{n_{k}})>n_{k}\geq k$ so $g(x_{n_{k}})$ must diverge and this is a contradiction. 
>  


## The Extreme Value Theorem
Let $f: [a, b] \to \mathbb{R}$ be a continuous function, then $\exists c, d \in [a, b]$ s.t. $f(c)\leq f(x)\leq f(d)$, $\forall x \in [a, b]$. Thus, $f([a, b])=[f(c), f(d)]$.


> [!theorem]- Proof of the EVT 
> Let $B = \{ f(x) : x \in [a, b] \}$, that is the image of $f$. We can see that this is non-empty because $b\geq a$ and bounded because it is continuous. Hence, $\text{sup}(B)= M$ exists.  Either $\exists d \in [a, b]$ s.t. $f(d)=M$, if there is we are done, so assume there is not.  We will show this leads to a contradiction. Let $g:[a, b] \to \mathbb{R}$ be defined $g(x)= M - f(x)$, by assumption there is no $d$ s.t. $g(d)=0$. The reciprocal of a continuous function is also continuous so $h(x)=\frac{1}{M-g(x)}$ is continuous. Because $M=\text{sup}(B)$ we have $\forall \varepsilon>0$ there exists some $x \in [a, b]$ s.t. $f(x)>M- \varepsilon$. Hence, $h(x)=\frac{1}{M-f(x)}> \frac{1}{\varepsilon}$ meaning $h(x)$ is unbounded. This contradicts the boundedness of continuous functions. The proof for the minimum is similar. 

## Image of a Closed Interval under a Cts Function
A nice remark is that the image of a continuous function on a closed domain is also closed. 

## Extending and Generalizing
The EVT can be extended from a closed interval to any closed and bounded set of real numbers. That is, let $K$ be a closed and bounded subset of $\mathbb{R}$, and let $f: K \to \mathbb{R}$ be a continuous function, then there exists $c, d \in K$ so that $f(c)\leq f(x)\leq f(d)$, $\forall x \in K$.


