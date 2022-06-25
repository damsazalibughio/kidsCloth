// const hamburgerButton = document.getElementById('hamburger-btn');
const navbar = document.getElementById('navbar');

function openNavbar() {
    navbar.classList.remove('hide-navbar')
    navbar.classList.add('show-navbar');
}
// navbar closing functions

function closeNavbar() {
    navbar.classList.remove('show-navbar')
    navbar.classList.add('hide-navbar');

}
// active link
let activePage = window.location.pathname
console.log(activePage);
let navLinks = document.querySelectorAll('.navbar-nav li a')
navLinks.forEach(link => {
    // link.classList.remove('active')
    // if (link.href.includes(`${activePage}`) && activePage != '/' && activePage !=='/JuniorEnvague/') {
    //     link.classList.add('active')
    // } 
    // else if (activePage == '/') {
    //     if (link.pathname == '/index.html') {
    //         link.classList.add('active')
    //     }
    // }
})


// dropdown toggle

let nb = document.querySelectorAll('.dropdown')
nb.forEach(nbList => {
    // let dropdownSign = document.querySelector('.dropdown-sign')
    console.log(nbList.children[1]);
    nbList.children[1].addEventListener('click', () => {

        if (nbList.children[1].classList.contains('dropdown-sign')) {
            nbList.children[1].classList.remove('dropdown-sign')
            nbList.children[1].classList.add('dropdown-minus-sign')
            nbList.children[1].nextElementSibling.style.display = 'block';

        } else if (nbList.children[1].classList.contains('dropdown-minus-sign')) {
            nbList.children[1].classList.remove('dropdown-minus-sign')
            nbList.children[1].classList.add('dropdown-sign')
            nbList.children[1].nextElementSibling.style.display = 'none';

        }
    })
})



// let dropdownSign = document.querySelector('.dropdown-sign')
// dropdownSign.addEventListener('click', () => {
//         // let dropdownList = document.querySelector('.dropdown-list');
//         // console.log(dropdownSign.classList.contains('dropdown-sign'));

//         if (dropdownSign.classList.contains('dropdown-sign')) {
//             dropdownSign.classList.remove('dropdown-sign')
//             dropdownSign.classList.add('dropdown-minus-sign')
//             dropdownSign.nextElementSibling.style.display = 'block';

//         } else if (dropdownSign.classList.contains('dropdown-minus-sign')) {
//             dropdownSign.classList.remove('dropdown-minus-sign')
//             dropdownSign.classList.add('dropdown-sign')
//             dropdownSign.nextElementSibling.style.display = 'none';

//         }
//     })
// let plusSignSpan = document.createElement('span')
// plusSignSpan.innerText = '+';
// plusSignSpan.classList.add('dropdown-sign')

// let minusSign = document.createElement('span')
// minusSign.innerText = '-';
// minusSign.classList.add('dropdown-sign')

// let dropdown = document.querySelector('.dropdown');
// let dropdownList = document.querySelector('.dropdown-list');
// dropdown.before(plusSignSpan)

// plusSignSpan.addEventListener('click', () => {
//     dropdownList.style.display = 'block';
//     plusSignSpan.remove()
//     dropdown.before(minusSign)
// })

// minusSign.addEventListener('click', () => {
//     dropdownList.style.display = 'none';
//     minusSign.remove()
//     dropdown.before(plusSignSpan)
// })

// search modal modal

let searchBtn = document.querySelector('#search-btn')
let searchProductModal = document.getElementById('search-product-modal');

searchBtn.addEventListener('click', () => {
    searchProductModal.style.width = '100%';
    searchProductModal.style.zIndex = "4";
    searchProductModal.style.transform = 'translateY(0)';
    searchProductModal.style.transition = 'transform .5s ease'

})
let searchCloseBtn = document.querySelector('#search-modal-close-btn')
searchCloseBtn.addEventListener('click', () => {
    searchProductModal.style.transform = 'translateY(-100%)';
    searchProductModal.style.transition = 'transform .5s ease'
})

// cart modal modal

let cartBtn = document.querySelector('#cart-btn')
let cartProductModal = document.getElementById('cart-modal');

cartBtn.addEventListener('click', () => {
    cartProductModal.style.width = '100%';
    cartProductModal.style.zIndex = "4";
    cartProductModal.style.transform = 'translateY(0)';
    cartProductModal.style.transition = 'transform .5s ease'

})
let closePortfolioBtn = document.querySelector('#cart-modal-close-btn')
closePortfolioBtn.addEventListener('click', () => {
    cartProductModal.style.transform = 'translateY(-100%)';
    cartProductModal.style.transition = 'transform .5s ease'
})