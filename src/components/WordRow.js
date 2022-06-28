import GamePiece from "./GamePiece";
import '../Game.css';

const WordRow = ({ word, targetWord, old, currIdx, row, lastKey, isLastRow, gameState }) => {
    const getColor = (letter, targetWord, idx) => {
        let color = "black";
        if (letter === targetWord[idx]) {
            color = "green";
        } else if (targetWord.includes(letter)) {
            color = "gold";
        }
        return color;
    }

    const getLetterArray = (word, targetWord) => {
        const letterArray = [];
        for (let i = 0; i < 5; ++i) {
            letterArray.push({
                letter: word[i] ? word[i] : "",
                color: old ? getColor(word[i], targetWord, i) : "DodgerBlue",
            })
        }
        return letterArray;
    };

    const isWinner = (gameState === "win" && isLastRow);

    return (
        <div
            className={`wordRow ${isWinner ? "jump" : ""}`}
            style={{ display: "flex", flexDirection: 'row' }}
        >
            {
                getLetterArray(word, targetWord).map((letterObj, index) =>
                    <GamePiece
                        isWinner={isWinner}
                        isLastRow={isLastRow}
                        lastKey={lastKey}
                        currIdx={currIdx}
                        selfIdx={row * 5 + index}
                        letter={letterObj.letter}
                        key={index}
                        color={letterObj.color}
                    />)
            }
        </div>
    );
};

export default WordRow;