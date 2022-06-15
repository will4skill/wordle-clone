import logo from './logo.svg';
import './Game.css';
import WordRow from './components/WordRow';
import Keyboard from './components/Keyboard';
import React, { useState } from 'react';

function Game() {
  const [topWord, setTopWord] = useState("");
  const handleKeyPress = (key, e) => {
    console.log("KEYPRESS: " + key)
    if (topWord.length < 5)
      setTopWord(topWord + key);
  };

  return (
    <div className="App">
      <header className="App-header">
        <WordRow word={topWord} />
        <WordRow word={topWord} />
        <WordRow word={topWord} />
        <WordRow word={topWord} />
        <WordRow word={topWord} />
        <WordRow word={topWord} />
        <Keyboard handleKeyPress={handleKeyPress} />
      </header>
    </div>
  );
}

export default Game;
