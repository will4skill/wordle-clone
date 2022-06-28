import '../Game.css';

const Key = ({ letter, wide, handleClick, backgroundColor = "gray" }) => {
    const width = wide ? '45px' : '30px'; //wide ? '67.5px' : '45px';

    const updateColor = (backgroundColor) => {
        if (backgroundColor === "green") return "updateKeyColorGreen";
        if (backgroundColor === "black") return "updateKeyColorBlack";
        else return "";
    }

    const styles = {
        display: 'flex',
        color: "white",
        backgroundColor: updateColor(backgroundColor) ? "gray" : backgroundColor,
        fontFamily: "Arial",
        textTransform: "uppercase",
        fontWeight: 'bold',
        fontSize: 13,
        height: '60px',
        width,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: '5px',
        marginBottom: '5px',
        borderRadius: '5px',
    };

    return (
        <div
            className={updateColor(backgroundColor)}
            onClick={(e) => handleClick(letter, e)}
            style={styles}
        >
            {letter}
        </div>
    );
};

export default Key;