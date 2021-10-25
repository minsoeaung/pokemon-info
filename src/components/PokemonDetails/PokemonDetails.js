import './PokemonDetails.css'

function PokemonDetails({clickedPokemon, setClickedPokemon}) {
    return (
        <div className="details-container">
            <div className="details">
                <div className="details-header">
                    <h2>{clickedPokemon.name}</h2>
                    <span className="close-btn" onClick={() => setClickedPokemon({})}>&times;</span>
                </div>
                <div className="details-body">
                    <p>some text</p>
                </div>
            </div>
        </div>
    );
}

export default PokemonDetails