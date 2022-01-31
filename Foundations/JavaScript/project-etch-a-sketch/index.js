const container = document.getElementById('container'); 
const clearBtn = document.querySelector('#clear-btn'); 
const colorOptions = document.getElementById('color-options'); 
const slider = document.getElementById('myRange'); 
const sliderValue = document.getElementById('current-slider-value'); 
let divs;

//color option on load
let option = 'black'; 

createGrid(); 
slider.addEventListener('change', createGrid); 

colorOptions.addEventListener('change', (e) => {
    option = e.target.value; 
    console.log(option); 
})    

clearBtn.addEventListener('click', function() {
    if (confirm('Clear the grid?')) {
        divs.forEach(div => {
            div.style.backgroundColor='white'
            
        }); 
    }
})


function colorGrid(grid) {

    if (option == 'black') {
        grid.style.backgroundColor = 'black'; 
    } else if (option == 'erase') {
        grid.style.backgroundColor = 'white';  
    } else {
        grid.style.backgroundColor = `rgba(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},1)`
    }
    
    
}


function touchStart(e) {
    e.preventDefault(); 
     
    for (let i = 0; i < e.targetTouches.length; i ++) {

        let el = document.elementFromPoint(e.targetTouches[i].clientX, e.targetTouches[i].clientY); 
        if (Array.from(divs).indexOf(el) != -1) {
            colorGrid(el); 
        }
    }
}

function createGrid() {
    
    sliderValue.innerText = slider.value;


    container.style.cssText = `grid-template-columns: repeat(${slider.value},1fr); 
        min-height: ${Math.min(window.innerWidth * 0.8,800) + 'px'}; 
        min-width: ${Math.min(window.innerWidth * 0.8,800) + 'px'}`; 


    container.innerHTML = ''; 
    let number = slider.value; 
    for (let i = 0; i < number*number; i++) {
        let div = document.createElement('div'); 
        div.style.cssText = 'height: 100%; width: 100%'; 
        div.id = i; 
        container.appendChild(div); 
    }


    divs = document.querySelectorAll('.container div'); 


    divs.forEach(div => {
        div.addEventListener('mousemove', function(e) {
            if (e.altKey) {
                colorGrid(this); 
            }
        }); 
        // for mobile/touch devices
        div.addEventListener('touchmove',touchStart)
    })
}