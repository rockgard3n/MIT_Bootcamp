const Square = ({ takeTurn, id }) => {
    const mark = ['O', 'X', '+'];
    // id is the square's number
    // filled tells you if square has been filled
    // tik tells you symbol in square (same as player)
    // call takeTurn to tell Parent the square is  filled
    const [filled, setFilled] = React.useState(false);
    const [tik, setTik] = React.useState(2);
  
    // Step 1: Move the mounted state & toggle from the board component to here
    // Step 2: Check to see if the mounted state is false. If it is we want to return null instead of returning the button
    const [mounted, setMounted] = React.useState(true);
    const toggle = () => setMounted(!mounted);
      
    if(!mounted){
        return null;
      }
    
    return (
      // Step 3: Trigger toggle() when button is clicked
      <button
        // DO NOT DELETE THIS id
        id={`square-button-${id}`}
        onClick={()=> {
          setTik(takeTurn(id));
          setFilled(true);
          // Step 3: Trigger toggle() when button is clicked
          toggle();
        }}
      >
        <h1>{mark[tik]}</h1>
      </button>
    );
  };
  
  const Board = () => {
    // 1st player is X ie 1
    // State keeps track of next player and gameState
    const [player, setPlayer] = React.useState(1);
    
    const [gameState, setGameState] = React.useState([]);
  
    
  
    const takeTurn = (id) => {
      setGameState([...gameState, { id: id, player: player }]);
      setPlayer((player + 1) % 2); // get next player
      return player;
    };
    function renderSquare(i) {
      // use properties to pass callback function takeTurn to Child
      return <Square takeTurn={takeTurn} id={i}></Square>;
    }
  
    return (
      <div className="game-board">
        <div className="grid-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        
      </div>
    );
  };
  
  const Game = () => {
    return (
      <div className="game">
        <Board></Board>
      </div>
    );
  };
  
  // ========================================
  
  ReactDOM.render(<Game />, document.getElementById('root'));
  