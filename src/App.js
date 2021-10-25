import {useState, useEffect, useRef, useCallback} from "react";
import PokemonCard from "./components/PokemonCard/PokemonCard";
import PokemonDetails from "./components/PokemonDetails/PokemonDetails";
import './App.css'

function App() {
    const [pokemons, setPokemons] = useState([]) // array of all pokemon object
    const [nextURL, setNextURL] = useState("https://pokeapi.co/api/v2/pokemon/?limit=20")
    const [clickedPokemon, setClickedPokemon] = useState({}) // clicked pokemon object

    const fetchPokemons = async () => {
        const res = await fetch(nextURL)
        const data = await res.json()
        setNextURL(data.next)

        function fetchPokemonDetails(results) {
            results.forEach(async pokemon => {
                const res = await fetch(pokemon.url)
                const data = await res.json()
                setPokemons(currentPokemons => [...currentPokemons, data])
            })
        }

        fetchPokemonDetails(data.results)
    }

    useEffect(() => {
        fetchPokemons()
    }, [])

    // detect if user scroll to bottom of the page
    const observer = useRef()
    const lastPokemonRef = useCallback(node => {
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                // console.log("BOTTOM sir")
                fetchPokemons()
            }
        })
        if (node) observer.current.observe(node)
    })

    return (
        <main>
            {pokemons.map(pokemon =>
                <PokemonCard
                    key={pokemon.name}
                    name={pokemon.name}
                    type={pokemon.types}
                    imageSrc={pokemon.sprites.front_default}

                    lastPokemonRef={lastPokemonRef} // to detect if user scroll to bottom
                    setClickedPokemon={setClickedPokemon} // clicked pokemon object
                    pokemons={pokemons} // array of all pokemon object
                />
            )}

            {/* pokemon details modal */}

            {Object.keys(clickedPokemon).length !== 0
                ? <PokemonDetails
                    clickedPokemon={clickedPokemon}
                    setClickedPokemon={setClickedPokemon}
                />
                : null
            }
        </main>
    );
}

export default App;
