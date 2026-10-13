![[Pasted image 20261006124328.png]]

Here the offset of `j` is 84.

![[Pasted image 20261006124342.png]]

Here the alignment of `struct Y` is 8 because it's largest element is `long` which is 8 bytes. So, in `struct X`, `int i` begins at 0 and is 4 bytes, but we cant put `struct Y` at 4 because it needs to start at a multiple of 8. 

![[Pasted image 20261006124731.png]]

# Starting Unit 1C

## Memory Management

### Dynamic Allocation in C
> We allocate memory using `malloc` that returns a void pointer and only takes in a unit of size for how much memory needs to be allocated. A void pointer is just an address that can be to any point. This pointer can be cast to any other pointer type. But YOU CANT DEREFERENCE IT.

As an aside, it is good practice to use `sizeof` to determine the number of bytes to allocate, so if that every changes the numbers are not hard coded. For example:
`struct Foo *f  = malloc(sizeof(struct Foo));`. Note that the size of a pointer is just the size of an address not the size of what it points to.

### Deallocation
> Good memory use requires memory deallocation when we are doing using our memory. This means freeing it up so we can use it later. In Java there is a garbage collector that automatically deallocates memory when it no longer is being uses. This requires keeping track of every reference to an object. But, in C dynamic memory has to be deallocated by using `free` and this is done immediately and no checks are performed to make sure its not in use anymore.

### The Heap
> The heap is our dynamic memory and is where `malloc` and `free` operate. `malloc` finds a free chunk of memory with appropriate size and returns a pointer to that space. `free` uses a pointer to determine the size of an allocated chunk of memory, then marks the referenced memory as available. Be warned though, `free(x)` does not change what `x` points to, nor what any other pointers pointing to that memory point to, nor does it delete the current data in that memory, it just enables it to be overwritten. BUT, we can only access memory that has been allocated, this means if we try to access memory that has been freed we get a segmentation fault.

### Bad Deallocation
![[Pasted image 20261006131928.png]]

If we free the memory but dont get rid of the pointer to it, if that memory ends up being used for something else and we use that pointer again we could damage that important memory.

### Dangling Pointer
>A pointer to an object that is not allocated for the purpose it's been called for. This is often caused by use-after-free, and it could also point to unallocated memory. 

### Memory Leaks
> A memory leak occurs when a dynamic memory object has no pointers pointing to it. This happens we dont free the object properly. This means we cant access that memory any more, and it also means we cant free it anymore. If we keep doing this we will run out memory.

![[Pasted image 20261006132751.png]]

### Strings
> Strings are not a type in C. Instead, strings are just arrays of type `char`. The end of the string is then indicated by the first 0 in the array.  In this case 0 is the first `null`. So, strings are null-terminated. 



