#math #math340 #lp #proof #optimization 

# Convex Sets and Functions

## Convex Sets

A set $S \subseteq \mathbb{R}^n$ is *convex* if the line segment connecting any two points in $S$ lies entirely within $S$. Namely:

> [!theorem] Convex Set
> $S$ is convex if for all $x, y \in S$ and all $t \in [0,1]$ we have that:
> $$
> tx + (1-t)y \in S
> $$

Where $tx + (1-t)y$ traces out the line segment from $y$ (at $t=0$) to $x$ (at $t=1$).

In essence, a convex set has no dents or holes, so you can always draw a straight line between any two points and stay inside the set. For example, $\mathbb{R}^n$, hyperplanes, halfspaces, balls and polytopes are all convex, whereas a donut or the union of two disjoint intervals such as $[0,1] \cup [2,3]$ are not.

## Convex Functions

A function $f: S \to \mathbb{R}$ on a convex set $S$ is *convex* if the line segment between any two points on its graph lies on or above the graph. Namely:

> [!theorem] Convex Function
> $f$ is convex if for all $x, y \in S$ and all $t \in [0,1]$ we have that:
> $$
> f(tx + (1-t)y) \leq tf(x) + (1-t)f(y)
> $$

Similarly, $f$ is *concave* if $-f$ is convex, that is, the inequality flips. Note that a linear function is both convex and concave since equality always holds, which is why von Neumann's theorem in [[Matrix Games]] applies to $x^TAy$.

## Convexity in LPs

The feasible region of an LP is always convex.

> [!proof]
> Suppose $x$ and $y$ are both feasible such that $Ax \leq b$, $Ay \leq b$ and $x, y \geq 0$. Then for any $t \in [0,1]$, since $t$ and $1-t$ are non-negative:
> $$
> \begin{align}
> A(tx + (1-t)y) & = tAx + (1-t)Ay \\
> & \leq tb + (1-t)b \\
> & = b
> \end{align}
> $$
> And similarly $tx + (1-t)y \geq 0$. Hence $tx + (1-t)y$ is feasible, so the feasible region is convex.

More specifically, the feasible region is a *polyhedron* (an intersection of finitely many halfspaces), and a *polytope* if it is bounded.

This matters because when minimizing a convex function (or maximizing a concave one) over a convex set, **any local optimum is a global optimum**. Since a linear objective is both convex and concave, this holds for every LP. So, the [[Simplex Method|simplex method]] can just walk along the vertices (extreme points) of the feasible region, and once no neighbouring vertex improves the objective we know we are at the optimum.
