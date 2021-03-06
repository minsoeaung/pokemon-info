import './PokemonDetails.css'
import {colorsForCard, colorsForType} from "../../utilityData/colors";
import calculateHeight from "../../utilityFunctions/calculateHeight";
import calculateWeight from "../../utilityFunctions/calculateWeight";

function PokemonDetails({clickedPokemon, setClickedPokemon, isMobile}) {
    const height = calculateHeight(clickedPokemon.height)
    const weight = calculateWeight(clickedPokemon.weight)

    return (
        <div className={`details-wrapper ${isMobile && "no-p"}`} onClick={() => setClickedPokemon({})}>
            <div
                onClick={(e) => e.stopPropagation()}
                className={`details ${isMobile && "full-width"}`}
                style={{backgroundColor: colorsForCard[clickedPokemon.types[0].type.name]}}
            >
                <div className="details-header">
                    <h1>{clickedPokemon.name}</h1>
                    <span className="close-btn" onClick={() => setClickedPokemon({})}>&times;</span>
                </div>
                <div className={`details-body ${isMobile && "flex-col"}`}>

                    {/* <left> big profile image */}

                    <section className={isMobile ? "sm-left-section" : "left-section"}>
                        <img
                            src={clickedPokemon.sprites.other.dream_world.front_default}
                            alt={clickedPokemon.name}
                            className="profile-image"
                        />
                    </section>

                    {/* <middle> image and some info about weight, height, etc.... */}

                    <section className="middle-section">
                        <div className={`small-image-container ${isMobile && "hide-this"}`}>
                            <div className="small-image">
                                <img src={clickedPokemon.sprites.front_default} alt={clickedPokemon.name}/>
                            </div>
                            <div className="small-image">
                                <img src={clickedPokemon.sprites.front_shiny} alt={clickedPokemon.name}/>
                            </div>
                            <div className="small-image">

                                <img src={clickedPokemon.sprites.back_default} alt={clickedPokemon.name}/>
                            </div>
                            <div className="small-image">
                                <img src={clickedPokemon.sprites.back_shiny} alt={clickedPokemon.name}/>
                            </div>
                        </div>
                        <h2>Abilities</h2>
                        <div className="abilities-container">
                            {clickedPokemon.abilities.map(({ability}) =>
                                <span key={ability.name} className="nice-text">{ability.name}</span>
                            )}
                        </div>
                        <h2>Height</h2>
                        <div className="height-container">
                            <span>{height}</span>
                        </div>
                        <h2>Weight</h2>
                        <div className="weight-container">
                            <span>{weight} lbs</span>
                        </div>
                    </section>

                    {/* <right> info about type and stat*/}

                    <section className="right-section">
                        <h2>Type</h2>
                        <div className="type-container">
                            {clickedPokemon.types.map(type =>
                                <p className="type nice-text" key={type.type.name}
                                   style={{backgroundColor: colorsForType[type.type.name]}}>
                                    {type.type.name}
                                </p>
                            )}
                        </div>
                        <h2>Stats</h2>
                        <div className="stats-container">
                            <table>
                                <tbody>
                                <tr>
                                    <td>base-experience</td>
                                    <td>{clickedPokemon.base_experience}</td>
                                </tr>
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
                {isMobile ?
                    <p className="nice-text bottom-close-btn" onClick={() => setClickedPokemon({})}>CLOSE</p>
                    : null
                }
            </div>
        </div>
    );
}

export default PokemonDetails