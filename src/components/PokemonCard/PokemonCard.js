import './PokemonCard.css'

const PokemonCard = ({name, type, imageSrc, lastPokemonRef}) => {
    return (
        <div ref={lastPokemonRef} className="card-container">
            <h2 className="pokemon-name">{name}</h2>
            <img
                className="pokemon-image"
                src={imageSrc}
                alt={name}
            />
            <div className="pokemon-type">
                {type.map(type => <p>{type.type.name}</p>)}
            </div>
        </div>
    );
}

export default PokemonCard