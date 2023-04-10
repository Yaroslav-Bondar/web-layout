const Modal = require('./modal.js')

class CardModal extends Modal {
  constructor (data) {
    super()
    const { name, img, type, breed, description, age, inoculations, diseases, parasites } = data
    if (!Array.isArray(inoculations)) new Error('inoculations value must be array type')
    if (!Array.isArray(diseases)) new Error('diseases value must be array type') 
    if (!Array.isArray(parasites)) new Error('parasites value must be array type') 
    this.name = name
    this.img = img
    this.type = type
    this.breed = breed
    this.description = description
    this.age = age
    this.inoculations = inoculations
    this.diseases = diseases
    this.parasites = parasites
  }
  getTemplate () {
    let template = '<article class="complete-card">'
    if (this.img) {
      template += `<section class="complete-card__img">` +
      `<img src="${this.img}" alt="pets" class="complete-card__img-item">` +
      `</section>`
    }

    if (this.name 
      || this.type 
      || this.breed 
      || this.description 
      || this.age 
      || this.inoculations 
      || this.diseases
      || this.parasites) {
        template += `<article class="complete-card__data">`
        if (this.name) template += `<h2 class="complete-card__name title title_color_black">${this.name}</h2>`
        if (this.type || this.breed) {
          template += `<section class="complete-card__who">`
          if (this.type) template += `<div class="complete-card__type">${this.type}</div>`
          if (this.breed) {
            template += `<span class="complete-card__separator">-</span>` +
            `<div class="complete-card__breed">${this.breed}</div>`
          }
          template += '</section>'
        }
        if (this.description) {
          template += `<section class="complete-card__description">` +
          `<p class="complete-card__description-item">${this.description}</p>`+
          '</section>'
        }
        if (this.age || this.inoculations || this.diseases || this.parasites) {
          template += `<section class="complete-card__info">`
          if (this.age) {
            template += `<div class="complete-card__field">` +
              `<span class="complete-card__key">Age: </span>` +
              `<span class="complete-card__value">${this.age}</span>` +
            '</div>'
          }
          if (this.inoculations) {
            template += `<div class="complete-card__field">` +
              `<span class="complete-card__key">Inoculations: </span>` +
              `<span class="complete-card__value">${this.inoculations.join(', ')}</span>` +
            '</div>'
          }
          if (this.diseases) {
            template += `<div class="complete-card__field">` +
              `<span class="complete-card__key">Diseases: </span>` +
              `<span class="complete-card__value">${this.diseases.join(', ')}</span>` +
            '</div>'
          }
          if (this.parasites) {
            template += `<div class="complete-card__field">` +
              `<span class="complete-card__key">Parasites: </span>` +
              `<span class="complete-card__value">${this.parasites.join(', ')}</span>` +
            '</div>'
          }
          template += '</section>'
        }
        template += '</article>'
      }
    template += '</article>'
    return template
  }
  render () {
    super.render(this.getTemplate())
  }
}

module.exports = CardModal