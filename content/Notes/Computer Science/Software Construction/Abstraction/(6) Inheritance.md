
#cs #abstraction #cs210 #java
# Implementing, Extending and Inheritance
## Interfaces 
- An interface is a special kind of class that is implemented but not extended by other classes
- ==An interface is a list of methods that must be implemented by classes which implement it==. But the interface does not actually specify the implementation of those methods and merely contains stubs
- The @Override annotation is used to annotate methods in a sub type that override the super type method implementation (ie fly called on an airplane would not flap its wing's)
- A Java class can implement 1 $\leq$ interfaces (as many as you want really). For example an airplane can implement the flyer interface and the cafe interface making it implement the methods found in both of those.
- If a class implements two interfaces which both have a method of the same name, the class only needs to implement that method once.
- An interface class cannot be initialized, that is you cannot create an interface object.
- Once a method specified in an interface is overridden in a class hierarchy by a class, all sub types of that class will still compile and need not have their own implementation of the method from the interface
- An interface can extend other interfaces, but cannot implement other interfaces!

## Extending classes

- When a sub class extends a super class we can call all the super class methods on the subclass who inherits them, but we cannot call all the sub class methods on the super class. This is referred to as ==inheritance==.
- If we want a field or method to only be available inside its own class we can declare their visibility as ==private==. Where as ==protected== allows for that field to be accessible by its own class, subclasses, and any classes in the same package.
- If class B extends class A it inherits all of the behaviour (methods) of class A and can also add to it.
- When you extend a class you get access to all the super types methods but its not necessary to implement it, unlike when implementing an interface
- Classes can override their super class methods by redefining the method with the same name and signature
- When deciding which methods to call on an object, Java works up the hierarchy of actual types (the instantiated type) to find implementations (this is called *method dispatching*)
- If you have a type hierarchy: A <- B <- C then you can do A aa = new B() or A aa = new C() or B bb = new C() but not working up. (ie we cant declare an object of type C and then try to call type A methods on it).
- Subclasses can make their own methods, thus those methods are not available to objects declared as their supertype, because the declared type dictates which methods can be called on a object.

### Method Dispatching
- ==You can only call the declared methods on an object== (ie methods tied to the apparent type)
- To determine which method implementation to use for a variable, ie if there are multiple of the same method as in the case of method overriding, Java works up the hierarchy starting at the ==instantiated== type of the variable (the actual) not the declared type.
- For methods to be the same they must have the same name and signature, and parameters

### Super calls
- Using the super prefix in method calls tells Java to use the super classes' implementation -> super() calls the super classes' constructor and super.methodName() calls the super classes version of methodName()

