#ComputerSystems

# Dynamic Control Flow
> How can functions be referenced and passed as parameters. What is polymorphism? What are generic functions?

![[Pasted image 20261112202914.png]]

In this example, we dont know which version of `foo()` will be called, because the argument passed to `bar()` during runtime could be of actual type A, and in that case A's version of `foo()` will be called, but if the argument passed is of actual type B (still has apparent type A) then B's version of `foo()` will be called. Hence it cannot be statically determined. 

![[Pasted image 20261112203317.png]]

In dynamic control flow, we use pointers to functions. A function pointer is just a variable that stores the address of a procedure.

Function pointers are declared as follows: `<return type> (*<var-name>)(<argument-list>);` Note that the `*` is put inside brackets next to the variable name so that it is not associated with the return type. For example,

![[Pasted image 20261112204208.png]]

note that calling a dynamic function looks the same as calling a regular function. In this example, in the function `foo()` we first declare our function pointer, then we set its address to the function `ping()`, now we can call `ping()` with `aFunc()`.

![[Pasted image 20261112204400.png]]

Function pointers in essence are just variables that point to functions with a desired behaviour.

![[Pasted image 20261112204456.png]]

## Polymorphism
![[Pasted image 20261112204731.png]]

Recall from CPSC 210 that when we invoke a method on an object in Java, the methods we *can* call are decided by the apparent type of the object, but the method implementation we do call depends on the actual type of the object. Meaning the method address depends on the actual type of the object.

![[Pasted image 20261112205052.png]]

From my understanding, every time we create a new object of some class, that object stores a pointer to its class object which represents its actual type. This class object also stores the class's jump table. The class jump table stores the address of all methods implemented by the class (how to get to the methods in the class), the address of this jump table is also determined dynamically, **but the method offset in the jump table is static**. 

![[Pasted image 20261112205514.png]]

So `Object of Class A -> Class Object A -> Jump Table A -> methods of A`.

## Implementing Polymorphism

![[Pasted image 20261112205804.png]]

So, a jump table is just a struct of function pointers. We can then define the methods for a specific class that match the description of the jump table specifications. Then, because a function name is just the address of the function, we can then initialize our class object as the type of our jump table struct, and initialize the struct members with the names of our defined methods. 

![[Pasted image 20261112210325.png]]

So, to create new instances of a class A, we first define a struct A, that contains a pointer to A's class object called `class` , which in this case is the jump table for its methods, then we can put other important members into our struct like instance variables etc. 

The constructor for this class is a function that returns a pointer to a struct of type A, and then initializes its `class` member to the address of its class object, which will contain the addresses for the correct methods. 

![[Pasted image 20261112210852.png]]

## Extending Classes in C

![[Pasted image 20261112211203.png]]

Suppose we now have another class B, and this class B has all the methods of A (ping and pong), but it also has its own method wiff. Also, suppose B had its own implementation of ping. So we would define B_ping and B_wiff as outlined in the jump table specification for our class B, and then when we initialize our class object of B we write `{B_ping, A_pong, B_wiff}`. Note that the order is critical, because B is a subtype of A, its jump table needs to be in the same order as A's jump table.

![[Pasted image 20261112211623.png]]

Creating instances of B is the same as A, except we set our B object's class pointer to the address of the B class object.

![[Pasted image 20261112211852.png]]

## Method Calls In Assembly

![[Pasted image 20261112221833.png]]

Assuming that `r5` has been decremented to allocate space for this function, notice that `foo()` has no local variables, so at offset zero the return address is stored (4 bytes), which is followed by its one argument, the address `a`.

We first `ld 4(r5), r0` to get `r0 = a` then load the memory at offset zero at `a` which is `a's` class object, this is then stored in `r1`.  We now allocate another 4 bytes for the `ping()` stack frame, and similarly store its argument `a` at offset zero in that stack frame. 

One the stack frame for `ping()` is set we can execute `ld 0(r1), r2` which gets the address of `ping()` at offset zero in the class object struct `r1` and stores the function pointer in `r2`.

We save our return address for after the indirect jump and then call `a->class->ping(a)`.

After `ping(a)` is done, we return and deallocate the stack frame of `ping()`. After this we repeat a similar process for `pong(a)`.

![[Pasted image 20261112222903.png]]

With double indirect jumps, instead of first loading the function pointer into a register, then jumping to that address across two separate instructions, we combine them into one instruction. 

![[Pasted image 20261112223053.png]]

I like to think of this as calling the function at offset `o` starting at base stored in memory at the address in `r[t]`.

## Generic Functions

![[Pasted image 20261112223253.png]]

In this example, `go()` is a generic function that just executes the function given to it as an argument, so these two code snippets do have the same behaviour. 

![[Pasted image 20261112223435.png]]

![[Pasted image 20261112223443.png]]

![[Pasted image 20261112223456.png]]

![[Pasted image 20261112223824.png]]

![[Pasted image 20261112223944.png]]

Consider this basic quick sort implementation, we can actually abstract this function to sort anything we want. First, we can swap the array of integers for an array of void pointers, which can point to any type. Then, instead of using `<=` and `>` we can pass a function pointer as an argument that will act as our comparison function. 

![[Pasted image 20261112224346.png]]

This is how `qsort` is implemented in the C library:

![[Pasted image 20261112224521.png]]

![[Pasted image 20261112224709.png]]