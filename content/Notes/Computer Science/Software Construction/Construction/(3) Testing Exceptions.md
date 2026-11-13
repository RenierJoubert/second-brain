
#cs #cs210 #java

Testing exceptions:
- When testing exceptions you must test that they are ==thrown when expected to be thrown and not thrown when not expected to be thrown==.
```java

// fail if exception is thrown when it should not have been thrown

try {  
	anObject.aMethod(nonExceptionalInputs); 
	assertEquals(anObject.result(), what we want) // pass 
	} catch (SomeException e) {  
	fail("I was not expecting SomeException!");  
	}
}

// fail if the exception is not thrown when it should have been:

try {  
	anObject.aMethod(problematicInputs);  
	fail("I was not expecting to reach this line of code!");  
	} catch (SomeException e) {
	assertEquals(anObject.size(), //size from before) // unchanged, pass!  
	System.out.println("great!");  
	}
}
```
