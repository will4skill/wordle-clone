// Add and remove an event listener for key presses:
// Add keyboard event listener: https://stackoverflow.com/questions/64434545/react-keydown-event-listener-is-being-called-multiple-times
// Only look for lowercase letters
// Get random: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// Make parent cover whole screen
// Bounce Animation: https://css-tricks.com/snippets/css/keyframe-animation-syntax/
// Staggering Animations: https://css-tricks.com/different-approaches-for-creating-a-staggered-animation/
// Add delay: https://stackoverflow.com/questions/42089548/how-to-add-delay-in-reactjs

import './Game.css';
import WordRow from './components/WordRow';
import Keyboard from './components/Keyboard';
import React, { useState, useEffect } from 'react';
import guesses from './guesses';
import answers from './answers';

function Game() {
  const [wordGrid, setWordGrid] = useState(["", "", "", "", "", ""]);
  const [currRow, setCurrRow] = useState(0);
  const [targetWord, setTargetWord] = useState("");
  const [usedLetters, setUsedLetters] = useState("");
  const [lastKey, setLastKey] = useState("");
  const [gameState, setGameState] = useState("");

  const handleKeyboardInput = (e) => {
    handleKeyPress(e.key,);
  };

  const resetGame = () => {
    setWordGrid(["", "", "", "", "", ""]);
    setCurrRow(0);
    setUsedLetters("");
    setLastKey("");
    setGameState("");
  }

  const handleKeyPress = (key, e) => {
    const wordGridCopy = [...wordGrid];
    const keyPressed = key;

    if ((keyPressed === "enter" || keyPressed === "Enter")) {
      const newWord = wordGrid[currRow];
      if (newWord.length < 5)
        alert("Word Too Short");
      else if (!guesses.has(newWord))
        alert("That word is not allowed");
      else {
        if (newWord === targetWord) {
          alert("YOU WIN!!");
          setGameState("win");
        }
        else if (currRow === 5) {
          alert("YOU LOSE")
          setGameState("lose");
        }
        setCurrRow(currRow + 1);
        updateUsedLetters(newWord);
        setLastKey(keyPressed);
      }
      return;
    }
    const currWord = wordGridCopy[currRow];

    if ((keyPressed === "del" || keyPressed === "Backspace") && keyPressed.length) {
      wordGridCopy[currRow] = currWord.substring(0, currWord.length - 1)
      setWordGrid(wordGridCopy);
      setLastKey(keyPressed);
      return;
    }

    if (currWord.length < 5 && /^([a-z]){1}$/.test(keyPressed)) {
      wordGridCopy[currRow] += keyPressed;
      setWordGrid(wordGridCopy);
      setLastKey(keyPressed);
    }
  };

  const updateUsedLetters = (newWord) => {
    let usedLettersCopy = usedLetters;
    for (let i = 0; i < newWord.length; ++i) {
      const newLetter = newWord[i];
      if (!usedLettersCopy.includes(newLetter))
        usedLettersCopy += newLetter;
    }
    setUsedLetters(usedLettersCopy);
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboardInput);
    return () => document.removeEventListener("keydown", handleKeyboardInput);
  });

  useEffect(() => {
    const randomIdx = Math.floor(Math.random() * answers.length);
    const randomTargetWord = answers[randomIdx];
    setTargetWord(randomTargetWord);
  }, [])

  return (
    <div className="container">
      <div className="headerContainer">
        <div className="resetButton" onClick={resetGame}>
          RESET GAME
        </div>
      </div>
      <div className="gameBoardContainer">
        {
          wordGrid.map((word, index) =>
            <WordRow
              gameState={gameState}
              lastKey={lastKey}
              currIdx={(currRow * 5) + wordGrid[currRow]?.length}
              row={index}
              isLastRow={index === currRow - 1 && lastKey === "Enter"}
              old={currRow > index}
              word={word}
              targetWord={targetWord}
              key={index} />)
        }
      </div>
      <div className="keyboardContainer">
        <Keyboard
          handleKeyPress={handleKeyPress}
          usedLetters={usedLetters}
          targetWord={targetWord} />
      </div>
    </div>
  );
}

export default Game;
