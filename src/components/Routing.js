import {Route, Routes} from "react-router-dom";
import PokeDex from "./PokeDex/PokeDex";
import Home from "./Home";
import PokeDexByType from "./PokeDex/PokeDexByType";
import PokemonType from "./PokemonType/PokemonType";

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}>

                <Route index element={<PokeDex/>}/>

                <Route path="type" element={<PokemonType/>} />

                <Route path="/type/:typeName" element={<PokeDexByType />}/>

            </Route>
            <Route
                path="*"
                element={<main style={{padding: "1rem"}}><p>There's nothing here!</p></main>}
            />
        </Routes>
    );
}

export default Routing