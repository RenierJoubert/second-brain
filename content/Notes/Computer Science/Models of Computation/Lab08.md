#cs #cs121 #labs 

# A Working Computer


## The CPU (Central Processing Unit)
The CPU is the part of the computer that executes instructions (machine code / binary) specified by software to perform operations. It is comprised of 4 distinct general sub modules:
1. Memory and Registers:
		Memory stores the instructions and registers store the results from computations.
2. Fetch and Decode: Fetches instructions then decodes them into intelligible chunks
3. Execute: Executes the instruction
4. ALU and Decide Branch: Handles the math and logic operations
![[Pasted image 20260407191444.png]]

## How it Works

1. Memory is read from the address stored in ==PC==
2. Fetch/Decode forwards the ==iCd== (1st digit), ==iFn== (2nd digit), and data (==srcA, srcB==, these are the memory addresses for valA and valB) to Execute.
3. Execute forwards the relevant data to the ALU to perform the correct computations
4. The ALU calculates the result of the computation ==valE== and determines how the program will advance (branch or not to branch)
5. Execute updates ==PC== and writes values into memory
6. Repeat.

### A byte
A byte (8 bits) is comprised of two hexadecimal digits (1 hex digit is 4 bits).

### Fetch
Fetch retrieves the instructions from memory, consisting of 6 bytes starting at the address stored in PC.

### Decode
The first hex digit of the fetched instructions determined the ==iCd== (the instruction code). Where the second hex digit determines the ==iFn== (the instruction function). These determine what operations should be done with the values stored in the given registers.

### Execute
Execute gets the register values valA and valB from the addresses  srcA and srcB which are needed for the computation and sends them to the ALU along with iCd, iFn, and valC. When it receives that result back it stores it in our destination register (valE stored in dstE).

After this execute determines where our next instruction is based, in most cases nextPC will just be the end of the current memory address, but sometimes we will branch (bch).

### ALU
iCd and iFn determines which operation to perform and on which values we perform them on, then once that result is obtained to we decide whether to branch and jump to another address. (for example if we wanted to perform a loop, note there can be conditional and unconditional jumps).

## Summary
![[Pasted image 20260407193024.png]]