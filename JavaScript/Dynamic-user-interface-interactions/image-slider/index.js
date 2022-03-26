const slider = (function() {
    const slides = document.querySelectorAll('.slider');
    const leftArrow = document.querySelector('.left-arrow');  
    const rightArrow = document.querySelector('.right-arrow');  
    let currentSlide = 0; 
    let previousSlide = (currentSlide + slides.length - 1) % slides.length; 
    let nextSlide = (currentSlide + slides.length + 1) % slides.length; 

    
    createDiscs(); 
    activeDisc();

    // automatically move on every 5 seconds; 
    let interval = setInterval(() => {
        console.log("automatic right move"); 
        rightMove(); 
    }, 5000); 

    
    leftArrow.addEventListener('click', () => {
        leftMove();        
    })
    
    rightArrow.addEventListener('click', () => {
        rightMove(); 
    })


    function leftMove() {
        currentSlide = (currentSlide + slides.length- 1) % slides.length; 
        previousSlide = (currentSlide + slides.length - 1) % slides.length; 
        nextSlide = (currentSlide + slides.length + 1) % slides.length; 
        manageMove(); 
    }

    function rightMove(){
        currentSlide = (currentSlide + slides.length + 1) % slides.length; 
        previousSlide = (currentSlide + slides.length - 1) % slides.length; 
        nextSlide = (currentSlide + slides.length + 1) % slides.length; 
        manageMove(); 
    }

    function manageMove() {
        slides.forEach(slide => {
            slide.classList.remove('active'); 
            slide.classList.remove('left'); 
            slide.classList.remove('right'); 
        })
        slides[previousSlide].classList.add('left');
        slides[currentSlide].classList.add('active');
        slides[nextSlide].classList.add('right'); 
        activeDisc();
    }

    function createDiscs() {
        let numDisks = slides.length; 
        const discContainer = document.createElement('div'); 
        for (let i = 0; i < numDisks; i++) {
            const disc = document.createElement('div'); 
            disc.className = 'disc'; 
            disc.id = `disc-${i}`;         
            disc.addEventListener('click', navigateDisc);    
            discContainer.append(disc); 
        }
        discContainer.className = 'disc-container';
        document.querySelector('.slider-container').append(discContainer); 
        return {
            discContainer
        }
    };

    function activeDisc() {
        let discs = createDiscs().discContainer.querySelectorAll('.disc'); 
        discs.forEach(disc=> {
            disc.classList.remove('active'); 
        });
        discs[currentSlide].classList.add('active')
    }

    function navigateDisc() {
        let disc = this.id.split('-')[1]; 
        currentSlide = disc; 
        previousSlide = (currentSlide + slides.length - 1) % slides.length; 
        nextSlide = (currentSlide + slides.length + 1) % slides.length; 
        manageMove();

    }

    return {
        leftArrow, 
        rightArrow
    }
})(); 