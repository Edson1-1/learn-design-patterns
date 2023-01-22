# Example for Factory pattern

## Usecase
Lets say we can import customer data from Intercom and Hubspot.

## Thinking how to acheive it

we can have an intercom class that imports data from intercom
we can have a hubspot class that imports data from hubspot
then we can call the classes based on from where the data needs to be imported

If we take a close look, it can be seen that both the classes almost does the same thing. It imports data from a source. We can abstract that part.

Futhermore, We can expose an import-service function that the client code or our index.ts can call to get the data. Our client code can tell the service from which source data should be fetched. 

## Implementation
Our aim is to write maintainable code. 
That means that it should be easy to read and easy to add functionality to later on.

To acheive this, 
Our import-service will have an importData function. This function's input will be the source from which data is to be imported and it will return the data fetched from the respective source. 
Now, how do we decide whether to call intercom or hubspot. Easy answer will be to use a switch or if else statement and create the object of the respective class and call the functions provided by that class and return the data. But a problem that can happen here is type safety. We cannot be sure that both the classes will have the same set of functions and return types. So we would have to write the code based on how each class is structured. 
Since the functionality of both the classes are similar we can create an interface and make sure that both the classes implement it. 

So our service now uses a switch statement to decide which class to use and calls it's 'import' function(declared by the interface) and returns the data. 
But here we are calling new hubspot and new intercom and doing hubspot.import() and intercom.import() in its respective case in the switch statement. Tomorrow if we can to add a new source like google analytics we will have to do new google() and then google.import() in its respective case. The importData function inside the service can get bloated. To add to that, the service function should be concerned with other business logic and not implementing the import logic(because we already do that in the hubspot and intercom classes).

So to solve that we can use Factory pattern. 

We can introduce a factory class creates the respective object. It will receive as input the source from which data needs to be fetched. The factory class can have a switch statement and we can return the created object. If we want to add a new source like google analytics we can add it here and create its object and return it. Since all hubspot, intercom and in the future google anlaytics classes implementes the earlier mentioned interface, we can gaurantee type safety. The service class just has to call the factory and tell it which source it needs data from. Factory creates the object and returns it to the service. Service can then call the import function on that object and get the data from the desired source. 

