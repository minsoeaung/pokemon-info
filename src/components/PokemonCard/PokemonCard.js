import './PokemonCard.css'
import {colorsForCard} from "../../utilityData/colors";
import PokemonType from "../PokemonType/PokemonType";

const PokemonCard = ({name, type, imageSrc, lastPokemonRef, setClickedPokemon, pokemons, isMobile}) => {

    // find clicked pokemon in "pokemons" and store it by "setClickedPokemon"
    function handleOnClick(name) {
        const pokemonObj = pokemons.find(pokemon => pokemon.name === name)
        setClickedPokemon(pokemonObj)
    }

    return (
        <div
            ref={lastPokemonRef}
            className={isMobile ? "sm-card-container" : "card-container"}
            style={{backgroundColor: colorsForCard[type[0].type.name]}}
            onClick={() => handleOnClick(name)}
        >
            <h2 className={isMobile ? "sm-pokemon-name" : "pokemon-name"}>{name}</h2>
            <div className={isMobile ? "sm-image-container" : "image-container"}>
                <img
                    className={isMobile ? "sm-pokemon-image" : "pokemon-image"}
                    src={imageSrc}
                    alt={name}
                />
            </div>
            <div className={isMobile ? "sm-type-container" : "type-container"}>
                {type.map(type =>
                    <PokemonType type={type} isMobile={isMobile}/>
                )}
            </div>
        </div>
    );
}

export default PokemonCard