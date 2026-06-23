#cs #cs221 

# Graph Implementation and Traversal

First recall the basic terminology from [[Lecture 11|graphs]].
## Graph Theory Needed for Analysis
> The running times are often reported in terms of $n$ (the number of vertices, $|v|$), but they often depend on $m$ (the number of edges).

So many edges can a graph have?
	Well if a graph is *connected*, then there is $n-1$ edges at a minimum, if the graph is not connected then the there is 0 edges at a minimum. Well what about the maximum? Well, in a *connected simple graph*, the maximum number of edges is given by:

$$
m = \sum_{i=1}^n i = \frac{n(n-1)}{2}
$$
We can see this relation through the following diagram:
![[Pasted image 20260622142317.png]]

Additionally, it intuitively makes sense that in a *not simple* connected graph, that there is no bound on the number of edges, as we can loop between as many nods as we like.

### Handshaking Theorem
> The handshaking theorem relates the number of degrees to the number of edges such that:

$$
\sum_{v \in V}\text{deg}(v)=2m
$$
For example,
![[Pasted image 20260622142643.png]]

## Edges In A Connected Graph Proof
> A minimal connected graph $G=(V, E)$ has $|v|-1$ edges.

*proof:*

First, consider an arbitrary minimal connected graph $G=(V, E)$, then using the lemma that every connected subgraph of G is minimally connected (this can be proved using proof by contradiction). Then, our inductive hypothesis is to assume for any $j < |v|$, any minimal connected graph of $j$ vertices has $j-1$ edges. 

For our base case then, $|v|=1$ is a minimal connected graph of 1 vertex which has no edges, and $0=1-1$ holds.

For our inductive step,  suppose $|v|>1$ and choose any single vertex and let $d$ denote it's degree. Then, set aside it's incident edge, which hence partitions the graph into $d+1$ components where $C_{0} =(v, \emptyset)$, $C_{1}=(v_{1}, e_{1}), \cdots, C_{d}=(v_{d}, e_{d})$, each of which is a minimal connected subgraph of G. Hence, we have that:
$$
|E_{k}|=|N_{k}|-1
$$
by our inductive hypothesis, then summing the edges in our original graph we see that:
$$
m=\sum_{i=1}^d (|v_{i}-1)+d=|v|-1-d+d=|v|-1
$$
## Implementation
![[Pasted image 20260622143946.png]]

## Adjacency Matrices
> An adjacency matrix in essence is an efficiently resizing 2D array where vertices and edges are mapped to integers as array indices, wherein they are stored in a hash tables.

![[Pasted image 20260622144503.png]]
In this example, the abstract graph is represented using an adjacency matrix, such that a "1" corresponds to that graph having a connection with that vertex, and "0" corresponds to no connection. For example, the vertex $u$ has edges with $v$ and $w$ so in the $v$ row and column these spots are filled with "1".

However, if this was a weighted graph, then we could simply make the array entries contain the weights themselves, and have some infinite weight or impossible weight where no connection exists.

Regarding space and time complexity, the hash tables will take $\Theta(n)$ and $\Theta(m)$ respectively, and the adjacency matrix should take $\Theta(n^2)$. Hence, altogether we can expect a space complexity of:
$$
\Theta(n)+\Theta(m)+ \Theta(n^2) \in \Theta(n^2)
$$
Now, regarding complexity for our operations we see that for:
1. `insertVertext(vertex v)`
	Map will have an $O(n)$ worst case, but $O(1)$ amortized.
	Matrix will have an $O(n^2)$ worse case, but $\theta(n)$ amortized.
2. `removeVertext(vertex v)`
	$O(m)$ iteration to remove edges from the edge map.
3. `areAdjacent(vertex v, vertex u)`
	This is just $O(1)$ as we just need the integer mapping from our table, and then do a simple lookup for the corresponding cell in our matrix, which should also be constant time. 
4. `incidentEdges(vertext v)`
	$\Theta(m)$ as we are iterating through the edge map.

## Adjacency List
> An adjacency list has much better space usage than the adjacency matrix, as we do not keep track of connections that do not exist, as we do in an adjacency matrix.

![[Pasted image 20260622145707.png]]

Here, the adjacency list is implemented using linked lists, in that the vertex $u$ points to a doubly linked list of vertices $v$ and $w$, and vertex $v$ points to a doubly linked list of vertex $w$ and $u$, wherein the edge taken is included along with the vertex in the linked list node. 

Moreover, the hash table storing the edges also contains 2 pointers for every edge that point to the endpoints of the edge, namely, edge $a$ has endpoints $u$ and $v$, hence its hash table entry contains pointers to $u$ and $v$ in the linked list. 

Regarding space complexity, every edge in the hash table has two pointers, each going to two distinct nodes in the linked list. Hence, we have a total number of nodes equal to twice the number of edges, thus the space taken up by the linked list is $\Theta(m)$, similar to $\Theta(m)$ for the edge hash table, and $\Theta(n)$ for the vertices hash table. Overall, this results in a total space usage of $\Theta(n+m)$.

Additionally, by including this 'edge taken' as a label, we then improve our removal complexity, as if we want to remove a node we need to check all of it's neighbors and update them accordingly which should be $O(m)$, but if we include the edge taken we can then access the incident nodes in constant time using the hash table, thus bringing this runtime down to $\Theta(\text{deg}(v))$

Now, regarding run time complexity for our operations we see that for:
1. `insertVertext(vertex v)`
	Worst case $O(n)$ if we need to resize, otherwise $O(1)$ amortized.
2. `removeVertext(vertex v)`
	When we remove some vertex v, we also need to deallocate it in the linked list, which is $\Theta(\text{deg}(v))$
3. `areAdjacent(vertex v, vertex u)`
	To check if two vertices are adjacent, all we need do is to verify that either vertex is incident to each other, and should it happen that these two vertices have a large gap in degree, it would be wiser to search the vertex with less incident vertices, than the vertex with the larger degree. Hence, the running time is just $O(\min(\text{deg(v)}, \text{deg}(u)))$.
4. `incidentEdges(vertext v)`
	Using the labels provided in the linked list corresponding to a given vertice, we can search linearly through said list to find all incident edges, hence we get $\Theta(\text{deg}(v))$. This is primarily the main advantage of the adjacency list compared to the adjacency matrix.

## Edge List
> On PL but not likely on exams. Essentially half of an adjacency list. 

![[Pasted image 20260622171408.png]]

## Graph Implementation Performance
![[Pasted image 20260622171453.png]]

## Traversal (BFS, DFS)

### Breadth-first Search
> Choose some starting position, then visit all vertices that are $d$ steps away, then visit all vertices within $d+1$ steps where $d$ begins at 0. This can be implemented using a queue.

![[Pasted image 20260622172209.png]]

The algorithm works as follows:
1. Initialize graph and set all vertices as unvisited and all edges as unexplored
2. Launch BFS from every unvisited vertex v (allows not fully connected graphs to be fully searched)
3. While queue is full, remove a vertex v from the queue and mark and visit all neighbours of v.
4. If the neighbour is unvisited, its corresponding edge that takes us there is marked as discovery, then the neighbour is marked as visited and added to queue to search later
5. If the neighbour is visited, mark the edge that goes there as a cross edge

For example,
![[Pasted image 20260622173523.png]]

As you can see, the edges marked as *discovery edges* form a ==spanning tree== of our graph, and the distances show the length of the shortest path from the start to each vertex.

Moreover, if we wanted to determine if this graph was connected or not, we could add some counter in the for loop for initializing BFS, that way whenever one graph is completed and it jumps to another by initializing another BFS the counter increases, and hence we could tell the graph is not connected, as one BFS visits one connected component.

```
Algorithm BFS(G, v)
 Input: graph G and start vertex v
 Output: labeling of edges in v's connected
 component as "discovery" or "cross" edges
Queue q;
SetLabel(v, VISITED)
q.Enqueue(v);
while !(q.IsEmpty)
 q.Dequeue(v)
 For all w in G.AdjacentVertices(v)
 if GetLabel(w) = UNVISITED
 SetLabel((v,w), DISCOVERY)
 SetLabel(w, VISITED)
 q.Enqueue(w)
 else if GetLabel((v,w)) = UNEXPLORED
 SetLabel((v,w), CROSS)
```

Regarding time complexity, in our while loop we have that every vertex in the connected component is enqueued and dequeued exactly once, hence we have that $\Theta(n)$. Then, in our for-loop, we run through all the neighbours of $v$, hence we get $\Theta(\text{deg}(v))$. Overall, we then see a total running time of $\Theta(m + n)$, as we need to visit all neighbours of all vertices which is just $\Theta(m)$ assuming we are working with an adjacency list.

### Depth-first Search
> DFS visits along a single path as far as it can go, and then backtrack to the first junction and resumes down another path. This can be implemented using recursion or a stack.

![[Pasted image 20260622180646.png]]

```
// traverse G
Algorithm Traverse_DFS(G)
 Input: graph G
 Output: labeling of G's edges as
 "discovery" or "back" edges
For all u in G.vertices()
 SetLabel(u, UNVISITED)
For all e in G.edges()
 SetLabel(e, UNEXPLORED)
For all v in G.vertices()
 if GetLabel(v) = UNVISITED
 DFS(G, v)
 
// DFS of v
Algorithm DFS(G, v)
 Input: graph G and start vertex v
 Output: labeling of edges in v's connected
 component as "discovery" or "back" edges
SetLabel(v, VISITED)
For all w in G.AdjacentVertices(v)
 if GetLabel(w) = UNVISITED
 SetLabel((v,w), DISCOVERY)
 DFS(G, w)
 else if GetLabel((v,w)) = UNEXPLORED
 SetLabel((v,w), BACK)
```

For example,
1. Start at A
2. Mark as visited
3. Visit B, mark edge as discovery, start DFS from B
4. Mark B as visited and check it's neighbours
5. A has already been visited, C has not been visited, visit C and mark edge as discovery, start DFS from C
6. Mark C as visited and check it's neighbours
7. B has already been visited, A has already been visited but it's edge is unmarked so mark it's edge as a cross edge, D has not been visited, visit D and mark edge as discovery, start DFS from D
8. Mark D as visited and check it's neighbours
9. A has already been visited but it's edge is unmarked so mark it's edge as a cross edge, no more neighbours to check so exit into previous function call (BFS of C)
10. Check neighbours of C
11. E has not been visited, visit E and mark it's edge as a discovery and start BFS from E.
12. Mark E as visited and check it's neighbours
13. A has been visited but it's edge is unmarked so mark it as a cross edge, C has been visited so do nothing. No more neighbours to check so return to C
14. DFS from C terminates to B
15. DFS from B terminates to A
16. DFS from A terminates
![[Pasted image 20260622181427.png]]

Likewise, with DFS the discovery edges form a *spanning tree*, and in one DFS we can fully traverse a connected component - hence we can also check for connectivity etc.

Regarding running time complexity, we call DFS on each vertex **exactly once**, but we do $\text{deg}(v)$ iterations on each vertex, hence we get the same complexity as BFS, which is $\Theta(n + m)$. However if we used an adjacency matrix instead this cost would be $\Theta(n)$ as we need to iterate across an entire row.