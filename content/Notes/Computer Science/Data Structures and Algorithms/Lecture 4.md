#cs #cs221 

# Stacks and Queues

## Abstract Data Type (ADT)
> ADT describes a data collection and the operations that can be performed on said collection.

- We know what the operations will do to the collection but the low level information regarding how the operations work is not necessary knowledge.

For example, we can begin the implementation of a **stack** as follows:

```cpp
template <class LIT>
class stack {
	public:
	Stack();
	bool isEmpty() const;
	void Push(const LIT& e); // insert at top of stack
	LIT Pop(); // remove and return from top of stack
private;
};
```

> The private members can reveal some details regarding the implementation. However, the public interface allows full usage and interaction.

This is a *last in - first out* stack implementation (LIFO).

## Stack Implementation
> We want our stack to complete these operations ideally as optimal as possible.

## Stacks Using Linked Lists

We can implement a stack using a *singly-linked list*, that is we can make the front of the list serve as the top of the stack. Hence removal and addition can be done in $O(1)$ time as we always have access to the front pointer of a singly-linked list.


> [!Question] What if the front of the stack is at the back of list?
> In a null-terminated singly linked list with a front pointer how would `push()` and `pop()` change in efficiency if the front of the stack is at the back of the list?
> 
> `Push` will now correspond to adding a new element to the back of the list, which if we only have a front pointer this will cost a traversal all the way to the back of the list, and for a list of size $n$ this costs $\Theta(n)$.
> 
> `Pop` too will have $O(n)$ complexity for the same reason as we need to get to the second last node in the list.

We can now see the full implementation such that:

```cpp
template <class LIT>
class Stack {
	public:
		Stack();
		bool IsEmpty() const;
		void Push(const LIT& e);
		LIT Pop();
	private:
		struct Node {
			LIT data;
			Node* next; };
		Node* top;
		int size;
};

template <class LIT>
void Stack<LIT>::Push(LIT d) {
	Node* newnode = new Node(d);
	newnode->next = top;
	top = newnode;
}

template <class LIT>
LIT Stack<LIT>::Pop() {
	assert(!IsEmpty());
	LIT ret = top->data;
	Node* temp = top;
	top = top->next;
	delete temp;
	return ret;
}

template <class LIT>
bool Stack<LIT>::IsEmpty() const {
	return top == nullptr;
}
```

And for this implementation we have constant time ($O(1)$) for our operations `push()` and `pop

## Using an Array
> We can make the most recently *occupied* index at the top of the stack.

For example:
![[Pasted image 20260520140604.png]]

Which can be implemented as follows:
```cpp
template <class LIT>
	class Stack {
	public:
		Stack();
		bool IsEmpty() const;
		void Push(const LIT& e);
		LIT Pop();
	private:
		vector<LIT> items;
};

template <class LIT>
void Stack<LIT>::Push(LIT d) {
	items.push_back(d);
}

template <class LIT>
LIT Stack<LIT>::Pop() {
	assert(!IsEmpty());
	LIT ret = items[items.size() - 1];
	items.pop_back();
	return ret;
}

template <class LIT>
bool Stack<LIT>::IsEmpty() const {
	return items.size() == 0;
}
```

This implementation using an array actually has the same behaviour as the linked list implementation.

Arrays in cpp have a fixed size at the time of creation, which means ==they can become full.==

However, the vector we are using does have resizing functionality when the array becomes full. But resizing is relatively expensive so we would want to change our `push` function to alleviate this. Namely, we want specific control over how the vector resizes as if it doesn't resize smartly it can become computationally expensive over time.

Notably resizing requires:
- Allocating a new larger array
- Copying the old elements into the larger array $O(n)$
- De-allocating the old array from memory

So, over a sequence of $n$ pushes if we naively increase our array size by 1 each time, we will have done this many copies:
$$
\sum_{i=1}^{n-1}n=\frac{n(n-1)}{2} \in O(n^2)
$$
And we will have done $n$ insertions. Hence, our *amortized* cost for 1 `push()` is linear in $O(n)$.

In this example there will be $n$ resize events.

> [!Question] But what if we double the size of the array everytime we resize? 
> 

![[Pasted image 20260523181739.png]]


Now, over a sequence of $n$ pushes, the number of copies we will have done is given by:
$$
1+2+4+8+\cdots + \frac{n}{8}+\frac{n}{4}+\frac{n}{2} = n
$$
And the total number of insertions is also just $n$. Hence the total cost is $2n$ but our *amortized* cost will be constant time in $(1)$.

In the worst case, the push operation when the array is full will have linear cost, but on average the cost is still constant.

In this example there will be $\log_{2}(n)$ resize events.


> [!Question] So why would we consider an array for a stack implementation?
> 
Depending on our usage we might want to improve our ==cache performance== (caching is what cpu's and memory do to make access more efficient), as accessing from memory has latency and is expensive, as memory is typically stored far away from the cpu. So, to cache memory whenever we need retrieve from a particular memory address we also pull from all the surrounding addresses and store them in our cpu cache as they probably will be related, hence if we need a particular related address later we might not need to retrieve it again.

With this in mind, because ==linked list nodes are scattered randomly in memory== as it is implemented using pointers, but in an array they are all right next to each other in memory, when using an array stack implementation the cpu will likely cache the array nodes and hence the implementation could be faster even though its running time technically is greater than the linked list implementation.

### In Summary

- A linked-list stack implementation is $O(1)$ for all operations
- An array stack implementation has an $O(1)$ `pop` cost but $O(n)$ `push` cost. However over $n$ pushes the array implementation has an average cost of $O(1)$.

## Queue ADT

> In a queue elements are inserted at the back of the queue and removed from the front of the head. Queues are *first in - first out* (FIFO) and considered a *fair* data structure.

Applications of a queue includes:
- Server requests
- Print queues
- CPU jobs

(anytime there is a shared resource typically).

Queue operations:
- Enqueue - insert item at the back
- Dequeue - remove item from the front
- Peek - return the item at the front of the queue without removing it
- isEmpty - check if the queue does not contain any items

Ideally these can be implemented in constant time.

## Implementation Using Linked-Lists

For example, using a singly-linked list with front and back pointers, the front of the queue should then be at the front of the list, and the back of the queue should be at the back of the list.

The cpp implementation is as follows:
```cpp
template <class T>
class Queue {
	public:
		Queue();
		bool is_empty() const;
		void enqueue(const T &e);
		T dequeue();
	private:
	struct Node {
		T data;
		Node* next;
	};
	Node* front, *back;
};

template <class T>
bool Queue<T>::enqueue(T d) {
	Node* newN = new Node(d);
	if (back == nullptr)
		front = back = newN;
	else {
		back->next = newN;
		back = newN;
	}
}

template <class T>
T Queue<T>::dequeue() {
	assert(!is_empty());
	T ret = front->data;
	Node* temp = front;
	front = front->next;
	delete temp;
	return ret;
}

template <class T>
bool Queue<T>::is_empty() const {
	return front == nullptr;
}
```

With this implementation $O(1)$ is guaranteed for all our operations.

## Using an Array
We could make the back of the queue the index of the current size of the array, and make the front of the queue at index 0. This makes inserting trivial, but what if we remove an item? We would either have to remove all the remaining items down or increment the front index, this is slow or in the latter we just waste space.

The trick in this case is to use a *circular array* to insert and remove items from a queue in constant time.

![[Pasted image 20260520150504.png]]

This can be accomplished using the *modulo operator*, this operator (%) returns the remainder of two numbers, for example `1%5 = 1`, `5%5 = 0`.

The mod operator can hence be used to calculate the front and back positions in a circular array which avoids comparisons to the array size. Now, the back of the queue is given by `(front + num) % capacity` where num is the number of items actually stored in the queue, and after removing an item from the queue the front of the queue is `(front + 1) % capacity`. Enqueue is possible as long as the queue is not full.

### Resizing

What if we have an array based queue but now the array is full and we need to resize it to allow for more enqueue operations. What should we do?

There are two ways this can be accomplished, namely, we can keep front at its current index but then wrap the other elements from 'behind' front to come *after* the elements *after* front. Or, we can set out front to index 0.

![[Pasted image 20260523181712.png]]

Caching is now not quite as much of an advantage here however.
