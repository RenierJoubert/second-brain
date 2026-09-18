
We use hex for our memory addresses, but sometimes we still need to do arithmetic on them. We can either convert everything to decimal, or do the arithmetic in hex directly which is much faster.

Clicker 1a.2:
	Object A is at address 0x10d4 and object B at 0x1110. They are stored contiguously in memory. How big is A in bytes?

We can either subtract them in hex, or do twos complement and add them.

With the first method we do 0x1110 - 0x10d4. Subtracting the first digits we get C because 16 - 4 is 12. 1 - d is 3.  1 - 0 is 0 and 1 - 1 is 0. We get 0x003C. This equivalent to $3 \cdot 16 + 12 = 60$ Hence A is 60 bytes. 

Doing the second method, we first take the twos complement of 0x10d4. But how do we flip hexits? Well, 0 and 15 are flipped bits, 1 and 14 are flipped bits. So we can just use 15 - x. This yields 0xef2b then adding 1 we get 0xef2c. Then for 0x1110 we get 0xef2c. Now adding these we overflow by 1 and get 0x003c. 

!! add annotated slide. 

## Making Integers From Bytes

> How do we assemble memory bytes into integers?

Consider a 32-bit integer, it has to use 4 bytes $8 \cdot 4 = 32$. If it is at memory address `i` then we also need bytes at `i+1, i+2, i+3`. 

## Big vs Little Endians

### Big Endian:
> We put the *most significant* byte at the first address `i`. (The largest one). Then the next most significant byte goes at `i+1`, and so forth.

### Little Endian:
> We put the least *significant* byte (the smallest) at the first address `i`. Then the second least significant byte at `i+1` and so forth.

PS: memory stores bytes, and these are interpreted by some CPUs as big endian or little endian. That is a property of the CPU not the memory.

!! put in clicker 1a.4.

## What addresses should we pick?

> Requiring addresses to be aligned is better for hardware. 

We fit things nicely to maximize our memory usage, this is called **alignment**. An aligned address is an address whose numeric value is a multiple of the object size.

Binary pattern to check divisibility: if a number is divisible by 2 it ends in 0. if divisible by four it ends in 2 zeros, and so forth...

What about hex: we can use the same binary trick and look at the hex table.

## Changing Data Types


!! insert annotated slides

## Bitwise Operations

!! insert slide

### Forcing a 0-extend in Java

