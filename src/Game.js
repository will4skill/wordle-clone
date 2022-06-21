// Add and remove an event listener for key presses:
// Add keyboard event listener: https://stackoverflow.com/questions/64434545/react-keydown-event-listener-is-being-called-multiple-times
// Only look for lowercase letters

import logo from './logo.svg';
import './Game.css';
import WordRow from './components/WordRow';
import Keyboard from './components/Keyboard';
import React, { useState, useEffect, useCallback } from 'react';

function Game() {
  const [wordGrid, setWordGrid] = useState(["", "", "", "", "", ""]);
  const [currRow, setCurrRow] = useState(0);
  const [targetWord, setTargetWord] = useState("sweat");

  const handleKeyboardInput = (e) => {
    handleKeyPress(e.key,);
  };

  const resetGame = () => {
    setWordGrid(["", "", "", "", "", ""]);
    setCurrRow(0);
  }

  const handleKeyPress = (key, e) => {
    console.log("KEYPRESS: " + key)
    const wordGridCopy = [...wordGrid];
    const keyPressed = key;

    if ((keyPressed === "enter" || keyPressed === "Enter")) {
      if (wordGrid[currRow].length < 5)
        alert("Word Too Short");
      else {
        if (wordGrid[currRow] === targetWord)
          alert("YOU WIN!!");
        else if (currRow === 5)
          alert("YOU LOSE")
        setCurrRow(currRow + 1);
      }
      return;
    }

    const currWord = wordGridCopy[currRow];

    if ((keyPressed === "del" || keyPressed === "Backspace") && keyPressed.length) {
      wordGridCopy[currRow] = currWord.substring(0, currWord.length - 1)
      setWordGrid(wordGridCopy);
      return;
    }

    if (currWord.length < 5 && /^([a-z]){1}$/.test(keyPressed)) {
      wordGridCopy[currRow] += keyPressed;
      setWordGrid(wordGridCopy);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboardInput);
    return () => document.removeEventListener("keydown", handleKeyboardInput);
  });

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ backgroundColor: "green", height: "100px", width: "200px" }} onClick={resetGame}>
          RESET GAME
        </div>
        {
          wordGrid.map((word, index) => <WordRow old={currRow > index} word={word} targetWord={targetWord} key={index} />)
        }
        <Keyboard handleKeyPress={handleKeyPress} targetWord={targetWord} />
      </header>
    </div>
  );
}

export default Game;
