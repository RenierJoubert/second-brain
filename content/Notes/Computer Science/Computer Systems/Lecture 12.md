#cs #ComputerSystems #C #java

# Stack Frames

The stack is allocated by decrementing the stack pointer, ie putting it below the current stack frame.

The stack is deallocated by incrementing the stack pointer, ie moving it up above a stack frame. 

![[Pasted image 20261027124014.png]]

Both `foo` and `bar` manage `bar's` stack frame. In that the caller `foo` allocates space for the arguments it is passing to the callee `bar`, where the callee manages the return address and local variables. 

### The Procedure Prologue
> The procedure prologue is code that executs right before the actual procedure starts to execute. Some is done in the caller before the call, some is done in the callee at the beginning of the call. The procedure prologue allocates the activation frame and changes the stack pointer by subtracting the *frame size* from the stack pointer `r5`. It also saves important register values, and assigns values to allocated arguments.


### The Procedure Epilogue
> The procedure epilogue is code that executes when the procedure ends, it is also done in parts by the callee and caller. It deallocates the activation frame and restores the stack pointer. It adds the *frame size* to the stack pointer `r5`.

## Overview of Stack Frame Allocation/Deallocation

![[Pasted image 20261027124606.png]]

![[Pasted image 20261027124818.png]]

![[Pasted image 20261111210549.png]]

Here, the caller prologue loads -8 into `r0`which represents the size of the two `int`'s that `bar` takes as arguments, it then adds `r0` to the stack pointer to allocate space for those arguments, it then loads the argument values `a0 = 0` and `a1 = 1`. 

In the call segment, we update the return address to be after the jump to bar, then call bar.

In the caller epilogue we deallocate the two `int`'s.

![[Pasted image 20261111211022.png]]

In the callee prologue we allocate the rest of `bar`'s stack frame by decrementing the stack pointer by 12 to make space for the two local `int`'s and the return address to `foo`. 

After `zot` finishes we load the return address we stored into `8(r5)` into `r6` and deallocate `bar`'s stack frame, we then jump to the return address.
## Creating The Thread
> Every program thread starts with a hidden procedure. This procedure allocates memory for the stack, initializes the stack pointer, and calls the thread's first procedure which is usually `main()`.

![[Pasted image 20261111212013.png]]

We increment the stack pointer in this first case, because the first procedure will decrement it, so if we initialize the stack pointer directly at the bottom then it's decremented later we will lose memory space. Namely, we increment so when it is decremented later the stack will start correctly at the stack bottom.

![[Pasted image 20261111212551.png]]

We are given the top of `foo`'s frame is 2000, an address is 4 bytes, so the return address for `one` decrements 4 bytes, `int i` decrements another 4, the return address for `two` decrements another 4 bytes, then the last 5 local variables all decrement another 20 bytes. Meaning `r5` is decremented by 32 bytes, hence it is equal to 1968 at the top of `three`'s stack frame.

## Return Values
> In C and Java procedures and methods return a single value. We use `r0` for our return value.

![[Pasted image 20261111213254.png]]

![[Pasted image 20261111213910.png]]
