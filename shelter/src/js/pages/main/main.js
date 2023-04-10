const mobileMenuHandler = require('../../modules/mobile-menu.js')
const CardModal = require('../../modules/modal/cardModal.js')
const getRandomData = require('../../services/getRandomData.js')
const renderData = require('../../services/renderData.js')
const getCardTemplates = require('../../modules/card/getCardTemplate.js')
const { addSliderBtnHandlers, carousel } = require('../../modules/slider.js')
const score = require('../../../assets/data/score.js');
const data = require('../../../assets/data/pets.js')

global.$ = {
  // storage of previous generated cards
  cardStorage : new Set()
}

window.addEventListener('load', () => {
  // initial cards are rendered to the slider
  const cards = getCardTemplates(getRandomData(data, 3, 8))
  renderData(cards, document.querySelector('#active-slide'))
  
  // slider hendlers
  addSliderBtnHandlers()
  const slider = document.querySelector('#slider') 
  slider.addEventListener('animationend', carousel)

  // Launch business logic for mobile menu
  document.addEventListener('click', mobileMenuHandler)
  // Launch business logic for a modal window
  document.addEventListener('click', e => {
    const target = e.target.closest('[data-card-id]')
    if (!target) return
    const id = target.dataset.cardId
    let modal = new CardModal(data[id])
    modal.render()
    document.body.classList.add('_lock')
    modal = null
  })
  // print scores
  score()
})



