// Business logic for mobile menu

const burger = document.querySelector('.burger')
const mobileMenu = document.querySelector('.mobile-menu')
const mobileBackground = document.querySelector('.mobile-background')

document.addEventListener('click', mobileMenuHandler)

function mobileMenuHandler (e) {
  if (e.target.closest('.burger')) {
    mobileMenuSwitch()
  } else if (mobileMenu.classList.contains('mobile-menu_active') 
              && !e.target.closest('.mobile-menu') 
              || e.target.closest('.mobile-menu__link')) {
    mobileMenuSwitch()
  }
}

function mobileMenuSwitch () {
  document.body.classList.toggle('_lock')
  burger.classList.toggle('burger_active')
  mobileBackground.classList.toggle('mobile-background_active')
  mobileMenu.classList.toggle('mobile-menu_active')
}