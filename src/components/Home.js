import {Outlet} from "react-router-dom";
import Header from "./Header/Header";

const Home = () => {
    return (
        <div>
            <Header />
            <div style={{marginTop: "60px"}}>
                <Outlet/>
            </div>
        </div>
    );
}

export default Home