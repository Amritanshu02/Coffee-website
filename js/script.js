let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

function contact() {
    let name = document.myform.name.value;
    let mobile = document.myform.mobile.value;
    if (name == '')
        alert("Name cannot be null.");
    else if (mobile == '')
        alert("Mobile number cannot be empty.")
    else
        confirm("Your response was recorded!");
}

function toggle() {
    var blur = document.getElementById('blur');
    blur.classList.toggle('active')

    var pp = document.getElementById('popup');
    pp.classList.toggle('active')
}