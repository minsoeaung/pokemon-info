import './PokemonCard.css'
import { colorsForCard , colorsForType } from "../../colors";

const PokemonCard = ({name, type, imageSrc, lastPokemonRef, setClickedPokemon, pokemons}) => {

    // find clicked pokemon in "pokemons" and store it by "setClickedPokemon"
    function handleOnClick(name) {
        const pokemonObj = pokemons.find(pokemon => pokemon.name === name)
        setClickedPokemon(pokemonObj)
    }

    return (

        // when this div(card) was clicked, it sets clicked pokemon obj in setClickedPokemon
        <div ref={lastPokemonRef} className="card-container" style={{backgroundColor: colorsForCard[type[0].type.name]}} onClick={() => handleOnClick(name)}>
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
                    <p className="pokemon-type" key={type.type.name} style={{backgroundColor: colorsForType[type.type.name]}}>
                        {type.type.name}
                    </p>
                )}
            </div>
        </div>
    );
}

export default PokemonCard