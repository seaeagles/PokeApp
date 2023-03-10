const PokemonImage = ({name, image, type, height, weight, ability, move}) => {

    return (
        <div className="details">
            <h2>{name.toUpperCase() }</h2>
            <img src={image} alt={name} />
            <h3>Type: {type.toUpperCase() }</h3>
            <h4>Favorite Attack: {move}</h4>
            <h4>Ability: {ability}</h4>
        </div>
    )
}

export default PokemonImage