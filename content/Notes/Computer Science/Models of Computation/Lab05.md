#cs #cs121 #labs 

# Time Dependent Circuits and Memory

## Pre-lab

In summary: in order to double the number of outputs you have (double the number of bits you want to output), you need to add a wave of half the previous frequency: (the initial wave is wave 0) (note the fastest wave is the wave that corresponds to the right-most bit, ie the wave the highest frequency)
$$
\frac{1}{2}^{n} \quad \text{where n is the wave number}
$$
Eg. if the first wave had frequency $f=1\text{Hz}$ you can currently only display one bit, but if you add a wave of frequency $f=\frac{1}{2}\text{Hz}$ you can now represent 2 bits and so forth... (think of how you construct truth tables and how this is identical).

To reverse the direction of the count/pattern from the waves, you can simply negate all the waves, or shift them to start at a specific spot.

# Flip Flops

flips flops have the ability to remember one bit, essentially, whenever the clock is hit the output (Q) from the flip-flop will just be the current input D, but when the clock is not hit, the output from the flip-flop will be held constant to whatever the previous input was. The truth table for a flip flop is as follows:

![[Pasted image 20260310150704.png]]

An important thing to note is that flip-flops have determined states only after it has been through at least one clock cycle, therefore before the first cycle we have no way of knowing $Q_{\text{prev}}$ 

## Shift-registers (registers)

Flip-flops can be connected in a chain so that their states are passed down forming a shift register (ie Q1 -> D2, Q2 -> D3) and D1 is connected to an input. In essence, if we have n flip flops in a row we will be able to store n bits.

## frequency dividers:

(A circuit that takes a wave as an input and outputs a wave half as frequent)

This can be accomplished with with the aforementioned flip-flop as follows:
![[Pasted image 20260310151512.png]]

Where the Q output will have half the frequency of the clock input signal.

We can then construct a 2-bit counter by connecting some LEDs as follows:

![[Pasted image 20260310151801.png]]

Which will count s.t. 3-2-1-0.

Ultimately a 3-bit counter can be constructed by again adding another flip-flop to act as an additional frequency divider. (the output from the first flip-flop will be the input to the second flip-flop)

