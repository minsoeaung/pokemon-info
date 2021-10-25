import './PokemonDetails.css'
import colors from "../../colors";

function PokemonDetails({clickedPokemon, setClickedPokemon}) {
    return (
        <div className="details-wrapper">
            <div className="details" style={{backgroundColor: colors[clickedPokemon.types[0].type.name]}}>
                <div className="details-header">
                    <h1>{clickedPokemon.name}</h1>
                    <span className="close-btn" onClick={() => setClickedPokemon({})}>&times;</span>
                </div>
                <div className="details-body">

                    {/* <left> big profile image */}

                    <section className="left-section">
                        <img
                            src={clickedPokemon.sprites.other.dream_world.front_default}
                            alt={clickedPokemon.name}
                        />
                    </section>

                    {/* <middle> image and some info about weight, height, etc.... */}

                    <section className="middle-section">
                        <div className="small-image-container">
                            <div className="small-image">
                                <img src={clickedPokemon.sprites.front_default}/>
                            </div>
                            <div className="small-image">
                                <img src={clickedPokemon.sprites.front_shiny}/>
                            </div>
                            <div className="small-image">

                                <img src={clickedPokemon.sprites.back_default}/>
                            </div>
                            <div className="small-image">
                                <img src={clickedPokemon.sprites.back_shiny}/>
                            </div>
                        </div>
                        <h2>Abilities</h2>
                        <div className="abilities-container">
                            {clickedPokemon.abilities.map(({ ability }) =>
                                <span key={ability.name} className="nice-text">{ability.name}</span>
                            )}
                        </div>
                        <h2>Height</h2>
                        <div className="height-container">
                            <span className="nice-text">3' 03"</span>
                        </div>
                        <h2>Weight</h2>
                        <div className="weight-container">
                            <span className="nice-text">28.7 lbs</span>
                        </div>
                    </section>

                    {/* <right> info about type and stat*/}

                    <section className="right-section">
                        <h2>Type</h2>
                        <div className="type-container">
                            {clickedPokemon.types.map(type =>
                                <p className="type" key={type.type.name}>
                                    {type.type.name}
                                </p>
                            )}
                        </div>
                        <h2>Stats</h2>
                        <div className="stats-container">
                            <table>
                                <tbody>
                                {clickedPokemon.stats.map(stat =>
                                    <tr key={stat.stat.name}>
                                        <td>{stat.stat.name}</td>
                                        <td>{stat.base_stat}</td>
                                    </tr>
                                )}
                                </tbody>
                            </table>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default PokemonDetails