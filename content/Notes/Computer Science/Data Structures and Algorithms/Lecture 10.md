#cs #cs221 

# Priority Queue and Binary Heaps

## Priority Queue Intro
!! do this

## Binary Heaps 

> A *heap* is a [[content/Notes/Computer Science/Data Structures and Algorithms/Lecture 6| binary tree]] with **two** properties

1. Heaps are complete, meaning all levels except the bottom must be filled in, and the bottom leaves are as far left as possible.
2. Heaps are partially ordered, meaning for a `max heap` the value of a node is at least as large as its children's values, and for a `min heap` the value of a node is no greater than its children's values.

!! insert annotated slide for max min heaps

![[Pasted image 20260605135110.png]]

Note that two binary heaps can contain the exact same data, yet they can also appear in different positions without impacting the shape of the heap or removal order.

## Heap Implementation

> We can index tree nodes in an *array* very simply in order to implement a heap using arrays. Such that, index nodes from top to bottom and left to right, which results in 0 gaps in our array.

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

We have that the array is indexed from `0` to `n-1` where each level's nodes are indexed from $2^l-1$ to  $2^{l + 1}-2$ where $l$ corresponds  to the given level and the root is at $l=0$. Then, the children of a node $i$ are the array elements indexed at $2i+1$ and $2i+2$, and the parent of a node $i$ is the array element indexed at $\frac{i-2}{2}$.

## Insertion
> On insertion, the heap properties need to be maintained, that is the heap needs to remain a complete binary tree, and the tree is partially ordered.

The algorithm to do so first ensures the tree is complete, then it fixes the partial ordering of the tree. That is, it will compare the new value to the parent and swap as necessary until the is not the case; *bubbling up*.

## Insertion Complexity
> The item is inserted first at the bottom level at the initial available space, which can be tracked using the `size` of the heap, hence we have $O(1)$ access using the array index, but for repeated heapify-up operations (bubbling up) we know that the limit on the number of levels in a complete tree is given by $O(\log n)$, thus the worst case complexity is $O(\log n)$.

## Construction Complexity
> A heap can be constructed by repeatedly inserting items into an empty heap, thus for $n$ items the complexity is $O(n\log n)$.

## Removal
> Heap properties must again hold after node removal, so to remove a node we first make a temporary copy of the root's data then similarly to the insertion algorithm we first need to ensure the heap remains complete so we replace the root node with the right-most leaf, and then swap the new root with its **largest-valued** child until the partially ordered property holds and return the copied root's data.

!! add removal example slides.


> [!Question] How do you know when you have reached the bottom level of the heap?

## Removal Complexity
> Replacing the root with the last element is always $O(1)$, but repeated heapify-down operations starting from the root level have a complexity of $O(\log n)$ as each heapify-down moves one level closer to the bottom. Moreover, removing a priority item in the worst case is also given by $O(\log n)$.

## Creating Heaps
> To create a heap we need to first create an empty heap, then for each item, insert it into the heap.

Starting with an un-ordered array we can use *Floyd's method*, that is we can create a heap from an unordered array by repeatedly calling heapify-down on the elements in the upper half of the array because the lower half are leaf nodes which are already heaps, hence we start with index $\frac{n}{2}$ and work up to index 0 (from the last non-leaf node to the root).

## Building Complexity
> When heapify-down is called on half the array, the cost has complexity $O(height)$ and it would appear that the build cost is $O(n\log n)$ ==but its actually just== $O(n)$ because the upper bound on the number of edges in a tree with $n$ nodes is $n-1$ hence the worst case number of swaps is $O(n)$.

## Heapsort
![[Pasted image 20260605152047.png]]

![[Pasted image 20260605152057.png]]
![[Pasted image 20260605152123.png]]




