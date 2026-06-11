#cs #cs221 

# AVL Trees

> An AVL tree (**A**delson-**V**elsky and **L**andis tree) is a **balanced binary search tree**. Such that ==each node's left and right subtrees differ in height by at each 1.== In order to maintain this we can *rebalance* using rotations when there is an excessive height difference. Ultimately, in order to support the extra height information, AVL tree nodes contain extra data compared to normal BSTs.


> [!Theorem] AVL Tree Height 
> The height of an AVL tree with $n$ key values is $O(\log n)$.  

This height of $O(\log n)$ can be proven as follows, first let $N_{h}$ represent the *minimum* number of nodes in an AVL tree of height $h$, then since the AVL property must be satisfied at every node, the children of such a tree must also be minimal. We can further minimize the size by maximizing the height difference between the children, thus $N_{h} = 1 + N_{h-1}+N_{h-2}$. And, 
$$
\begin{align}
N_{h} & = 1 + N_{h-1}+N_{{h-2}} \\
 & = 1 + (1 + N_{h-2} + N_{{h-3}}) + N_{h-2} \\
 & = 2 + 2N_{h-2} + N_{h-3} > 2N_{h-2}
\end{align}
$$
We can repeat this pattern to find that:
$$
\begin{align}
N_{h} & > 2 \cdot 2 N_{h-4} \\
 & > 2 \cdot 2 \cdot 2N_{h-6} \\
 & \cdots \\
 & > 2^k \cdot N_{h-2k} \\
 & > 2^{h/2} \quad \text{for} \quad k = \frac{h}{2} \\
 & \therefore \\
 h & < \log(N_{h}) \quad h \in O(\log n) &   
\end{align}
$$
## Rotations

> When inserting elements into an AVL tree they need to be inserted at the *correct* position. And the shape of the tree is determined by both the values of the elements inserted, and the order that they are inserted in, meaning one or more tree shapes can contain the same values. Hence, a tree's shape can be preserved while maintaining the AVL properties.

### Left Rotation
> A left rotation looks something like this.
![[Pasted image 20260609224931.png]]

But, we can walk through a more concrete example:

![[Pasted image 20260609225314.png]]

![[Pasted image 20260609225325.png]]

### Right Rotation

![[Pasted image 20260609225640.png]]

![[Pasted image 20260609225652.png]]

![[Pasted image 20260609225658.png]]

## AVL Nodes
> The implementation for an AVL node is as follows:

```cpp
enum balance_type {LEFT_HEAVY = -1, BALANCED = 0, RIGHT_HEAVY = +1};
class AVLNode {
	public:
		int data; // or template type
		AVLNode* left;
		AVLNode* right;
		balance_type balance;
		AVLNode(int value) { ... }
		AVLNode(int val, AVLNode* left1, AVLNode* right1) { ... }
}
```


Moreover, there are 4 cases of imbalance:
![[Pasted image 20260609230030.png]]

However, the best way to avoid this is to just never let the tree become imbalanced in the first place by inserting nodes correctly.

## AVL Insertion

> AVL insertion is simply just ordinary BST insertion, but followed with rotations to maintain balance, that is, ensuring AVL properties are satisfied before and after insertion. Namely, if the balance attribute of a subtree's root node becomes critical (-2 or +2) after insertion, then we need to rebalance.

The code for AVL insertion would look something like this:
```cpp
if root is NULL
	Create new node containing item, assign root to it, and return true
else if item is equal to root->data
	item exists already, return false
else if item < root->data
	Recursively insert the item into the left subtree
	if height of left subtree has increased (increase variable is true)
		balance--;
		if balance == 0, reset increase variable to false
		if balance < -1
	reset increase variable to false
	perform rebalanceLeft
else if item > root->data
	(symmetric to left subtree case, incrementing balance)
```

### Insertion Example
