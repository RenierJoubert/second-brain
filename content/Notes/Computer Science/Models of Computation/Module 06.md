#cs #cs121

# Propositional Logic / Regex / DFAs / NFAs

## Regex (regular expression)

---

==Alphabet== ($\Sigma$): a finite set of characters

==String==: a finite list of elements formed using elements from an alphabet

==Language==: a set of such strings

- A string is 'accepted' by a language if it belong's to that language's valid set of strings

==The empty string:== $\varepsilon$ 


> [!theorem] Regex Operations
> ==Regular expressions describe which strings a language accepts== and have three *foundational* operations which can be used to describe any language:
>
>1. Concatenation: chars are placed next to each other to indicate they must appear in that **exact** order
>- eg. ab accepts only "ab" not "abab" or anything else
>1. Repetition: indicated that the immediately preceding element can appear $0 \to \infty$ times
>- eg. ab* accepts "a" "ab" "abbb"
>2. Alternation: indicates a choice, which allows the pattern to match one of several options
>- eg. (a|b|ab) accepts "a" "ab" "b" but not "aba" "ba" "abb" etc... (cant have multiple >options in one accepted string)
>
>
>Note that brackets are used for grouping!

### Some other less common operations

1. ==Period==: a wildcard for any single character (eg. a.b accepts "aab" or "abb" but not "a" "b" "ba" or "ab")
2. ==Plus:== the same as star but the preceding element **must appear at least once** (eg ab+ accepts "ab" "abbb" but not "a")
3. ==?==: the previous item can appear either 0 times or only once (eg ab? accepts only "a" or "ab")
4. ==[]==: used for pipe notation if and only if all options have exactly one character
5. =={}==: used to specify a range to the number of times a preceding element can appear (eg. ab{1,5} accepts "ab" all the way up to "abbbbb")
6. ==Backslash:== allows an item that is a special char in regex to be used as a normal character (applies to the element after it not the element before)

### Order is read left to right:

For example, the regex a(b|c)* is a string that always starts with a and is followed by any number of b's or c's.

# DFA's

We can also describe which strings a language accepts by using an **automation** which is comprised of a set of states and transitions between them are determined by characters as you read a string from left to right.

Such automatons fall into 2 groups:
1. Deterministic finite automaton (DFA)
2. Non-deterministic finite automaton (NFA)


A DFA has only one initial state (where you begin the chain) and one or more accepting states (indicated by a double circle). If you complete the string starting at the initial state and end in an accepting state then that string is accepted by the language which the DFA describes.


> [!theorem] DFA 
> A DFA is a 5-tuple ($\Sigma$, S, $s_0$, F, $\delta$) where:
>- $\Sigma$ is the input alphabet (finite set of chars)
>- S is the finite set of states
>- $s_0$ is the initial state
>- F is the set of accepting states
>- $\delta$ is the transition function s.t. $\delta : S \times \Sigma \to S$ 


In a DFA each state must have one and only one transition for each possible character contained in a language, for example the DFA for a(b|c)*
![[Pasted image 20260309182610.png]]




> [!theorem] Remark 
> DFAs and regular expressions are both ==equivalent== ways of describing the strings accepted by a language.


# NFA's

Non-deterministic finite automata differ from DFA's as each state can have multiple transitions for the same char, similar to a markov chain almost. NFA's also allow for transitions to other states without consuming a char through use of the empty string $\varepsilon$. Consequently, an NFA accepts a string if at least one or more sequences of transitions land in an accepting state, all need not do so however.

# Sequential circuits

Sequential circuits are essentially time sensitive systems which incorporate previous outputs into their current ones.

Time consequently is a critical factor (think race conditions from lab 06). Sequential circuits rely on the clock input to discern between past and present states, and although they use all the same logic gates and computational circuits, they also incorporate elements such as flip-flops:

## The Flip Flop

The flip flop is a circuit that acts as a storage device that updates its output only on the rising edge of the clock signal. It ignores any changes in its input until that moment. When the clock transitions from 0 to 1, the flip-flop captures the current input and updates its output accordingly. It then holds this output constant, regardless of further input changes, until the next clock edge. See [[Lab05]] for more information.


