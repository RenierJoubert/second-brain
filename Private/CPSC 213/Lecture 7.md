# Structs
> Structs are often created dynamically (sometimes they can be static). In Java a struct is an instance of a class, but in C they are named collections of variables. 

To access instance variables (variables that are apart of a particular object or struct) we need to access them through the reference pointer to their object/struct. 

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

![[Pasted image 20261001125120.png]]

### Struct Size and Alignment
> Member variables of primitive types are aligned according to their size, but the overall struct is aligned according to the largest members' alignments. The size of a struct must be a multiple of it's alignment. Structs can mix types but padding might be added in or after the members.

!! put in annotated slide

