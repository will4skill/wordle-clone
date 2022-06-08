const GamePiece = ({ letter }) => {
    const styles = {
        display: 'flex',
        color: "white",
        backgroundColor: "DodgerBlue",
        fontFamily: "Arial",
        textTransform: "uppercase",
        fontWeight: 'bold',
        height: '60px',
        width: '60px',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: '5px',
        marginBottom: '5px',
    };

    return (
        <div style={styles}>
            {letter}
        </div>
    );
};

export default GamePiece;