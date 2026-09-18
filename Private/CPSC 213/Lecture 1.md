
# Memory and Numbers

Memory stores data encoded as bits, program instructions, and state. The CPU reads instructions and data from memory, also performing operations and writing that result back to memory.

In essence, memory is a big contiguous array of bytes. A memory address names each byte and acts as it's index. Interactions consist of the following examples: read value of N bytes starting at address X. Or, write new values V into N bytes starting at address X.

The unit of addressing is a byte (8 bits). Every byte of memory has a unique address (like an array index). Some machines have 32 bit addresses, but now many have 64-bit addresses. 

Most data will not fit in a single byte. So, the CPU accesses memory in contiguous, power-of-two style chunks of bytes. The address of these chunks is just the first address in the chunk.

!! put in primitive data types ss here

Because memory addresses work in powers of two, we use a power of two representation to name addresses. This could be binary, octal, but now we use hexadecimal. (instead of writing out 32 bits for an adress, we can just write out 8 hexadecimal digits which is just base 16). These dont need to be stored, and act purely as identifiers. If we do need to end up storing addreseses then we can use pointers. 

!! put in slide ss here

!! put in binary to hexit conversion slide

When calculating, we should work in hex directly, as converting back and forth is tedious and slow. 



