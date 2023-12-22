(function(){
  'use strict';
  const navLinks = document.querySelector('.app__mobile ul');
  const hamburger = document.querySelector('.hamburger');
  hamburger.addEventListener('click', (evt) =>{
    evt.preventDefault()
    if (navLinks.classList.contains('hidden')) {
      navLinks.className = 'app__header-ul';
      hamburger.src = './images/icon-close.svg';
    } else {
      navLinks.className = 'hidden';
      hamburger.src = './images/icon-hamburger.svg';
    }
  })
}());
