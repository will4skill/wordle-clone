// Add and remove an event listener for key presses:
// Add keyboard event listener: https://stackoverflow.com/questions/64434545/react-keydown-event-listener-is-being-called-multiple-times
// Only look for lowercase letters
// Get random: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// Make parent cover whole screen
// Bounce Animation: https://css-tricks.com/snippets/css/keyframe-animation-syntax/
// Staggering Animations: https://css-tricks.com/different-approaches-for-creating-a-staggered-animation/
// Add delay: https://stackoverflow.com/questions/42089548/how-to-add-delay-in-reactjs
// How to make a JS Timer: https://stackoverflow.com/questions/29971898/how-to-create-an-accurate-timer-in-javascript
// How to clear Intervals and Timeouts with Hooks:
// https://stackoverflow.com/questions/53090432/react-hooks-right-way-to-clear-timeouts-and-intervals
// Clear Interval: https://developer.mozilla.org/en-US/docs/Web/API/clearInterval
// Get current time: https://stackoverflow.com/questions/10599148/how-do-i-get-the-current-time-only-in-javascript

import './Game.css';
import WordRow from './components/WordRow';
import Keyboard from './components/Keyboard';
import React, { useState, useEffect } from 'react';
import guesses from './guesses';
import answers from './answers';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert';

function Game() {
  const [wordGrid, setWordGrid] = useState(["", "", "", "", "", ""]);
  const [currRow, setCurrRow] = useState(0);
  const [targetWord, setTargetWord] = useState("");
  const [usedLetters, setUsedLetters] = useState("");
  const [lastKey, setLastKey] = useState("");
  const [gameState, setGameState] = useState("new");
  const [show, setShow] = useState(true);

  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const [clockState, setClockState] = useState('new');
  const [tickState, setTickState] = useState(0);

  const [finalTime, setFinalTime] = useState(null);

  const delay = (mili) => new Promise(res => setTimeout(res, mili));

  const resetTargetWord = () => {
    const randomIdx = Math.floor(Math.random() * answers.length);
    const randomTargetWord = answers[randomIdx];
    setTargetWord(randomTargetWord);
  }

  // console.log(targetWord);

  const startTheGame = () => {
    stop();
    start();
    setWordGrid(["", "", "", "", "", ""]);
    setCurrRow(0);
    setUsedLetters("");
    setLastKey("");
    setGameState("new");
    resetTargetWord();
    setShow(false);
  }

  useEffect(() => {
    let timer = setInterval(() => {
      setTickState(tickState => tickState + 10);
    }, 10);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (clockState === 'start') {
      if (tickState >= 10) {
        setSecondsElapsed(secondsElapsed + 1);
        setTickState(0);
      }
    }

    if (clockState === 'pause') {
      // Do Nothing
    }

    if (clockState === 'new') {
      setSecondsElapsed(0);
    }
  }, [tickState, clockState]);

  const formatTimeString = time => {
    // Note: time is coming in in hundreths of a second

    // const hours = Math.floor(time/3600)
    // time %= 3600;
    const minutes = Math.floor(time / 6000);
    time %= 6000;
    const seconds = Math.floor(time / 100);
    time %= 100;
    const hundreths = time;

    return `${addPrefix(minutes)}:${addPrefix(seconds)}.${addPrefix(
      hundreths,
    )}`;
  };

  const addPrefix = number => {
    if (number < 10) {
      return `0${number}`;
    }
    return String(number);
  };

  const start = () => {
    // start upating time
    setClockState('start');
  };

  const pause = () => {
    // stop updating time
    setClockState('pause');
  };

  const stop = () => {
    setSecondsElapsed(0);
    setClockState('new');
  };

  const handleShow = async () => {
    await delay(3000);
    setShow(true);
  }

  // const handleClose = () => {
  //   resetGame();
  //   setShow(false);
  // }


  const handleKeyboardInput = (e) => {
    handleKeyPress(e.key,);
  };

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
          handleShow();
          setGameState("win");
          setFinalTime(secondsElapsed);
          pause();
        }
        else if (currRow === 5) {
          handleShow();
          setGameState("lose");
          pause();
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
    resetTargetWord();
  }, [])

  const getModalButtonText = (state) => {
    if (gameState === "new") return "Start Game!";
    if (gameState === "win") return "Play Again";
    if (gameState === "lose") return "Try Again";
  }

  const getModalBodyText = (state) => {
    if (gameState === "new") return "Press the Button to Start the Game and Timer"
    if (gameState === "win") return "Great Job!";
    if (gameState === "lose") return "Sorry, Better Luck Next Time";
  }

  return (
    <div className="containerStyle">
      <Modal show={show} centered>
        <Modal.Header>
          <Modal.Title>{getModalBodyText(gameState)}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{gameState === "win" && <div>
          <Alert> Your Final Time: {formatTimeString(finalTime)}</Alert>
          <h5>Top 10 Times:</h5>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((entry, index) => <tr>
                <td>{entry}</td>
                <td>Mark</td>
                <td>1111 seconds</td>
              </tr>)}
            </tbody>
          </Table>
        </div>}
          {gameState === "lose" && <img src="https://i.giphy.com/media/TJawtKM6OCKkvwCIqX/giphy.webp" alt="this slowpoke moves" style={{ width: "100%" }} />}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={startTheGame}>
            {getModalButtonText(gameState)}
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="timer">{formatTimeString(secondsElapsed)}</div>

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
    </div >
  );
}

export default Game;
