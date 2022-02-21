function Book(title, author, pages, read) {
    this.title = title;
    this.author = author; 
    this.pages = pages; 
    this.read = read; 
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
    }
}

const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', 295, 'not yet read'); 

console.log(theHobbit.info()); 





// Object.create is the recommended way of setting the prototype

// Constructor Student
function Student() {

}
// Set prototype
// Best to set prototype like the below
// Otherwise, each instance of Student would duplicate the function taking up more memory
Student.prototype.sayName = function() {
    console.log(this.name)
}

// Another constructor which will inherit from student
function EighthGrader(name) {
    this.name = name; 
    this.grade = 8;
}

EighthGrader.prototype = Object.create(Student.prototype); 

// Create an instance of EighthGrader
const carl = new EighthGrader('Carl'); 
carl.sayName(); 
console.log(carl.grade); 





















// Knowledge check

// 1) Create a constructor and initiate an object

const Person = function(name, age, gender) {
    this.name = name;
    this.age = age; 
    this.gender = gender;
}

Person.prototype.intro = function() {return `Hi! I'm ${this.name} and I am ${this.age} years old.`}


let bob = new Person('Bob', 42, 'male'); 
console.log(bob); 
console.log(bob.intro()); 

// 2) What is a prototype and how can it be used?

/* 
    A prototype is in
*/

// 3) Explain prototypal inheritance.

/*
    when a method is called, it is first checked in the current
    object to see if it exists. If it does, cool - run it. 
    If it doesn't, check the object the current object inherits from. 
    Again, if it exists there - cool, else repeat to the next inherited object.
*/


// 4) Understand the basic do’s and don’t’s of prototypical inheritance.

/*
    don't set a prototype = to another prototype
    Rather, use Object.create with the prototype to copy - this creates a copy
    of the prototype for the new object. 
    In the first instance, the 'another prototype' could be edited by the new object, 
    and all objects using the original prototype will change.

    If a prototype method doesn't need local variables, it is best 
    to create the method using [objName].prototype.[methodname] = 
    function() {...}

    
*/

// 5) Explain what Object.create does

/*
    Object.create() creates a new instance of an object with the 
    given prototype. 
*/