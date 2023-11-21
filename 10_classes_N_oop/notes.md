# JavaScript and classes


# OOP

# Object
- collection of objects and properties 

# why use OOP

# parts of OOP
object literal

- constrictor fucntion
- prototypes
- classes
- instances (new, this)

## 4 pillars 
* Abstraction = to hide details (eg: fetch)
* Encpsulation
* Inheritance
* polymorphism.



## new keyword 
- The `new` keyword in programming languages like Java and JavaScript is used to create a new instance of a class or a new object¹². Here's why it's important: 


1. **Instantiation**: The `new` keyword is used to instantiate a class, i.e., it creates an instance or object of the class¹.

2. **Memory Allocation**: When `new` is used, memory is allocated at runtime to hold the object¹. This memory is allocated on the heap, and a reference to this memory is returned¹.

3. **Constructor Invocation**: The `new` keyword also invokes the constructor of the class¹. This means it calls the method that initializes the newly created object¹.

4. **Array Creation**: In languages like Java, the `new` keyword can also be used to create new arrays¹.

In summary, the `new` keyword is essential for object-oriented programming as it allows for the creation and initialization of new objects or instances of classes¹². It's a fundamental part of languages like Java and JavaScript, enabling dynamic memory allocation and object-oriented design. 

<br>
<br>
<br>

_Here's what happens behind the scenes when the new keyword is used_:

**A new object is created**: The new keyword initiates the creation of a new JavaScript object.

**A prototype is linked**: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

**The constructor is called**: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

**The new object is returned**: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.
