import Key from "./Key";

const Keyboard = ({ handleKeyPress }) => {
    const topRow = ['q', 'u', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
    const middleRow = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
    const bottomRow = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];

    return (
        <>
            <div style={{ display: "flex", flexDirection: 'row', justifyContent: "center" }}>
                {
                    topRow.map((letter, index) => <Key letter={letter} key={index} handleClick={handleKeyPress} />)
                }
            </div>
            <div style={{ display: "flex", flexDirection: 'row', justifyContent: "center" }}>
                {
                    middleRow.map((letter, index) => <Key letter={letter} key={index} handleClick={handleKeyPress} />)
                }
            </div>
            <div style={{ display: "flex", flexDirection: 'row', justifyContent: "center" }}>
                <Key wide letter="enter" handleClick={handleKeyPress} />
                {bottomRow.map((letter, index) =>
                    <Key letter={letter} key={index} handleClick={handleKeyPress} />)
                }
                <Key wide letter="del" handleClick={handleKeyPress} />
            </div>
        </>
    );
};

export default Keyboard;