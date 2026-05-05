#cs #cs210 #OOP #java

# Cohesion and Coupling

## Cohesion

==(what the class does and how well it goes together)==

OOP / systematic programming is built on the fundamental idea that each class should be responsible for 1 thing (the single responsibility principle).

This is referred to as *cohesion*, you can assess assess cohesion by drawing a **usage graph** and if there is clear clustering you may safely split the class into its respective clusters to be more cohesive.

## Coupling

==(how the class does it and what goes on between classes)==

In essence, coupling between classes implies they collaborate in some form or another.

The severity of the form of coupling is directly proportional to the propagation of changes in the program:
- *Low severity:* A change in one place requires no changes in collaborative classes
- *Medium severity:* A change in once class requires a remote change to be made, but the compiler catches this and sends a warning. Think exception throwing or signature/type changes.
- *High severity:* A change in one class requires a remote change but such a collaboration is only caught at runtime not during compiling.

Sharing implementation details or duplicated code ultimately proves to be the most problematic form of coupling

==Moderate coupling== is coupling that can be identified at compile time and a change in one class will cause a compile error in the other.

==Semantic coupling== is when classes depend on the implementation of another class, thus a change in one class will create a bug in another. 
## The Single Point of Control

This all relates back to the fundamental principle of the single point of control, that is, if you want to initiate a change in your program, you should only have to make that change in one place. If it is the case you need to make that change in multiple places (especially in different classes) then you have bad coupling.

## OOP Design Principles

Design principles help us to construct software that has important qualities, such as maintainability, readability, which is critical for our code to age gracefully.

# The **SOLID** principles

1. Single responsibility
2. Open-closed
3. Liskov substitution
4. Interface segregation
5. Dependency

In this class we mainly discuss 1. and 3.

## The Single Responsibility Principle:

(very self-explanatory). Essentially each class should be centered around one cohesive concept. Overtime if a class seems as if it has picked up more than one responsibility consider splitting into more than one class.









