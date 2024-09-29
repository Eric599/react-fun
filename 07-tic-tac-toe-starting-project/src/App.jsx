import Player from "./components/Player/index.js";


const App = () => {
  

  return (
    <main>
      <div id={"game-container"}>
        <ol id={"players"}>
          <Player name={"Player 1"} symbol={"X"} />
          <Player name={"Player 2"} symbol={"O"} />

        </ol>
       Game Board

      </div>
    </main>
  )
}

export default App
