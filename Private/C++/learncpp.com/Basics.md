#cpp 

# C++ Basics

## Statements and Structure

A statement is a type of instruction that causes the program to perform some action, most but not all statements in cpp end with a semicolon. In cpp statement are grouped into units called functions, where a function is collection of statements that are executed sequentially from top to bottom.

In every cpp program there must a `main` function, this is because when the program is run, the statements inside `main` are executed in sequential order.

In programming, the name of a function, object, type, template, etc... is called its identifier.

### Hello World
```cpp
#include <iostream>

int main()
{
   std::cout << "Hello world!";
   return 0;
}
```

In this program, the `#include <iostream>` indicated we would like to use the contents of the `iostream` library, this is a part of the cpp standard library that allows us read and write text from the terminal, and we need it to use the `std::cout` on line 5. Essentially, this include statement imports the requested library into our file when we compile which allows us to call it's functions etc. 

We then define the main function which has a return type of `int`, so it will return an integer, the first line of the function is `std::cout` which stands for "character output" and the `<<` operator ==allows us to display information to the console.== In this case we are printing "Hello World!" to the console.  Finally, we return 0 which is the default indicator that main executed without any issues. 

## Comments
Comments are a programmer-readable note that is inserted directly into the source code of the program, they are ignored by the compiler and intended for the programmer's use only. You can make use of the single line comment with `//` that tells the compiler to ignore everything to the left of the `//` symbol. Or, you can use multi-line comments by beginning your comment with `/*` and ending with `*/`. Comments should be used to give the reader a good idea of what the library, program, or function is trying to accomplish, how it will do it, and why it will do it.

You can also comment out code, which is a convenient way to temporarily exclude parts of your code from compilation. There are many reasons you might want to do this, including debugging, leaving a reference for later, or putting off a fix for later. In VS Code you can comment/uncomment a selection with `Ctrl-\`.

## Objects and Variables

Data is any information that can be stored, moved, or processed by a computer. Values are a form of data, and when they are stored in the source code of a program, they are called literals and cannot be altered as they are read-only. Hence, if we want to store data in memory we need some other way to store values. The main memory in a computer is the Random Access Memory (RAM), for example, when we run a program the OS loads that program into RAM and any data also hard-coded into it.

In cpp we try not to directly access memory, instead we access it indirectly through ==objects==. An object represents a region of storage (this could be RAM or a CPU register) that holds a value. In essence, objects allow us to instead get the value stored by them, instead of providing literal memory addresses. An object with a name is called a ==variable==.

In order to use variables in our program we need to define them with a name (identifier), and a type. The type of an object determines how much memory is allocated and what data it can store, for example `int x;`. At runtime when the program is loaded into memory and executed, this variable now has memory allocated to it and can be used by its ==identifier== `x`. 

In cpp the type of an object must be known at compile time and cannot be changed without recompiling the program.

We can also define multiple variables of the same type within the same statement by separating the names with commas, for example: `int a, b;`.


## Variable Assignment and Initialization
