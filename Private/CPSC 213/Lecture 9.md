## Working with Strings in C
![[Pasted image 20261015165519.png]]

Recall that the length of an array is equal to it's `size - 1`. So, this code works, but it can be improved by putting both the calls to allocate and free memory under the same function to ensure the memory is always freed after use. Not doing this creates opportunity for memory leaks or dangling pointers if free is called while another segment of code has a pointer to it.

![[Pasted image 20261015170416.png]]

In this example, memory is allocated and freed in the same function. But, the `copy` function no longer knows the size of `d`, so if not enough space is allocated to `d` then `copy` will create an out-of-bounds error and write into memory past the end of `d`.

![[Pasted image 20261015170737.png]]

Here there is no overflow anymore and `d` is always null-terminated. Also one function allocates and frees memory as needed. But, the size passed can still be wrong and result in truncation. 

## Valgrind
> You can analyze a program with `valgrind ./program` to check for memory leaks and dangling pointers

## When to Use Free
> `free` should only be used when an object is not in use. This means keeping track of it's uses and where and when it starts and stops being used.

![[Pasted image 20261015171810.png]]

Here `recieve()` calls `malloc()` and points `mBuf` to that memory block. `foo()` stores that pointer in `mb` so `mb` also points to the same block as `mBuf`. `foo()` then calls `bar(mb)` and now `aMB` also points to the same block pointed to by `mb`. `foo()` ends by freeing `mb` but `aMB` is still pointing to that memory and when `bat()` is called we could overwrite the new memory at that block. This is how dangling pointers occur.

So how do we know when it's safe to use free?

## Reference Counting
> Reference counting is keeping track of how many pointers point to a specific object

Reference counting can be done my initializing the reference count to 1 when the object is created. Any time the reference is stored we increment the count, and any time a reference is discarded we decrement the count. We never call `free()` directly, but the object is freed when the count goes to zero.

![[Pasted image 20261015173005.png]]

Here our `rc_malloc` function takes an integer $n$ for the number of bytes we want to allocate for our object, but it also adds 8 to store the `int reference count` at the front of the allocated memory. Here the `ref_count` pointer is initialized at 1 and this count is stored in the front of the memory, then the function returns with a pointer to the memory we need for our object. The void pointer cast of `ref_count` is so the `+ 8` adds 8 bytes and does not scale with the data type of the `ref_count` pointer. For example, if we did not cast the `+ 8` would be `+ 8 * 4` instead because it would be counting `int` addresses.

Then, we call `rc_keep_ref` with the pointer to our object, this then goes back to the memory storing our count and increments it.

Whenever a reference is removed we call `rc_free_ref` with the pointer to our object. This similar goes back to our memory storing the count and decrements. But, if that count hits 0 then it free the memory.

![[Pasted image 20261015181550.png]]

![[Pasted image 20261015182013.png]]

In the above example, every time `quiz->name = name;` is executed it just stores the pointer to the same name, instead of creating a new slot of memory to write that quiz's unique name. What happens is that after the last quiz is called it writes it's number into that name memory slot, so when the last for loop in main is called and all the quizzes point to the same name, they all end up with the same number 4.

To fix this we should write `quiz->name = strdup(name)` so that the current value of `name` is written at a unique spot in the heap.

![[Pasted image 20261015183318.png]]

In this example, we learn that if we want to release an object we must first release everything that object might be pointing to first.
## Garbage Collection
> In Java objects are deallocated implicitly and free is never called, instead the runtime system tracks every object reference, and the garbage collector runs periodically to deallocate unreachable objects. Note that Java only reclaims unreachable objects, and that unused or unneeded objects that keep references are not reclaimed. 

This completely stops dangling pointers, stops almost all memory leaks, and handles reference cycles (when two objects point to each other).

Nevertheless, this is slower than using explicit free.

