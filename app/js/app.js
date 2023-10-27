document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.header__search').addEventListener('click', () => {
        document.querySelector('.header__inner').classList.add('show');
        document.querySelector('.header__search').blur();
        document.querySelector('.header__search_input').focus();
    })
});

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.header__search_exit').addEventListener('click', () => {
        document.querySelector('.header__search_input').value = '';
        document.querySelector('.header__inner').classList.remove('show');
    })
});
console.log(document.documentElement.clientWidth)

if (document.documentElement.clientWidth <= 1063) {
    document.querySelector('.catalog__img').src = 'img/paper_center.png';
    document.querySelector('.sketch__img').src = 'img/book_center.png';
}

if (document.documentElement.clientWidth <= 676) {
    document.querySelector('.catalog__img').src = 'img/paper_sm.png';
    document.querySelector('.sketch__img').src = 'img/book_sm.png';
}