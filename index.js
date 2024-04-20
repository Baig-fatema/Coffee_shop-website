let navbar=document.querySelector('.navbar');
document.querySelector('#menue-btn').onclick = () => {
    navbar.classList.toggle('active');
    cartItem.classList.remove('active');
    searchform.classList.remove('active');
    console.log("heloo")
   
}
let cartItem=document.querySelector('.cart-items-container');
document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active');
    console.log("heloo");
    navbar.classList.remove('active'); 
    searchform.classList.remove('active');
   
}
let searchform=document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () => {
    searchform.classList.toggle('active');
    navbar.classList.remove('active'); 
    cartItem.classList.remove('active');
    console.log("heloo")
   
}
window.onscroll=()=>{
    navbar.classList.remove('active'); 
    cartItem.classList.remove('active');
    searchform.classList.remove('active');
}
