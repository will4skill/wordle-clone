import '../Game.css';

const GamePiece = ({ letter, color, currIdx, selfIdx, lastKey, isLastRow, isWinner }) => {
    const styles = {
        backgroundColor: !isLastRow ? color : "DodgerBlue",
    };

    const showBounce = (currIdx, selfIdx, lastKey) => {
        const disableBackspace = (lastKey !== "del" && lastKey !== "Backspace"); // true
        if (currIdx === selfIdx + 1 && disableBackspace)
            return "bounce";
        else return "";
    }

    const showFlip = (isLastRow, color) => {
        if (!isLastRow) return "";
        if (color === "#ECA400") return "flipGold";
        if (color === "green") return "flipGreen";
        if (color === "black") return "flip";
    }

    const stagger = (color, isWinner) => {
        if (color === "#ECA400" || color === "green" || color === "black" || isWinner)
            return "animationChild";
        else return "";
    }

    return (
        <div className={`gamePiece ${showFlip(isLastRow, color)} ${stagger(color, isWinner)} ${showBounce(currIdx, selfIdx, lastKey)} `} style={styles}>
            {letter}
        </div>
    );
};

export default GamePiece;