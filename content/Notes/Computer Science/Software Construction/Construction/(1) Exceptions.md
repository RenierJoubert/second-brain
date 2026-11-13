
#cs #cs210 #java

# Why we use exceptions
## When is a method robust?

- A method is considered robust when every possible input case is addressed/handled by that method.
- For example when a requires clause does not specify a range in the input domain that method would not be considered very robust.
- A class by proxy is then robust if every method in that class is robust.
## Throwing and Catching Exceptions

 
> [!theorem] Call Stack 
> A call-stack is formed when one method calls another.  If a() called b(), we would see b() stacked on top of a().  We can then say that the return path out of b() would be back down into its calling method, a().

- ==When an exception is thrown== -> the method immediately exits and nothing more in the method runs as ==execution is return to the calling method.==
- If the exception is a checked (known) exception then ==the method must indicate it may be thrown in the method specification==.
- We cant ==catch== exceptions by using this architecture:
```java
try { 
    methodName();
	} catch (ExceptionName e) {
		recovery code 
	} finally {
		code that always runs, 
		even if the catch throws an exception
	}
}
```
- We use throwing and catching exceptions to make more robust code as the ==constraints specified in the requires clause can not always be enforced==
- When an exception is thrown in a method it immediately terminates and execution is returned to the calling method which ==can either catch the method or also be terminated and have execution return to it's caller and so forth...==
- Catching a thrown exception looks like this:
```java
public void someOtherMethod() throws IllegalValueException {
	if (n > 0) {
		doSomething();
	} else throw new IllegalValueException();
}

public void someMethod(int n) { 
    try {
	    someOtherMethod(n);
    } catch(IllegalValueException e ) {
        // Do something smart about the exceptional condition 
        // ie, handle the exceptional condition
    } 
    (...)
}
```
- Where control flow after the catch block is executed returns to the block after the try construct labeled (...) (the catch clause can do something to improve the exceptional condition)
# Exception and Types

- In Java ==exceptions are objects of exception type==.
- Defining an exception is as simple as declaring a class that extends exception or runtime exception

## In Java there are two types of exceptions


> [!theorem] 1. Checked Exceptions
> Checked exceptions are exceptions that are either thrown and caught, or the method must declare that it can be thrown. Check exceptions are thrown for problems that can be fixed and expected.


> [!theorem] 2. Runtime Exceptions
> Runtime exceptions are unchecked exceptions and should be used for problems which cannot be recovered 

The exception class hierarchy is given by:

![[Pasted image 20260304180048.png]]

If you choose to make the exception checked, you are requiring all methods that throw the exception to handle it or declare it in their method signature that is can be thrown and so on all the way up through the callers of the method and their callers, etc, until either some method handles the exception or the program terminates. However, choosing to make the exception type unchecked means that callers may not be aware the exception can occur.
- Note exceptions can be thrown from anywhere, including from within a catch block:
```java
try {  
    amethod();  
} catch (Exception someException) {  
    throw new OtherException();  
}
```

### Multiple Catch Blocks
- A try catch statement is not limited to only one catch statement - it can have multiple and will go through each in turn from top to bottom:

```java
int n; 
try {
	n = nthDayInYear(-1, -1, -1);
	} catch (IllegalValueException ive) {
	    // Try again
	    n = nthDayInYear(1, 1, 1); 
	} catch (Exception e) {
	￼    // do nothing
	} catch (Error err) {
	    // do nothing for now 
	}
```

In the case of multiple stacked catch blocks, it is important that they are ordered from sub to super type going from top to bottom to prevent sub type catch blocks from catching the super type exception when they were not supposed to.

- A try catch blow can have a third block called ==finally==
- The finally block ==executes after the catch block whether or not the exception was actually caught, or before the method exits if an exception is thrown in the catch block:==

```java
try {  
    otherMethod();  
} catch (SomeException e) {  
    System.out.println("Never mind! We can handle that!");  
    throw new AnotherException();  
}  
finally {  
    System.out.println("this will print whether SomeException was caught or not");  
    System.out.println("Yes, even though AnotherException was thrown");  
}
```

### Invariants

- We can write more complete specs for a data abstraction by specifying an ==invariant== for a method. An invariant verifies what must be true before the method can be ran and after it is run.
- We can verify the invariant(s) of a method holds by using ==assert:==
```java
class Animal {

	private void hasValidState() { 
		assert getTimesFed() >= 0;
	} 
}
```

- Where if getTimesFed() >= 0 evaluated to true then control flows to the next statement in the method, ==if false an assertion error exception is thrown==.
- We can further implement it as follows in order to check at the start and end of the method:

```java
class Animal { ...
    public void recordLastFeeding(List<FeedingRecord> foodEaten) { 
        hasValidState();
        // do stuff
        hasValidState();
    } 
}
```

- If an assertion error is raised during invariant checking the method can handle it or pass it on to the caller 

