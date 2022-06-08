import GamePiece from "./GamePiece";

const WordRow = ({ word }) => {
    return (
        <div style={{ display: "flex", flexDirection: 'row' }}>
            {
                word.split("").map((letter, index) => <GamePiece letter={letter} />)
            }
        </div>
    );
};

export default WordRow;