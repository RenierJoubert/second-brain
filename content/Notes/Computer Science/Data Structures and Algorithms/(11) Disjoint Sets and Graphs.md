#cs #cs221 

# Disjoint Sets and Graphs

## The Set ADT
> Imagine a set as a group of people, some of whom *trust* eachother. Operations needed for the set ADT include
> - `MakeSet`, to initialize a network with no connections
> - `Union`, to merge trusting pairs into one set
> - `Find`, to determine if people share a trust group by finding which set an element is in
> - `Destroy`

**No element is the member of two different sets, that is find(x) == find(y) if and only if x and y are in the same set**.


> [!Tip] Find return type 
> The return type of `find` does not matter as long as it can be used to compare if two sets are the same.
> 

### Using an array for our set

![[Pasted image 20260608134751.png]]

Here the **representative member** is the first element in the array that corresponds to the unique set, and is used for operations.

- Here the cost of `Find()` is $O(1)$, and the cost of `Union()` is $\Theta(n)$, as you need to iterate over the entire array to locate all elements in the *two* merging sets and update their values. This $\Theta(n)$ is not very desirable so can we do better? 

### Using a better structure
> We can use *Uptrees*, wherein a node point to **it's parent**. This implementation is still array based, but **the representative member is the root of the tree**

- If the array value is -1 then the index is a root node
- Otherwise the array value is the index's parent.
- $x, y \quad \text{are in the same tree} \iff \quad \text{x,y are in the same set}$


![[Pasted image 20260609231115.png]]


> [!Question] So how do our operations differ? 
>

### Find

Here, `Find()` is implemented as follows:
```cpp
int DisjointSets::Find(int x) {
	if (parent[x] < 0) return x;
	else
		return Find(parent[x]);
}
```
Here we are trying to find the *root* of the tree, in that if the current node is not the root we recurse through it's parents and so forth.

The running time here depends on the *height* of the trees in the disjoint set, where the best case is $O(1)$, the worst case is $O(n)$, but on *average* the running time $O(\log n)$.

### Union
> For union, given two arbitrary indices $x,y$, we want to join their trees. Naively, we could set the root of $x$ to $y$ or vice versa. But we can do better by setting the **root** of $x$ to the **root** of $y$ or vice versa.

![[Pasted image 20260609231138.png]]


### Smart Union / Ranked Union

> Smart union has two main variations, where the main idea is to keep the overall tree height at a minimum.

- Union by height - attach root of shorter tree to root of taller tree
- Union by size -

In union by height, to determine the height of the root; because a single node has a height of 0, we add 1 to the height and take the negative, such that $\text{root node value} = -(height + 1)$. Then, whatever root is *more* negative is considered the *taller* tree.

In union by size we want to merge the smaller tree into the larger tree, such that we attach the root of the smaller tree to the root of the larger tree. This aims to minimize the increased distance from the root for as many nodes as possible. Here the root nodes value is the negative of the number of nodes in the tree, where the more negative value is considered the larger tree.

**Both schemes guarantee that the height of the tree is $\Theta(\log n)$.**

![[Pasted image 20260609231159.png]]

**But we can still do better.**

## Path Compression

> During a `find()` operation we follow a path up the tree through a sequence of nodes, where each lookup is $O(1)$ as we are using an array. Using *path compression* we add an additional $O(1)$ operation for each entry we process and set the parent of each node along the path to the root found at the end of the path. 


> [!Danger] Path compression 
> Note that this is only possible using union by size. **Not**, union by height.


> [!Question] Path compression implementation 
> In order to actually implement path compression, we can add one small feature to our above `find()` implementation as follows:
> 

```cpp
int DisjointSets::Find(int x) {
	if (parent[x] < 0) return x;
	else
	return parent[x] = Find(parent[x]);
}

```


This is much better, as whenever we call `find()` again in the future, all nodes we have already visited will already point to their respective root node, instead of their parent.

Our `find()` function now has a running time of $\Theta(\log n)$, as

![[Pasted image 20260609231231.png]]


## Analysis
> An introduction to the iterative logarithm function $\log*(n)$ where the $*$ indicates that it is the iterative $\log$. 


$$
\log*(n) = \begin{cases} 0 \quad n \leq 1 \\  1 + \log * \log(n) \quad n > 1\end{cases}
$$

This function essentially "counts" how many times you can take $\log(n)$ before you hit the base case. For example, lets take the iterative $\log(n)$ of $n = 2^{65523}$ as follows:

$$
\begin{align}
\log(2^{65536}) = 65536 \implies \log(65536) = 16 & \implies \log(16) = 14 \implies \log(4) = 2 \implies \log(2) = 1 \\
 & \therefore \log*(2^{65536}) = 5
\end{align}
$$
Hence this function is extremely slow growing and very close to $O(1)$.

Thus in an uptree implementation of disjoint sets that uses **smart union find with path compression** with:
> Any sequence of $m$ union and find operations results in a worse case running time of $m\log*(n)$ where $n$ is the number of elements, but each operation has an *amortized* time complexity of $O(\log*(n))$ over a sequence.

## Graphs
> A graph $G$ is a collection of *vertices* (or nodes) connected by *edges*. Namely, a graph is a part of sets such that
>$$
 G = (V, E)
>$$

Where:
- $V$ is a set of vertices $\{ v_{1}, v_{2}, \cdots, v_{n} \}$
- E is a set of edges $\{ e_{1}, e_{2}, \cdots, e_{m} \}$, where each $e_{i}$ is a *pair* of vertices s.t. $e_{i} \in V \times V$

![[Pasted image 20260609231540.png]]

Now, if each edge is an **ordered pair**, that is $(A, B) \neq (B, A)$, then the graph is **directed**, otherwise if order does not matter and we can traverse from node to node however we so choose, then the graph is undirected.

## Graph Terminology
- Vertices adjacent to $v: N(v) = \{ u | (u, v) \in E \}$
- Edges incident to $v: I(v) = \{ (u, v) | u \in N(v) \}$
- Degree of $v: \text{deg}(v) = |I(v)|$ (number of nodes v is connected to)
- Path: a sequence of vertices connected by edges
- Simple path: a path with no repeated vertices
- Cycle: a path with the same start and end vertex
- Simple graph: no self loops *or* multi-edges
- Subgraph of $G = (V, E): (V' \subseteq V, E \subseteq E)$ and $(u, v) \in E' \implies u, v \in V'$
- Complete graph: each vertex is directly connected to every other vertex (maximum number of edges)
- Connected graph: a path exists between every pair of vertices
- Connected component: a maximally connected subgraph
- Acyclic graph: no cycles
- Spanning tree of $G = (V, E)$: Acyclic, connected graph with vertex set $V$.

## Weighted Graphs
> In weighted graphs, each edge is assigned a weight representative of some measure, typically cost, time, distance etc.

## Connectivity
- Undirected graphs are connected if there is a path between any two vertices
- Directed graphs are strongly connected if there is a directed path from any vertex to any other
- Digraphs are weakly connected if there is a path between any two vertices, ignoring direction
- A complete graph has an edge between *every* pair of vertices

![[Pasted image 20260609233223.png]]


> [!Tip] The Handshaking Theorem 
> if $G = (V, E)$ is an undirected graph, then we have that:
> $$
> \sum_{v \in V} \text{deg}(v) = 2 |E|
> $$
> 

![[Pasted image 20260609233521.png]]

## Degrees for Directed Graphs

The *in-degree* of some vertex $v \in V$ is denoted with $\text{deg}^-(v)$ and corresponds to the number of edges *entering* $v$. Whereas the *out-degree* of a vertex $v \in V$ is denoted with $\text{deg}^+(v)$ and corresponds to the number of edges leaving $v$. Moreover, we have that:
$$
\begin{align}
\text{deg}(v) & = \text{deg}^+(v) + \text{deg}^-(v) \\
\frac{1}{2}\sum_{v \in V}\text{deg}(v) & = \sum_{v \in V} \text{deg}^+(v) = \sum_{v \in V}\text{deg}^-(v) = |E|
\end{align}
$$

## Graph Density
- A *sparse* graph has $O(|V|) = O(n)$ edges, this is typically produced if every vertex has $O(1)$ neighbours.
- A *dense* graph has $\theta(|V^2|)$ edges, this is typically produced if every vertex has $\Theta(n)$ neighbours.
- Anything in between is either on the sparse or dense side depending on context.

