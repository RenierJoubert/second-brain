#cs #cs210 #abstraction #java

## Objects in java have a **declared** type and an **instantiated** type

- Note these are sometimes instead referred to as `apparent` and `actual` types.


> [!theorem] Types
> Variable declaration when creating an object dictates the object's apparent type and initialization/instantiation sets the actual type:


```Java
ApparentTypeName object = new ActualTypeName();
```

This can also be performed in a method signature by using the parameter declaration:

```Java
public void method(ApparentTypeName paramName)
```

Setting the actual type of an object can also be done by passing the object as an argument:

```Java
methodName(new ActualTypeName());
```

## The APPARENT type of a variable must be either the same type or super type of the object

- But the distance of the super type is arbitrary 

## The APPARENT type also dictates which methods can be called on the object 

## The ACTUAL type of the object determines it's method implementation (what methods are called).


## Type substitution

To be substitutable, a sub type must support the same operations as the super type. The Java compiler checks that this fact is true at the (syntactic) method signature level; that is, the sub type has a definition for each operation that matches the definition of the operation in the super type.

### So when/how is the sub type substitutable for the super type?

For a sub type to be substitutable for a super type, ==the pre-condition of a method defined in the sub type must be the same as or weaker than the pre-condition specified for the method of the same signature in the super type== (requires clause)

The effects clause is referred to as the post-condition of the method. For a sub type to be substitutable for a super type, ==the post-condition of a method defined in the sub type must be the same or stronger than the post-condition specified for the method of the same signature in the super type==.

==Note:== if you want to change declared types of an object you need to do a cast even if they are substitutable!!. 

This is referred to as the *Liskov Substitution Principle* and more can be read about it in [[(2) The Liskov Substitution Principle]]]

## Variable types when calling methods

A parameter is a local variable declaration, so ==a parameter declaration sets the apparent type of the variable it is declaring.== 

==When passing an argument into a method, the argument must have a declared type of the 'same type', or a 'sub type' of the parameter's type.==





