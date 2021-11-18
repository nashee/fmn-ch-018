const menuButton = document.querySelector('.menu-button');

menuButton.addEventListener('click', function(){
    const nav = document.querySelector('.nav');
    const overlay = document.querySelector('.overlay');
    nav.classList.toggle('active');
    overlay.classList.toggle('overlay-active');
  
});