function getCardTemplate ({id, name, img}) {
  const template = `<div class="card" data-card-id=${id}>
                      <div class="card__img">
                        <img src=${img} alt="pets" class="card__img-item">
                      </div>
                      <div class="card__title">${name}</div>
                      <div class="card__button">
                        <a href="#" class="button button_theme_secondary">
                          <span class="button__text">
                            Learn more
                          </span>
                        </a>
                      </div>
                    </div>`
  return template
}

const getCardTemplates = data => data.map(card => getCardTemplate(card))

module.exports = getCardTemplates