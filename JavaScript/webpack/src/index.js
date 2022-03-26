import _ from 'lodash'
import myName from './myName'; 
import './style.css'; //import styles into css for webpack to use
import Icon from './icon.jpg'; 
import printMe from './print';


function component() {
    const element = document.createElement('div'); 
    const btn = document.createElement('button');

    //lodash, currently included via a scripe, is required for this line to work
    // lodash, now imported by this script on line 1
    element.innerHTML = myName('Craig'); 
    element.classList.add('hello');

    // add image to exisiting div
    const myIcon = new Image(); 
    myIcon.src = Icon; 
    element.appendChild(myIcon); 


    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);
    return element;
}

document.body.appendChild(component()); 