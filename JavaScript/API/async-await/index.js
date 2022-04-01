
const img = document.getElementById('img'); 
const newImgBtn = document.getElementById('newImgBtn'); 
const searchInput = document.getElementById('search'); 
const searchBtn = document.getElementById('searchBtn'); 
const searchUpdate = document.getElementById('searchUpdate'); 

let urlMain = 'https://api.giphy.com/v1/gifs/translate?api_key=fKpIDt0E0uwgDriOVlm48T37eIQXDAoc&s='; 
let url = urlMain+'cats';

newImgBtn.addEventListener('click', newImage); 
searchBtn.addEventListener('click', updateUrl); 
newImage(); 

function newImage() {
    searchUpdate.textContent = searchUpdate.textContent == '' ? `Updating image...` : searchUpdate.textContent; 
    fetch(url, {
        mode: 'cors', //use this to stop cors
    })
    .then((response) => {
        return response.json(); 
    })
    .then((response) => {
        // console.log(response.data.images.original.url);
        img.src = response.data.images.original.url;
        return response;
    })
    .then((response) => {
        if (response.meta.msg == 'OK' ) {
            console.log("OK")
            searchUpdate.textContent = ''
        } else {
            console.log("NOT OK")
        }
    })
    .catch((err) => {
        console.log(err); 
        searchUpdate.textContent = `ERROR: ${err}`
    })
}

function updateUrl() {
    url = urlMain+searchInput.value; 
    searchUpdate.textContent = `searching new GIFS of ${searchInput.value}`;
    newImage(); 
}