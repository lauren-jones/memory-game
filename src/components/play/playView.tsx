import { gameState } from "../../types/gameState";
import { Grid } from "./grid";
import { PlayHeader } from "./playHeader";
import { gameSetup } from "../../types/gameSetup";
import { tileData } from "../../types/tileData";
import { useEffect, useState } from "react";
import { ScoresFooter } from "./scoresFooter";
import { isMatch } from "../../functions/isMatch";
import { GameOver } from "../end/gameOver";

interface PlayViewProps {
  gameSetup: gameSetup;
  setViewState: (gameState: gameState) => void;
  gameGrid: tileData[];
  setGameGrid: (gameGrid: tileData[]) => void;
  setGameSetup: (gameSetup: gameSetup) => void;
  viewState: gameState;
  handleStartGame: () => void;
}

export const PlayView: React.FC<PlayViewProps> = ({
  gameSetup,
  setViewState,
  gameGrid,
  setGameGrid,
  setGameSetup,
  viewState,
  handleStartGame,
}) => {
  const [multiPlayerScores, setMultiPlayerScores] = useState<number[]>(
    new Array(gameSetup.numOfPlayers).fill(0)
  );
  const [soloPlayerTurns, setSoloPlayerTurns] = useState<number>(0);
  const [soloPlayerTimer, setSoloPlayerTimer] = useState(0);
  const [isTimerOn, setIsTimerOn] = useState(true);
  const [tilesMatched, setTilesMatched] = useState(0);
  const [isEndOfTurn, setIsEndOfTurn] = useState(false);
  const [playerTurn, setPlayerTurn] = useState<number>(1);
  const [firstTileInPair, setFirstTileInPair] = useState<{
    tileData: tileData;
    index: number;
  } | null>();
  const [secondTileInPair, setSecondTileInPair] = useState<{
    tileData: tileData;
    index: number;
  } | null>();

  const handleSelectTile = (
    selectedTile: tileData,
    selectedTileIndex: number
  ) => {
    const nextGameGrid = gameGrid.map((tile, index) => {
      if (index === selectedTileIndex) {
        tile.isSelected = true;
      }
      return tile;
    });

    if (firstTileInPair === null) {
      setFirstTileInPair({ tileData: selectedTile, index: selectedTileIndex });
      setGameGrid(nextGameGrid);
    }

    if (firstTileInPair != null) {
      setSecondTileInPair({ tileData: selectedTile, index: selectedTileIndex });
      setGameGrid(nextGameGrid);
      setIsEndOfTurn(true);
    }
  };

  useEffect(() => {
    setIsEndOfTurn(false);

    const time = setTimeout(() => {
      if (firstTileInPair != null && secondTileInPair != null) {
        const isMatchingPair = isMatch(
          firstTileInPair.tileData.content,
          secondTileInPair.tileData.content
        );

        if (gameSetup.numOfPlayers === 1) {
          let currentSoloPlayerTurns = soloPlayerTurns;
          setSoloPlayerTurns((currentSoloPlayerTurns += 1));
        }

        if (isMatchingPair && gameSetup.numOfPlayers > 1) {
          let currentScores = multiPlayerScores;
          currentScores[playerTurn - 1] += 1;
          setMultiPlayerScores(currentScores);
        }

        if (gameSetup.numOfPlayers > 1) {
          let currentPlayerTurn = playerTurn;
          playerTurn === gameSetup.numOfPlayers
            ? setPlayerTurn(1)
            : setPlayerTurn((currentPlayerTurn += 1));
        }

        const nextGameGrid = gameGrid.map((tile, index) => {
          if (
            index === firstTileInPair.index ||
            index === secondTileInPair.index
          ) {
            if (!isMatchingPair) {
              tile.isSelected = false;
            }
            if (isMatchingPair) {
              tile.isSelected = false;
              tile.isMatched = true;
            }
          }
          return tile;
        });
        setGameGrid(nextGameGrid);

        if (isMatchingPair) {
          let pairsMatched = tilesMatched;
          let nextPairsMatched = (pairsMatched += 2);
          if (nextPairsMatched === gameSetup.gridSize) {
            setIsTimerOn(false);
            setViewState("end");
          } else {
            setTilesMatched(nextPairsMatched);
          }
        }
      }
      setFirstTileInPair(null);
      setSecondTileInPair(null);
    }, 200);

    return () => {
      clearTimeout(time);
    };
  }, [isEndOfTurn === true]);

  const handleRestartGame = () => {
    setGameSetup({ isNumbersTheme: true, numOfPlayers: 1, gridSize: 16 });
    setViewState("start");
  };

  const handlePlayAgain = () => {
    setMultiPlayerScores(new Array(gameSetup.numOfPlayers).fill(0));
    setSoloPlayerTurns(0);
    setSoloPlayerTimer(0);
    setTilesMatched(0);
    setPlayerTurn(1);
    handleStartGame();
  };

  return (
    <div className="w-full lg:w-3/4 m-auto h-full p-6 md:p-10 flex flex-col items-center justify-between">
      <PlayHeader handleRestartGame={handleRestartGame} />
      <Grid
        gridSize={gameSetup.gridSize}
        gameGrid={gameGrid}
        handleSelectTile={handleSelectTile}
      />
      <ScoresFooter
        numOfPlayers={gameSetup.numOfPlayers}
        multiPlayerScores={multiPlayerScores}
        soloPlayerTurns={soloPlayerTurns}
        soloPlayerTimer={soloPlayerTimer}
        playerTurn={playerTurn}
        setSoloPlayerTimer={setSoloPlayerTimer}
        isTimerOn={isTimerOn}
      />

      {viewState === "end" && (
        <GameOver
          numOfPlayers={gameSetup.numOfPlayers}
          soloPlayerTimer={soloPlayerTimer}
          soloPlayerTurns={soloPlayerTurns}
          multiPlayerScores={multiPlayerScores.map((score, index) => {
            return { player: index + 1, score: score };
          })}
          handleRestartGame={handleRestartGame}
          handlePlayAgain={handlePlayAgain}
        />
      )}
    </div>
  );
};
