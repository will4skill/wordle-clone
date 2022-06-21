const GamePiece = ({ letter, color }) => {
    const styles = {
        display: 'flex',
        color: "white",
        backgroundColor: color,
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