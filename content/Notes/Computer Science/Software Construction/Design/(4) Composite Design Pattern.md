#cs #cs210 #OOP #java 

The composite design pattern is a design pattern that can be applied to solve a particular design problem, while keeping cohesion and coupling in mind.

# Coupling in Depth

When designing a system it is often difficult to strike a balance between aspects like simplicity, flexibility, and performance, etc. Now, as a system grows, so too do its dependencies and as a result the more interconnected and resistant to change the system becomes. This is whats really referred to as *coupling*. 

![[Pasted image 20260404180903.png]]
Above is an example of how coupling may vary by design. For example, in design (a), a change in class C would mean the developer must consider if  class A and B should too be changed. Whereas a change in class A would be less likely to impact the other classes. On the other hand, in design (b) if there was a change to class C, a developer would only need to ask if a change in class B is required, and if not, they need not consider class A.

# Cohesion in Depth

*Cohesion* is the term used to describe whether the functionality provided by a module is related and focused. A class with high cohesion contains methods that all pertain to the responsibilities of the class, whereas a class with low cohesion contains methods that are not directly related to those responsibilities.

Classes that exhibit high cohesion are desirable as a developer can look at one class and reason about the abstraction the class provides. The less cohesive a class, the more a developer must find and visit multiple classes when making a change and the higher the coupling in the system as multiple classes end up interacting to provide desired functionality.

# Assessing a Software Design

First and foremost, when assessing a design it is obviously critical that design supports the functionality needed by the application. Secondly, designs are assessed with coupling and cohesion, where ==designs that have low coupling and high cohesion are greatly preferred and should be the aim==. In general, ==we want to have only one path between classes==, the diagram above shows why. Similarly, cycles between classes should also be avoided.

# The Composite Design Pattern

The composite design pattern is a solution for an object oriented hierarchy that involves some form of recurrence relation, in which nodes with children differ in behaviour than nodes without children. In essence, ==the composite pattern describes a group of objects that are treated the same way as a single instance of the same type of object==. The intent of a composite is to "compose" objects into tree structures to represent part-whole hierarchies. Implementing the composite pattern lets clients treat individual objects and compositions uniformly.

The pattern consists of three classes:
1. The Composite: ==The node that can have children==
2. The Leaf: ==No children==
3. The Component: ==The super class that is extended by the first two classes==, this can be an ==interface, abstract, or regular class==

![[composite-1.png]]
- The Composite has a collection of Components, so that the Composite class can loop through those Components without keeping track of whether the Component is actually a Composite or a Leaf.
- The Composite also has an addComponent method so that Components can be added to its contents.
- Without the Component super class abstraction, the Composite would have to maintain different lists for each kind of element in its contents, and would need to provide individual methods for adding contents, and displaying contents for each kind of content.
- Think about a file system that has folders and files, a folder could contain a file, or another folder than contains more files and folders...

![[Pasted image 20260404185507.png]]


