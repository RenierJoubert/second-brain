
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

