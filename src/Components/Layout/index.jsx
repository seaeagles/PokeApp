import { useState, useEffect } from 'react'
import { Header } from '../header';
import PokemonImage from '../PokemonImage'
import './styles.css'

export function Layout () {
  const [allePokemon, setAllePokemon] = useState([]);
  const [loadPoke, setLoadPoke] = useState('https://pokeapi.co/api/v2/pokemon?limit=1')

  const returnAllePokemon = async () => {
    const res = await fetch(loadPoke)
    const data = await res.json()
    setLoadPoke(data.next)

    const createPokemans = async (result) => {
      for (const pokemon of result) {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data = await res.json();
        if (!allePokemon.some(p => p.id === data.id)) { // check if poke already exists
          setAllePokemon(currentList => [...currentList, data])
        }
      };
    }
    await createPokemans(data.results)
  }

  const returnRandoPoke = async () => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon')
    const data = await res.json();
    const randomIndex = Math.floor(Math.random() * data.count); // get random index within range of available Pokemon
    const randomPokemonRes = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomIndex + 1}`); 
    const randomPokemonData = await randomPokemonRes.json();
    setAllePokemon(currentList => [...currentList, randomPokemonData]);
  }

  return (
    <div className="app-main">
      <Header />
      <div className="all-container">
        <div className="pokeholder">
          {allePokemon.map((pokemon, index) => 
            <PokemonImage
              name = {pokemon.name}
              image = {pokemon.sprites.other.dream_world.front_default}
              type = {pokemon.types[0].type.name}
              key = {index}
              height = {pokemon.height}
              weight = {pokemon.weight}
              move = {pokemon.moves[0].move.name}
              ability = {pokemon.abilities[0].ability.name} />
          )}
        </div>
        <button className="btns" onClick={() => returnAllePokemon()}>More Pokemon</button>
        <button className="btns" onClick={() => returnRandoPoke()}>Random</button>
      </div>
    </div>
  )
}