const searchBtn = document.querySelector('.nav__btn-svg--search');
const menuBtn = document.querySelector('.nav__btn-svg--menu');
const canselCrossBtn = document.querySelector('.nav__btn-svg--cross');
const canselArrowBtn = document.querySelector('.modal-form__icon--arrow');
const modalSearchForm = document.querySelector('.modal-form');
const modalPresentation = document.querySelector('.presentation__modal');


searchBtn.onclick = () => {
    modalSearchForm.classList.add('active');
};

canselArrowBtn.onclick = () => {
    modalSearchForm.classList.remove('active');
};

menuBtn.onclick = () => {
    modalPresentation.classList.toggle('active');
};
