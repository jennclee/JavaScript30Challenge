const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'

const cities = []

const searchQuery = document.querySelector('.search')
const suggestionsList = document.querySelector('.suggestions')

fetch(endpoint)
  .then(res => res.json())
  .then(data => cities.push(...data))

const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const findMatches = (wordToMatch, cities) => {
  return cities.filter(place => {
    const regex = new RegExp(wordToMatch, 'gi')
    return place.city.match(regex) || place.state.match(regex)
  })
}

const displayMatches = () => {
  const value = searchQuery.value
  const matchArray = findMatches(value, cities)
  const html = matchArray.map(place => {
    const regexHighlight = new RegExp(value, 'gi')
    const cityName = place.city.replace(regexHighlight, `<span class="hl">${value}</span>`)
    const stateName = place.state.replace(regexHighlight, `<span class="hl">${value}</span>`)
    return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
      </li>
    `
  }).join('')
  suggestionsList.innerHTML = html
}

searchQuery.addEventListener('keyup', displayMatches)
