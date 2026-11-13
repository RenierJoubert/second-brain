
#cs #cs210 #java

# 1. `==` Compares Object References (pointers).
# 2. `.equals()` compares **object content** - but *only if the class overrides it*. Else it behaves just like `==`.

1. Sometimes to find an element in a collection, you must override equals and hashcode for its type.

2. Other times if you want to use equals for objects ==but only want to assess a particular field then you can also override equals and hashcode for that object type== 

For example, ==if your code is not able to find a particular Key in the HashMap== (when you know you put it in), it may be because the implementation is comparing the key’s object identity as opposed to its object contents.  Fix that by overriding hashCode() and equals() in the Key class (whatever type your Key is), and select the contents upon which you would like to base equality.
- ==Before you override equals the only objects that are equivalent to any object is the object itself.==
- When you override equals you are essentially making bigger groups of objects that are equivalent to each other, any two objects with the same fields will be considered to be equivalent.

Eg, if the dots represent objects and the circles around them represent equivalence classes:

![[Pasted image 20260305000221.png]]


Overriding equals transforms the diagram to this:


![[Pasted image 20260305000241.png]]

But now all the objects in the same equivalence class have the same hash code, so hashcode must too be overridden.

Which can be done as follows:
```java
@Override  
public int hashCode() {  
    int result = name.hashCode();  
    result = 31 * result + color.hashCode();  
    return result;  
}
```

 This implementation ensures that the results of both the hashCode() and equals() methods are completely determined by the contents of the fields of the object.
