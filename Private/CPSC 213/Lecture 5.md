
We first begin with some SM213 syntax that will be used for assignment 2:

![[Pasted image 20261006213144.png]]

![[Pasted image 20261006213130.png]]

# The ISA Specification
> These are the CPU instructions we will be mainly working with, and their corresponding RTL, Assembly, and Machine code.

![[Pasted image 20261006213307.png]]

| Name              | Semantics                 | Assembly             | Machine         | In English                                                                                                          |
| ----------------- | ------------------------- | -------------------- | --------------- | ------------------------------------------------------------------------------------------------------------------- |
| load immediate    | `r[d] ← v`                | `ld $v, rd`          | `0d-- vvvvvvvv` | Put value v into register d                                                                                         |
| load base+offset  | `r[d] ← m[r[s] + 4*p]`    | `ld o(rs), rd`       | `1psd`          | Take the value in memory from the array or struct index specified and put it in register d. Note offset can be zero |
| load indexed      | `r[d] ← m[r[s] + 4*r[i]]` | `ld (rs, ri, 4), rd` | `2sid`          | Take the value in memory from the array index specified and put it in register d                                    |
| store base+offset | `m[r[d] + 4*p] ← r[s]`    | `st rs, o(rd)`       | `3spd`          | Take the value in register s and put it in the array or struct index specified. Note offset can be zero             |
| store indexed     | `m[r[d] + 4*r[i]] ← r[s]` | `st rs, (rd, ri, 4)` | `4sdi`          | Take the value in register s and put it in the specified array index                                                |
### An Example
![[Pasted image 20261006214258.png]]

## Some More Basic Instructions
![[Pasted image 20261006220902.png]]

### Some Examples
![[Pasted image 20261006220957.png]]

![[Pasted image 20261006221122.png]]