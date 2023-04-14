const sliderDiv = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const btnRight = document.querySelector('.slider__btn--right');
const btnLeft = document.querySelector('.slider__btn--left');
const dotsContainer = document.querySelector('.dots')

let currentSlide = 0;
let maxSlide = slides.length;

const imgPositions = function(slide){
    slides.forEach((img,i)=> img.style.transform = `translateX(${100 * (i - slide)}%)`)
}
imgPositions(0)

const dotFunc = function(){
    slides.forEach((_,i)=> {
       dotsContainer.insertAdjacentHTML('beforeend', `<button class="dots_dot" data-slide="${i}"></button>`)
    })
}
dotFunc(slides)

const activateDot = function(slide){
    document.querySelectorAll('.dots_dot').forEach((dot)=>{
        dot.classList.remove('dots-active')
    });

    document.querySelectorAll(`.dots_dot[data-slide="${slide}"]`).forEach(dot=>{
        dot.classList.add('dots-active')
    })
    
}




function nextSlide(e) {
    e.preventDefault();

    if (currentSlide === maxSlide - 1) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }

    imgPositions(currentSlide);
    activateDot(currentSlide);
}

 const prevSlide = function(e){
    e.preventDefault();
    if(currentSlide === 0){
        currentSlide = maxSlide - 1
    }else{
        currentSlide--
    }

    imgPositions(currentSlide)
    activateDot(currentSlide)
}

btnRight.addEventListener('click',nextSlide)
btnLeft.addEventListener('click',prevSlide)

dotsContainer.addEventListener('click', function(e){
   if(e.target.classList.contains('dots_dot')){
    const{slide} = e.target.dataset
    imgPositions(slide);
    activateDot(slide)
   }
})