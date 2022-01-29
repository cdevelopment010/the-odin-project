const container = document.querySelector('#container'); 
const pTagRed = document.createElement('p'); 
const h3TagBlue = document.createElement('h3'); 
const divBorder = document.createElement('div');
const h1Div = document.createElement('h1'); 
const pDiv = document.createElement('p'); 


pTagRed.style.color = 'red'; 
pTagRed.innerText = `Hey, I'm red!`; 

h3TagBlue.style.color = 'blue'; 
h3TagBlue.innerText = `I'm a blue h3!`; 

divBorder.style.cssText = "border: 1px solid black; background-color: pink;";
h1Div.innerText = `I'm in a div!`;
pDiv.innerText = `ME TOO!`;


divBorder.appendChild(h1Div); 
divBorder.appendChild(pDiv); 



container.appendChild(pTagRed); 
container.appendChild(h3TagBlue); 
container.appendChild(divBorder); 


// Events

const btn2 = document.querySelector('#btn2'); 
const btn3 = document.querySelector('#btn3'); 

// btn2.onclick = () => alert("Hello World");

// btn3.addEventListener('click', () => {
//     alert('Hello World! Using Event listener'); 
// })


function alertFunction() {
    alert('YAY! YOU DID IT!');
}

btn2.onclick = alertFunction; 

// btn3.addEventListener('click', alertFunction)

// using call back function

btn3.addEventListener('click', function(e) {
    console.log(e.target); 
    e.target.style.background='blue'; 
})



// Setting event listeners using groups

const buttons = document.querySelectorAll('#btn-group>button'); 

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        alert(btn.id); 
    }); 
}); 