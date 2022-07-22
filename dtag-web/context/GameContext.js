import { createContext, useContext, useEffect, useState } from 'react';


const GameContext = createContext({});

export const GameProvider = ({ children }) => {

  const [ gameFile, setGameFile ] = useState({});
  const [ score, setScore ] = useState(0);
  const [ moves, setMoves ] = useState(['']);
  const [ response, setResponse ] = useState(['']);

  const loadGame = (game) => {

  }

  const makeMove = (move) => {
    let res = ': '+move;
    setMoves([...moves, move]);
    setResponse([...response, res]);
    return true;
  }

  const saveGame = () => {

  }

  return (
    <GameContext.Provider
      value = {{
        score, moves,
        response,
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