import {Outlet, Route, Routes} from "react-router-dom";
import PokemonCardLists from "./PokemonCardLists/PokemonCardLists";
import PokemonCardListsByType from "./PokemonCardLists/PokemonCardListsByType";
import PokemonTypeLists from "./PokemonTypeLists/PokemonTypeLists";
import SearchedPokemon from "./SearchedPokemon/SearchedPokemon";
import Header from "./Header/Header";

const Home = () => {
    return (
        <div>
            <Header/>
            <div style={{marginTop: "60px"}}>
                <Outlet/>
            </div>
        </div>
    );
}

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}>

                <Route index element={<PokemonCardLists/>}/>

                <Route path="type" element={<PokemonTypeLists/>}/>

                <Route path="/type/:typeName" element={<PokemonCardListsByType/>}/>

                <Route path="search" element={<SearchedPokemon/>}/>

            </Route>
            <Route
                path="*"
                element={<main style={{padding: "1rem"}}><p>There's nothing here!</p></main>}
            />
        </Routes>
    );
}

export default Routing