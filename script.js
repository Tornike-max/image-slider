const sliderDiv = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const btnRight = document.querySelector('.slider__btn--right');
const btnLeft = document.querySelector('.slider__btn--left');

let currentSlide = 0;
let maxSlide = slides.length;

const imgPositions = function(slide){
    slides.forEach((img,i)=> img.style.transform = `translateX(${100 * (i - slide)}%)`)
}
imgPositions(0)



const nextSlide = function(e){
    e.preventDefault();
 
    if(currentSlide === maxSlide - 1){
     currentSlide = 0;
    }else{
     currentSlide++
    }
 
    imgPositions(currentSlide)
 }

 const prevSlide = function(e){
    e.preventDefault();
    if(currentSlide === 0){
        currentSlide = maxSlide - 1
    }else{
        currentSlide--
    }

    imgPositions(currentSlide)
}

btnRight.addEventListener('click',nextSlide)
btnLeft.addEventListener('click',prevSlide)