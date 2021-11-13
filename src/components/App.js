import {NavLink, Outlet} from "react-router-dom";
import {colorsForType} from "../colors";

const App = () => {
    const headerStyle = {
        fontFamily: `"DotGothic16", serif`,
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        padding: "0.7rem",
        boxShadow: "0px 0px 6px 0px rgba(0, 0, 0, 0.5)",
        zIndex: "2",
        backgroundColor: "white"
    }

    const navStyle = {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "20px",
    }

    const inputStyle = {
        border: "3px solid #00B4CC",
        borderRadius: "3px",
        outline: "none",
        padding: "4px 9px",
        fontWeight: "700",
    }

    const types = Object.keys(colorsForType)

    return (
        <div>
            <header style={headerStyle}>
                <nav style={navStyle}>
                    <NavLink
                        to="/"
                        className="nice-text"
                        style={{
                            textDecoration: "none",
                            width: "150px",
                            textAlign: "center",
                            border: "2px solid black",
                            marginRight: "20px",
                            cursor: "pointer",
                        }}>
                        POKEMON INFO
                    </NavLink>
                    {types.map(type =>
                        <NavLink
                            to={type}
                            key={type}
                            className="nice-text"
                            style={({isActive}) => {
                                return {
                                    backgroundColor: `${colorsForType[type]}`,
                                    cursor: "pointer",
                                    textDecoration: isActive ? "underline" : "none",
                                }
                            }}
                        >
                            {type}
                        </NavLink>
                    )}
                    <input type="search" placeholder="Filter Pokemon..." style={inputStyle}/>
                </nav>
            </header>
            <div style={{marginTop: "60px"}}>
                <Outlet/>
            </div>
        </div>
    );
}

export default App