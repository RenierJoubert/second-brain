
#cs #cs210 #java

# Exception Hierarchies
- Exceptions are just regular classes so there can be sub and super types
- If an exception is declared to be caught, all of its sub types ==can also be caught by the same statement==. (You can catch all sub types of an exception by catching its super type instead)
- Catch statements still execute in order, ==so if there is a catch for an exception's sub type==, it would need to ==come before the catch for the super type because the sub type exception would be caught by the super type catch before it is caught by its native catch==
- Exception hierarchies are useful for dealing with duplication in code because they allow you to abstract multiple types of exceptions as one common exception. For example, an allergy exception the allergy and a not hungry exception could both be abstracted to a didn't eat example.

## Unchecked Exceptions
- Unchecked exceptions (Runtime Exceptions) can be tried and caught just like checked exceptions, an example of this would be an arithmetic exception (dividing by zero)
- ==To keep the program from dying, unchecked exceptions need to be caught==

## Assertions
- Assert statements are used inside methods to assert class invariants (something that is always true about the class, like a binary search tree must always be sorted).  Asserts are especially useful in private methods, and should only be used to discover bugs prior to product release.
- ==Assertions have access to the private data== within the class so checking the internal state is easy

## In practice:

==Runtime exceptions can be thrown by a method, and do not need to be mentioned in the method signature==. They also do not force the calling method to “try” to call the method. ==The calling method can, however, surround the call with try catch if they want to catch a runtime exception.==

- To declare a runtime exception, extend “RuntimeException” instead of “Throwable” or “Exception”.


