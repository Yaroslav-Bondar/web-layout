function renderData (data, destination) {
  data.forEach(item => {
    destination.insertAdjacentHTML('beforeend', item)
  })
}

module.exports = renderData