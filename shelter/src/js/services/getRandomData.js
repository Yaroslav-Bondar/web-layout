const getRandomId = max => Math.floor(Math.random() * max)

/**
 * Generating pseudo-random data that does not repeat in the current and previous sets
 */
function getRandomData (data, amount, max) {
  if (amount > max) throw new Error('the number of generated elements is greater than in the set')
  const set = new Set()
  while (set.size !== amount) {
    const id = getRandomId(max)
    if (!$.cardStorage.has(data[id]) && !set.has(data[id])) set.add(data[id])
  }
  $.cardStorage = new Set(set)
  return Array.from(set)
}

module.exports = getRandomData

