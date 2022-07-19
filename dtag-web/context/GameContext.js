import { createContext, useContext, useEffect, useState } from 'react';


const GameContext = createContext({});

export const GameProvider = ({ children }) => {

  const [ gameFile, setGameFile ] = useState({});
  const [ score, setScore ] = useState(0);
  const [ moves, setMoves ] = useState([]);

  const loadGame = (game) => {

  }

  const makeMove = (move) => {

    setMoves([...moves, move]);
  }

  const saveGame = () => {

  }

  return (
    <GameContext.Provider
      value = {{
        score, moves,
        loadGame,
        makeMove,
        saveGame
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export const useGameProvider = () => useContext(GameContext);