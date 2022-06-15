const Key = ({ letter, wide, handleClick }) => {
    const width = wide ? '67.5px' : '45px';
    const styles = {
        display: 'flex',
        color: "white",
        backgroundColor: "gray",
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
        borderRadius: '5px'
    };

    return (
        <div onClick={(e) => handleClick(letter, e)} style={styles}>
            {letter}
        </div>
    );
};

export default Key;