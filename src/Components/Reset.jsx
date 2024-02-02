import GameState from "./GameState";

function Reset({gameState ,handleReset}) {
    if(gameState === GameState.inProgress){
        return;
    }
    return ( <button onClick={handleReset} className='reset-button'>Play Again</button> );
}

export default Reset;