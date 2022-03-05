const personFactory = (name, age) => {
    const sayHello = () => console.log('Hello!'); 

    // Object shorthand
    // when referring to a variable that has the same name as the object property you're creating
    return {name, age, sayHello}
}

const jeff = personFactory('Jeff', 27); 
console.log(jeff.name); 
jeff.sayHello(); 


const name = "Maynard";
const color = "red";
const number = 34; 
const food = "rice"

// Not the best way to log
console.log(name, color, number, food); 

// Much better way - easier to read
console.log({name, color, number, food}); 


// Scope and closure

let a = 17; 

const func = x => {
    a = x; 
}; 

func(99); 
console.log(a); 





// Closure example

const counterCreator = () => {
    //count here is private
    let count = 0; 
    return () => {
        console.log(count); 
        count++; 
    }
}

const counter = counterCreator(); 
counter(); //0 
counter(); //1
counter(); //2
counter(); //3

const counter2 = counterCreator(); 

counter2(); //?? - returns 0 - a new instance of count



// Modules

const moduleExample = (function() {
    console.log('start'); 

    const _privateFunc = () => console.log('private function')
    const publicFunc = () => _privateFunc(); 

    return {
        publicFunc
    }
})(); 

moduleExample.publicFunc(); 