import {useState, useEffect, useRef, useCallback} from "react";
import PokemonCard from "./components/PokemonCard/PokemonCard";
import PokemonDetails from "./components/PokemonDetails/PokemonDetails";
import './App.css'

function App() {
    const [pokemons, setPokemons] = useState([])
    const [nextURL, setNextURL] = useState("https://pokeapi.co/api/v2/pokemon/?limit=20")
    const [clickedPokemon, setClickedPokemon] = useState("")

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
                    lastPokemonRef={lastPokemonRef}
                    setClickedPokemon={setClickedPokemon}
                />
            )}

            {/* pokemon details modal */}

            {clickedPokemon.length > 0
                ? <PokemonDetails
                    pokemon={clickedPokemon}
                    setClickedPokemon={setClickedPokemon}
                />
                : <></>
            }
        </main>
    );
}

export default App;
