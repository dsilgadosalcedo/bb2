import { toggleHidden } from "../../scripts/utils"
import { getKey } from "../../scripts/utils"

export function Card({ data, image }) {
  return (
    <a 
      class="flex flex-grow-0 justify-between h-20 bg-bb2-400 rounded-xl sm:hover:shadow-bb2-500 shadow-md transition-all cursor-pointer duration-200 hover:ease-in-out font-normal relative overflow-hidden result-card" 
      key-value={getKey({ object: data })} 
      species-name={data.scientificName}
      onMouseEnter={setMap}
      href={`/species/${getKey({ object: data })}`}
    >
      <div class="flex p-2 gap-2 sm:gap-4 z-20">
        <div class="w-2 h-full bg-gradient-to-b from-bb2-300/30 to-bb2-300 rounded-full">
        </div>
        <div class="flex flex-col gap-1 justify-center">
          <em class="text-lg sm:text-md leading-none">{data.scientificName}</em>
          <span class="text-sm font-bold text-gray-100 bg-bb2-300 px-2 rounded-full w-fit">
            {data.rank.toLowerCase()}
          </span>
        </div>
      </div>
      <div class="w-40 sm:w-56 h-20 absolute right-0 z-10">
        <img class="object-cover w-full h-full absolute -right-[1px] text-end text-sm" src={image} alt={`imagen de ${data.scientificName}`} />
        <div class="w-56 h-20 bg-gradient-to-r from-bb2-400 via-bb2-400/40 to-transparent absolute top-0">
        </div>
      </div>
    </a>
  )
}

export async function setMap(event) {
  const key = event.target.getAttribute('key-value')
  const speciesName = event.target.getAttribute('species-name')
  const mapImage = document.querySelector('#map')
  
  toggleHidden({ path:'#map-status', force:false })

  mapImage.classList.remove('hidden')

  mapImage.setAttribute('src', `https://api.gbif.org/v2/map/occurrence/adhoc/0/0/0@1x.png?srs=EPSG:3857&taxonKey=${key}&style=blue.marker`)

  mapImage.addEventListener('error', () => {
    mapImage.classList.add('hidden')
    toggleHidden({ path:'#map-status' })
  })

  showSpeciesName({ species: speciesName })
}

function showSpeciesName({ species }) {
  const speciesNameSpan = document.querySelector('#species-name')
  speciesNameSpan.innerText = species
}