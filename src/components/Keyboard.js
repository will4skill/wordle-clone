import Key from "./Key";

const Keyboard = ({ handleKeyPress }) => {
    const topRow = ['q', 'u', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
    const middleRow = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
    const bottomRow = ['enter', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'del'];

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
                {
                    bottomRow.map((letter, index) => {
                        const wide = (index === 0 || index === bottomRow.length - 1) ? true : false;
                        return <Key wide={wide} letter={letter} key={index} handleClick={handleKeyPress} />
                    })
                }
            </div>
        </>
    );
};

export default Keyboard;