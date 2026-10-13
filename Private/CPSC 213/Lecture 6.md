# Dynamic Arrays

## Terminology

1. A *pointer* is a variable whose value is an address. They can be cast to any other pointer type.

2. The `&` symbol denotes the address of something

3. The `*` symbol is used to declare a pointer. And when not used to declare a pointer, it is used to dereference a pointer. This just means it gets the value at the address the pointer points to.

## Java Vs C
> Arrays in Java are allocated dynamically using `new`. But, arrays in C can be static or dynamic. For example, `int bst[10]` is a static array. C can also store pointers to static arrays: `int *bptr = &bst[0]`. Note that here we dont need the `&` actually because the name of an array is treated as the array address already. Finally, in C we can store pointers to arrays allocated dynamically using `malloc`: `int *bdyn = malloc(10 * sizeof(int));`. Here we are using `sizeof` to avoid hard-coding any sizes that might change. 


> [!Danger] Out-of-bounds access 
> C does not perform bounds checking for arrays like Java does.

### Malloc
> We can dynamically allocate memory with `malloc`. This returns a void pointer to the requested memory size we called it for.

## Array Declaration and Allocation in Java Vs C
> Arrays are accessed the same in C and Java. But, they are declared and allocated differently.

![[Pasted image 20261006223116.png]]

### Access
![[Pasted image 20261006223318.png]]

Array access via a pointer to an array requires an additional load instruction. This is because the pointer we are using is itself just an address to what its pointing to. So, we need to first load the pointer's address into memory, then read the value at that address (the base address of our array), then we can finally use the base address of our array to store `r[1]`.

![[Pasted image 20261006223549.png]]

The answer is E because no information is given on whether these arrays are statically or dynamically allocated. 
![[Pasted image 20261006223715.png]]

## More Pointers

![[Pasted image 20261006223922.png]]

Moreover, we can even have pointers to pointers. Namely, `int **p` declares a pointer `p` that points to an int pointer. Also, when declaring multiple variables on one line, we need to apply the pointer stars individually to each variable.

### Pointer Arithmetic
> We can add integers to a pointer to get a new address, when we do this the integer `i` is multiplied by the type size of the pointer before adding. For example, if `int *a` then `(a+i)` is `4i` bytes ahead of `a`. Subtraction is similar and returns the number of elements of that type between the given operand addresses.


> [!Tip] Pointer Arithmetic Equality 
> 1. `(a+i) = &a[i]`
> 2. `*(a+i) = a[i]`

![[Pasted image 20261006224837.png]]

### Printing To The Terminal
![[Pasted image 20261006225209.png]]

![[Pasted image 20261006225216.png]]