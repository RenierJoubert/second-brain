# CPU Instructions (starting 1b)
> A CPU executes instructions. Not C or Java code or any other high level languages. These instructions are simple and consist of essentially either loading a value from memory, or storing a value to memory, with some basic operations in between like logic or math.

## Static Vs Dynamic
> Static and dynamic are terms used to classify what is known at compilation time, and what is only known at runtime. 

Things known at compilation time are called **static**. Things that can be determined only at runtime are called **dynamic**.

## RISC Vs CISC
> The RISC design philosophy is centered around having as few and simple instructions as possible. Whereas CISC thinks having more instructions that are more complex so that the compilers can be simpler.

## An Instruction For Adding

> To add two variables we need the addresses of the two variables being added, and the address of where to store the result. These are stored using 32 bits for each address (modern addresses use 64). The *operation code* for this instruction is at the start of the three addresses. 

!! put in slide.

### Memory Access Is Slow

1. Memory access is very slow. Fast programs avoid pulling from memory as much as possible. (There are about 100 cpu cycles per memory access)
2. Big instructions are costly because memory addresses are costly and big.

### Registers (General)
> A register is a small piece of memory that is inside the CPU. These are much closer to the cpu so they can be accessed in 1 cpu cycle instead of 100. Each register is named with a number. 


### Registers (Special)
> A special purpose register can only be used for certain purposes. For example, the PC (program counter) this register stores the address of the next instruction to execute. The IR (instruction register) stores the instruction that has just been loaded from memory.


### Instruction Set Architecture (ISA)
> The ISA is a formal interface to a processor implementation. It defines the instructions the processor implements, and defines the format of each instruction.


### ISA Design
> We can either use RISC or CISC. The instruction format is a sequence of bits read as hexadecimal to represent the operation code and operand values. 

### Assembly
> Assembly is a direct textual mapping from something that is semi readable to direct binary. There are multiple different assembly languages. 


### Representing Instruction Semantics
> We use RTL (right to left) to interpret CPU instructions. The syntax is as follows: each line is of the form LHS <- RHS. The LHS is a memory or register that receives a value. RHS is a constant, memory, register, or expression on two registers. 

![[Pasted image 20261006210409.png]]