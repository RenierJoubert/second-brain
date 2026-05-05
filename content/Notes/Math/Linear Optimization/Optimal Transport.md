#math #math340 #linear-programming #optimization 

# Optimal Transport

An optimal transport plan $\Pi(\mu, v)$ is the set of couplings defined by
$$
\Pi(\mu, v) :=\{\pi \in \mathbb  R^{m \times n} : \pi 1{n} = \mu, \quad\pi 1_{m} = v \}
$$
Which represents all possible ways to move a product from a source distribution to the target distribution, where $\pi_{ij}$ is one transport plan which moves product from $i$ to $j$.

Namely, $\pi_{ij}=\mu_{i}v_{j}$.

Where $\mu$ and $v$ are both probability vectors meaning the sum of their components is equal to one. $\mu$ represents the source distribution and $v$ represents the target distribution.

By definition, the optimal transport plan matrix $\Pi$ has a row sum equal to $\mu$ such that:

$$
\sum _{j=1}^n \pi_{ij}=u_{i}
$$
Which is the sum of all the products starting at the source $i$.

Additionally, the optimal transport plan matrix $\Pi$ has a column sum equal to $v$ such that:
$$
\sum_{i=1}^m\pi_{ij}=v_{j}
$$
Which is the sum of all the products the target $j$ requires.

## Proof of Row and Column Sums
$$
\sum_{j=1}^n\pi_{ij}=\sum_{j=1}^n \mu_{i}v_{j} = \mu_{i} \sum_{j=1}^n v_{j} = \mu_{i} \cdot 1
$$
Similarly,
$$
\sum_{i=1}^m\pi_{ij} = \sum_{i=1}^m \mu_{i}v_{j}=v_{j} \sum_{i=1}^m \mu_{i} = v_{j} \cdot 1
$$
## Cost and The LP

$c_{ij}$ represents the cost of moving 1 unit of product from place $i$ to entry $j$. And the optimal transport problem is given by:
$$
\min \sum_{i=1}^m \sum_{j=1}^n c_{ij}\pi_{ij} = \text{Total cost}
$$
==This is linear, hence it is an LP problem in which we wish to match points with minimum effort.==

==This also implies that we can use duality.==

Note that cost is proportional to the distance between points typically.

## Important Notes From the Homework

1. The LP of an optimal transport problem is given by:

$$
\begin{align}
\min \sum_{i=1}^m \sum_{j=1}^n c_{ij}\pi_{ij} \\
\text{s.t.} \quad \quad\sum_{j=1}^n \pi_{ij} & = \mu_{i} \\
\sum_{i=1}^m \pi_{ij} & = v_{j} \\
\pi_{ij} &\geq 0
\end{align} 
$$
2. Is the transport problem ever not feasible?

No, the transport problem is always feasible. For the transport problem to be feasible we need to fulfill the requirements above, so take $\pi_{ij}=\mu_{i}v_{j}$ this is always feasible as:
$$
\sum_{j=1}^n \pi_{ij} = \sum_{j=1}^n \mu_{i}v_{j} = \mu_{i}
$$
$$
\sum_{i=1}^m \pi_{ij} = \sum_{i=1}^m \mu_{i}v_{j} = v_{j}
$$
Both of these we proved above.

3. Is there an unbounded optimal transport problem?

No, the transport problem is never unbounded, this is because $\forall i,j$ we have that $\pi_{ij} \geq 0$, furthermore, consider $\pi_{ij}=\mu_{i}v_{j}$:
$$
\sum_{i=1}^m \sum_{j=1}^n \pi_{ij} = \sum_{i=1}^m \sum_{j=1}^n \mu_{i}v_{j} = 1
$$
Hence $0\leq \pi_{ij} \leq 1$ and is thus bounded.

4. Is there ever a set of costs such that there is no optimal solution to the optimal transport problem?

No, there is always an optimal solution to an optimal transport problem, this is because:
- The problem is always feasible (proved above)
- The problem is bounded (proved above)
- The objective function is linear

Hence, by the fundamental theorem of linear programming there exists an optimal solution.