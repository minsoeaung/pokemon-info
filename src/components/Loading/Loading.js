const Loading = () => {
    return (
        <div style={{
            marginTop: "80px",
            fontFamily: "DotGothic16",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <img
                src="https://www.animatedimages.org/data/media/1446/animated-pokemon-image-0082.gif"
                alt="spinning gif"
                width="50px"
                height="auto"
            />
            <span>Loading...</span>
        </div>
    );
}

export default Loading