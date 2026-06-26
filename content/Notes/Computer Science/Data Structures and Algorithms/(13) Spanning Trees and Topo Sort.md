#cs #cs221 

# Topological Sort and Minimum Spanning Trees
> Covers topological sort, Kruskal's algorithm, and Prim's algorithm.

## Topological Sort
> Given a directed graph $G = (V, E)$ output all vertices in $V$ such that no vertex is output before any other vertex with an edge to it (all directed should only be moving forwards).

For example, topological sort can be seen in pre-requisite course tree as follows:
![[Pasted image 20260622184726.png]]

### Implementation
> To perform topological sort we need to perform the following:

1. Label each vertices *in-degree* (the number of inbound edges)
2. Initialize a queue to contain all vertices with in-degree zero (all starting nodes)
3. While there are vertices remaining in the queue"
	- Pick a vertex $v$ from the queue and output it
	- Reduce the in-degree of all vertices adjacent to $v$
	- Put any of these with updated zero in-degree in the queue
	- Remove v from the queue 

For example:
![[Pasted image 20260622185554.png]]
We start with 1 and 6 as these have an in-degree of 0. And we terminate as follows:
![[Pasted image 20260622185631.png]]

However, can a valid topological sort exists for all directed graphs? No, in the above example the cyclic graph does not output a valid topological sort, as when we reach B and reduce it's in-degree by one there are still no vertices with in-degree of 0 hence the sort terminates. Hence, only *acyclic* (no cycles) graphs can have a topological sort as directed cycles prevent this. But for this exact same reason we can use topological sort to detect directed cycles.

Regarding runtime complexity, because topological sort is essentially just a modified BFS the run-times are very similar, in that:

![[Pasted image 20260622190433.png]]


## Spanning Trees
> Given a graph $G=(V, E)$, a spanning tree of $G$ is a connected subgraph of $G$ with exactly $|V|-1$ edges. These can be constructed using BFS and DFS.

For example,
![[Pasted image 20260622191046.png]]

Moreover, these can be constructed on weighted graphs as well which we can then optimize.

So, algorithmically speaking, for a *minimal spanning tree* we need that for some connected graph $G=(V, E)$ with unconstrained edge weights (positive or negative), to output some graph $G'(V, E')$ such that:
1. $G'$ is a *spanning* subgraph of $G$
2. $G'$ is connected and acyclic (a tree)
3. The sum of the edge weights of $E'$ is **minimal** along all such spanning trees
![[Pasted image 20260622191735.png]]
For example, the minimal spanning tree would be the graph on the right-side.

## Kruskal's Algorithm
> Kruskal's algorithm builds a spanning tree from several connected components, such that it repeatedly chooses the minimum-weight joining two connected components which does not form a cycle, until the edge set reaches $|V|-1$ edges.

```
KruskalsAlgorithm()
{
 set 𝐸′ = ø
 while ( 𝐸′ ≠ 𝑉 − 1)
 {
 Find minimum weight edge 𝑒 ∉ 𝐸′ such that 𝐸′ \cup e does not contain cycles
 Add 𝑒 to 𝐸′
 }
}
```

Wherein, we can find the minimum weight edge by using a *priority queue*, and we can check for cycles and perform union by using *disjoint sets*.

For example, 
![[Pasted image 20260622192506.png]]

So we start by looking at (A, B) 2, and the find on A, B tells us that for the disjoint set A, B are in different components as they have different up-trees thus we can take their union without forming an cycles.  So, remove A, B from the priority queue and link them in the disjoint set. Next we look at (B, C) 3, when we do find on both they come back with different up-trees hence they are safe to use in our spanning tree, so take their union and remove them from the priority queue. Next we do (G, H) 4 with the same result, then we do (E, F) 5 with the same result. Next though we do (A, C) 6, but the find on A and C tells us that they are in the same up-tree, hence we cannot use this edge so we remove it from the priority and get the next edge, which is (B, E) 7 and we can use it as normal. Next is (C, D) 8, which is fine, then finally (D, G) 9 is fine and completes our tree our MST tree weight is at a minimum of 38.

Note that there are potentially multiple MSTs, especially when there are identical weights present.

### Analysis

Regarding the priority queue for this algorithm, after initialization we only do removal operations, hence the build cost for our priority queue is $O(m)$ as a binary heap, and our remove time is $O(\log m)$ with up to potentially $n$ removals. 

However, we can also implement this priority queue using an ordered array, as we only have to worry about removals thus our removal is $O(1)$ as we only need to access an index. Nevertheless, to actually build and order the array we would have to use some kind of sorting algorithm hence our run time would be $O(m\log m)$.

In both of these situations we still reach an overall cost of $O(m\log m)$.

Moreover, we still have to consider the cost of the disjoint set, which to create will take $\Theta(n)$, but find and union are negligible as they are $O(\log*n)$.

## Traversals So Far
![[Pasted image 20260622194252.png]]

## Prim's Algorithm
> Prim's algorithm builds a spanning tree initially from one vertex, then repeatedly choose the minimum-weight edge from a vertex in the tree to the vertex out of the tree, then add that vertex to the tree.

```
PrimsAlgorithm(v)
{
 mark v as visited, add v to spanning tree
 while (graph has unvisited vertices)
 {
 Find least cost edge (w, u) from a visited vertex w to unvisited vertex u
 Mark u as visited
 Add vertex u and edge (w, u) to the minimum spanning tree
 }
}
```

For example,
![[Pasted image 20260622194814.png]]

Regarding complexity, we have that:
![[Pasted image 20260622195040.png]]

