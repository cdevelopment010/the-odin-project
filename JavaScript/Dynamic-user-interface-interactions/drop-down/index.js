// select all drop downs
// add event listeners for click
// click to toggle class
// class should make drop down visible. 
// possible rotate caret?
// hover is dealt with via CSS
    // hover and click event listeners were clashing with one another. 

const dropDown = document.querySelectorAll('.drop-down'); 

dropDown.forEach(list => {
    list.addEventListener('click', function(){
        clickClass(list)
    }, false)
})

function clickClass(item) {
    const ul = item.querySelector('.drop-down-items'); 
    const caret = item.querySelector('.drop-down-title'); 
    console.log(caret); 
    ul.classList.toggle('visible'); 
    caret.classList.toggle('rotate-caret'); 
}