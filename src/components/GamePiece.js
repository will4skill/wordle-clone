const GamePiece = ({ letter }) => {
    return (
        <div style={{ backgroundColor: 'blue', height: '60px', width: '60px' }}>
            {letter}
        </div>
    );
};

export default GamePiece;