// import logo from './logo.svg';
import './App.css';
import playerData from './data/data.json';
import { useEffect, useState } from 'react';
import Player from './components/Player/Player';
import Selection from './components/Selection/Selection'

function App() {
  const [player, setPlayer] = useState([]);
  const [selection, setSelection] = useState([]);

  useEffect(() => {
    setPlayer(playerData)
    console.log(playerData);
  }, [])

  const handleAddPlayer = (player) => {
    const newSelection = [...selection, player];
    setSelection(newSelection);
  };

  return (
    <div>
      <h2>Total Player: {player.length}</h2>
      <Selection selection={selection}></Selection>
      <ul>
        {
          player.map(player => <Player player={player} handleAddPlayer={handleAddPlayer} key={player.id}>{player}</Player>)
        }
      </ul>
    </div>
  );
}

export default App;
