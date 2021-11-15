import {colorsForType} from "../../utilityData/colors";

const PokemonType = ({type, isMobile}) => {
    const typeName = typeof type === 'string' ? type : type.type.name
    const colorForText = typeName === 'none' ? 'black' : 'white'
    const colorForBackground = colorsForType[typeName.toLowerCase()]

    return (
        <p
            className={isMobile ? "sm-pokemon-type" : "pokemon-type"}
            key={typeName}
            style={{
                backgroundColor: colorForBackground,
                color: colorForText
            }}
        >
            {typeName}
        </p>
    );
}

export default PokemonType