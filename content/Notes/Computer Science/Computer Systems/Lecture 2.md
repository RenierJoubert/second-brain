\
We use hex for our memory addresses, but sometimes we still need to do arithmetic on them. We can either convert everything to decimal, or do the arithmetic in hex directly which is much faster.

Clicker 1a.2:
	Object A is at address 0x10d4 and object B at 0x1110. They are stored contiguously in memory. How big is A in bytes?

We can either subtract them in hex, or do twos complement and add them. Taking two's complement in hex is actually very easy: just divide the table in two and map the hex digit to the mirror digit across the table. For example, 0 goes to 15, and 7 goes to 8.

With the first method we do 0x1110 - 0x10d4. Subtracting the first digits we get C because 16 - 4 is 12. 1 - d is 3.  1 - 0 is 0 and 1 - 1 is 0. We get 0x003C. This equivalent to $3 \cdot 16 + 12 = 60$ Hence A is 60 bytes. 

Doing the second method, we first take the twos complement of 0x10d4. But how do we flip hexits? Well, 0 and 15 are flipped bits, 1 and 14 are flipped bits. So we can just use 15 - x. This yields 0xef2b then adding 1 we get 0xef2c. Then for 0x1110 we get 0xef2c. Now adding these we overflow by 1 and get 0x003c. 

![[Pasted image 20261005234021.png]]

## Making Integers From Bytes

> How do we assemble memory bytes into integers?

Consider a 32-bit integer, it has to use 4 bytes $8 \cdot 4 = 32$. If it is at memory address `i` then we also need bytes at `i+1, i+2, i+3`. 

## Big vs Little Endians

### Big Endian:
> We put the *most significant* byte at the first address `i`. (The largest one). Then the next most significant byte goes at `i+1`, and so forth.
![[Pasted image 20261005234111.png]]
### Little Endian:
> We put the least *significant* byte (the smallest) at the first address `i`. Then the second least significant byte at `i+1` and so forth.
![[Pasted image 20261005234120.png]]

PS: memory stores bytes, and these are interpreted by some CPUs as big endian or little endian. That is a property of the CPU not the memory.

![[Pasted image 20261005234208.png]]

## Aligned

> Requiring addresses to be **aligned** is better for hardware. 

We fit things nicely to maximize our memory usage, this is called **alignment**. An aligned address is an address whose numeric value is a multiple of the object size that it stores. But, this gets more complicated later on when we are working with data types that store objects of different sizes...

A nice trick to quickly check if a base two number is divisible by a power of two is to check how many zeroes it ends in. For example, if it's divisible by 2 it ends in only 1 zero, but it will end in 3 zeroes if its divisible by 8. To check hex we can just look at the table.
![[Pasted image 20261005234532.png]]
## Changing Data Types
> We can **extend** an integer wherein we increase the number of bytes used to store it.

Take `byte b = -6` this is stored at the following 8 bits: `11111010`. But, `int i = b` is stored as `1111111111111111111111111111010`.

We can either perform a **signed** extension, or a **zero** extension. In Java many primitive types are signed, whereas in C data types can be unsigned. 

> We can **truncate** an integer wherein we reduce the number of bytes needed to store it. 

This just reverses the example above. But, this can create issues with data loss. For example, what if we have `int i = 128`. If we truncate this to a byte we lose all of the leading zeroes and the resulting byte will be `10000000` which is -128.

## Bitwise Operations

### Left Shift
> `a << n` shifts all bits in `a` to the left `n` times, and the remaining right bits are filled in with zeroes. For example: 00000001 << 7 returns 10000000. This is the same as performing $a\cdot {2}^n$.

### Right Shift
> `a >> n` shifts all bits in `a` to the right `n` times. In C, if `a` is unsigned then the left-most bits are filled in with zeroes, otherwise they are filled in according to the sign of `a`. In Java, `>>` sign extends and `>>>` zero-extends. This is the same as performing $a \div 2^n$.

### Bitwise And
> For binary numbers `a` and `b`, `a & b` returns a binary number where each bit is the result of the $\land$ gate between the corresponding digits of `a` and `b`. For example, `010 & 111 = 010`.

### Bitwise Or
> This is equivalent to the bitwise and, except an $\lor$ gate is used instead. 

### Bitwise Xor
> This is equivalent to the bitwise and, except a xor gate is used instead.

### Bit Inversion
> `~a` inverts every bit of `a`.

In assembly for a bit inversion on `a` we can just write `not a`. This is equivalent to `r0 <= ~r0`.
## Forcing a 0-extend in Java
> If we want to to zero-extend a number instead of sign-extend we can make use of our bitwise operations. For example, `int i = 11111010 & 0xFF`.

![[Pasted image 20261006203615.png]]

Note that when we use `0xFF` the other two hexits are assumed to be zero, they are just not filled in. Namely, `OxFF = 0x00FF`.

## Some Examples

![[Pasted image 20261006203725.png]]

![[Pasted image 20261006203745.png]]

![[Pasted image 20261006203806.png]]

![[Pasted image 20261006203849.png]]