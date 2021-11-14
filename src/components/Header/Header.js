import {NavLink} from "react-router-dom";
import './Header.css'

const Header = () => {

    return (
        <header className="app-header">
            <nav>
                <NavLink
                    to="/"
                    style={{
                        textDecoration: "none",
                        cursor: "pointer",
                        fontSize: "1.3rem",
                    }}
                >
                    POKEMON INFO
                </NavLink>
            </nav>
            <nav>
                <NavLink
                    to="/type"
                    style={({isActive}) => {
                        return {
                            margin: "1rem 0",
                            fontWeight: "600",
                            textDecoration: "none",
                            borderBottom: isActive ? "3px solid grey" : "",
                            padding: "4px 7px 0px 4px",
                        }
                    }}
                >
                    Type
                </NavLink>
            </nav>
            <div>
                <input type="search" id="search-box" placeholder="Search Pokemon..."/>
            </div>
        </header>
    );
}

export default Header