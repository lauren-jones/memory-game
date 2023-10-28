import { useState } from "react";
import { StartView } from "./components/start/startView";
import { gameState } from "./types/gameState";
import { PlayView } from "./components/play/playView";
import { gameSetup } from "./types/gameSetup";
import { getTileContents } from "./functions/getTileContents";
import { shuffleTileContents } from "./functions/shuffleTileContents";
import { tileData } from "./types/tileData";

function App() {
  const [viewState, setViewState] = useState<gameState>("start");
  const [gameSetup, setGameSetup] = useState<gameSetup>({
    isNumbersTheme: true,
    numOfPlayers: 1,
    gridSize: 16,
  });
  const [gameGrid, setGameGrid] = useState<tileData[]>([]);

  const handleStartGame = () => {
    const tileContents = shuffleTileContents(
      getTileContents(gameSetup.isNumbersTheme, gameSetup.gridSize)
    );

    const newGrid = tileContents.map((tileContent) => {
      return { content: tileContent, isSelected: false, isMatched: false };
    });

    setGameGrid(newGrid);

    setViewState("play");
  };

  return (
    <div className="h-screen w-screen">
      {viewState === "start" && (
        <StartView
          gameSetup={gameSetup}
          handleStartGame={handleStartGame}
          setGameSetup={setGameSetup}
        />
      )}

      {(viewState === "play" || viewState === "end") && (
        <PlayView
          setViewState={setViewState}
          gameSetup={gameSetup}
          gameGrid={gameGrid}
          setGameGrid={setGameGrid}
          setGameSetup={setGameSetup}
          viewState={viewState}
          handleStartGame={handleStartGame}
        />
      )}
    </div>
  );
}

export default App;
