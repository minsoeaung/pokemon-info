import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import PokemonCard from "../PokemonCard/PokemonCard";
import PokemonDetails from "../PokemonDetails/PokemonDetails";
import './PokeDex.css'
import pokemonTypeChart from "../../utilityData/pokemonTypeChart";
import Loading from "../Loading/Loading";
import PokemonType from "../PokemonType/PokemonType";

const PokemonCardListsByType = () => {
    let params = useParams();
    let type = params.typeName;

    const [pokemons, setPokemons] = useState([]) // array of all pokemon object
    const [clickedPokemon, setClickedPokemon] = useState({}) // clicked pokemon object
    const [width, setWidth] = useState(window.innerWidth) // to check mobile or desktop
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchPokemons() {
            setIsLoading(true);
            const res = await fetch(`https://pokeapi.co/api/v2/type/${type}/`)
            const data = await res.json()

            function fetchPokemonDetails(results) {
                setPokemons([])
                results.forEach(async pokemon => {
                    const res = await fetch(pokemon.pokemon.url)
                    const data = await res.json();
                    setPokemons(prevPokemon => [...prevPokemon, data])
                })
            }

            fetchPokemonDetails(data.pokemon)
            setIsLoading(false);
        }

        fetchPokemons()
    }, [params])

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

    function chart(type, category) {
        for (let i = 0; i < pokemonTypeChart.length; ++i) {
            if (pokemonTypeChart[i].name.toLowerCase() === type) {
                if (pokemonTypeChart[i][category].length === 0) return ["none"]
                else return pokemonTypeChart[i][category];
            }
        }
    }

    return (
        <>
            {isLoading ? <Loading/> :
                <main className={isMobile ? "sm-app-container" : "app-container"}>
                    <div style={{flex: "100%"}}>
                        <div style={{display: "flex", gap: "20px", alignItems: 'center'}}>
                            <h1>Type: </h1>
                            <PokemonType type={type} isMobile={false}/>
                        </div>
                        <table>
                            <tr>
                                <th>Immune:</th>
                                {chart(type, "immunes").map(type => (
                                    <td><PokemonType type={type} isMobile={isMobile}/></td>
                                ))}
                            </tr>
                            <tr>
                                <th>Weaknesses:</th>
                                {chart(type, "weaknesses").map(type => (
                                    <td>{<PokemonType type={type} isMobile={isMobile}/>}</td>
                                ))}
                            </tr>
                            <tr>
                                <th>Strengths:</th>
                                {chart(type, "strengths").map(type => (
                                    <td>{<PokemonType type={type} isMobile={isMobile}/>}</td>
                                ))}
                            </tr>
                        </table>
                        <p style={{width: "100%"}}>There are {pokemons.length} {type} Pokémon: </p>
                    </div>

                    {pokemons.map(pokemon =>
                        <PokemonCard
                            key={pokemon.name}
                            name={pokemon.name}
                            type={pokemon.types}
                            imageSrc={pokemon.sprites.front_default}

                            setClickedPokemon={setClickedPokemon} // clicked pokemon object
                            pokemons={pokemons} // array of all pokemon object
                            isMobile={isMobile}
                        />
                    )}

                    {/* pokemon details modal */}

                    {Object.keys(clickedPokemon).length !== 0
                        ? <PokemonDetails
                            clickedPokemon={clickedPokemon}
                            setClickedPokemon={setClickedPokemon}
                            isMobile={isMobile}
                        />
                        : null
                    }
                </main>
            }
        </>
    );
}

export default PokemonCardListsByType