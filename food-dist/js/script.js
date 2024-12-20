
const modal = document.querySelector('.modal');
const openModalBtns = document.querySelectorAll('[data-modal]');
const closeModalBtn = document.querySelector('[data-close]');

const openModal = () => {
    modal.style.display = 'flex';
};

const closeModal = () => {
    modal.style.display = 'none';
};

openModalBtns.forEach(btn => {
    btn.addEventListener('click', openModal);
});

closeModalBtn.addEventListener('click', closeModal)


const preview = document.querySelectorAll('.tabcontent');
const tabheaderItems = document.querySelectorAll('.tabheader__item');

preview.forEach(previe => previe.classList.add('hide'));
preview[0].classList.remove('hide');

tabheaderItems.forEach((item, index) => {
    item.onclick = () => {
        preview.forEach(previe => previe.classList.add('hide', 'fade')); 
        preview[index].classList.remove('hide');    
    };
});


const slides = document.querySelectorAll('.offer__slide')
const prev = document.querySelector('.offer__slider-prev')
const next = document.querySelector('.offer__slider-next')
const current = document.querySelector('#current')
const total = document.querySelector('#total')
let slideIndex = 0

total.innerHTML = addZero(slides.length)

slideShow()

function slideShow(n) {
    if (n > slides.length - 1) {
        slideIndex = 0
    }

    if (n < 0) {
        slideIndex = slides.length - 1
    }

    slides.forEach(slides => slides.classList.add('hide', 'fade'))
    slides[slideIndex].classList.remove('hide')

    current.innerHTML = addZero(slideIndex + 1)
}

function addZero(n) {
    return n < 10 ? `${n}` : n
}


next.onclick = () => {
    slideShow(++slideIndex)
}

prev.onclick = () => {
    slideShow(--slideIndex)
}
