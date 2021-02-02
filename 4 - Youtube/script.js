const hideElement = document.getElementById('hideContent');
const hideCreditCard = document.getElementById('hideCreditCard')
const hideAccount = document.getElementById('hideAccount')

const hider1 = document.getElementById('hider1')
const hider2 = document.getElementById('hider2');
const hider3 = document.getElementById('hider3');
const changeIcon = document.querySelector('.icon')

function hideIcon() {
    changeIcon.classList.toggle("far");
    changeIcon.classList.toggle("fa-eye-slash")
    changeIcon.classList.toggle('fas')
    changeIcon.classList.toggle('fa-eye')
}

function hideContents() {
    hideAccount.classList.toggle('hideCreditCard');
    hideCreditCard.classList.toggle('hideCreditCard');
    hider1.classList.toggle('hideElement');
    hider2.classList.toggle('hideElement');
    hider3.classList.toggle('hideElement');
}

function hide() {
    hideContents();
    hideIcon();
}

hideElement.addEventListener('click', hide);