const Key = ({ letter, wide, handleClick, backgroundColor = "gray" }) => {
    const width = wide ? '67.5px' : '45px';
    const styles = {
        display: 'flex',
        color: "white",
        backgroundColor,
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