import { useEffect, useState } from 'react'
import PokemonImage from './Components/PokemonImage';
import './App.css'

function App() {
  const [allePokemon, setAllePokemon] = useState([]);
  const [loadPoke, setLoadPoke] = useState('https://pokeapi.co/api/v2/pokemon?limit=15')
  const returnAllePokemon = async () => {
    const res = await fetch(loadPoke)
    const data = await res.json()
    setLoadPoke(data.next)

    function createPokemans(result) {
      result.forEach(async (pokemon) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data = await res.json();
        setAllePokemon(currentList => [...currentList, data])
      });
  }
  createPokemans(data.results)
  await console.log(allePokemon)
}
useEffect(() => {
  returnAllePokemon()
}, [])


  return (
    <div className="app-main">
      <h1>Poke</h1>

      <div className="pokeholder">
          <div className="all-container">
        {allePokemon.map((pokemon, index) => 
            <PokemonImage
            name = {pokemon.name}
            image = {pokemon.sprites.other.dream_world.front_default}
            type = {pokemon.types[0].type.name}
            key = {index}
            height = {pokemon.height}
            weight = {pokemon.weight}

          
            />
        )}
          </div>
      <button className="btns" onClick={()=>returnAllePokemon()}>More Pokemon</button>
      </div>
    </div>
  )
  }


export default App
