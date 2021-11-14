import {colorsForType} from "../../colors";
import {NavLink} from "react-router-dom";
import {useEffect, useState} from "react";

const PokemonType = () => {
    const [width, setWidth] = useState(window.innerWidth) // to check mobile or desktop

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

    return (
        <div style={{
            marginTop: "3rem",
            display: "flex",
            flexWrap: "wrap",
            gap: "1.3rem",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center"
        }}
        >
            {Object.keys(colorsForType).map(type => (
                <NavLink
                    key={type}
                    to={`/type/${type}`}
                    className="nice-text"
                    style={{
                        backgroundColor: `${colorsForType[type]}`,
                        boxSizing: "border-box",
                        width: `${isMobile ? "40%" : "5rem"}`,
                        padding: "10px 10px",
                        boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
                        borderRadius: "3px",
                        fontFamily: "DotGothic16",
                        cursor: "pointer",
                        textDecoration: "none",
                    }}
                >
                    {type}
                </NavLink>
            ))}
        </div>
    );
}

export default PokemonType