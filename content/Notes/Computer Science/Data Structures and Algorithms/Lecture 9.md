#cs #cs221 

# Hash Tables Continued

## Collision Handling
There are two main ways to deal with collisions in hash tables,
1. Open addressing
2. Separate chaining

### Open addressing
> In open addressing we first attempt to insert our element at some space, but if that is occupied we then insert the element elsewhere

Namely, start at the index which the hash function has mapped the inserted item, then look for a free space in the array following a particular search pattern, known as *probing*.

There are three main ways of open addressing schemes,
1. Linear probing

$$
\left(h(\text{key})+p\right) \pmod{\text{capacity}} \quad \forall p =0, 1, 2, \cdots
$$

In linear probing the hash table is searched sequentially starting from the original hash location. Then, each time the table is probed for a free location we add one to the index. Note that this is modulo so if we reach the end of the array we will wrap around to `arr[0]`.

The issue with linear probing however, is that it leads to primary clustering which reduces the efficiency of the hash table.

An example of linear probing is as follows:

![[Pasted image 20260620230249.png]]
![[Pasted image 20260620230306.png]]

In brief, linear probing has the potential to create some very bad run away clustering which can tank the overall efficiency. That is, as a cluster grows larger, the more likely you are to land in it and contribute to it, moreover, clusters can also begin to join with one another.

2. Quadratic probing
With quadratic probing, we are still counting the number of probes, but we prevent primary clustering by moving elements further away from the initial location each time. However, this now produces secondary clustering, and this delays collision but is generally not a significant problem. 

Namely, in quadratic probing, for each probe $p$ we add $p^2$ to the original location index. 

![[Pasted image 20260620232343.png]]

Nevertheless, quadratic probing can potentially have **worse performance than linear probing** *if* our load factor is greater than one half, such that $\lambda > \frac{1}{2}$. That is, after some time a sequence of probes can repeat itself and an element may never be able to find a space. Whereas with linear probing this is not an issue, because as long as there is at least 1 free space in the array, linear probing will find it. 
### Separate chaining
> Insertion of an element at index i involves insertion into some other storage structure at that index.

Separate chaining takes an entirely different approach to collisions, in that, each entry in the hash table is a pointer to a linked list (or some other dictionary compatible data structure), wherein if a collision occurs then the new item is added to the end of the list at the appropriate location. 

With separate chaining performance is maintained even with high load factors $\lambda >1$.

![[Pasted image 20260620235545.png]]
## Searching
> Searching for an item is very similar to insertion. In that we need to use the same hash function, and collision resolution. 

For example,
![[Pasted image 20260620230510.png]]

## Efficiency
When analyzing the efficiency of hashing it is necessary to discuss the load factor, denoted $\lambda$, such that $\lambda = \text{number of items / table size}$. 

Essentially, as the table fills, the load factor increases and hence the chance of a collision also increases. Specifically performance is inversely proportional to the load factor, as unsuccessful searches make more comparisons and only end when a free element is found. 

Because of this we need to base the table size on the largest number of possible items, but also such that our load factor does not exceed $\frac{1}{2}$.
![[Pasted image 20260620231331.png]]

In the above example, the left side corresponds to the worst-case distribution, and the right represents the best-case.

## Double Hashing
> In linear probing, the probe sequence is independent of the key. But, **double hashing can produce a key-dependent** probe sequence. Namely, a second has function $h_{2}$ determines the probe sequence.

In general, the second hash function must:
- $h_{2}(\text{key})\neq 0$
- $h_{2}\neq h_{1}$

A typical $h_{2}$ is $p-(\text{key} \pmod{p})$ where $p$ is some prime number that is relatively small compared to your array size.

For example,
![[Pasted image 20260620233653.png]]

![[Pasted image 20260620233659.png]]
![[Pasted image 20260620233900.png]]

To prevent cycles, double hashing ensures that the value of the second hash function is not a factor of the array capacity, and one way to do this is to make the array capacity a prime number, hence preventing cycles.

Similarly to linear probing, double hashing is guaranteed to find a free space if at least one exists because of this.
![[Pasted image 20260620234348.png]]
## Removals and Open Addressing
If using linear probing problems can arise with removals, for instance, suppose we remove some element in the middle of a cluster (this can be accomplished easily enough), but then we wish to search for some element *after* the element we just removed. Because, in linear probing when we search for an element, we know that it will be contained within its given cluster because of how we hashed it, so if we then search for it also using linear probing and reach this empty space, our search will fail; even though the element is actually in the array. So, how do we combat this?

One way to get around this is to use *tombstones*, that is we can mark a location as empty, occupied, or removed. Wherein locations in the removed state can be re-used as items are inserted.

This does have some negative side effects though, as after many removals the table can become clogged with tombstones that still are scanned as part of a cluster in our search implementation. **But, by re-hashing periodically which is $O(n)$, we avoid this entirely.**

![[Pasted image 20260620235107.png]]

Moreover, when the array becomes full a good policy for re-sizing would be to increase its size by two, however then the array would no longer be a prime number so we would need to do a little bit of searching for the next greater prime number.

## Some General Discussion
![[Pasted image 20260620235720.png]]

