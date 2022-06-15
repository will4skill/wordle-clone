import GamePiece from "./GamePiece";

const WordRow = ({ word }) => {
    const getLetterArray = (word) => {
        const letterArray = word.split("");
        while (letterArray.length < 5) {
            letterArray.push("");
        }
        return letterArray;
    };

    return (
        <div style={{ display: "flex", flexDirection: 'row' }}>
            {
                getLetterArray(word).map((letter, index) => <GamePiece letter={letter} key={index} />)
            }
        </div>
    );
};

export default WordRow;