const getCardTemplates = require('./card/getCardTemplate.js')
const getRandomData = require('../services/getRandomData.js')
const renderData = require('../services/renderData.js')
const data = require('../../assets/data/pets.js')

const LEFT_SLIDE = document.querySelector('#left-slide')
const RIGHT_SLIDE = document.querySelector('#right-slide')
const LEFT_SLIDER_BUTTON = document.querySelector('#left-slider-button')
const RIGHT_SLIDER_BUTTON = document.querySelector('#right-slider-button')
const SLIDER = document.querySelector('#slider')

const moveLeft = () => {
  const dataCards = getRandomData(data, 3, 8)
  const cards = getCardTemplates(dataCards)
  renderData(cards, LEFT_SLIDE)
  SLIDER.classList.add("pets__slider-item_transition_left");
  removeSliderBtnHandlers()
};

const moveRight = () => {
  const dataCards = getRandomData(data, 3, 8)
  const cards = getCardTemplates(dataCards)
  renderData(cards, RIGHT_SLIDE)
  SLIDER.classList.add("pets__slider-item_transition_right");
  removeSliderBtnHandlers()
};

const removeSliderBtnHandlers = () => {
  LEFT_SLIDER_BUTTON.removeEventListener("click", moveLeft);
  RIGHT_SLIDER_BUTTON.removeEventListener("click", moveRight);
}

const addSliderBtnHandlers = () => {
  LEFT_SLIDER_BUTTON.addEventListener("click", moveLeft);
  RIGHT_SLIDER_BUTTON.addEventListener("click", moveRight);
};

function carousel (animationEvent) {
  console.log('start animation')
  let changedItem;
  if (animationEvent.animationName === "move-left") {
    SLIDER.classList.remove("pets__slider-item_transition_left");
    changedItem = LEFT_SLIDE;
    document.querySelector("#active-slide").innerHTML = LEFT_SLIDE.innerHTML;
  } else {
    SLIDER.classList.remove("pets__slider-item_transition_right");
    changedItem = RIGHT_SLIDE;
    document.querySelector("#active-slide").innerHTML = RIGHT_SLIDE.innerHTML;
  }
  
  changedItem.innerHTML = "";
  addSliderBtnHandlers()
}

module.exports = { addSliderBtnHandlers, carousel }


