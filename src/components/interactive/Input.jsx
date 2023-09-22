import { getInput } from "../../scripts/utils"

export function Input() {
  return (
    <div class="flex shadow-lg z-20">
      <form onsubmit={getInput} class="relative flex flex-col gap-2 items-center px-4 w-full">
        <input 
          id="input" 
          type="text" 
          name="species_name" 
          placeholder="Escribe aquí" 
          autocomplete="off" 
          required
          autofocus
          class="p-2 text-center text-md border-bb2-100 active:bg-transparent focus:bg-transparent bg-transparent font-splineSans-regular font-normal outline-none w-72 sm:w-96" 
        />
        <div class="flex flex-wrap justify-center items-center gap-2 mb-2 [&>label]:text-sm hover:[&>label]:text-white [&>label]:border-2 hover:[&>label]:border-white [&>label]:transition [&>label]:cursor-pointer [&>label]:px-2 [&>label]:rounded-full">
          <input type="radio" id="kingdom" name="taxonomy" value="kingdom" class="hidden" />
          <label class="text-bb2-100 border-bb2-100" for="kingdom">Reino</label>
          
          <input type="radio" id="phylum" name="taxonomy" value="phylum" class="hidden" />
          <label class="text-bb2-100 border-bb2-100" for="phylum">Filo</label>
          
          <input type="radio" id="class" name="taxonomy" value="class" class="hidden" />
          <label class="text-bb2-100 border-bb2-100" for="class">Clase</label>
          
          <input type="radio" id="order" name="taxonomy" value="order" class="hidden" />
          <label class="text-bb2-100 border-bb2-100" for="order">Orden</label>
          
          <input type="radio" id="family" name="taxonomy" value="family" class="hidden" />
          <label class="text-bb2-100 border-bb2-100" for="family">Familia</label>
          
          <input type="radio" id="genus" name="taxonomy" value="genus" class="hidden" />
          <label class="text-bb2-100 border-bb2-100" for="genus">Género</label>
          
          <input type="radio" id="species" name="taxonomy" value="species" class="hidden" />
          <label class="text-bb2-100 border-bb2-100" for="species">Especie</label>
        </div>
        <button 
          id="search-icon" 
          class="absolute flex items-center gap-2 right-3 top-2 text-bb2-100 hover:text-white transition"
        >
          Buscar
          <svg xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 -960 960 960" width="28">
            <path d="M80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q137 0 241.5 80T863-595q4 13-2 24.5t-18.879 14.773Q830-553 820-560.5q-10-7.5-14-19.5-22-74-74-131.5T607-799v18q0 35-24 61t-59 26h-87v87q0 16.575-13.5 27.787Q410-568 393-568h-83v88h80q12.75 0 21.375 8.625T420-450v95h-67L149-559q-5 20-7 39.667-2 19.666-2 39.333 0 128.02 82.5 223.51Q305-161 431-144q11.676 1.68 19.338 11.34Q458-123 458-110.5T448.859-90q-9.141 8-21.859 6-148-20-247.5-131.5T80-480Zm749 351L716-241q-21 15-45.5 23t-50.065 8q-71.015 0-120.725-49.618Q450-309.235 450-380.118 450-451 499.618-500.5q49.617-49.5 120.5-49.5Q691-550 740.5-500.29T790-379.565q0 25.565-8.5 50.065Q773-305 759-283l112 112q9 9 9.5 21t-8.5 21q-9 9-21.5 9t-21.5-9ZM619.859-270Q666-270 698-301.859q32-31.859 32-78T698.141-458q-31.859-32-78-32T542-458.141q-32 31.859-32 78T541.859-302q31.859 32 78 32Z" fill="currentColor"/></svg>
        </button>
      </form>
    </div>
  )
}
