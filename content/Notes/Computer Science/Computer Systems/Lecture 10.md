#ComputerSystems

# Static Control Flow

## Control Flow
> The flow of control is a sequence of instruction executions performed by a program. Every program execution can be described by this basic linear sequence.

The basic loops in Java and C are as follows:

![[Pasted image 20261029232018.png]]

However, as expected, we can instead use a pointer to iterate over our array. That is, we can declare a pointer to our array type, initialize it at the base of the array, then increment as normal using `++` except we do it inside a `while` loop.

```C
int *p;
int a[] = {1, 2, 3, 4};

void foo() {
	p = a;
	int count = 0;
	while (p < a + 4)
		count += *p++; // we can do this because the pointer increments after +=
	}
```

Similarly, copying arrays looks a little different too:

![[Pasted image 20261029232526.png]]

What about in assembly though?

## Loops In Assembly

We can unroll simple loops:

```C
int s = 0;
int i;
int a[] = {1, 2, 3, 4};

void foo() {
	for (i = 0; i < 4; i++)
		s += a[i];
}

```

as follows:

```C
int s = 0;
int i;
int a[] = {1, 2, 3, 4};

void foo() {
	s += a[0];
	s += a[1];
	// ... etc
}

```

But we cannot do this **generally**. For example, take the following question:

![[Pasted image 20261029233301.png]]

In dynamic cases, we need to use conditional statements with `goto` as follows:

![[Pasted image 20261030003010.png]]

These allow us to jump to different labeled code segments and repeat or skip code. 

## Program Counter

The program counter `pc` is a special register that stores the address of the **next instruction** to execute. To implement a `goto` all we need to do is to change the `pc`.

## New ISA Instructions

1. `jump`: this loads an address into PC
2. `conditional jump` : this loads an address into PC based on some predicate

## Problems
Because addresses are large, the instructions for them will also be large. To combat this we can use **relative addressing**, wherein we specify the offset from the current location in our code, instead of the destination address. This means using PC as our base, and using a signed offset so we can jump back.

Jumping by using a relative address is called `branching`

## How Do We Jump
![[Pasted image 20261030122825.png]]

Here `PC = 1002` because the instruction code is two bytes, so the next instruction will be right after the 2 byte `PC` at `1002`. If we want to go to `1008` then we can calculate the offset as `1008-1002=6` bytes. Note that offsets will always be **even** because the instruction codes are always 2 or 6 bytes, this means that the offset will end in a zero. Therefore, we can divide it by 2 to remove the tail bit. So `6/2=3` and we can jump to `1008` with `Y-03`.

![[Pasted image 20261030123404.png]]

Note that each `p` is 1 signed byte, so its value is `[-128, 127] = 1000 0000 - 0111 1111`. And our offset is `2*p = [-256, 254] = 1000 0000 0 - 0111 1111 0`. So our branch range is within `2*p` of our base.

![[Pasted image 20261102231829.png]]

In this clicker, our instruction code begins at 0x10, the instruction bgt is two bytes so our PC is two bytes after at 0x12. We want to jump to L1 if the conditional holds which is at 0x20, so the offset from our current position is 0x20-0x12 = 14 in base 10, chopping off the last bit we get `p = 14/2 = 7`. So, our instruction is 0xa0 0x07.

![[Pasted image 20261102232531.png]]

Here we want to branch to `loop`. We are told that each instruction is 2 bytes, so the offset is -10 bytes from our current PC after branch. So `p = -10/2 = -5` which is 0xfb. Hence our instruction in machine code is 0x80 0xfb

![[Pasted image 20261102232853.png]]

Here our `p=0` so our PC doesn't actually change.

![[Pasted image 20261102232955.png]]

Here we can just follow along and see that we halt once `r1` is decremented to zero, at that point `r0`has been doubled 4 times so it's value is 16.

## Implementing For Loops

![[Pasted image 20261102233302.png]]

![[Pasted image 20261102233458.png]]

## Implementing Conditionals

![[Pasted image 20261102233645.png]]


> [!tip] Two's Complement in Assembly 
> `not r0` followed with `inc r0` is how you take the two's complement of `r0` so a value `a` in `r0` becomes `-a`.


