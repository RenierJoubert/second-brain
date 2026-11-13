
#cs #cs210 #java
 
# Type Hierarchies and Relationships
![[Pasted image 20260304184116.png]]


## Sequence Diagrams

- A ==sequence diagram depicts the order of interactions between objects== to accomplish an operation of interest.

For example:

![[Pasted image 20260304185124.png]]
Is the sequence diagram for the following code:

```java
/** 
 * JDayChooser is a class for choosing a day
 *
 * @author Kai Toedter
 */
class JDayChooser {

   Calendar calendar;
   
   JDayChooser() {
      calendar = new Calendar();
      init();
   }

   void init() {
      drawDayNames();
      drawDays();
   }

   void drawDayNames() {
      int firstDayOfWeek = calendar.getFirstDayOfWeek();
      // generate and draw names
   }

   void drawDays() {
      // do a bunch of drawing
   }
}
```

## If Else Statements

Note, when drawing sequence diagrams, its important to remember that the method calls inside the if statement, for example: `pm.expired()` 

```java
public int loadFunds(int amount) {
	PaymentMethod pm = this.getPaymentMethod();
	int res = -1;
	if (!pm.expired()) {
		res = this.addFunds(pm.charge(amount));
	}
	return res;
}
```

should NOT be included inside of the *if box* in the sequence diagram. The proper implementation for this code looks like this:

![[Pasted image 20260414233855.png]]

## Extracting Class Hierarchies

- To extract a class hierarchy we need to analyze which classes extend and implement which classes, ==ie find all the super and sub types.==
- Recall if a class extends another (including abstract classes) we draw a solid lined arrow
- Recall if a class implements an interface we draw a dotted line arrow
- Interfaces and abstract classes are denoted with <<>> brackets

### Extracting Associations

- To extract associations ==we need to analyze the fields within classes== -> if a class contains a field of another type we say that class is associated with that other type (associated but not a part of the object)
- To draw the association we draw a simple arrow and indicate the parity of the association. For example, if we had a class *dog*:

```java
public class Dog {  
    private Toy toy;   
}
```

It has the following association:
![[Pasted image 20260304185912.png]]

Because when for the entire lifetime of the dog object it is associated with a toy object

- Now if the dog had a collection of toys or another object that 1 would become a "0..\*\" annotation next to the arrowhead 

### Extracting Aggregations

- If one object is part of another object (instantiated in the constructor) then we draw the following diagram:

![[Pasted image 20260304190139.png]]

Note: if it is a bidirectional relationship (ie both objects are part of each other), then we simply do not draw any arrow heads.

### Determining the multiplicity of a relationship:

- To determine the multiplicity of a relationship we need to find its ==upper/lower bound==
- ==Lower bound:== look at the fields after construction and examine how other methods change them, ie if a list always has 1 element in it then the lower bound of the relationship is one. Whereas if a field has a value of null then the multiplicity would be zero.
- ==Upper bound:== look at the methods that modify the object and and examine how the fields are changed, for example if you can add an arbitrary number of items to a list then that relationship would be of multiplicity \*\.

### Dependencies:

- If a class has a dependency on another class that is not held in a field, for example in a local variable or calls on a method, or takes a variable of that type as a parameter, then use a dashed arrow to represent the dependency. (dependencies do not have multiplicities)

### Summary 
This is a summary of one approach you can take to extract a class diagram from code:

1. Choose a class (e.g., X) to represent in the UML Class Diagram
2. Inspect the class (e.g., X) for fields that refer to other classes (e.g., Y and Z) in the application
3. Add each class found in Step #2 to the UML Class Diagram (e.g., Y and Z)
4. For each field found in Step #2 (e.g., assuming there is one field of type Y):

5. how many objects (of type Y) can that field hold? Answering this question helps indicate what the cardinality for the association (e.g., from X to Y) can be. For instance, if the field is declared to hold a Collection of objects of type Y, the cardinality can be n (or 0..n or 1..n depending on other constraints)
6. is the field initialized with values in the constructor of the class you are inspecting? Answering this question helps determine if there is a minimum cardinality for the association (e.g., from X to Y)
7. are there methods that can change the cardinality after it is set (if it is) in the constructor? Answering this question helps determine the overall range of the cardinality for the association (e.g., from X to Y)
8. visit the class at the end of the association (e.g., Y). Can this class refer to an object of type X? If so, then the association from X to Y can be navigated in both directions
9. consider what the association represents. Does it represent a whole-part relationship? If so, change the association to an aggregation

10. Repeat steps 2-4 for every class you end up adding to the UML Class Diagram

## Casts

A cast will compile when the types are in the same inheritance/interface family in a way Java thinks could be valid at runtime.