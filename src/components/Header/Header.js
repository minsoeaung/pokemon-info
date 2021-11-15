import {NavLink, useNavigate} from "react-router-dom";
import './Header.css'
import {useState} from "react";

const Header = () => {
    const [searchString, setSearchString] = useState("")
    const navigate = useNavigate() // to send searchString data to /search route

    function handleSubmit(e) {
        if (e.keyCode === 13 && searchString.length > 0) {
            navigate('/search', {state: {searchString: searchString}});
            setSearchString("")
        }
    }

    return (
        <header className="app-header">
            <div style={{display: "flex", alignItems: "center", gap: "10px"}}>
                <img
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/25.gif"
                    alt="pikachu gif"
                />
                <nav>
                    <NavLink
                        to="/"
                        style={{
                            textDecoration: "none",
                            cursor: "pointer",
                            fontSize: "1rem",
                        }}
                    >
                        POKEMON INFO
                    </NavLink>
                </nav>
            </div>
            <nav>
                <NavLink
                    to="/type"
                    style={({isActive}) => {
                        return {
                            margin: "1rem 0",
                            fontWeight: "600",
                            textDecoration: "none",
                            borderBottom: isActive ? "1px solid grey" : "",
                            padding: "4px 7px 0px 4px",
                        }
                    }}
                >
                    Type
                </NavLink>
            </nav>
            <input
                type="search"
                value={searchString}
                onChange={(e) => setSearchString(e.target.value)}
                onKeyUp={handleSubmit}
                id="search-box"
                placeholder="Search Pokemon..."
            />
        </header>
    );
}

export default Header