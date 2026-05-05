
#cs #cs210 #java

# How to Choose a Collection from the Java Collections Framework:

When implementing hierarchies we need to determine the type of data for each association, and if that type is collection we need to determine the type of collection needed. That is,  when you implement an association or an aggregation that includes a cardinality greater than one, it is necessary to choose a type for that field that will hold multiple objects.

The main two collection objects can be broken down into:

- ==Sets== -> unique items and faster searching
- ==Lists== -> can contain duplicates but maintains order

## Sets
When working with sets you can implement either a **hash set**, a **tree set** or a **linked hash set**. A ==hash set stores it's elements in a hash table and is very fast for searching but has no guaranteed order of iteration.== (I think storing is slow for larger data sets??). A tree set stores its elements in a red-black tree and is much slower. A linked hash set is implemented as a hash set with a linked list running through it, it orders elements based on the order they were inserted but is only slightly slower than a hash set.

### Set Operations

```java
- size()
- add() -> false if already added
- isEmpty()
- remove()
- s1.containsAll(s2) -> true if s2 is subset of s1
- s1.addAll(s2) -> transforms s1 into union of s1 and s2
- s1.retainAll(s2) -> transforms s1 into the intersection of s1 and s2
- s1.removeAll(s2) -> removes all s2 elements from s1 (the difference)
```

## Lists

==Lists have positional access and can manipulate element position==, lists also have access to search, iteration, and range. (Note you can also iterate over a set). (Note two list objects are equal if they contain the same elements in the same order). Java supports two different list objects, array lists and linked lists, but usually we tend to ==use array lists as they are faster.==

### List Operations
```java
- length()
- add() (adds to end of list)
- addAll() (adds to end of list)
- remove() (removes first found occurence)
- get()
- set()
```

### Some More List Algorithms

- `sort` — sorts a `List` using a merge sort algorithm, which provides a fast, stable sort. (A _stable sort_ is one that does not reorder equal elements.)
- `shuffle` — randomly permutes the elements in a `List`.
- `reverse` — reverses the order of the elements in a `List`.
- `rotate` — rotates all the elements in a `List` by a specified distance.
- `swap` — swaps the elements at specified positions in a `List`.
- `replaceAll` — replaces all occurrences of one specified value with another.
- `fill` — overwrites every element in a `List` with the specified value.
- `copy` — copies the source `List` into the destination `List`.
- `binarySearch` — searches for an element in an ordered `List` using the binary search algorithm.
- `indexOfSubList` — returns the index of the first sublist of one `List` that is equal to another.
- `lastIndexOfSubList` — returns the index of the last sublist of one `List` that is equal to another.

## Maps 
==Maps map key value pairs==, that is they link a key to some stored value and cannot contain duplicate keys. The most common implementation is a hashmap.

### Map operations
```java
- put()
- get()
- remove()
- containsKey()
- containsValue()
- size()
- empty()
- putAll()
- clear()
```

### Implementing a Map

```java
\\ create a hashmap object
Map<KeyType, ValueType> myMap = new HashMap<>()


\\ map a key to a value
myMap.put(myKey, myValue)

\\ get that stored value again
ValueType val = myMap.get(myKey)

```

## Queues

Queues are pretty self explanatory and basically ==just a fancy list, FIFO== (but not always), queues can also be bounded.

Each queue method exists in two forms: ==(1) one throws an exception if the operation fails, and (2) the other returns a special value if the operation fails== (either `null` or `false`, depending on the operation). The regular structure of the interface is illustrated in the following table.

### Queue Operations

| Type    | Throws      | returns    |
| ------- | ----------- | ---------- |
| Insert  | `add(e)`    | `offer(e)` |
| Remove  | `remove()`  | `poll()`   |
| Examine | `element()` | `peek()`   |

- Remove and poll both return the head of the queue but they differ when the queue is empty -> `remove` throws `NoSuchElementException`, while `poll` returns `null`. Whereas The `element` and `peek` methods return, but do not remove, the head of the queue

## A Collection

A collection just represents a group of objects (elements) and is used to pass around objects with ==maximum generality==

There are three ways to traverse collections: (1) using aggregate operations (2) with the `for-each` construct and (3) by using iterators:

### Aggregate

- ==Obtain a stream== and perform aggregate operations on it:

```java
myShapesCollection.stream()
.filter(e -> e.getColor() == Color.RED)
.forEach(e -> System.out.println(e.getName()));
```

### For Each

```java
for (Object o : collection)
    System.out.println(o);
```

### Iterators

- (We will learn more about this later)

```java
public interface Iterator<E> {
    boolean hasNext();
    E next();
    void remove(); //optional
}

```

The `hasNext` method returns `true` if the iteration has more elements, and the `next` method returns the next element in the iteration. The `remove` method removes the last element that was returned by `next` from the underlying `Collection`. The `remove` method may be called only once per call to `next` and throws an exception if this rule is violated.

# Best Practices

- ==Obey the general contract when overriding equals==
- ==Always override hashCode when you override equals== 

## Overriding equals:

- Recall that when you compare two objects with == to see if they are equal you are actually checking to see if they ==point (refer)== to the same object 

Eg:

```java
String s = new String("a");  
String t = new String ("a");
s == t; // is false
s.equals(t); // is true
```

Ensuring the `equals` method works correctly typically means overriding `equals` in the class you have defined. When you override `equals`, it is critical to adhere to the general contract of the equals method defined in Java’s `Object` class, which states that

"the `equals` method implements an equivalence relation on non-null object references:

- it is reflexive for any non-null reference value, `x.equals(x)` should return true
- it is symmetric for any non-null reference values `x` and `y`, `x.equals(y)` should return true if and only if `y.equals(x)` returns true
- it is transitive for any non-null reference values, `x`, `y` and `z`, if `x.equals(y)` returns true and `y.equals(z)` returns true, then `x.equals(z)` should return true
- it is consistent: for any non-null reference values `x` and `y`, multiple invocations of `x.equals(y)` consistently return true or consistently return false, providing no information used in equals comparisons on the objects is modified
- for any non-null reference value `x`, `x.equals(null)` should return false"

The basic formula for overriding equals to ensure the implementation follows the contract:

```java
public class Rectangle implements Figure {

   private Point topLeftCorner; 
   private int length;
   private int width;

   @Override
   public boolean equals(Object obj) {
      // Step One. Return false if object to compare to is null
      if ( obj == null )
        return false;

      // Step Two. Make sure the two objects to compare are
      // of the same type. We use “getClass” to do this check.
      if ( getClass() != obj.getClass() )
        return false;

      // Step Three. Treat obj as a value of type Rectangle,
      // by casting it. We know it’s ok to treat it as a
      // Rectangle because we checked its type in Step Two
      Rectangle other = (Rectangle) obj;

      // Step Four. Check that the values of all fields in both
      // objects are equivalent. Note because other is of the
      // same type as the type containing the declaration of
      // this equals method, we can access private fields
      return topLeftCorner.equals( other.topLeftCorner ) &&
             width == other.width &&
             height == other.height;
        }
}
```

## Overriding hashcode:

- Some JCF implementations use a hash function to represent an object as an integer value.
- ==REMEMBER: if you override equals you need to override hashCode && equals objects must have equal hash codes== 

*When you override hash code you should implement the same factors that are taken into consideration when overriding equals.*

```java
public class Rectangle implements Figure {
   private final static int HASH_MULTIPLER = 11; // a prime num
   
   @Override
   public int hashCode() {
      // Make the code out of the components of the 
      // Rectangle
      int code = length;
      code = code * HASH_MULTIPLIER + width;
      code = code * HASH_MULTIPLIER + topLeftCorner.hashCode();
      return code;
   }
}
```
![[Pasted image 20260304233647.png]]


