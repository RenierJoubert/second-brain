# Procedures and the Stack
> How do we handle procedure calls, and how do we allocate their arguments and local variables. (We use the stack).

## Static Procedure Calls
> Procedures in both C and Java have a *name*, *arguments*, and *local scope*. When we call static procedures, they also have a return *type*. Eg, `int z = zot(1, 2)`

### Control Flow in Static Procedures

![[Pasted image 20261111200201.png]]

How do we answer where procedures return to when they are finished? We use a **return address**, which is the address that a procedure **jumps** to when it is finished, it is initialized as the address of the instruction following the call that caused the procedure to run.

Note that this **has** to be dynamic, because a procedure can be called by multiple other procedures. 

This raises the question of how does the procedure get it's return address, how do we jump to a dynamic address, and how does this look in recursive procedures.

## Implementing Return

![[Pasted image 20261111200635.png]]

In our implementation, the caller will save the correct return address to the register `r6`, and this will be the address our callee jumps to when it is done. 

![[Pasted image 20261111200804.png]]

The new instructions are:

1. get pc: this takes the current program counter (pc) and adds some offset `o` to it, and loads that value into `r6`, updating the return address to where we want our procedure to return to.
2. indirect jump: this takes some address stored in register t, then adds the desired offset to it and stores that new address in the program counter, causing control flow to jump to the new value of pc.

![[Pasted image 20261111202001.png]]

Notice that our offset is 6, because the jump instruction `j bar` is 6 bytes, as the machine code is `b--- aaaaaaaa` which is 6 bytes. 

![[Pasted image 20261111202339.png]]

The issue in this example, is that the return address in r6 can be overwritten, which is exactly what happens. The return address is first written as the address of the instruction `ld $5, r0`, but we jump to `foo`, in foo we overwrite `r6` to be address of `j (r6)`, so when we jump to bar, bar returns to `j (r6)` which in turn jumps to itself, so we get stuck in a loop.

![[Pasted image 20261111202833.png]]

The issue in this example, is if we statically allocate the variables, but then bar is called again while a previous call is still running, both function calls would be sharing the same variables, and it is likely values would be overwritten etc. But, it is also not enough to just ensure bar does not call itself to fix this, because if bar calls other functions, they in turn could also call bar.

In conclusion, we should allocate arguments and local variables dynamically to prevent values from being overwritten. 

## Local Scope
> Local variables are only accessible within their declared procedure, ie inside the function they are contained in. Each execution of that function gets a private copy of those variables. These variables are allocated when the procedure starts, and freed when the procedure returns.


## Procedure Activation
> An activation is an execution of a procedure, it begins when it is called, and terminates when it returns. There can be many of these activations running at the same time. These activations have their own activation frame, which is a segment of memory that stores the activation's state, and its local variables and arguments.

Because we cannot know at compile time when or how many times a procedure will be activated, its activation frame must be dynamically allocated. 

## Activation Frames

Allocation and deallocation of activation frames resembles a stack:

![[Pasted image 20261111204021.png]]

## The Stack
![[Pasted image 20261111204222.png]]

Basically, the stack is just a part of the heap, and we navigate the stack using the register `r5`, this is called the **stack pointer** and it points to the base address of the current frame which is on the top of the stack.

Note that the stack moves from higher addressed down to lower address, so as the stack gets fuller the stack pointer will decrease. 

Think of each stack frame like a struct, the size of each of these frames is usually static, and the offset of struct members from the base (stack pointer) is usually static. 

![[Pasted image 20261111204603.png]]

## Stack Frame Layout

![[Pasted image 20261111204816.png]]

By convention, stack frames have the layout:
1. Local variables
2. Return address
3. Arguments

Accessing local variables and arguments in a stack frame is akin to accessing members of a struct:
![[Pasted image 20261111204947.png]]

For example,

![[Pasted image 20261111205028.png]]

## Deallocating The Stack

![[Pasted image 20261111205219.png]]

In this example, `bar` runs and the local variable `x = 3` is written on the stack in its stack frame, when the function terminates the stack pointer moves up on the stack to "deallocate" the space, but it does not actually overwrite the data, so when `foo` is called and `y` is not initialized, it takes up the same slot that `x` did and assumes its value of 3.

![[Pasted image 20261111205539.png]]

Here we can see a few big problems, to fix these generally we want to avoid:

1. Returning addresses to local variables
2. Not freeing local pointers
3. Remembering to pass by reference, not value when applicable

