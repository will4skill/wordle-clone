import logo from './logo.svg';
import './Game.css';
import GamePiece from './components/GamePiece';

function Game() {
  return (
    <div className="App">
      <header className="App-header">
        <GamePiece letter={"T"} />
        <GamePiece letter={"T"} />
        <GamePiece letter={"T"} />
      </header>
    </div>
  );
}

export default Game;
