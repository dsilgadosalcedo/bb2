import { response } from "../../scripts/utils"

export function Results() {
  return (
    <div 
      class="results-section flex-grow lg:h-[59.5vh] lg:overflow-y-scroll flex flex-col sm:px-2 results rounded-b-3xl z-10">
      <div id="results-container" class="flex flex-col gap-2 px-4 pt-4">      
      </div>
      <div class="mx-auto py-4">
        <span class="loader inline-block animate-spin animate-duration-[1400ms] text-3xl text-center hidden">🛰️</span>
        <div id="see-more-button" class="hidden" >
          <button 
            class="text-gray-300 text-sm p-2 rounded-lg font-splineSans-regular font-normal"
            onClick={response}
          >
            Ver más resultados
          </button>
        </div>
      </div>
    </div>
  )
}
