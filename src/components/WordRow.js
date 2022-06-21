import GamePiece from "./GamePiece";

const WordRow = ({ word, targetWord, old }) => {

    const getColor = (letter, targetWord, idx) => {
        let color = "DodgerBlue";
        if (letter === targetWord[idx]) {
            color = "green"
        } else if (targetWord.includes(letter)) {
            color = "gold"
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

    return (
        <div style={{ display: "flex", flexDirection: 'row' }}>
            {
                getLetterArray(word, targetWord).map((letterObj, index) =>
                    <GamePiece
                        letter={letterObj.letter}
                        key={index}
                        color={letterObj.color}
                    />)
            }
        </div>
    );
};

export default WordRow;