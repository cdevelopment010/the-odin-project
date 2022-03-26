// Burgerbar nav
const burger = document.querySelector('#nav-burger .burger'); 

burger.addEventListener('click', function() {
    const burgerItems = document.getElementById('burger-nav'); 
    let lines = burger.querySelectorAll('.line'); 
    lines.forEach(line => {
        line.classList.toggle('active'); 
    })
    burgerItems.classList.toggle('active'); 

})



// sidebar navigation
const sidebar = document.querySelectorAll('#sidebar-nav>nav li');
sidebar.forEach(item => {
    item.addEventListener('click', function() {
        sidebar.forEach(li => li.classList.remove('active')); 
        item.classList.add('active'); 
    })
})