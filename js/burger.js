function burger() {
    var burger = document.getElementById('burger__button');
    burger.classList.toggle('active')
    var burgerMenu = document.querySelector('.burger__menu');
    burgerMenu.classList.toggle('active')
    return console.log(burger);
}