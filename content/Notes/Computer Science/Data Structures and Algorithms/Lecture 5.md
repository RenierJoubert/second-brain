#cs #cs221 

# Recursive Sorting

## Merge Sort and Sorted Sub-arrays

> Repeatedly divide sub-arrays in half **until each sub-array contains a single element**, an element by itself is already sorted, then merging two single-element arrays is only a single comparison. The merge step then copies the sub-array halves into a temporary array, and the merged elements are copied from the temporary back into the original array.

For example:

![[Pasted image 20260520152827.png]]

## Merge Sort Implementation
```cpp
void MergeSort(vector<T>& arr) {
	MSort(arr, 0, arr.size() – 1);
}
void MSort(vector<T>& arr, int low, int high) {
	if (low < high) { // array has more than 1 element
		int mid = (low + high) / 2;
		// sort the left half
		MSort(arr, low, mid);
		// sort the right half
		MSort(arr, mid+1, high);
		// Merge the sorted halves
		Merge(arr, low, mid, high);
	}
}
```

Where `merge` is an iterative function.

How many comparisons are made in the merge step?
- In the worst case we make $n-1$ comparisons as we need to check every subarray index
- In the **best** case we make $\frac{n}{2}$ comparisons, as we reach the end of one subarray and copy the rest of the second subarray. (Because we can assume the arrays are non-decreasing, so after comparing the 1st element in one array with all the elements in the second array, if that element is greater than all elements in the second array then we can just copy over the second subarray in front of the first array).
- However in **both** cases we are still copying $n$ subarray

By recursion tree analysis we see that:

![[Pasted image 20260522134710.png]]


> [!Tip] Space Complexity
> Please observe here that the number of recursive calls made is $\log_{2}(n)$, hence the *space* complexity of merge sort is $O(\log(n))$.


Where `c` is some constant that includes the cost of merging, the mid-point calculation, and the base-case check. And `b` is come constant representative of the base case check cost.

However, this recursion tree analysis does not always work this well. In some cases we can analyze using *recurrence*. In which if the algorithm is recursive, we can analyze it recursively.
![[Pasted image 20260522135455.png]]

![[Pasted image 20260523181403.png]]


> [!Tip] Linked Lists vs Arrays
> Using merge sort on a linked lists uses only $O(1)$ extra memory because we can merge by re-linking pointers. Whereas compared to arrays which use $O(n)$ extra memory, as it needs to allocate a temp array to hold elements while they are being copied.

## Proving Correctness

> We claim that `MSort(arr, low, high)` sorts an array `arr[low..high]`. Let `n = high - low + 1`. We can prove this using *strong induction*

**Base case:**
`n=0`, `n=1`, the array is empty or has size `1`. In this case the array is already sorted and the sorted order is preserved when we do nothing.

**Inductive step:**
Consider arbitrary $1 < k \leq arr.size()$ and assume that `MSort(arr, low, high)` sorts the array `arr[low..high]` for all $0 \leq high - low + 1 < n$. We now need to show that `MSort` sorts all `arr[low..high]` for all $n=high - low +1$.

Note we do also need to prove the correctness of `merge`.

Because after our first division, the left subarray and the right subarray are both covered by our inductive hypothesis hence our recursion correctly sorts these two pieces. Next we call `Merge`. 

The merge implementation is as follows:

```cpp
void Merge(vector<T>& arr, int low, int mid, int high)
{
	vector<T> tmp;
	int a = low, b = mid + 1;
	for (int k = low; k <= high; k++) {
		if (a <= mid && (b > high || arr[a] < arr[b]) )
			tmp.push_back(arr[a++]);
		else
			tmp.push_back(arr[b++]);
	}
	for (int k = low; k <= high; k++)
		arr[k] = tmp[k – low];
}

```

### Termination
In the recursive case, $low < high$ and so $low \leq \frac{low + high}{2}<high$ and each half has at least one element and at most $n-1$. Thus, in a finite number of recursive calls we reach the base case.

## Sorting Algorithms So Far

![[Pasted image 20260522141550.png]]

Note that no matter the circumstance, merge sort ==always== has a run time of $O(n\log(n))$
## Can We Do Better?

> Unfortunately, it has been proven that nothing can do better than merge sort when it comes to general purpose sorting algorithms.

## Comparison Based Sorting

> In order for a sorting algorithm to be correct, it *must* be able to transform every/any input permutation into the ordered permutation.

Because of this we can *prove* that there is no better running time for a general purpose sorting algorithm as follows:

![[Pasted image 20260522142151.png]]

In this tree, each path from a root to a leaf is the sequence of decisions made to sort some input, meaning for an array of size $n$ there are $n!$ different input permutations. Hence the algorithm must be able to sort every permutation out of $n!$ different permutations. Moreover, the shortest tree with $n!$ leaves is given by a *perfect* tree with $n!$ leaves, such that the bottom level of the tree has $2^h$ nodes where $h$ is the height of the tree, hence we have that:
$$
\begin{align}
2^h & = n! \\
\log(2^h) & = \log(n!) \\
h & = \lceil \log(n!) \rceil  \\
& \geq \sum_{i=1}^n \log(i) \quad \bigg( \log(a \cdot b) = \log a + \log b\bigg)\\
& \geq \sum_{i=\frac{n}{2}}^{n}\log\left( i \right) \\\
& \geq\frac{n}{2}\log\left( \frac{n}{2} \right) \\
& \in \Omega(n\log(n))
\end{align}
$$
As we recall that $n!$ is the number of different input permutations (paths).

Meaning the longest decision path can be no shorter than $\frac{n}{2}\log\left( \frac{n}{2} \right)$, and therefore the worst case of any comparison sorting algorithm can be **no better than** $\Omega \in (n\log(n))$. 

### Proving Recurrence Generally
![[Pasted image 20260522145919.png]]

For example, in **binary search** we can obtain and solve the recurrence relation as follows to recover it's running time.

![[Pasted image 20260522150033.png]]

However, this only works for *ordered* arrays. We can implement the same technique for different examples but without using the inequality for the base case cost and $T(n)$ cost.

## Trees

> Trees are constructed from nodes similar to linked lists, however each node may now have pointers to one or more other nodes. The starting point of the tree is called the *root* node of the tree. The nodes in a tree are connected by *edges* to other nodes. In essence, a tree is a connected graph, in that there is a path to every node in the tree, and a tree has one less edge than the number of nodes, $n-1$.

![[Pasted image 20260522150819.png]]

![[Pasted image 20260522150805.png]]


> [!Theorem] Terminology
> A *leaf* is a node with no *children*.
> 
> A *path* is a sequence of *nodes* $v_1 \cdots v_n$ where $v_i$ is a parent of $v_{i+1}$
> 
> A *subtree* is any node in the tree along with all of it's descendants
> 
> A *binary tree* is a tree with at most **two** *children* per node. These children are referred to as the *left* or *right* child.
> 
![[Pasted image 20260522151215.png]]
![[Pasted image 20260522151236.png]]

- The *==height==* of a given node $v$ is the length of the longest path from $v$ to a leaf, and the height of a tree is the height of the root node.
- The *==depth==* of a node $v$ is the length of the path from $v$ to the root node. This is also sometimes called the level of the node.

![[Pasted image 20260522151721.png]]

## Perfect Trees

> A given binary tree is *perfect*, if no node has **only** one child, and **all** leaves have the same depth. Hence, a perfect binary tree of some height $h$ has $2^{h+1}-1$ nodes, of which $2^h$ are *leaves*. Finally, perfect trees are also *complete*.

![[Pasted image 20260522151947.png]]

A binary tree is said to be *complete*, if:
- The leaves are on at most two different levels.
- The second to bottom level is completely filled in.
- The leaves on the bottom level are as far to the left as possible.

![[Pasted image 20260522152109.png]]

A binary tree is said to be *full* if:
- Every node has exactly 0 or 2 children.

## Binary Tree Implementation
```cpp
template <typename T>
class Tree {
	public:
	// ..., insert, remove, traverse etc.
	private:
		struct Node {
			T data;
			Node* left;
			Node* right;
		};
	Node* root;
	// ... and other private functions
};
```

