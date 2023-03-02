import { useState } from 'react'

const PokemonImage = ({id, name, image}) => {

    return (
        <div className="details">
            <h3>{name.toUpperCase() }</h3>
            <img src={image} alt={name} />
        </div>
    )
}

export default PokemonImage