import logo from './logo.svg';
import './Game.css';
import WordRow from './components/WordRow';

function Game() {
  return (
    <div className="App">
      <header className="App-header">
        <WordRow word="depth" />
        <WordRow word="clone" />
        <WordRow word="doubt" />
        <WordRow word="gloom" />
        <WordRow word="clown" />
        <WordRow word="chest" />
      </header>
    </div>
  );
}

export default Game;
