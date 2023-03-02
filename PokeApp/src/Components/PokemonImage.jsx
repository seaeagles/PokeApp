import { useState } from 'react'

const PokemonImage = ({name, image, type, height, weight}) => {

    return (
        <div className="details">
            <h3>{name.toUpperCase() }</h3>
            <img src={image} alt={name} />
            <h2>Type: {type}</h2>
            <h3>Height: {height}</h3>
            <h3>Weight: {weight}</h3>
        </div>
    )
}

export default PokemonImage