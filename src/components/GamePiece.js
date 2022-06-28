import '../Game.css';

const GamePiece = ({ letter, color, currIdx, selfIdx, lastKey, isLastRow, isWinner }) => {
    const styles = {
        display: 'flex',
        color: "white",
        backgroundColor: !isLastRow ? color : "DodgerBlue",
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

    const showBounce = (currIdx, selfIdx, lastKey) => {
        const disableBackspace = (lastKey !== "del" && lastKey !== "Backspace"); // true
        if (currIdx === selfIdx + 1 && disableBackspace)
            return "bounce";
        else return "";
    }

    const showFlip = (isLastRow, color) => {
        if (!isLastRow) return "";
        if (color === "gold") return "flipGold";
        if (color === "green") return "flipGreen";
        if (color === "black") return "flip";
    }

    const stagger = (color, isWinner) => {
        if (color === "gold" || color === "green" || color === "black" || isWinner)
            return "animationChild";
        else return "";
    }

    return (
        <div className={`${showFlip(isLastRow, color)} ${stagger(color, isWinner)} ${showBounce(currIdx, selfIdx, lastKey)} `} style={styles}>
            {letter}
        </div>
    );
};

export default GamePiece;