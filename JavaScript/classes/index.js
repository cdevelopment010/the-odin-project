
// Written in functional style
// function Clock({ template }) {
  
//     let timer;
  
//     function render() {
//       let date = new Date();
  
//       let hours = date.getHours();
//       if (hours < 10) hours = '0' + hours;
  
//       let mins = date.getMinutes();
//       if (mins < 10) mins = '0' + mins;
  
//       let secs = date.getSeconds();
//       if (secs < 10) secs = '0' + secs;
  
//       let output = template
//         .replace('h', hours)
//         .replace('m', mins)
//         .replace('s', secs);
  
//       console.log(output);
//     }
  
//     this.stop = function() {
//       clearInterval(timer);
//     };
  
//     this.start = function() {
//       render();
//       timer = setInterval(render, 1000);
//     };
  
//   }
  



// Re-writteen as class

class Clock {
    constructor({ template }) {
        this.template = template
    } 

    render() {
        let date = new Date(); 
        let hours = date.getHours();
        let mins = date.getMinutes();
        let secs = date.getSeconds();

        hours = hours < 10 ? '0' + hours : hours;
        mins = mins < 10 ? '0' + mins : mins;
        secs = secs < 10 ? '0' + secs : secs;
        
        
        let output = this.template.replace('h', hours)
                .replace('m', mins)
                .replace('s', secs);

                console.log(output);
    }
          
    stop() {
        clearInterval(this.timer);
    }
    
    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }
}
          


// let clock = new Clock({template: 'h:m:s'});
// clock.start();







// Private field declarations
//can only be accessed within in the class
class Rectangle {
    #height = 0; 
    #width; 
    constructor(height, width) {
        this.#height = height;
        this.#width = width; 
    }
}

let rect1 = new Rectangle(5,10); 
console.log(rect1);
console.log(rect1.height);




// sub classing with extends
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`)
    }
}

class Dog extends Animal {
    constructor(name){
        // need to use super before being able to use `this`
        super(name)
    }
    speak() {
        console.log(`${this.name} barks.`)
    }
}

let d = new Dog('Mitzie'); 
d.speak(); 



// More examples from YouTube
// https://www.youtube.com/watch?v=CwAU1wYeHiM&list=PLtwj5TTsiP7uTKfTQbcmb59mWXosLP_7S&index=4


class Person {

    // static - doesn't belong to instance but to the class
    //can't call it on an instance (person1)
    
    // adding get method so it can be called without (); 
    static get species() {
        return 'Homo sapiens';
    }

    // changed from a method to a property; 
    // not fully supported - static properties
    // Need to use Babel to get around this
    // static species = 'Homo sapiens'; 

    //this in static methods refer to the class
    static speciesSentence() {
        return `Humans are classified as ${this.species}` //remove () because changed species to a getter
    }


    constructor(firstName, lastName) {
        this.firstName = firstName; 
        this.lastName = lastName; 
        this.hasJob = false; 
    }

    fullName() {
        return `${this.firstName} ${this.lastName}`
    }
    setFirstName(firstName) {
        this.firstName = firstName;
    }
    setLastName(lastName) {
        this.lastName = lastName
    }

    // setter 
    set setFullName(name) {
        name = name.split(' '); 
        this.setFirstName(name[0]); 
        this.setLastName(name[1]); 
    }
}


//extends
//inherit everything from Person
//borrow methods and properties, but can override as well
class Worker extends Person {
    constructor(firstName, lastName, job) {
        //super = call the method from the class it extends from
        //call the constructor method of the person
        super(firstName, lastName); 
        this.job = job; 
        // overwrote the hasJob from Person class
        this.hasJob = true; 
    }

    setJob(job) {
        this.job = job
    }




    // Getters
    // convert methods into a propert
    // Add get in front of the method, then call without () 
    get biography() {
        const bio = `${this.fullName()} is a ${this.job}.`.toUpperCase(); 
        return bio; 
    }
}

const person1 = new Person('Craig', 'Davison'); 
console.log(person1.species);  //ERROR
// console.log(Person.species())
// console.log(Person.species); 
// console.log(Person.speciesSentence())

const worker1 = new Worker('Craig', 'Davison', 'YT Star'); 
console.log(worker1); 
// getter
// console.log(worker1.biography)