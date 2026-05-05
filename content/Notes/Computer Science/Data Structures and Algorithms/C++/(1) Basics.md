#cs #cs221 #cpp

# C++ Basics

Cpp is a compiled language and in order for it to run its source files must first be compiled into object files, which are then linked by a linker into an executable file.

This executable is created for specific hardware and is not portable, so when discussing portability of cpp we refer to the source code, not the executable.

Cpp is also a statically typed language, the same as #java,  meaning all objects/variables must be declared.

## Hello World

Every cpp program must have exactly one global function called *main*, to which the program begins by executing that function. 
```c++
int main() {} // the minimal cpp program
```

The int value returned by main is the programs return value to the system, any non-zero value from main() indicates failure.

```c++
import std;

int main() {
	std::cout<<"Hello World!\n";
}
```

This is the hello world program for cpp, which utilizes the standard cpp library std.

The operator `<<` ("put to") writes its second argument onto it's first, so in this case we are writing the string "Hello World!\n" onto the standard output stream `std::cout`.  Where "\n" creates a new line. 

Generally however, all executable code is written in functions and is called either directly or indirectly from `main()`. For example:

```c++
import std;

using namespace std;

double square(double x) {
	return x*x;
}

void print_square(double x) {
	cout <<"the square of"<<x<<"is"<<square(x)<<"\n";
}

int main() {
	print_square(1.234); // print: the square of 1.234 is 1.52276
}
```

## Functions

Defining functions in cpp is how we specify how an operation is to be done, also a function cannot be called unless it has been declared. A function declaration provides the return type, function name, and arguments:

```cpp
Elem* next_elem(); // no arguments and returns a pointer to an Elem
double sqrt(double); // double argument and returns a double
```

The semantics of a function declaration are exactly the same as a variable declaration, namely we can can declare variables as follows:
```cpp
double d = sqrt(2);
```

A function declaration can contain argument names, but unless the declaration is for a function definitions then the compiler ignores such names.


