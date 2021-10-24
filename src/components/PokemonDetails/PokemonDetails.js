import './PokemonDetails.css'

function PokemonDetails({pokemon, setClickedPokemon}) {
    return (
        <div className="details-container">
            <div className="details">
                <div className="details-header">
                    <h2>{pokemon}</h2>
                    <span className="close-btn" onClick={() => setClickedPokemon("")}>&times;</span>
                </div>
                <div className="details-body">
                    <p>some text</p>
                </div>
            </div>
        </div>
    );
}

export default PokemonDetails