#cs #cs210 #OOP #java 

We can refactor our code to improve cohesion and coupling by abstracting duplicated code into methods, or we can also refactor our code to better adhere to the Single Responsibility Principle touched on in [[(1) Design Fundamentals]]. But ultimately, this is just a start and there are many more reasons to refactor. 

# What is Refactoring?

Refactoring is the process of making ==meaning preserving changes== to code in order to improve its readability, structure, or fix duplication. Such that all changes retain the already existing behaviour.

## How Do We Refactor?

When refactoring we can delegate to move our functionality to a more suitable class or file, and also break apart methods to make the original method more readable.

For example, if one class does the work of two we should observe the clustering and refactor it out into separate classes for better cohesion and to adhere to the SRP. To do this, we first ==create a new class== and ==move the functionality and fields== into the new class, while leaving the original methods in place, BUT ==replacing the bodies with calls to the method in its new location== and parameters are passed to the new methods from the original methods.

## How Do We Deal with Duplicate Code?

To eliminate duplicated code in two or more distinct locations, we can use a refactoring feature called =="extract method"== which creates a new method and replaces the original method bodies with calls to the newly created method.