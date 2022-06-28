import Key from "./Key";

const Keyboard = ({ handleKeyPress, usedLetters, targetWord }) => {
    const topRow = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
    const middleRow = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
    const bottomRow = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];

    const getKeyColor = (key) => {
        if (targetWord.includes(key) && usedLetters.includes(key))
            return 'green';
        if (usedLetters.includes(key))
            return 'black';
        return 'gray';
    }

    return (
        <>
            <div style={{ display: "flex", flexDirection: 'row', justifyContent: "center" }}>
                {
                    topRow.map((letter, index) =>
                        <Key letter={letter}
                            key={index}
                            handleClick={handleKeyPress}
                            backgroundColor={getKeyColor(letter)}
                        />)
                }
            </div>
            <div style={{ display: "flex", flexDirection: 'row', justifyContent: "center" }}>
                {
                    middleRow.map((letter, index) =>
                        <Key letter={letter}
                            key={index}
                            handleClick={handleKeyPress}
                            backgroundColor={getKeyColor(letter)}
                        />)
                }
            </div>
            <div style={{ display: "flex", flexDirection: 'row', justifyContent: "center" }}>
                <Key wide letter="enter" handleClick={handleKeyPress} />
                {bottomRow.map((letter, index) =>
                    <Key letter={letter}
                        key={index}
                        handleClick={handleKeyPress}
                        backgroundColor={getKeyColor(letter)}
                    />)
                }
                <Key wide letter="del" handleClick={handleKeyPress} />
            </div>
        </>
    );
};

export default Keyboard;