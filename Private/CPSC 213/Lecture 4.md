# RTL Semantics
> Each line takes the form LHS <- RHS where the LHS receives the value from the RHS, wherein the RHS is a constant, memory, register, or expression.

!! insert annotated slide.

### Examples:
1. r\[0] <- 0x1000 register 0 receives the value 0x1000
2. r\[1] <- m\[r\[0]] register 1 receives memory whose address is in register 0. (copying that value from memory and putting it into register 1)
3. r\[2] <- r\[2] + r\[1] the value of register 2 is increased by whatever the value of register 1 is.

![[Pasted image 20260922123755.png]]

> r\[2] in the final line has value 17, this moved into the memory address for register 1??

!! put in annotated slide

## Variables
> Named locations in memory that store different values. For example, `int a` says that a piece of memory needs to be put aside for a value of type `int` and we refer to that value by `a`.

Different features of a variable can either be static or dynamic, and whether or not they are depends. 

If a variable is static, then it is statically allocated. Meaning, that the variable's address is known at compile time. 

Variable allocation is just assigning a memory location to a variable. The compiler allocates static variables and gives them a constant address. 
![[Pasted image 20260922130151.png]]

The answer is a because global variables are allocated statically in C.

![[Pasted image 20260922130735.png]]

The answer is b because 0 is being written into the memory at the address of a.

### But what about in arrays?

> The entire array is statically allocated at compile time. 

![[Pasted image 20260922130932.png]]

Here b\[a] is unknown because the value of a is not known statically in this case.

![[Pasted image 20260922131225.png]]

Here the answer is b because our base address is 0x2000 and the element size is 4 which is static. So, we put a at the memory address corresponding to 0x2000 + 4 \* a which is the a'th element of the array. This is exactly why accessing arrays is so fast and can be done in $O(1)$.

## RISC
> In RISC we want to minimize the number of different instructions, and also the number of instructions that access memory. We also want to minimize the size of each instruction.

How can we instruct the CPU to complete `a = 0`?

1. We can use a static address and value: `m[0x1000] <- 0x0`

This will be 9 bytes total because the address and the value are both 4 bytes, plus the 1 byte instruction code. This also fails to address when addresses and values are dynamic and would require more instructions for these cases.

2. We can use a static address and dynamic value: `r[0] <- 0x0` and `m[0x1000] <- r[0]`

Here we use 5 bytes for the load, and then 5 bytes for the memory instruction. This requires a new instruction though.

3. We can use a dynamic address and dynamic value: `r[0] <- 0x0`, `r[1] <- 0x1000`, and `m[r[1]] <- r[0]`

Here we only use 2 bytes for the memory instruction, as the instruction code is 1 byte and the two registers are only half a byte each. This gives us much more flexibility as the address can be static or dynamic.

A register can be stored with half a byte here because if we only have 16 registers then we can represent all of them with 16 bits.

But what instructions can we use for `b[a] = a`? We could assume that everything is static but this creates a huge and specialized instruction.

We could instead make everything dynamic as follows:

![[Pasted image 20260922133207.png]]

But we then need to compute what the index of the desired array element is. This requires many more instructions. We do array accesses frequently so we can do something better that does the desired calculation for us.

![[Pasted image 20260922133324.png]]

This gives us the following instructions:

![[Pasted image 20260922133429.png]]

## The Simple Machine SM213 ISA
![[Pasted image 20260922133739.png]]

## Machine Code & Assembly 
![[Pasted image 20260922133946.png]]

![[Pasted image 20260922134230.png]]

A directive is one of two things: a .pos direction (at this address) or a .long directive (this is a number).


