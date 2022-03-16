let totalSlides = document.querySelectorAll('.item-slider').length;
let currentSlide = 0;

document.querySelector('.largura-slider').style.width = `calc(100vw * ${totalSlides})`;

document.querySelector('.slider-buttons').style.height = `${document.querySelector('.slider').clientHeight}px`;

function goBack(){
    currentSlide--;
    if(currentSlide < 0){
        currentSlide = totalSlides - 1;
    }
    atualizaMargem();
}

function goNext(){
    currentSlide++;
    if(currentSlide > (totalSlides - 1)){
        currentSlide = 0
    }
    atualizaMargem();
}

function atualizaMargem(){

    let larguraItemSlider = document.querySelector('.item-slider').clientWidth;
    let newMargin = (currentSlide * larguraItemSlider);

    document.querySelector('.largura-slider').style.marginLeft = `-${newMargin}px`
}

setInterval(goNext, 4000)