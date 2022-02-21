// https://javascript.info/prototype-inheritance

// Exercise 1)
// Which values are shown?

let animal = {
    jumps: null
  };
  let rabbit = {
    __proto__: animal,
    jumps: true
  };
  
  alert( rabbit.jumps ); // ? (1)
  
  delete rabbit.jumps;
  
  alert( rabbit.jumps ); // ? (2)
  
  delete animal.jumps;
  
  alert( rabbit.jumps ); // ? (3)
// (1) = true
// (2) = null -> rabit is deleted but jumps is set to null in the inherited prototye
// (3) = undefined -> inherited prototype jump is deleted 


//  Exercise 2)
// part 1 - assign prototypes so they follow the path: pockets -> bed -> table -> head
// part 2 - is it faster to get glasses as pocket.glasses or head.glasses? 


let head = {
    glasses: 1
  };
  
  let table = {
    pen: 3, 
    // correct answer to 1)
    __proto__: head
  };
  
  let bed = {
    sheet: 1,
    pillow: 2, 
    // correct answer to 1)
    __proto__: table
  };
  
  let pockets = {
    money: 2000, 
    // correct answer to 1)
    __proto__: bed
  };

// 1) It asked to used __proto__ but don't think that is the right way anymore?

// Incorrect - should be set in the object
  table.__proto__ = head; 
  bed.__proto__ = table; 
  pockets.__proto__ = bed; 
// 2) Speed is approximately the same




// Exercise 3) 
// Which object receives the full property: animal or rabbit? 

let animal = {
    eat() {
      this.full = true;
    }
  };
  
  let rabbit = {
    __proto__: animal
  };
  
  rabbit.eat();

// Rabit would receive the full property as this acts on the object it is assigned to (rabbit)




// Exercise 4) 
// why are both hamsters full? How can we fix it? 

let hamster = {
    stomach: [],
  
    eat(food) {
      this.stomach.push(food);
    }
  };
  
  let speedy = {
    __proto__: hamster
  };
  
  let lazy = {
    __proto__: hamster
  };
  
  // This one found the food
  speedy.eat("apple");
  alert( speedy.stomach ); // apple
  
  // This one also has it, why? fix please.
  alert( lazy.stomach ); // apple

// Both are full because stomach is defined in hamster and both speedy and lazy inherit from hamster

// to fix, we could define stomach in both speedy and lazy

// An additional solution is rather than use .push() use this.stomach = [food]
// This works because stomach is assigned and written directly to the object using this

