#cs #cs121 #labs

# Computational Circuits

## Pre-Lab 

We can construct a circuit that turns **on** when a number in binary is **odd** and is off when the number is even, by using the fundamentals of parity:
- ie we can connect a wire to the right-most bit of a number with n bits to our output and whenever the number is odd (the last most bit is 1 not 0) our output is true
- if we wanted to know if the number was even we could simply wire it through a **not** gate

## Adders


You can wire a half adder for two 1 bit numbers with only an XOR and AND gate as follows:

![[Pasted image 20260310141510.png]]

Whereas a **full adder** can be constructed as follows:

![[Pasted image 20260310141546.png]]

Notice the recursive pattern emerging? -> the full adder is simply constructed with two half adders, the first adding a and b, and the second adding the sum of a and b with the carry in.

## RAM (random access memory)

The address determines where the data is written to, the data input determines what is written, and the clock from 0->1 writes the data.

## ALU (arithmetic logic unit)

Responsible for all arithmetic and logic calculations that occur in the processor:

Components:
- input A
- input B
- 2-bit function input selector
- Adder
- Subtractor
- AND (bitwise -> returns 1 in bit place if both numbers have a 1 in that place, else returns 0)
- XOR (bitwise -> same logic and AND just XOR gate instead of AND)
- valO (overflow indicator resulting val is too large or too small to be represented with 8 bits)
- valE (sum)
- MUX (if sel 0 then a, if sel 1 then b)

Recall overflow occurs when there is not enough bits to represent a sum, and underflow is when there is a number more negative than the smallest negative number the bits can represent, ie -129 for 8 bits causes underflow. (subtracting below zero)

## how can multiplication and division be constructed using the alu

**Multiplication:**

Multiplication is simply repeated addition so we can repeatedly add input a, b times and b-- until b == 0 then return the result.

**Division:**

Division is simple repeated subtraction so we can implement a similar process, essentially repeatedly substracting b from a until a == 0 or an overflow indicator turns on and count++ each iteration until then, returning the count when it happens.