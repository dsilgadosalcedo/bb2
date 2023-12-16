export function Map({ width="w-full", height="h-full", description=true, keyValue, ...props }) {
  const divClasses=`overflow-hidden relative sm:border-2 border-bb2-100 rounded-3xl backdrop-blur-md bg-opacity-60 bg-bb2-400 shadow-lg shadow-bb2-200 ${width} ${height}`
  let imageClasses="h-full w-full object-cover hidden"
  let sectionClasses=`lg:flex flex-col items-center animate-wiggle animate-infinite ${props.classes}`

  let src
  if (keyValue) {
    src = `https://api.gbif.org/v2/map/occurrence/adhoc/0/0/0@1x.png?srs=EPSG:3857&taxonKey=${keyValue}&style=blue.marker`
    imageClasses = "h-full w-full object-cover"
  }

  return (
    <section class={sectionClasses}>
      <div class={divClasses}>
        <img src="/map.png" alt="BaseMap" class="h-full w-full object-cover absolute -z-10" />
        <img src={src} id='map' class={imageClasses} alt="Mapa de avistamientos" />
        <div class="absolute w-full flex justify-center bottom-6">
          <span id="map-status" class="font-splineSans-regular text-white hidden">Sin avistamientos registrados</span>
        </div>
      </div>
      {description && <em id='species-name' class="text-xl text-center text-bb2-white mt-12 font-splineSans-regular">-</em>}
    </section>
  )
}