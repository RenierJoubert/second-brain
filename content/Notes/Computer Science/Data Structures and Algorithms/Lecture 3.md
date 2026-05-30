#cs #cs221 

# Memory and Linked Structures

## Memory

A computer's memory can be sub-divided into 4 logical areas:
1. Code: compiled machine code instructions
2. Stack: A small area used for storing local variables and function parameters (resources needed for executing functions), that is automatically managed by the system
3. Heap: Relatively large and where most of our memory is allocated for on demand memory needs that is managed by the program code (us).
4. NULL: Address 0

Each address can only store one byte of data, if this is exceeded the data is divided and spread across multiple addresses instead.

### Stack Memory

> Actual vs. Formal Parameters

An *actual* parameter is a variable specified by the function caller. Where a *formal* parameter is a variable found in the signature of the function itself.

![[Pasted image 20260515134702.png]]

Namely, *actual* parameters have actual values, where formal parameters are purely a specification.

However, formal parameters **must** match with actual parameters in order, number, and data type.

Most parameters in C++ are *passed by value* ("call by value"), meaning the value of the actual parameter is copied to the formal parameter when the function is called.

The actual and formal parameters are different variables in memory even though they are named the same.

![[Pasted image 20260515135033.png]]

Here `r` is first written into memory, then for the function call `circleArea(r)` the parameters first need to be written into memory and prepared, in this case  the actual parameter `r` is mapped to a `double`. 

After this we can execute our code line by line. At this point `double pi = 3.1415` is written into memory. However we hit another function call `square(radius)` and it's parameters need to be prepared. The actual parameter is ==copied== to the formal parameter and `3.0` is written into memory again as the variable `x`. We terminate the `double` function returning `9.0` and the stack memory allocated to `double` is released and the `9.0` is assigned to the sq_r variable. Finally, the `circleArea` function will terminate after returning `sq_r * pi` and all memory allocated to `circleArea` is released and we end here:

![[Pasted image 20260515135720.png]]

As the `area` variable is resolved.

![[Pasted image 20260515135921.png]]

What does the code above look like in memory when we call it?

`a` is written into the stack, then `b` is written into the stack. When we supply them into the swap function they will be copied to formal parameters `x` and `y`. The first parameter gets a copy of `a` and the second parameter gets a copy of `b`, and these are both written into the memory stack. Then a variable `temp` is written to memory with the same value as `x`. Then, the value of `x` is changed to the value of `y`, then the value of `y` is changed to the value of `temp`. Finally the function will terminate and all addresses will be freed except for `a` and `b`. However, after all of this `a` and `b` are ==still not swapped.== So how do we swap them?


> [!Tip] Call by reference
> We need to use *call-by-reference* to get true access to `a` and `b`, instead of call by value.
>
> We can use call-by-reference by adding an "&" after the parameters data type in the signature

## Heap Memory (Dynamic Memory)

> Variables declared in a function only exist within the scope of that function, the data structures in this course require objects and variables to persist beyond a function's lifetime, this requires heap memory /dynamic memory as they cannot be written to the call stack.
> 
> In C++ this can be accomplished with *pointers*

### Addresses  and Pointers

> A pointer is a special type of variable that stores an address rather than a value. This address to used to find a value elsewhere in memory

To **declare** a pointer we use a "\*" symbol. Namely, we write:

![[Pasted image 20260515140929.png]]

Pointers still have their own memory address, but when you actually look inside that address it contains an address referencing another value at that address.

==Pointers can be assigned the address of an existing variable using the address operation (&).==

The *value* which a pointer points to can be accessed by "de-referencing" the pointer using the "\*" operator.

For example:

![[Pasted image 20260515141240.png]]

![[Pasted image 20260515141302.png]]

![[Pasted image 20260515141335.png]]

Here we can change `x` by executing `x=38`. But we can also change the contents of `x`'s memory address by using `*p` and writing `*p=38` to change it to `38`. Essentially, with pointers we can be in a completely difference scope than `x` but as long as we know its address we can always de-reference `x` and change its value.

We can also pass pointers as parameters, but the the pointer will be passed by value meaning the function will be operating with the memory address representative of the pointers value.

![[Pasted image 20260515141911.png]]

Here `x` after `f1` is still 45, even though the `cout` shows `"f1 arg: 22"`. However, after `f2` executes `x` is `410` and the `cout` is `"f2 *arg: 410"`. This is another way we can do pass by reference.

## Pointing to a Pointer

When assigning multiple pointers, the left hand side and right hand side must be the same.
![[Pasted image 20260515142323.png]]

![[Pasted image 20260515142338.png]]

In essence, pointers are how we interact with the heap. Requesting memory from the heap is done using `new`.

==`new` allocates space in the heap and gives us back the first address of the allocated space.==

`delete` frees the memory at the address reference by it's pointer, where `delete[]` is used to free memory allocated to many variables.

![[Pasted image 20260516170321.png]]

### Memory Leaks

Failure to release the memory causes a memory leak error. This happens when you lose access to an allocation in the heap, as you still need to access the heap through a pointer on the stack, if you lose that pointer you have no way to free that memory in the heap. If this happens in a loop this can prove to be a big issue as you lose more and more memory.

For example, a memory leak can be caused by:

![[Pasted image 20260515143657.png]]


### Dangling Pointers

![[Pasted image 20260515143904.png]]

> If you plan to keep your pointer around, you should set it to null after you de-reference and free it.

## Linked Lists


```cpp
template <class LIT>
struct Node {
	LIT data;
	Node* next;
	Node(LIT ndata, Node * nx=NULL):data(ndata),next(nx) {}
};
```

==Template== allows us to declare generic collection classes, namely it allows our containers to store any data type.

==Struct== is like a class definition where all the members are public by default.

==Next's== type is `Node*`

==Inline constructor==

A *linked-list* is a data structure that consists of nodes linked together, a node is a data structure that contains data and the location of the next node.

A node contains the address of the next node in the list

Nodes are created in dynamic memory and their memory locations are not in sequence.

The data attribute of the node varies depending on what the node is intended to store.

For example:

![[Pasted image 20260515150129.png]]

Where the list is terminated using a *null-pointer*.

![[Pasted image 20260516170439.png]]

Here we can instead use the `->` notation instead of de-referencing with `*` and using the `.` in order to access a pointer's reference value without using cumbersome notation.
### Building a Linked List

> Linked lists are advantageous as we can always add another space for another element if needed, whereas an array is finite. Moreover, insertion into an array at a specific index can be expensive. 

We can begin a linked list using:

```cpp
Node<int>* a = new Node<int>(7, null);

```

Then build onto it using:

```cpp
a->next = new Node<int>(3, null);
```

Now we can access it using pointers such that:
```cpp
Node<int>* a = new Node<int>(7, null);
a->next = new Node<int>(3, null);
Node<int>* p = a;
p = p->next; // go to next node
p = p-> next;

```

![[Pasted image 20260515151149.png]]

We can traverse the list with a loop also:

```cpp
Node<int>* p = a;
while (p != NULL) {
	// do something with p
	p = p->next;
}
```


> [!Danger] Memory leak
> If we were to use `a` to traverse the list instead of `p` ==we would lose access to the start of the list== and nothing on the stack will remember where the heap elements are creating a memory leak.

### Inserting into a Linked List

> We can insert elements into the middle of the list but this requires access to the position ==before== we would like to do the insertion.

![[Pasted image 20260515151730.png]]

Because we need the position before which we would like to do the insertion, if we have a head or tail pointer, then respectively insertion time is $O(1)$ at the head and or tail.
### Linked List Removal

> We need to have access to the node that is ==in-front== of the node we wish to delete (after it)

![[Pasted image 20260515152015.png]]


> [!Danger] Tail Removal
> Because we need to access the node that is ==in front of the node we wish to delete,== this means that even with a tail-pointer, removal from the end of a linked list takes $O(1)$ time.

## Linked Lists by Features

| Singly-Linked | NULL Terminated      | Front pointer        |
| ------------- | -------------------- | -------------------- |
| Doubly-Linked | Circular & Sentinels | Front + Back pointer |

### Sentinels
> Sentinels are 'dummy' nodes so to speak that dont hold any real data but just act as placeholders at the start and end of the list. This makes it so that we can use the same code to delete the start and end of our list as we do with any other node. Typically though we do **not** use sentinels and just use NULL pointers.

## Linked List Variations

> A singly linked list with a head pointer has rather poor complexity when accessing the end of the list or when traversing, to combat this we can also implement a tail pointer at the end of the list instead of just a head pointer.

A tail pointer allows us to perform insertion at the back of the list in $O(1)$ which is much better than $\Theta(n)$! However it does not help us when inserting in the middle of the list or *removing* from the end of the list.

![[Pasted image 20260515152901.png]]

### Doubly Linked List

> A doubly linked list is composed of nodes with 2 pointers, such that every node points to the node ahead of it, and the node behind it.

![[Pasted image 20260515153127.png]]

However, they are more tricky to work with as we are dealing with double the amount of pointers.

### Doubly Insertion

> Inserting requires breaking 4 links and assigning 4 new pointers.

For instance:

![[Pasted image 20260515153328.png]]

### Doubly Removal

![[Pasted image 20260515153802.png]]


## Linked Lists are Recursive

> Iteration can be convenient for many list operations but it can be very costly for others, for example, consider printing the contents of a singly linked list in *reverse*. 

In this case instead of regularly iterating we can use recursion:

```cpp
template <class LIT>
void PrintReverse(Node<LIT>* curr) {
	if (curr != null) {
		PrintReverse(curr->next);
		cout << curr->data << " ";
	}
}

```

Which will only have a running time of $O(n)$.

## Linked Lists vs Arrays
> Binary search can be implemented more efficiently on an array and not on a linked list. Moreover, inserting an element at the end  or beginning of an array runs in $O(1)$ time where it runs in $O(n)$ time on a singly linked list with only a head pointer. Finally accessing elements in array is much faster and can be done in $O(1)$ time compared to $O(n)$ time for a linked list. That being said, arrays are of finite size and resizing it down the line can also be very costly, additionally, linked lists are much less costly when inserting elements into specific indexes. For example, insertion at the first position of the linked list takes $O(1)$ time, but $O(n)$ for an array.