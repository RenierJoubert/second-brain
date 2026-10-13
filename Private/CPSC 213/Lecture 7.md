# Structs
> Structs are often created dynamically (sometimes they can be static). In Java a struct is an instance of a class, but in C they are named collections of variables. 

To access instance variables (variables that are apart of a particular object or struct) we need to access them through the reference pointer to their object/struct. 

![[Pasted image 20261006225703.png]]
## Structs in C
> A struct is an arbitrary collection of variables of arbitrary type. All of these variables are allocated and accessed together. 

### Declaration
We can either declare a struct statically with `struct D d0;` or dynamically with `struct D* d1;`. Note that the type is not `struct` but `struct D`. 

### Access
To access a static struct we use `.` notation: `d0.e = d0.f;`. But for a dynamic struct we use `->` notation: `d1->e = d1->f;`.

### Allocation
> Static structs are allocated by the compiler but dynamic structs are allocated at runtime, the pointer to the struct could be static or dynamic, but the struct is always allocated using malloc:

![[Pasted image 20261001124146.png]]

![[Pasted image 20261001124622.png]]

### Access in Assembly
![[Pasted image 20261001125000.png]]

Note that the offset to each variable from the base address of the struct **is static.** Recall the previous ISA specification and note the offset in bytes for specific instructions how it differs from the standard array interpretation of offset wherein every element is considered the same size. We have these different instructions for structs because the variables in a struct can be different sizes so they have unique offsets.

![[Pasted image 20261006230023.png]]

![[Pasted image 20261001125120.png]]

## Some Examples

![[Pasted image 20261006230356.png]]

Note that anything goes with structs. They can contain other structs, arrays, or pointers.

### Struct Size and Alignment
> Member variables of primitive types are aligned according to their size, but the overall struct is aligned according to the largest members' alignments. The size of a struct must be a multiple of it's alignment, so the size of a struct must be a multiple of it's largest member size. Structs can mix types but padding might be added in or after the members.

![[Pasted image 20261006230713.png]]

Here for `struct X` we treat the base address as 0. Now, because a char is 1 byte, we can put that in immediately at offset 0 because 0 is a multiple of every size. Then, we can put the next char b at offset 1 because 1 is a multiple of 1. But, we cant put the integer i at the next offset 2, because 2 is not a multiple of 4 which is the size of an int. So, we use padding for offsets 2 and 3, putting i at offset 4, i takes up 4 bytes which leaves the size of `struct X` at 8. 8 is a multiple of 4 so this works.

For `struct Y` we similar put char a in offset 0 and we also put int i in offset 4. We can then also immediately put char b in offset 9 because 9 is a multiple of 1. However, the size of `struct Y` needs to be a multiple of 4 so its total size is the next largest multiple of 4 greater than 9, which is 12.
