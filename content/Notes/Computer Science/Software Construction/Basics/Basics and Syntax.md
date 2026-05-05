
#cs #cs210 #syntax #java

**Basics 1:**
	Naively assessing code by its structure
	Looking at the files and folders in the project

High level overview of the folders:
	File with the play symbol allows you to run the program
	The folders within the project are called **packages**
	The files within those folders are called **classes**

Starting point for system analysis:
	Follow along by starting with the thing that runs
	Classes can import other classes, this is done at the top of the file, ie import java.util.List;
	We can study these imports to see which classes are required by other classes to begin understanding the overall cross functionality of the system, ie shape imports midi synth but drawing does not, thus shape must be what determines the sound of the program


**Basics 2:**
	Understanding the functionality of the program by its behavior: Ie method calls and call graphs

1. A class contains all the behavior and data for a single concept
2. A method call can look like methodName() or otherMethod(x, y)

3. You can get from a method call to its definition with ctrl B and go back with ctrl [

4. There are two kinds of method calls in java, calls to a method in another class look like variable.methodName()

5. A method declaration has a name, a parameter list, and a method body between two curly braces

We can find the implementations of a given method and so forth until we hit java to study the behavior of a method and overall functionality

**Basics 3:**
	Classes and objects
	Classes (files in packages) contain data and operations, ie the Dog class might contain an age and operations such as bar
	Classes are more of a static concept

Constructs:
	A method call to a constructor and the name of the class you want to use, ie newDog() -> copies class information from dog into a new Dog instance
	Constructors come right after the constant field typically

Variables:
	We need to declare variables, there are primitive types but we may also use classes, eg. int x; or Dog d; such x and d point to instances of d and x. But this requires assignment, because objects hold reference to something so we can type d = newDog(); or Dogfido; fido = d 
	We can also select data in a variable and alter it by typing d.name or call methods with d.bark()

Lists:
	Lists need to be declared with ArrayList<Dog>dogs, this creates a pointer dogs

	Then we do the assignment with ArrayList<Dog>dogs = new ArrayList<Dog>(); -> This constructs the list of dog
	We can add dogs into this list by using dogs.add(d)

Anatomy of a class:

1. Imports
2. Declaration of class
3. Body of class
	Constants, fields, and methods -> at the top of the methods is where constructors live





