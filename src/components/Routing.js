import {Route, Routes} from "react-router-dom";
import PokeDex from "./PokeDex/PokeDex";
import App from "./App";
import PokeDexByType from "./PokeDex/PokeDexByType";

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<App/>}>
                <Route index element={<PokeDex/>}/>
                <Route path=":typeName" element={<PokeDexByType/>}/>
            </Route>
            <Route
                path="*"
                element={<main style={{padding: "1rem"}}><p>There's nothing here!</p></main>}
            />
        </Routes>
    );
}

export default Routing