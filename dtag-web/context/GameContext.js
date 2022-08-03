import { createContext, useContext, useEffect, useState } from 'react';


const GameContext = createContext({});

const commands = [ 'go', 'pick', 'drop', 'use', 'help', 'start' ];
const directions = [ 'north', 'south', 'east', 'west' ];
const help = `dTAG Help Message ::
Available commands : ${commands.join(', ')} ;
Available directions (to use with 'go') : ${directions.join(', ')}
`

const welcome = 'Welcome to dTAG! The demo game is loaded up for you. Type in \'start\' in the box below and hit Enter!';

export const GameProvider = ({ children }) => {

  const [ game, setGame ] = useState({});
  const [ room, setRoom ] = useState({});
  const [ score, setScore ] = useState(0);
  const [ moves, setMoves ] = useState(['']);
  const [ response, setResponse ] = useState([welcome]);

  const loadGame = (g) => {

  }

  const makeMove = (move) => {
    move = move.toLowerCase().split(' ');
    
    let res = '', valid = false;
    const cmd = move[0], obj = move[1], rest = move.slice(2);
    
    switch(cmd) {
      case 'help': res = help; valid = true; break;
      case 'start': break;
      default: res = 'Oh no, that command is not recognized. Type \'help\' to see the list of commands.';
    }
    setMoves([...moves, move]);
    setResponse([...response, res]);
    return valid;
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