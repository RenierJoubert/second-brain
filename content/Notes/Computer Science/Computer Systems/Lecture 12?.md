
# Stack Frames

![[Pasted image 20261027124014.png]]

Both `foo` and `bar` manage `bar's` stack frame. 

### The Procedure Prologue
> Code right before the actual procedure starts to execute. Some in done in the caller before the call, some is done in the callee at the beginning of the call. It allocates the activation frame and changes the stack pointer by subtracting the *frame size* from the stack pointer `r5`.


### The Procedure Epilogue
> Code that executes when the procedure ends, also done in parts by the callee and caller. It deallocates the activation frame and restores the stack pointer. It adds the *frame size* to the stack pointer `r5`.

## Overview of Stack Frame Allocation/Deallocation

![[Pasted image 20261027124606.png]]

![[Pasted image 20261027124818.png]]

!! put in annotated slide

## Creating The Thread
> Every program thread starts with a hidden procedure. This procedure allocates memory for the stack, initializes the stack pointer, and calls the thread's first procedure.

## Return Values
> We use `r0` for our return value.

