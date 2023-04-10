class Modal {
  #modal
  #contentContainer
  #closeButton
  constructor () {
    this.#modal = this.createElement('div', 'modal')
    this.#modal.addEventListener('click', this.#closeHandler)
    this.#contentContainer = this.createElement('div', 'modal__container')
    this.#closeButton = this.createElement('button', 'modal__close', 'btn')
    this.#closeButton.textContent = 'x'
    this.#contentContainer.append(this.#closeButton)
    this.#modal.append(this.#contentContainer)
  }
  #closeHandler (event) {
    if (event.target.closest('.modal__container') && !event.target.closest('.modal__close')) return
    const modal = document.querySelector('.modal')
    document.body.classList.remove('_lock')
    modal.remove()
  }
  createElement(tag, ...classes) {
    if (typeof tag != 'string') throw new Error('Tag must be a string type')
    const element = document.createElement(tag)
    element.classList.add(...classes)
    return element
  }
  render(content) {
    if (typeof content != 'string') throw new Error('Content must be a string type')
    this.#contentContainer.insertAdjacentHTML('beforeend', content)
    document.body.append(this.#modal)
  }
}

module.exports = Modal