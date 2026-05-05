 #cs #cs210 #OOP #java

# The LSP

The Liskov Substitution Principle (LSP) dictates how class hierarchies can be implemented and their respective behaviour. In brief, the LSP states that sub types cannot break the expectations set by their super types, that is the sub types pre condition must be in the desired range, and the sub types post condition must be in the desired range. ==In summary, a sub type is substitutable for its super type AS LONG AS, it takes in the same, and or more inputs AND produces the same and or a subset of the possible results==

## When is a Sub Type Substitutable?

A sub type is substitutable when it does not reduce the service the super class provides, and cannot produce effects not produced in the super class. 


> [!theorem] Liskov Substitution Principle
> 1. It has a ==wider== pre-condition (weakened pre condition)
> 2. It has a ==narrower== post-condition (strengthened post condition)

But what does that mean?

### A wider pre-condition

The pre-condition of a method refers to the method's requires clause, that is, what needs to be true for this method to run? So, for a sub type method to be substitutable for its super type, the LSP states that it cannot be more picky than the super type, more specifically, ==it can only have the same or lesser number of requirements.== (it can have greater than or equal to the number of inputs to the superclass)

### A narrower post-condition

The post-condition of a method refers to the method's effects clause, which is essentially the range of outcomes for that method. Now, for the method to be substitutable, the LSP dictates that ==this range of outcomes must be the same as, or smaller than the super type.== (it can have less than or equal to the number of outputs as the superclass)

### A formal definition

The LSP ==formally== states that:
1. The pre conditions of a subclasses behaviour cannot be strengthened
2. The post conditions of a subclasses behaviour cannot be weakened

# So what if our subclass isn't substitutable?

To address this, ==we can either abstract out the shared behaviour of our classes to an interface==, or instead of having a sub class extend a super class, the subclass could instead have that super class as a field in order to access it's methods without extending it, thus creating an association or dependency.