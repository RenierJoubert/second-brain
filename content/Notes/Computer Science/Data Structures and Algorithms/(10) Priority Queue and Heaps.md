#cs #cs221 

# Priority Queue and Binary Heaps

## Priority Queues
> The priority queue ADT works as a sort of to-do list based on value, in that the task with the 'highest' priority is removed first. In essence, the a priority queue is a collection organized to allow fast access and removal of the largest (or smallest) element. ==Namely, it does not have to be ordered.== 

The operations implemented in a priority queue are as follows:
1. `create`
2. `destroy`
3. `insert`
4. `removeMin` or `removeMax`
5. `isEmpty`

In essence, the idea behind a priority queue is that for any two elements $x, y$ in the priority queue, if $x$ has a priority value greater than $y$, then $x$ will be removed from the priority queue before $y$.

### Priority Queue Properties
1. PQ maintains a multiset of items (allows duplicates)
2. Two or more distinct items may have the same priority (this does not even really matter)

### Different PQ Data Structures
![[Pasted image 20260623184615.png]]

Here hash tables are not a suitable implementation for a PQ because hash tables are exceptionally good at looking up known values, however they are awful at doing ordered searches.

## Binary Heaps 

> A binary *heap* is a [[(06) Intro to Trees and BST| binary tree]] with **two** properties

1. Heaps are complete, meaning all levels except the bottom must be filled in, and the bottom leaves are as far left as possible.
2. Heaps are partially ordered, meaning for a `max heap` the value of a node is at least as large as its children's values (meaning the largest value in the tree is the root), and for a `min heap` the value of a node is no greater than its children's values (meaning the smallest value in the tree is the root).

![[Pasted image 20260623185405.png]]

For example a max heap would look something like this:
![[Pasted image 20260605135110.png]]

Note that two binary heaps can contain the exact same data, yet they can also appear in different positions ==without impacting the shape of the heap or removal order== because of this partially ordered property.

## Heap Implementation

> We can index tree nodes in an *array* very simply in order to implement a heap using arrays. Such that, nodes are indexed from top to bottom and left to right, which results in 0 gaps in our array.

![[Pasted image 20260605140222.png]]

```cpp
template <class LIT>
	class MinHeap {
		private:
			int size; // number of stored elements
			int capacity; // maximum capacity of array
			LIT* arr; // array in dynamic memory
	public:
		...
};
```

```cpp
template <class LIT>
MinHeap::MinHeap(int initcapacity) {
	size = 0;
	capacity = initcapacity;
	arr = new LIT[capacity];
}

```
## Referencing

> In order to traverse the heap it is necessary to find the index of the parents of a node or the children of the node. 

We have that the array is indexed from `0` to `n-1` where each level's nodes are indexed from $2^l-1$ to  $2^{l + 1}-2$ where $l$ corresponds  to the given level and the root is at $l=0$. Then, the children of a node at some index $i$ are the array elements indexed at $2i+1$ for the left child and $2i+2$ for the right child, and the parent of a node $i$ is the array element indexed at $\frac{i-1}{2}$.

## Insertion
> On insertion, the heap properties need to be maintained, that is the heap needs to remain a complete binary tree, and the tree needs to remain partially ordered.

The algorithm to do so first ensures the tree is complete, then it fixes the partial ordering of the tree. That is, it will first insert the item at the first available (right-most) leaf on the bottom level, then it will compare the new value to the parent and swap as necessary until that is not the case. This is referred to as ==bubbling up, heapify up, or percolating.==

For example, in a max heap:
![[Pasted image 20260623191353.png]]

If we wanted to add a node with value 81 into this heap, it would first be inserted as the left child of 29, which would be the array index 13 (the next available space, which is convenient to use as we can keep track of how many spaces we have used thus far), then we compare it with it's parent:
![[Pasted image 20260623191608.png]]
In this case 81 is strictly larger than 29, to access the node 29 we have to take our current index of 81 which is 13, subtract 1 from it and then divide by 2 which will give us the index of it's parent 29 $\frac{13-1}{2}=6$. After we get the index of 29 we swap 29 and 81 in our array as follows:
![[Pasted image 20260623191849.png]]
This process continues until the partially ordered property holds, at which point we obtain:
![[Pasted image 20260623191931.png]]
## Insertion Complexity
> The item is inserted first at the bottom level at the initial available space, which can be tracked using the `size` of the heap, hence we have $O(1)$ access using the array index, but for repeated heapify-up operations (bubbling up) we know that the limit on the number of levels in a complete tree is given by $O(\log n)$, thus the worst case complexity is $O(\log n)$.



## Construction Complexity
> A heap can be constructed by repeatedly inserting items into an empty heap, thus for $n$ items the complexity is $O(n\log n)$.

## Removal
> Heap properties must again hold after node removal, so to remove a node we first make a temporary copy of the root's data then similarly to the insertion algorithm we first need to ensure the heap remains complete so we replace the root node with the right-most leaf, and then swap the new root with its **largest-valued** child until the partially ordered property holds and return the copied root's data.

Basically we delete our given root node, then immediately replace it with right most leaf (which is just the last element in our array thus far), then we bubble that node down until the partially ordered property hold. This is called ==heapify down==.

For example, if we wanted to remove 98 from the following tree:
![[Pasted image 20260623192427.png]]

We first swap it with 17, so we would swap index 0 and index 12 (the last index occupied) in our array as follows:

![[Pasted image 20260623192510.png]]


Now, we let 17 bubble down, in that we replace it with it's largest valued child, which in this case is 86, here we use $2i+1$ to get $2\cdot 0 + 1 =1$ which is the index corresponding to 17's left node which 86, so after obtaining this we swap 86 and 17 as follows:

![[Pasted image 20260623192717.png]]

This repeats until our partially ordered property holds:

![[Pasted image 20260623192752.png]]

## Removal Complexity
> Replacing the root with the last element is always $O(1)$, but repeated heapify-down operations starting from the root level have a complexity of $O(\log n)$ as each heapify-down moves one level closer to the bottom. Moreover, removing a priority item in the worst case is also given by $O(\log n)$.

## Array Resizing
> In the case that our array should become full, we would need to expand it, but upon doing so because array indices correspond to node positions in the tree, we want them to remain in their original position, hence we should just copy our elements in the same indices in the new array.

![[Pasted image 20260623193041.png]]
## Creating Heaps
> To create a heap we need to first create an empty heap, then for each item, insert it into the heap. Ultimately the cost of this comes out to $O(n\log n)$ as are iterating over an unordered array of size $n$ and inserting them with a complexity of $O(\log n)$. But is there a better way?

## Floyd's Method
Starting with an un-ordered array we can use *Floyd's method*, that is we can create a heap from an unordered array by repeatedly calling heapify-down on the elements in the upper half of the array (left half) because the lower half are leaf nodes which are already heaps, hence we start with index $\left\lfloor\frac{n-1}{2}\right\rfloor$ (the last non-leaf node, 0-indexed) and work up to index 0 (the root). Note: in C++ this is `(size - 1) / 2` using integer division. 

This can be demonstrated as follows (note we start at index 6 as this is the middle of the array)
![[Pasted image 20260623193957.png]]
![[Pasted image 20260623194040.png]]
![[Pasted image 20260623194046.png]]
![[Pasted image 20260623194053.png]]
![[Pasted image 20260623194105.png]]
![[Pasted image 20260623194112.png]]
## Building Complexity
> When heapify-down is called on **half the array**, the cost per call is $O(\text{height of node})$, not a uniform $O(\log n)$. Most nodes near the bottom have small height, so the total work is far less than $O(n\log n)$.

The exact bound comes from summing the heights across all levels:
$$
\sum_{h=0}^{\lfloor \log n \rfloor} \frac{n}{2^{h+1}} \cdot h = O(n)
$$
So **Floyd's method builds a heap in $\Theta(n)$**, not $O(n \log n)$. This is a tighter result than repeatedly inserting $n$ items.

## Heapsort
> First build the heap from some unordered array, then remove the largest element (index 0) and swap it with the last element in the array and rearrange the heap, repeat until the array is fully sorted.
![[Pasted image 20260605152047.png]]
![[Pasted image 20260623195308.png]]
![[Pasted image 20260605152057.png]]

### Heapsort Complexity
| Case | Time | Space |
|------|------|-------|
| Best | $O(n\log n)$ | $O(1)$ |
| Worst | $O(n\log n)$ | $O(1)$ |
| Average | $O(n\log n)$ | $O(1)$ |

Heapsort is **in-place** ($O(1)$ auxiliary space) and has a guaranteed $O(n\log n)$ in all cases. Unlike merge sort it does not need a temporary array. However, it is **not stable** (equal elements may change relative order) and has poor cache performance compared to quicksort due to non-sequential memory access.

