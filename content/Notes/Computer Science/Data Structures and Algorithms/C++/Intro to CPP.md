#cpp 

## Basic Types

### Integers
To represent **integers** we can use,
1. `char` (1 byte)
2. `short` (2 bytes)
3. `int` (2 or 4 bytes)
4. `long` (4 or 8 bytes)
5. `long long` (8 bytes)

These can further be broken down into *signed* and *unsigned* types where *signed* types can be used to represent negative integers.

![[Pasted image 20260618230821.png]]

For example, in our first lab when we built a class for representing an RGBA pixel, it was most optimal to use an `unsigned char` because the RGB values are only in the interval $[0, 255]$. 

### Real Numbers
To represent **real numbers** we can use the following,
1. `float` (4 bytes)
2. `double` (8 bytes)
3. `long double` 16 bytes

### Misc
Some other notable types include `void` and `bool` which should be familiar.

## Classes
> Both Java and CPP are OOP languages so there are a lot of natural similarities between them.

For example, a class in Java might look like:
```java
class Car {
	String brand;
	
	Car(string b) {
		this.brand = b;
	}
	
	void honk() {
		System.out.println("Beep!"):
	}
}

```

Which translated into cpp then looks like:
```cpp
class Car {
public:
	std::string brand; // member variable (a field in java)
	
	Car(std::string b) : brand(b) {} // constructor
	
	void honk() { // function (method)
		std::cout << "Beep!" << std::endl;
	}
};
```

## File Structure

In cpp, classes have both a header file `(.h)` and a source file `(.cpp)`. The header file declares the constructors, member variables, and functions, etc. Wherein, class members can either be public or private, and the source file contains the function implementations such that each function is prefixed by the name of the class it is in.

For example,
![[Pasted image 20260618232439.png]]![[Pasted image 20260618232450.png]]

## Importing Libaries
> To import libraries in cpp we use `#include` statements, for example:

```cpp
#include <iostream>
#include <vector>
#include "happy.h" // header file (importing a user defined class)
using namespace std; // use standard library names without "std::"
```

## Header Guards
> Guards are important for preventing compilation errors

Because `#include` copies the source file directly into the destination file, we need to use guards that prevent the same file from being copied multiple times, namely a redefinition error, also these guards should have unique names.

For example,
```cpp
#ifndef CS221UTIL_PNG_H // if this is not defined yet
#define CS221UTIL_PNG_H // then here is its definition

#include <string>
#include <vector>
#include "RGBAPixel.h"

using namespace std;

namespace cs221util {
	class PNG {
		public:
		// ...
		
		private:
		// ...
	};
}
#endif // this is the end of the definition
```