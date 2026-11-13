#cs #cs221 

# Dijkstra's Algorithm

## Traversal So Far
> Thus far in the course we have seen the following traversal variants:

1. Stack / Recursion, add unvisited neighbour
	DFS
2. Queue, add unvisited neighbour
	BFS
3. Priority queue, add zero-degree neighbours
	Topological sort
4. Priority queue (edge weights), add all neighbours
	Prim's algorithm, solves MST
5. Priority queue (path weights), add all neighbours
	Dijkstra's algorithm, solves single shortest path

## Single Source Shortest Path
> Given a graph $G=(V, E)$ and a vertex $s \in V$, find the shortest path from $s$ to every other vertex in $V$.

Some variations of this include:
- Weighted vs unweighted
- Cyclic vs acyclic
- Positive vs negative weights
- Multiple weigh types

For example,
![[Pasted image 20260622214554.png]]

## Dijkstra's Algorithm
> Dijkstra's Algorithm solves the shortest path in weighted graphs *without negative graphs*, specifically, it is a greedy algorithm , in that the best local choice is made at each step; without considering future consequences.

The intuition behind the algorithm is as follows:
- The shortest path from the source vertex to itself is 0
- The cost of going to an adjacent node is at mode edge weights
- The cheapest of these must be the shortest path to that node
- Update paths for the new node and continue picking the shortest path

The pseudo-code for Dijkstra's algorithm is as follows:
```
Dijkstra(G,s)
 d(s) = 0 // distance to source = 0
 for all u ∈ V – {s}, d(u) = ∞ // the distance to other vertices is infty
 R = ∅ // the set of reached vertices is empty

while R ≠ V // while there are unreached vertices
	pick u ∉ R with minimal d(u) // choose unvisited vertex u with minimal cost
	R = R ∪ {u} // add u to collection of reached vertices
	
	for all vertices v adjacent to u // for all neighbouts v of u
	if d(v) > d(u) + l(u,v) // if path to v through u has lower cost we update
		d(v) = d(u) + l(u,v)
```

Namely, if the best known cost so far is higher than the new cost we discover through $u$, then we update the best cost with what we just discovered.

For example,

![[Pasted image 20260622215411.png]]

Here, as we start with C our cost for C is initialized at 0 and all other costs are infinite. Then, for our pq assuming we are using a binary heap we remove C as it has the lowest cost and visit it. After we have visited C we can now see all it's neighbours, now the path to A through C is 9 which is better than infinity, so we update the cost to 9 if we pass through C. Also, the path to E through C is 8 which is better than infinity so we update the cost of E to 8 if we pass through C. 

Now because C is done, we go back to the pq and find the minimum which is E, so we visit E and unlock it's neighbours, from E we can see the path to D through E is 7, but has a total cost of 15 as we need to travel CED, hence we update the cost of D to 15 if we pass through E, similarly we update the cost of G to 9 if we pass through E.

Again taking the minimum element from the pq we can choose between A and G as they are equal, so let's take A and visit it, from A we can see D has a cost of 4 but total cost of 13 which is lower than 15 so we update the cost of D to 13 through A, A can see C but because we already have a route to get to C with a cost of 0 we know we already have the shortest path, A can also see B for a cost of 2 but total cost of 11, this is cheaper than infinity so we update the cost to B as 11 through A.

Now the next in the pq is 9 which is G, G can see F for a cost of 2, but total cost of 11 which is cheaper than infinity so we update the cost of F to 11 through G, G can see E but 8 is cheaper than 12 so we dont update.

Next in the pq is B at 11 but we dont update our costs for C or E, also the cost to F is 2 but the total cost is 13 < 11 so we also dont update that.

Next in the pq is F at 11, F can see H for a cost of 3 but total cost of 14, this is cheaper than infinity so we update the cost of H through F as 14.

Next in the pq is D at 13, D can only see C so there is nothing to update.

Finally we check H as it is last in the pq, but by this point everyone has already been visited so there is no need to update any costs.

As a result of this process not only has every vertex has been visited, but the minimum cost to each vertex has also been recorded as follows. (but they are only valid for the starting vertex)

Moreover, the shortest path is recorded in the sequence of predecessors recorded.

![[Pasted image 20260622221332.png]]

## Implementation
1. Selecting the unvisited node with minimum cost
	This can be accomplished using a priority queue / min-heap
	Building the initial heap is $O(|V|)$, or $\Theta(n)$.
	Removing the minimum from the queue is executed $|V|$ times, so total of $O(|V|\log|V|)$

2. Each of $|E|$ edges has to be processed once
	Looking up and changing the current cost of a vertex in a heap takes $O(|V|)$ (linear search), for an unindexed heap, BUT $O(1)$ for an indexed heap. Moreover, the heap property need to be preserved after a change for an additional cost of $O(\log|V|)$.
	Hence, the total cost is given by $|V| + |V|\log|V| + |E|(|V| + \log|V|)$. Which is just:

$$
O(|V|\log|V|+|E||V|)
$$
*But,* if the heap is ==indexed==, then the cost is $O((|V|+|E|)\log|V|)$.

## Path Reconstruction
![[Pasted image 20260622222938.png]]

Here we can backtrack through the predecessors as follows to find the shortest path to E:
$$
E\to F\to B\to C \quad \text{reverse = }  C \to B \to F \to E
$$

### An Informal Proof
![[Pasted image 20260622223349.png]]
