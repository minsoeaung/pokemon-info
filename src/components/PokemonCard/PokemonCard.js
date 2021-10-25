import './PokemonCard.css'

// dynamic background color depending on pokemon type
const colors = {
    fire: "#FDDFDF",
    grass: "#DEFDE0",
    electric: "#FCF7DE",
    water: "#DEF3FD",
    ground: "#f4e7da",
    rock: "#d5d5d4",
    fairy: "#fceaff",
    poison: "#98d5a3",
    bug: "#f8d5a3",
    dragon: "#97b3e6",
    psychic: "#eaeda1",
    flying: "#F5F5F5",
    fighting: "#E6E0D4",
    normal: "#F5F5F5"
}

const PokemonCard = ({name, type, imageSrc, lastPokemonRef, setClickedPokemon, pokemons}) => {

    // find clicked pokemon in "pokemons" and store it by "setClickedPokemon"
    function handleOnClick(name) {
        const pokemonObj = pokemons.find(pokemon => pokemon.name === name)
        setClickedPokemon(pokemonObj)
    }

    return (

        // when this div(card) was clicked, it sets clicked pokemon obj in setClickedPokemon
        <div ref={lastPokemonRef} className="card-container" style={{backgroundColor: colors[type[0].type.name]}} onClick={() => handleOnClick(name)}>
            <h2 className="pokemon-name">{name}</h2>
            <div className="image-container">
                <img
                    className="pokemon-image"
                    src={imageSrc}
                    alt={name}
                />
            </div>
            <div className="type-container">
                {type.map(type =>
                    <p className="pokemon-type">
                        {type.type.name}
                    </p>
                )}
            </div>
        </div>
    );
}

export default PokemonCard