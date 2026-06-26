#cs #cs221 

# B-trees and Hash Tables

AVL trees are convenient because their rotation invariant property can guarantee us $O(\log n)$ time for `find`, `insert`, and `remove`. BUT, these nodes are allocated one at a time in dynamic memory (the heap), hence there is no guarantee that these nodes will be *near* to each other in memory. Hence, if we wanted to improve our **caching** we should instead opt for an implementation that allocates memory contiguously. 

## Scales of Memory
> From fastest to slowest

1. CPU Registers (a few KB)
2. CPU Cache (a few MB)
3. RAM (GB)
4. Disk Storage (TB)

Generally, for large data sets, disk access dominates runtime.

Hypothetically, suppose if we had a very large data set stored in a BST, so large such that we cannot fit the entire tree in RAM and must reside on the disk. Different levels of memory of accessed in *blocks*, and for disk memory the block unit is called a **page**, and BST nodes may reside in different blocks, and a tree operation involving many nodes could require many expensive *disk seeks*. Hence, **to maximize our search our goal is to put more relevant data together in a single block, so it can be retrieved in a sing disk access**.

## B-tree Nodes
We know that a binary search tree node has 1 key and up to 2 children, making a 2-ary tree. What if we extended this to 3 children with two keys? Well that would look something like this:
![[Pasted image 20260619234446.png]]

The **branching factor** of a tree is the maximum number of children a node can have, for example the ternary tree on the right has a branching factor of 3. So how do we choose a suitable `m`? Well ideally the size of our B-tree is maximized to the fill a disk block, namely, the maximum total amount transportable in one trip.

## Properties of B-trees
A B-tree of order `m` is an **ordered** m-ary tree such that:
- For an internal node: # keys = # children - 1
- All leaves are at the same depth
- All leaves hold no more than $m-1$ keys
- All non-root internal nodes have between $\left\lceil  \frac{m}{2}  \right\rceil$ and $m$ children (meaning a non root node must be at least half filled)
- The root can be a leaf, or have between 2 and $m$ children.

![[Pasted image 20260619235403.png]]

## Search and Complexity
![[Pasted image 20260619235420.png]]

Regarding complexity, for every node we need to do a *linear* search through $m-1$ keys, hence our complexity is $O(m)$ per node.

But how many nodes do we need to search? In the worst case we search $O(height)$, then our search is $O(m \cdot height)$.

But what about the *worst case?* The worst case possible will be in a tree with maximum height, but a minimum number of keys, as this minimizes the number of nodes except for the root level. 
![[Pasted image 20260620000306.png]]

Here, the total number of nodes is given by a geometric sum as follows:
$$
\begin{align}

\text{number of nodes} = x  & = 1+2\sum_{i=0}^{h-1}t^i \\
 & = 1 + 2\left( \sum_{i=0}^h t^i - t^h \right) \\
 & = 1 + 2\sum\left( \frac{{1-t^{h+1}}}{1-t}-t^h \right) \\
 & = 1+2\left( \frac{{1-t^{h+1}-t^h+t^{h+1}}}{1-t} \right) \\
 & = 1+2\left( \frac{{t^h-1}}{t-1} \right)

\end{align}
$$
Hence, the number of keys $n$ is bounded such that:
$$
n \geq 1 +2(t-1)\left( \frac{{t^h-1}}{t-1} \right)\geq 1+2(t^h-1)\geq 2t^h-1
$$
Thus,
$$
h\leq \log_{\frac{m}{2}}\left( \frac{{n+1}}{2} \right) \in O(\log_{m}n)
$$
## Insertion
> Like a BST insertion, we first search for the insertion location. In B-trees, insertion will start at a leaf node

- If the leaf node has space, we insert the key into the node
- Otherwise, we split the node and send the median value up
- Essentially, a tree will grow by creating a new root node.

For example,
![[Pasted image 20260620213818.png]]

![[Pasted image 20260620213740.png]]

## Removal
> Removal is extremely messy and is not examinable in this course.

In removal, we first find the node containing the key we wish to remove, then:
- If the node is internal, we swap the key with the predecessor (or successor)
- Remove the key which is now a leaf denoted X
- While node X has $\max\left\{  0, \left\lceil  \frac{m}{2} -2  \right\rceil  \right\}$ keys:
	- If a sibling has a spare key: move it up, bring down the parent's separator key, then stop
	- Merge with a sibling and bring down the parent's separator key
	- Then, if X is the root,
		- If X has 0 keys and 1 child, remove X and make the child the new root and stop.
	- X = parent of X and continue fixing upwards

![[Pasted image 20260620214738.png]]
![[Pasted image 20260620214744.png]]

## Dictionary ADT
> A dictionary ADT stores key-value pairs and is mainly used for searching, such that it should support the following operations:

- `Create`
- `Destroy`
- `Insert`
- `Find`
- `Remove`

## Implementation
> We've seem from previous data structures the different run times associated with `insert`, `remove`, and `find` as follows:

![[Pasted image 20260620215118.png]]

For an example, suppose there is a company with 300 numbered lockers in its office building, such that every employee is assigned a locker. Then, why not use an array for our dictionary ADT to access emloyees by index using their assigned locker number when we need to do our payroll etc, as this will have insert, remove, and find complexity of $O(1)$. Well, how well does this *scale?*

Well how about we visualize this with a larger example. For example, suppose we want to store Canadian census data, such that we want to access every Canadian based on their telephone number (10 digits), meaning every single possible telephone number can be represented with an integer between 0 and 9,999,999,999, which we can use as our array index. 

However, because Canada's population is only around 40 million, over 99.6% of our array will be empty!! (And it probably will not even fit in our RAM).

So what do we do?

For example what if we wanted to store data by name and not an integer representative as an index. Well, one possible way could be to encode a string to an integer, such that each character $[a, z]$ encodes as an integer $[1, 26]$ and the sum corresponds to that entries index. Well, this fails rather quickly, as strings with identical characters will map to the same value. 

While having identical mappings is not a *huge* issue, it is something avoidable that we would like to do, and rather opt for unique mappings. Namely, for the previous example of characters encoding to an integer, to preserve uniqueness we can make it so that the order of characters is important, such that the string is treated as a base-26 number, then we can multiply each letter's value by $26^i$ where $i$ corresponds to the position of the letter in the word.

The issue with is though, is that there are far too many possible combinations, most of which are meaningless and useless. 

So, how do we limit the space in our array?

Well, a smart idea would be to fix the array size based on the amount of data to be stored, and to map the key value to an array element, but convert that key to an integer index by using a **hash function**. This is the basic premise behind hash tables. 

## Hash Tables
> A hash table uses an array to store data, wherein the data often consists of complex types, and one attribute of the object is used as the *key*

A *hash function* is then used to map a key to an array index in **2 steps**
1. The key is first converted to an integer
2. The integer is then mapped to an array using some function (often modulo)

However, hash functions can map two different keys to the same index, this is referred to as a *collision* and are often unavoidable in practical uses. A good hash function can reduce the number of collisions though, but it is still unavoidable because of the pigeonhole principle.

### Pigeonhole principle
Try to fit $k+1$ pigeons into $k$ pigeon sized holes. Or, in our case, try to hash without collision $m$ keys into $n$ array indices with $m \gg n$. 

![[Pasted image 20260620222359.png]]

## Hash Functions
![[Pasted image 20260620222552.png]]
Because we want our insertion to be $O(1)$, it then requires our hash function to also be $O(1)$. Namely, they need to be fast and easy to calculate. Moreover, they must be deterministic with no randomness, such that for any input it must always return the same value. 

The trickier issue involves the uniformity and scattering of the data, namely we want our data to be distributed evenly over our array. What this implies though, is that there will be free space in the array. 

Additionally, because of uniformity, we want our hash function to distribute results evenly over the entire key domain, but also any subset of that key domain (that could possibly be biased).

Essentially, a good hash function will generate each value in the output range with equal probability. This should hold for the key domain and all possible subsets. 

## Some Bad Examples
![[Pasted image 20260620223513.png]]

![[Pasted image 20260620223703.png]]

## General Hash Function Principles
1. Use the entire key in the hash function
2. If modular arithmetic is used, make the table size a prime number

For example, a simple but effective hash function is as follows:
- Convert the key value to an integer $x$
- $h(x)=x \pmod{tablesize}$
- Where the tablesize is the first prime number larger than twice the size of the number of expected values (this wastes at least half of our array capacity, but we'll see later why this is good).

