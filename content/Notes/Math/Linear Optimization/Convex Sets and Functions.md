#math #math340 #lp #proof #optimization 

## Convex Sets

A set $S \subseteq \mathbb{R}^n$ is **convex** if for all points $x, y \in S$ and all $t \in [0, 1]$, the following line lies fully within the set:

$$
tx + (1-t)y \in S
$$

Intuitively, a set is convex if the **line segment** connecting any two points in the set lies entirely within the set.

---

## Geometrically

- A **convex set** has no "dents" or "holes", namely you can always draw a straight line between any two points and stay inside the set.
- A **non-convex set** has regions where a line segment between two interior points would exit the set.

> **Examples of convex sets:** $\mathbb{R}^n$, hyperplanes, halfspaces, balls, polytopes.
> **Examples of non-convex sets:** A donut (torus), the union of two disjoint intervals.

---

## Why Convexity Matters in Linear Optimization

- The **feasible region** of a linear program (defined by linear constraints) is always a convex set (a *polytope*).
- **Convex problems** guarantee that any **local optimum is a global optimum** 
- The simplex method exploits convexity by searching over the *vertices* (extreme points) of the feasible polytope.

---

## Convex Functions

A function $f: S \to \mathbb{R}$ on a convex set $S$ is **convex** if:

$$
f(tx + (1-t)y) \leq tf(x) + (1-t)f(y) \quad \forall\, x,y \in S,\ t \in [0,1]
$$


