
#cs #abstraction #cs210 #java

# Abstract Classes
- Abstract classes are the midpoint between a regular class and an interface, in that ==if a class extends an abstract class then it inherits the regular methods all the same, but must implement all of the abstract methods== similar to an interface. Also similar to an interface ==you cannot instantiate an abstract class==
- Abstract classes can extend a class, or implement one or many interfaces.

## An Abstract Method
```java
public abstract returnType methodName(param p);
```
Above is an example of what an abstract method looks like, note there is no method body and has a ; immediately after the method specification.

## An Abstract Class
```java
public abstract class Animal {  
	private String name;  
	  
	// Constructor  
	public Animal(String name) {  
	this.name = name;  
	}  
	  
	// Abstract method   
	public abstract void makeSound();  
	  
	// Regular method
	public void sleep() {  
	System.out.println(name + " is sleeping.");  
	}

```
Above is an example of what an abstract class could look like.

### Why do we have abstract classes?
 
 In essence, ==abstract classes are used for generic concepts== that have default behaviour but should not be made into objects -> ie you would not instantiate an animal but you would a dog


> [!theorem] Class Hierarchies
> If an abstract class implements an interface it does not need all of the methods from the interface to be present in the abstract class -- BUT all sub classes of the abstract class do.

# Method overloading vs overriding


> [!theorem] Method Overloading 
> Method overloading occurs when two methods in the same class have the same name but different parameter lists. We use method overloading when we want to provide ==implementations of the same behaviour for different input parameters.==


 
> [!theorem] Method Overriding 
>  Method overriding occurs when a subclass provides a method of the same name and same signature as a method in a superclass. We use method overriding when we want to extend, or ==provide a different implementation of, a behaviour inherited from a supertype.==
