#cs #cs221 
# AVL Trees
> An AVL tree (**A**delson-**V**elsky and **L**andis tree) is a **balanced** BST, such that each node's left and right subtrees differ in height by **at most** 1. This is maintained by doing **rotations** when insertion or removal creates a height imbalance. To allow this, AVL tree nodes contain extra information to support this height information.

AVL trees are advantageous, because in a normal BST for instance, it is not required to be balanced, hence there are possible paths whose lengths are linear and not logarithmic which would be more optimal for search etc.

For example, we can visualize this balancing feature of AVL trees as follows:
![[Pasted image 20260623143751.png]]

For another example we can see what an unbalanced tree might look like:
![[Pasted image 20260623143839.png]]

### AVL Tree Height
> The height of an AVL tree containing $n$ key values is $O(\log n)$ because they are balanced. Intuitively, this can be understood by recognizing that for some **fixed** height of $h$, a tree that contains fewer nodes will then have a larger height-to-node ratio, which can be observed as follows:
> ![[Pasted image 20260623144143.png]]
>

### Proving AVL Tree Height
> We theorize that the height of an AVL tree with $n$ nodes is $O(\log n)$.

*proof:*

Let $N_{h}$ represent the minimum number of nodes in an AVL tree of height $h$. Since the AVL property must be satisfied at every node we have that the children of such a tree must also have the minimum number of nodes. Hence we can construct the tree recursively such that:
$$
N_{h}=1+N_{h-1}+N_{h-2}
$$
This can be seen with the following diagram (keep in mind that we are allowed to have a height difference)
![[Pasted image 20260623144907.png]]
Manipulating our recursive formula we see that:
$$
\begin{align}
N_{h} & = 1 + N_{h-1}+N_{{h-2}} \\
 & = 1 + (1 + N_{h-2} + N_{{h-3}}) + N_{h-2} \\
 & = 2 + 2N_{h-2} + N_{h-3} > 2N_{h-2}
\end{align}
$$
We can repeat this pattern to see that indeed the height of our tree is logarithmic to our number of nodes:
$$
\begin{align}
N_{h} & > 2 \cdot 2 N_{h-4} \\
 & > 2 \cdot 2 \cdot 2N_{h-6} \\
 & \cdots \\
 & > 2^k \cdot N_{h-2k} \\
 & > 2^{h/2} \quad \text{for} \quad k = \frac{h}{2} \\
 & \therefore \\
 & \log(N_{h}) > \frac{h}{2} \implies h < 2\log(N_{h}) \quad h \in O(\log n) &   
\end{align}
$$
### AVL Rotations
> An item must be inserted into the tree at the correct position, but the shape of the tree is determined by not only the values of the items inserted into the tree, but also the order of which those values are inserted. Hence, **there is more than one tree that contains the same values, meaning a tree's shape can be rotated while the BST property is maintained**. Note that this also maintains the in-order traversal.

Generally, we would like to use rotations to maintain the AVL balance property by transferring height from one subtree into it's sibling's subtree when there is an excessive height difference.

### Left-Rotation Example
> For example, to rotate the given tree we will perform the following operations:
> ![[Pasted image 20260623145754.png]]
> 


Here we are doing a left rotation on 32, thus we are sliding the 32 tree down to the left, and the 40 tree will move up into 32's spot. (Drawing it out on paper helps).

Here because 32 is sliding down and 40 is sliding up into 32's place, 32 is severing its connection with its right child 40, and then when we slide 40 up into 32's spot 37 will be where 32 is supposed to be, thus we need a new spot for 37, which conveniently can be put as 32's right child as it no longer has 40 as a right child.

So we set 32's (x) right child to 40's (temp) left child and detach temp's left child afterwards:

![[Pasted image 20260623151207.png]]

Now because 32 is sliding down and 40 no longer has a left child, we make 32 (x) the left child of 40 (temp), also because 40 is taking 32's spot, 40 now needs to be connected to 32's parent, so we make 40 (temp) the left child of 32's (x) parent.
![[Pasted image 20260623151336.png]]

After this our rotation is complete and we are left with the following tree:

![[Pasted image 20260623151357.png]]

### Right-Rotation Example
> To rotate the given tree we will perform the following operations:
> ![[Pasted image 20260623151450.png]]
> 

Here we are doing a right rotation of 47, so we are sliding 47 down to the right and pulling 32 up into 47's spot.

When we side 47 down and then slide 32 up, the 40 tree will collide with the 47 tree, but conveniently the 47 tree no longer has a left child so we can put the 40 tree as 47's left child as follows:
![[Pasted image 20260623152148.png]]

Then, because 32 will be the new parent of 47 we need to make 47 the right child of 32 as follows:

![[Pasted image 20260623152230.png]]

Once we make 32 the new root we are finished with our rotation and the new tree looks like this:

![[Pasted image 20260623152304.png]]

## AVL Nodes
> AVL Nodes are very similar to BST nodes although they have some extra functionality as they include a balance field that indicates the state of the subtree balance at that particular node. 

One implementation of an AVL node is as follows:
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

So firstly how do we identify imbalance? Well, we know that tree is imbalanced if there are **any** two subtrees in the tree that differ in height by more than one, for example:
![[Pasted image 20260623153001.png]]

Namely, there are a very limited number of imbalances that structure can take, for example there are exactly 4 cases, (but this is really two symmetric pairs).

![[Pasted image 20260623153229.png]]

To fix these imbalances we perform the following:
1. LL Imbalance -> Right rotation around root of tree
2. RR Imbalance -> Left rotation around root of tree
3. LR Imbalance -> Left rotation around subroot, then right rotation around root of tree
4. RL Imbalance -> Right rotation around subroot, then left rotation around the root of tree

## AVL Insertion
> Generally speaking, the best way to ensure that an AVL tree stays balanced is to ensure it never even becomes unbalanced. To accomplish this, our AVL insertion begins with ordinary BST insertion, but then followed with rotations to maintain balance. That is, if the balance attribute of a **subtree's** root node becomes critical $(\pm 2)$ then we rebalance.
> 

The pseudo-code for this is as follows:
```
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

For example, if we wanted to insert 65 into the following tree:
![[Pasted image 20260623154233.png]]

First, we can label the balance factor of each node as follows:
- 32 is 0
- 47 is 1
- 71 is 1
- 93 is 0

Then, after our doing our BST insertion of 65 we get 
![[Pasted image 20260623154352.png]]
Which is balanced! But supposed if we now inserted 82 into the tree. Well now the tree would look like this:

![[Pasted image 20260623154515.png]]
Which is now a critical imbalance, in order to fix this we first need to determine which form of imbalance it actually is though. We can see that the $+2$ imbalance is positive meaning it is a R - something imbalance, then moving over one to the right we see the right child of 47 is also positive, **thus we have a RR imbalance, hence to fix this we need to do a left rotation of 47.** This then gives us the following tree:
![[Pasted image 20260623154730.png]]
However, if we then added 87 we would see the following tree:
![[Pasted image 20260623154812.png]]

Which we can see has a LR imbalance, hence we need to perform a left rotation of 82 followed by a right rotation of 93 which yields the following tree:
![[Pasted image 20260623154923.png]]

### Insertion Complexity
> The complexity of an AVL insertion can be broken down as follows, firstly the BST insertion to actually insert the node into the AVL tree is $O(\log n)$, then the cost of doing a "fix" is at most 2 rotations, which are accomplished in $O(1)$. Hence in total the cost for a single insertion is $O(\log n)$ because for one insertion there will be at most one critical imbalance.

## AVL Removal
> Following a node's removal the AVL properties must still hold. To accomplish this we perform basic BST removal using predecessor/successor data replacement, then we maintain some `decrease` variable to indicate whether the height of the subtree changed, then rebalance if critical.

For example, if we wanted to remove 65 from the following tree:
![[Pasted image 20260623155652.png]]

After labeling the balance of each node we see that:
![[Pasted image 20260623160031.png]]

After removing the 65 node the height will have decreased so the balance factor of the 71 node is increased as it will now be imbalanced on the right side critically:
![[Pasted image 20260623182346.png]]

We can now see that this is a RL imbalance, hence we need to do a right rotation on 87, and then a left rotation on 71. After this our tree is properly balanced as follows:
![[Pasted image 20260623182727.png]]

### Removal Complexity
> The BST removal will be based on height which we know is $O(\log n)$, then the cost to fix a critical imbalance is just $O(1)$, moreover the maximum number of critical imbalances is $O(\log n)$ but this only occurs when removing the leaf on the shortest path of a minimal AVL tree.

### Overall Complexity
> The worst case for `search`, `insert`, and `remove` for implementing some dictionary ADT using an AVL Tree is strictly $O(\log n)$.