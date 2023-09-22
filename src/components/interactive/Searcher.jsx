import { Input } from "./Input.jsx"
import { Results } from "./Results.jsx"

export function Searcher() {
  return (
    <section class="flex flex-col sm:border-2 border-bb2-100 rounded-3xl backdrop-blur-md bg-opacity-60 bg-bb2-400 shadow-lg shadow-bb2-200">
      <Input />
      <Results />
    </section>
  )
}