import { render } from 'preact'
import { Card } from "../components/interactive/Card"

let offset = 0
let rank = ''
let speciesInput, selectedTaxonomy

export async function getInput(event) {
  event.preventDefault()

  const formData = new FormData(event.target)

  speciesInput = formData.get('species_name')
  
  selectedTaxonomy = formData.get('taxonomy')

  const resultsContainer = document.querySelector("#results-container")
  resultsContainer.innerHTML = ''

  response({ isThereNewElement: false })
}

export async function response({ isThereNewElement = true }) {
  toggleHidden({ path:'.results-section .loader' })
  toggleHidden({ path:'#see-more-button', force:false })
  isThereNewElement ? offset += 20 : offset = 0
  if (selectedTaxonomy) {
    rank = `rank=${selectedTaxonomy}`
  }
  
  const res = await fetchGbif({ key: speciesInput, type: 'search' }) 

  await setCards({ results: res.results })
  return
}

export async function fetchGbif({ key, type = 'id' }) {
  const API_URL = 'https://api.gbif.org/v1/'

  let url

  switch (type) {
    case 'id':
      url = `${API_URL}species/${key}`
      break;
    case 'search':
      url = `${API_URL}species/search/?q=${key}&limit=20&offset=${offset}&${rank}&datasetKey=d7dddbf4-2cf0-4f39-9b2a-bb099caae36c`
      break;
    case 'occurrence':
      url = `${API_URL}occurrence/search?${key}&mediaType=stillImage`
      break;
    default:
      break;
  }

  try {
    const response = await fetch(url)
    if (!response.ok) {
      console.error("Network response was not ok")
    }
    const data = await response?.json()
      .then((result) => {
        return result
      }).catch((err) => {
        return null
      })
    return data
  } catch (error) {
    console.error(error)
  }
}

async function setCards({ results }) {
  const resultElements = await Promise.all(results.map( async(result) => {
    const newContainer = document.createElement('div')

    let keyName = getKey({ object: result, addNameKey: true })
    const imageUrl = await getImages({ key: keyName, number: 1 })

    const noAllowedRanks = ['SUBSPECIES', 'VARIETY', 'FORM', 'SUBGENUS', 'UNRANKED']

    const cardComponent = Card({data: result, image: imageUrl[0]})
    // const cardComponent = <Card data={result} image={imageUrl[0]} />
    render(cardComponent, newContainer)

    if (!noAllowedRanks.includes(result.rank)) {
      return newContainer.firstElementChild
    }
  }))
  
  const deleteUndefinedElements = resultElements.filter(element => element)
  printElements({ elements: deleteUndefinedElements })
  return
}

export async function getImages({ key, number = undefined }) {

  const res = await fetchGbif({ key, type: 'occurrence' })

  let imageIdentifier = ['/plants.jpg']
  
  res.results.forEach( result => {
    if (result.hasOwnProperty("media")) {
      result.media.forEach( mediaItem => {
        if (mediaItem.hasOwnProperty("identifier")) {
          if (imageIdentifier.length<=10) imageIdentifier.push(mediaItem.identifier)
        }
      })
    }
  })

  if (imageIdentifier.length > 1) {
    imageIdentifier.shift()
  }

  return number ? imageIdentifier.slice(0, number) : imageIdentifier
}

async function printElements({elements}) {
  toggleHidden({ path: '.results-section .loader' })

  if (elements.length > 0) {
    const resultsContainer = document.querySelector("#results-container")
    for (const element of elements) {
      resultsContainer.appendChild(element)
      await new Promise(resolve => setTimeout(resolve, 40))
    }
    toggleHidden({ path: '#see-more-button' })
  } else {
    finishSearch()
  }
}

async function wait({ time = 0 }) {
  return await new Promise(resolve => setTimeout(resolve, time))
}

function finishSearch() {
  const message = 'Búsqueda finalizada'
  const span = document.createElement('span')
  span.classList.add('text-center', 'text-sm', 'text-white')
  span.innerText = message

  const resultsContainer = document.querySelector("#results-container")
  resultsContainer.appendChild(span)
}

export function toggleHidden({path, force = true}) {
  const element = document.querySelector(path)
  if (!force) {
    element.classList.contains('hidden') ? null : element.classList.toggle('hidden')
    return
  }
  element.classList.toggle('hidden')
}

export function getKey({ object, addNameKey = false }) {
  const keyNames = ["speciesKey", "genusKey", "familyKey", "orderKey", "classKey", "phylumKey", "kingdomKey"]

  let name
  let key

  for (const keyName of keyNames) {
    if (object?.hasOwnProperty(keyName)) {
      key = object[keyName]
      name = keyName
      break
    }
  }

  return addNameKey ? `${name}=${key}` : key
}
