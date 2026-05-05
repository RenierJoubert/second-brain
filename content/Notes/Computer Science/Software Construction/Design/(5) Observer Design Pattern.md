#cs #cs210 #OOP #java

# The Observer Pattern

## Why Do We Need/Use It?

The observer pattern was designed to address situations where there is a one-to-many dependency between objects, where if one changes all dependents need to be notified.

In essence, the observer pattern allows for one or more objects to watch the state of one or more other objects.

- The ==watcher== is referred to as the *concrete observer*
- the ==watched== object is referred to as the *concrete subject*, OR often the *concrete observable*

![[content/images/Pasted image 20260413002817.png]]

## How Is It Setup?

*First* there is ==registration== where the observer registers with the subject such that the ==subject calls addObserver(Observer o) and adds that observer to its list of observers.==

*Second* there is ==notification== where when the subject's state changes it notifies the observers by calling its own ==notify method== that calls update for every observer and is contained in the method body which causes the change in state, the notify method then iterates through the list of observers calling an update method on each one.

### Push and Pull Models

When the subjects notifies it's observers it can also send an argument back to indicate the change (the push model), or it can send a reference to itself so that the observer can find out what changed for itself (the pull model).
![[content/images/Pasted image 20260413012235.png]]


- Subject is regular class or abstract class
- Observer is an interface
- Concrete subject (course) extends subject
- Concrete observer (student) implements observer
- notifyObservers is implemented in Subject
- notifyObservers is called in the concrete subject (course)
- update is implemented in the concrete observer (student)
- update is called in the subject 
- list of observers is maintained in subject

A generic example of this looks like:

```java
public abstract class Observable {
    private List<Observer> observers;

    // EFFECTS: constructs an observable with an empty list of observers
    public Observable() {
        observers = new ArrayList<>();
    }

    // MODIFIES: this
    // EFFECTS: adds o as an observer
    public void addObserver(Observer o) {
        if (!observers.contains(o)) {
            observers.add(o);
        }
    }

    // EFFECTS: notifies observers
    public void notifyObservers(String title, String type) {
        for (Observer o : observers) {
            o.update(title, type);
        }
    }
}

// Represents an observer
public interface Observer {
    // EFFECTS: observer is updated using title of notebook and type of note added to that notebook
    void update(String title, String type);
}
```

Remember to add @Override annotations here.

## Implementation Example:

Take the zoo example, the *subject* is as follows

```java
package model;

  

import java.util.ArrayList;

import java.util.List;

  

// Represents a subject in the observer pattern

public abstract class Subject {

	private List<ZooObserver> zooObservers;
	
	  
	
	public Subject() {
	
		zooObservers = new ArrayList<>();
	
	}
	
	  
	
	public void addObserver(ZooObserver o) {
	
		if (!zooObservers.contains(o)) {
	
			zooObservers.add(o);
	
		}
	
	}
	
	  
	
	public void removeObserver(ZooObserver o) {
	
		zooObservers.remove(o);
		
	}
	
	  
	
	public void notifyObservers(Animal a) {
	
		for (ZooObserver o : zooObservers) {
		
			o.update(a);
		
		}
		
	}

}
```

The *observer* interface is simply:

```java
package model;

  

// Represents an observer of a zoo

public interface ZooObserver {

// EFFECTS: responds to animal getting added to zoo

	void update(Animal a);

}
```

The *concrete observer* is the email subscriber:

```java
package model;

  

// Represents an email subscriber to the zoo

public class EmailSubscriber implements ZooObserver {

	private String name;
	
	  
	
	// EFFECTS: constructs an email subscriber with name
	
	public EmailSubscriber(String name) {
	
		this.name = name;
	
	}
	
	  
	
	public String getName() {
	
		return name;
	
	}
	
	  
	
	@Override
	
	// EFFECTS: prints message to acknowledge notification that animal was added to zoo
	
	public void update(Animal a) {
	
		System.out.print(name + " says: ");
		
		System.out.println("Great to hear that " + a.getName() + " was added to the zoo!");

	}
}
```

And the *concrete subject* is:
```java
package model;

  

import java.util.ArrayList;

import java.util.List;

  

// Represents a zoo

public class Zoo extends Subject {

	private List<Animal> animals;
	
	private String name;
	
	  
	
	// EFFECTS: constructs a zoo with given name
	
	public Zoo(String name) {
	
		this.name = name;
		
		animals = new ArrayList<>();
		
	}
	
	  
	
	public String getName() {
	
		return name;
	
	}
	
	  
	
	// MODIFIES: this
	
	// EFFECTS: adds animal a to the zoo
	
	public void addAnimal(Animal a) {
	
		animals.add(a);
		
		notifyObservers(a);
	
	}

}
```

### A Tricky Problem:

![[Pasted image 20260415183755.png]]

In this example we want Button to be the concrete subject and to notify the observers whenever a Button is displayed. However, because a class can only extend one class, in order for Button to extend Observable as it should in the observer design pattern, it can no longer extend UniformPart. But! this is not an issue because in the [[(4) Composite Design Pattern]] the *component* can be either a class, asbtract class or interface, so the solution here is to make UniformPart and interface and have Button implement it rather than extend it.