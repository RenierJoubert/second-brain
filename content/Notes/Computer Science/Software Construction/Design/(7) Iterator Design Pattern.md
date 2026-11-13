#cs #cs210 #OOP #java 

# Iterators and Iterator Abstraction

1. The iterator pattern allows us to separate out all the logic for iterating over a collection
2. Every kind of collection needs its own iterator because they all have their own unique structure and the iterator logic is what provides a tailored traversal
3. Java provides iterators for many of the collections in its language. Each of those iterators implement the Iterator Interface (specifying the next and hasNext methods), and the collections each implement the Iterable Interface (which has one method iterator that returns a reference to the correct iterator for the collection.
4. ==We need the iterator pattern when we are working with our own unique collection==

Basically, ==if a class implements the Iterable Interface, then that class can be used in a foreach to loop over elements of that class==.  This is because the foreach loop is actually translated into a for loop as follows:

```java
for(TheElement element : elements){  
    element.doSomething();  
}  
  
//Turns into:  
  
Iterator<TheElement> elementsIterator = elements.iterator(); // instantiate iterator
while(elementsIterator.hasNext()){  // if there is a next object in collection
    TheElement element = elementsIterator.next();  // the next object is
    element.doSomething();  // do something with it
}
```
![[Pasted image 20260413230300.png]]

![[Pasted image 20260413231709.png]]

The iterator design pattern allows us to repeat a set of instructions on a collection of objects or iterate over that collection using for-each etc.

Often in OOP we need to repeat an identical set of instructions on many different objects, this requires iteration. Recall that there are three different kinds of abstraction used in Java:

1. Procedural abstraction
2. Data abstraction
3. Iteration abstraction

Iteration abstraction in java allows us to use arbitrary data in a convenient and efficient way. The iterator pattern addresses this need to do without needing to know details about the objects we are iterating on.

For example, the Java Collections Framework supports the data abstraction of a collection with multiple implementations, and the Collections interface specifies operations common to all collections. Specific kinds of collections can extend this interface to allow for more operations.

## An Iterator

Namely, an iterator is something that happens to a collection, but not something that is apart of a collection. Specifically, when we iterate over a collection we wish to access each object in the collection in turn, without altering the collection.

The *Collection* interface makes it possible to do so as it includes:

```java
public interface Collection<E> ... {
	Iterator<E> iterator();
	...
}

```

Where the *iterator* is an object that knows how to visit all elements of the collection. For example is has the specification:

```java
public interface Iterator<E> {
	boolean hasNext();
	E next();
	...
}

```

For example, if we wanted to use an iterator to determine the sum of a list of integers:

```java
List<Integer> aListOfIntegers = new ArrayList<Integer>(); 
aListOfIntegers.add(3);
aListOfIntegers.add(5);

int sum= 0;
Iterator<Integer> anIterator = aListOfIntegers.iterator(); 
while (anIterator.hasNext()) {
    Integer i = anIterator.next();
    sum = sum + i; 
}

assert(sum == 8);
```

After the list object is created and populated with two values (3 and 5), we initialize a variable to compute the sum and we retrieve an iterator object from the list. We then loop over the list by asking the iterator (object referred to by the `anIterator` variable) whether any more values are available (`hasNext()`). If there are, we proceed into the body of the while loop, and use the `next()` operation on the iterator to get the next `Integer` from the list. The call to `next()` also advances the iterator to the next element of the list so that when we next call `hasNext()` at the top of the loop, we are seeing whether or not there is again another `Integer` to process. We stop when we have visited every element in the list.

## Implementing the Iterator Interface

Iterator is a data abstraction just as Collection is also a data abstraction, in order to traverse a collection of a particular type the ==iterator must know details about the collection, as a result there is typically a separate iterator implementation for each form of Collection.==

## The Iterable Interface

```java
public interface Iterable<E> { 
    Iterator<E> iterator();
}
```

This interface returns an iterator over a set of elements of type `E`. ==If a class implements this interface, an object of that class can be the target collection in a for-each construct.==

`Collection` is an interface that extends `Iterable`:

public interface Collection\<E> extends Iterable\<E>

==So every class that implements the Collection interface is also Iterable.==
- This means that every primitive collection data abstraction has its own iterator we can use (a preset iterator so to speak)

You can define your own data abstractions that implement Iterable and, as long as you then implement an Iterator subtype for your data abstraction, the abstraction can be used as the target in a for-each loop.


## Implementing A Preset Iterator

Say we have some custom collection *ThingCollection*
```java
package iterator;

  

import java.util.ArrayList;

  

public class ThingCollection {

	private ArrayList<Thing> things = new ArrayList<>();
	
	  
	
	public void add(Thing thing) {
	
		System.out.println("Ooh --- I have a new " + thing.getName());
		
		things.add(thing);
		
	}
	
	  
	
	public void removeThingsThatStartWith(String prefix) {
	
		for (Thing thing : things) {
		
			if (thing.getName().startsWith(prefix)) {
			
				things.remove(thing);
	
			}
		
		}
	
	}

}
```

And we want to perform a loop such as:

```java
for (Thing thing : myThings) {

	thing.display();

}
```

But this wont compile, ==to fix this, the collection class (ThingCollection) needs to implement the iterable interface AND specify the element type it will iterate over==. This can be done as follows:

```java 
package iterator;

  

import java.util.ArrayList;

  

public class ThingCollection implements Iterable<Thing> {

	private ArrayList<Thing> things = new ArrayList<>();
	
	  
	
	public void add(Thing thing) {
	
		System.out.println("Ooh --- I have a new " + thing.getName());
		
		things.add(thing);
		
	}
	
	  
	
	public void removeThingsThatStartWith(String prefix) {
	
		for (Thing thing : things) {
		
			if (thing.getName().startsWith(prefix)) {
			
				things.remove(thing);
	
			}
		
		}
	
	}

}

```

After implementing the interface we then need to implement the iterator method in the ThingCollection class:

```java
@Override
public Iterator<Thing> iterator() {

	return things.iterator();

}
```

Now, because things is an array list, `things.iterator` will just return an array list iterator.

After this our for loop should now compile. The issue now though however, after we uncomment the button line of code we are faced with a *ConcurrentModificationException*, this exception is triggered whenever you are actively iterating over a list but the list is changed mid traversal.

In our code it happens because of `things.remove(thing` in this loop:
```java
for (Thing thing : things) {

	if (thing.getName().startsWith(prefix)) {
	
		things.remove(thing);

}
```

To fix this, we need to ==use the iterators== own `remove()` method, allowing the iterator to remain in sync.

To do this, we remove the 'syntactic sugar' provided by our elementary for loop and instead implement code deeper in abstraction. So, we transform:

```java
public void removeThingsThatStartWith(String prefix) {

	for (Thing thing : things) {
	
		if (thing.getName().startsWith(prefix)) {
		
		things.remove(thing);
		
		}
		
	}

}
```

To this:

```java
public void removeThingsThatStartWith(String prefix) {  
	Iterator<Thing> iterator = things.iterator();  // instantiate the iterator
	while (iterator.hasNext()) {  
		Thing thing = iterator.next();  
		if (thing.getName().startsWith(prefix)) {  
			iterator.remove();  
		}  
	}  
}
```

In brief, a for loop and this iterator implementation are one and the same, albeit the iterator is just more complicated, the main thing thing is to instantiate an iterator such that `Iterator<E> iterator = elements.iterator()`. 

## Tricks

Sometimes, it very well may be possible to use a preset iterator in a problem, but it can be made more difficult because none of the fields have primitive collection types. In this case, it is sometimes possible to scan the class you wish to make iterable and search for any methods that returns what you wish to iterate over, for example:

In this problem we want these two loops:

```java
for (Resource resource : selectionState.getResourcesWithSelectedServices()) {
    System.out.println(resource);
}

for (Resource resource : selectionState) {
    System.out.println(resource);
}
```

to have the same effect, basically, it is asking us to make selectionState itererable so that its iterator iterates over its set of resources Set\<Resource>. Now in selectionState none of it's fields ever store its resource set directly, so we can just return field.iterator() and be done. BUT! if we look carefully it does specify a method that returns a set of resources, so we can just return the iterator called on that method as follows:

```java
public class SelectionState implements Iterable<Resource> {
    private Set<Service> selected;
    private ResourceRegistry registry;
    private boolean isAnySelected;

    // EFFECTS: constructs selection state with empty set of selected services 
    // and 'any' service selected
    public SelectionState(ResourceRegistry registry) {
        this.registry = registry;
        selected = new HashSet<>();
        isAnySelected = true;
    }

    // MODIFIES: this
    // EFFECTS: select resources with 'any' of the selected services
    public void setSelectAny() {
        // stub
    }

    // MODIFIES: this
    // EFFECTS: select resources with 'all' of the selected services
    public void setSelectAll() {
        // stub
    }

    // MODIFIES: this
    // EFFECTS: add service to selected services
    public void selectService(Service service) {
        // stub
    }

    // MODIFIES: this
    // EFFECTS: remove service from selected services
    public void deselectService(Service service) {
        // stub
    }

    // MODIFIES: this
    // EFFECTS: set selected services to given set of services
    public void setSelectedServices(Set<Service> selected) {
        // stub
    }

    // EFFECTS: return set of resources corresponding to current selection;
    // if 'any' requested, return resources offering any of the selected services
    // if 'all' requested, return resources offering all of the selected services
    public Set<Resource> getResourcesWithSelectedServices() {
        return null;  // stub
    }
    
    @Override
    // EFFECTS: return an iterator over the set of resources corresponding to current selection
    public Iterator<Resource> iterator() {
        // The "this." part could be omitted:
        return this.getResourcesWithSelectedServices().iterator();
    }
}
```
