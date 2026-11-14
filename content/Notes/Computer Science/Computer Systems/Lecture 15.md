#cs #ComputerSystems #C

## Void pointers
> Void pointers do not have a type, this means they cannot be de-referenced. This means if we want to *use* a void pointer we need to cast it to a different pointer type.

We can often do an implicit cast instead of explicitly.

## Type Def

We can type:
``` C
typedef struct thisIsALongAndPointlessStructName * foo_t
```

This helps with readability.

![[Pasted image 20261105123957.png]]

For example now we are working with an array of elements. 

## Implementing Generics in C
> Ie. the generic map function from racket!

![[Pasted image 20261105124357.png]]

![[Pasted image 20261105124653.png]]

## Using Function Pointers to Fix Ref Count

![[Pasted image 20261105125010.png]]

This is annoying, we only need to ref count the element.

![[Pasted image 20261105125038.png]]

We use the finalizer function to free the memory pointed to by parts of the struct before we free the struct. Namely, we call it right before the struct element is about to be freed.

!! put in annotated slide for function pointers in ref counting.

# Unit 2
> Writing code that works the way we think it will work, even when the operations going on (there are many) are unpredictable.

We are discarding our two central assumptions:

1. There is only the CPU and memory
2. There is only one thing happening at a time

## CPU and Memory v2

![[Pasted image 20261105131617.png]]

## Polling

![[Pasted image 20261105132420.png]]

Polling in this case just means repeatedly checking