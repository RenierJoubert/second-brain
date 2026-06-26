#cs #cs221

# Binary Tree Traversal and Search

## Implementation

The ADT implementation for a binary tree takes the following form:
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

## Traversal
> There are four main traversal methods for binary trees
> 1. `In Order`
> 2. `Pre Order`
> 3. `Post Order`
> 4. `Level Order`

### In Order
> In Order traverses the tree by recursing through the left node subtree, then the root, then the right node subtree. (Left, Root, Right). Note that an In Order traversal provides the nodes in **increasing** order.

The inOrder traveral function is implemented as follows:
```cpp
void inOrder(Node* nd)
{
	if (nd != nullptr)
	{
		inOrder(nd->leftchild);
		visit(nd);
		inOrder(nd->rightchild);
	}
}
```

Where the `visit` function will carry out whatever the purpose of the traversal is.

### Pre Order
> Pre Order traverses the tree by visiting first the root node, but then *recursing* into the left and right *subtrees*. (Root, Left, Right)

![[Pasted image 20260528001209.png]]

In the above example, the order is 17 -> 13 -> 9 -> 11 -> 27 -> 20 -> 39.

### Post Order
> Post Order traverses the tree by recursing through the left *subtree*, then the right *subtree*, and then the root node. (Left, Right, Root)

![[Pasted image 20260528001354.png]]

In the above example, the order is 11 -> 9 -> 16 -> 13 -> 20 -> 39 -> 27 -> 17

## Level Order
> Level Order traversing the tree left to right level by level.

![[Pasted image 20260529221443.png]]

## Visiting
> Visiting is just an operation to be done at the current node, this could be counting or arithmetic.

For example, if we wanted to find the height of a tree we could use:
```cpp
int Height(Node* nd) {
	if (nd == nullptr) // empty tree
		return -1;
	else
	return max(Height(nd->left), Height(nd->right)) + 1;
} 
```

This would be a `postOrder` traversal with running time $\Theta(n)$.

## Maps
> Maps are a form of ADT, also sometimes referred to as a dictionary. Maps store key-value pairs with which we may create, destroy, insert, find, and remove. Where values may be any type and where keys may be any comparable type.

## Sets
> Sets are a form of ADT which stores keys that can be any comparable type and allows us to test for membership quickly. Set operations include create, destroy, insert, find, and remove.

## Binary Search Trees
> Binary search trees are trees such that for all nodes in the tree, all nodes in the left subtree have values less than the root, and all nodes in the right subtree have values greater than the root.

This way if we have the value of the node we are looking for, it drastically speeds up our search as if the current node is greater than the node we are looking for, search left, if less than the node we are looking for, search right. In the **worst case** we will make as many comparisons as the height of the tree + 1.

### Insertion
>The BST property needs to still hold pending insertion. Hence, the new node must be inserted in the correct position, this is done by performing a *search*. If the search ends at a null-terminated child, (left or right), make that child refer to the new node. This is also about the same cost as the search algorithm with $O(height)$.

### Maxima and Minima
> Naturally, to find the *minimum* of a BST we can simply follow the left child links until there are no more. Similarly, to find the *maximum* of a BST we can follow the right child links until there are no more.

### Removal
Again, the BST property still needs to hold following removal of a node, meaning the internal structure of the tree will need to considered and there are a number of cases to address. For one, the node could have a certain number of children.

![[Pasted image 20260528004723.png]]

For example, a node with no children is trivial. Whereas a node with one child is more involved.

![[Pasted image 20260528004805.png]]

To remove a node with one child, we need to first find the node, and its parent, then moreover determine if the node to be removed is a left or right child. 

![[Pasted image 20260528005047.png]]

Notably, removal proves to be most difficult when the node has two children. When this is the case we need to find the node's *predecessor*. The node's *predecessor* ==is the node in the tree with the largest value less than the node's value== and is ==the right-most node in the left-subtree==. This is convenient for us because the predecessor **cannot** have a right child and therefore has at most one child. 

![[Pasted image 20260528005450.png]]

![[Pasted image 20260528005839.png]]

![[Pasted image 20260528005849.png]]

Furthermore, a node can also have a *successor*. The *successor* to a node is ==the left-most child of it's right subtree, such that it has the smallest value greater than it's ancestors value== and cannot have a left-child. The successor can also be used to replace a removed node.

![[Pasted image 20260528005701.png]]
![[Pasted image 20260528005709.png]]

## Efficiency
> The efficiency of BST operations is proportional to the height of the tree, namely, all three operations `insert`, `delete`, and `search` are $O(height)$. Where if the tree is complete, then it's height is given by $\lfloor \log(n) \rfloor$.

![[Pasted image 20260528010235.png]]

To do better however, we would ideally like our BST to be complete or *balanced*. Meaning, all leaves are about the same distance from the root, that is the height of a node's right subtree is **at most** 1 different from the height of it's left subtree. Nevertheless, in order to guarantee a balanced BST we need to make the structure and the insertion and removal algorithms more complex, that is we need to use *red black trees*. 