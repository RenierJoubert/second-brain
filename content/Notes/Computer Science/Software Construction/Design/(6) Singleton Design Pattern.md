#cs #cs210 #OOP #java 

# The Singleton Pattern

The singleton pattern is used to ensure that each class has only one instance of that class, and that there is a global point of access to it. The singleton pattern addresses questions such as:
- How can it be ensured that a class has only one instance
- How can the sole instance of a class be accessed easily
- How can a class control its instantiation 
- How can the number of instances of a class be restricted

## When Do We Use It

For example, suppose we want any element in a program to be able ask a service for something entirely unique. Eg. usernames in a game or student IDs to student (everyone has one and they are all distinct).

## How Do We Use It?

The singleton class has ==3 key features==
1. A ==private static field== of the class's type to hold a single instance of the class
2. A private constructor (stops java from creating public one)
3. A ==public static== getInstance() method that grants access to the single instance, this is what is called by other objects when they want access to it.

In singleton, the class has one shared variable and that variable points to the single singleton object.

Basically, instead of calling something like new SingletonClass() to get an instance of the class, we call SingletonClass.getInstance() to get access to the one globally available instance of it.

For example, an example of a singleton class could be:

```java
public class UniqueNameProvider {

    private static UniqueNameProvider singleton = new UniqueNameProvider(); 
    private int lastName = 0;  
  
    // EFFECTS: creates a new unique name provider  
    private UniqueNameProvider() { }  
  
    // EFFECTS: returns the single instance of UniqueNameProvider  
    public static UniqueNameProvider getInstance() {  
        return singleton;  
    }  
  
    // EFFECTS: returns a new, unique name  
    public String getUniqueName() {  
        if (lastName == Integer.MAX_VALUE) {  
	            throw new RuntimeException("maximum number of unique names exceeded");  
        }  
        lastName++;  
        return Integer.toString(lastName);  
    }  
}

```

Which can be used to create unique usernames:

```java

public class GameName {  
    private final String displayName;  
    private final String fullTag;  
  
    // EFFECTS: creates a GameName with the given displayName  
    // and a unique fullTag based on the displayName    public GameName(String displayName) {  
        UniqueNameProvider provider = UniqueNameProvider.getInstance();  
        this.displayName = displayName;  
        fullTag = displayName + "#" + provider.getUniqueName();  
    }  
  
    // EFFECTS: returns the display name  
    public String getDisplayName() {  
        return displayName;  
    }  
  
    // EFFECTS: returns the full tag  
    public String getFullTag() {  
        return fullTag;  
    }  
}
```

