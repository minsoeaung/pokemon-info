import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import Loading from "../Loading/Loading";
import calculateHeight from "../../utilityFunctions/calculateHeight";
import {colorsForType} from "../../utilityData/colors";
import '../PokemonDetails/PokemonDetails.css'

const SearchedPokemon = () => {
    const {state} = useLocation()
    const {searchString} = state
    const [pokemon, setPokemon] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [notFound, setNotFound] = useState(true)
    const [width, setWidth] = useState(window.innerWidth)

    const height = calculateHeight(pokemon.height)
    const weight = calculateHeight(pokemon.weight)

    useEffect(() => {
        async function fetchPokemon() {
            setIsLoading(true)
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchString.toLowerCase()}/`)
            if (res.status === 404) {
                // console.log("not found")
                setNotFound(true);
            } else {
                // console.log("success")
                const data = await res.json()
                // console.log("data: ", data)
                setPokemon(data)
                if (pokemon !== undefined) setNotFound(false)
                // console.log(pokemon)
            }
            setIsLoading(false)
        }

        fetchPokemon()
    }, [searchString])

    // detect if the application is being viewed on Mobile or Desktop
    function handleWindowWidthChange() {
        setWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowWidthChange)
        return () => {
            window.removeEventListener('resize', handleWindowWidthChange)
        }
    }, [])

    let isMobile = width <= 768

    const nameStyle = {
        textTransform: "capitalize",
        fontSize: "2rem"
    }

    const searchDivStyle = {
        fontFamily: "DotGothic16",
        margin: "80px auto",
        padding: "0 35px 35px 35px",
        maxWidth: "1280px",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: "start",
        justifyContent: isMobile ? "" : "space-evenly"
    }

    const sectionStyle = {
        display: "flex",
        flexDirection: "column",
    }

    return (
        <div style={searchDivStyle}>
            {isLoading ? <Loading/> : notFound ?
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <img
                        src="https://64.media.tumblr.com/da9c4314ebe0a33b852f6c3f38d3ab2d/tumblr_o4rgh6Jz5N1vpkaido1_400.gif"
                        alt={pokemon.name}/>
                    <p>"{searchString}" not found</p>
                </div>
                :
                <>
                    <section style={sectionStyle}>
                        <h1 style={nameStyle}>{pokemon.name}</h1>
                        <img
                            src={pokemon.sprites.other.dream_world.front_default}
                            alt={pokemon.name}
                            style={{width: "100%"}}
                        />
                    </section>
                    <section style={sectionStyle}>
                        <div>
                            <h3>Abilities</h3>
                            {pokemon.abilities.map(({ability}) =>
                                <span key={ability.name} className="nice-text">{ability.name}</span>
                            )}
                        </div>
                        <div style={{display: "flex", gap: "40px"}}>
                            <div>
                                <h3>Height</h3>
                                <span>{height}</span>
                            </div>
                            <div>
                                <h3>Weight</h3>
                                <span>{weight}</span>
                            </div>
                        </div>
                        <div>
                            <h3>Type</h3>
                            {pokemon.types.map(type =>
                                <span className="type nice-text" key={type.type.name}
                                      style={{backgroundColor: colorsForType[type.type.name]}}>
                                    {type.type.name}
                                </span>
                            )}
                        </div>
                    </section>
                    <section style={sectionStyle}>
                        <h3>Stats</h3>
                        <div className="stats-container">
                            <table>
                                <tbody>
                                <tr>
                                    <td>base-experience</td>
                                    <td>{pokemon.base_experience}</td>
                                </tr>
                                {pokemon.stats.map(stat =>
                                    <tr key={stat.stat.name}>
                                        <td>{stat.stat.name}</td>
                                        <td>{stat.base_stat}</td>
                                    </tr>
                                )}
                                </tbody>
                            </table>
                        </div>
                    </section>
                </>
            }
        </div>
    );
}

export default SearchedPokemon