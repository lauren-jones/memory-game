import { useState } from "react";
import { Button } from "../start/button";
import { ResultTab } from "./resultTab";

interface GameOverProps {
  numOfPlayers: number;
  multiPlayerScores: { player: number; score: number }[];
  soloPlayerTimer: number;
  soloPlayerTurns: number;
  handleRestartGame: () => void;
  handlePlayAgain: () => void;
}

export const GameOver: React.FC<GameOverProps> = ({
  numOfPlayers,
  multiPlayerScores,
  soloPlayerTimer,
  soloPlayerTurns,
  handleRestartGame,
  handlePlayAgain,
}) => {
  const [finalPlayerScores, setFinalPlayerScores] = useState(
    multiPlayerScores.sort((a, b) => b.score - a.score)
  );

  return (
    <>
      {numOfPlayers === 1 && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-dark-blue bg-opacity-70 w-full h-full flex justify-center items-center p-10">
          <div className="bg-light w-full md:w-3/4 lg:w-1/2 rounded-lg flex flex-col justify-center items-center p-6">
            <h2 className="font-bold text-4xl mb-2">You did it!</h2>
            <p className="font-bold text-light-gray text-sm mb-4">
              Game over! Here's how you got on...
            </p>
            <div className="w-full gap-2 flex flex-col mb-6">
              <ResultTab text="Time Elapsed" result={soloPlayerTimer} />
              <ResultTab
                text="Moves Taken"
                result={soloPlayerTurns.toString()}
              />
            </div>
          </div>
        </div>
      )}
      {numOfPlayers > 1 && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-dark-blue bg-opacity-70 w-full h-full flex justify-center items-center p-10">
          <div className="bg-light w-full md:w-3/4 lg:w-1/2 rounded-lg flex flex-col justify-center items-center p-6">
            <h2 className="font-bold text-4xl mb-2">
              {finalPlayerScores[0].score === finalPlayerScores[1].score
                ? "It's a tie!"
                : `Player ${finalPlayerScores[0].player} wins!`}
            </h2>
            <p className="font-bold text-light-gray text-sm mb-4">
              {numOfPlayers > 1
                ? "Game over! Here are the results..."
                : "Game over! Here's how you got on..."}
            </p>
            <div className="w-full gap-2 flex flex-col mb-6">
              <ResultTab
                text={`Player ${finalPlayerScores[0].player} ${
                  finalPlayerScores[0].score > finalPlayerScores[1].score
                    ? "(Winner)"
                    : ""
                }`}
                result={`${finalPlayerScores[0].score} Pairs`}
                isDark={true}
              />
              <ResultTab
                text={`Player ${finalPlayerScores[1].player}`}
                result={`${finalPlayerScores[1].score} Pairs`}
                isDark={
                  finalPlayerScores[0].score === finalPlayerScores[1].score
                }
              />
              {numOfPlayers > 2 && (
                <ResultTab
                  text={`Player ${finalPlayerScores[2].player}`}
                  result={`${finalPlayerScores[2].score} Pairs`}
                />
              )}
              {numOfPlayers === 4 && (
                <ResultTab
                  text={`Player ${finalPlayerScores[3].player}`}
                  result={`${finalPlayerScores[3].score} Pairs`}
                />
              )}
            </div>
            <div className="w-full flex flex-col gap-3">
              <Button
                activeColor="bg-orange"
                isActive={true}
                onClick={handlePlayAgain}
                text="Play Again"
              />
              <Button
                isActive={true}
                onClick={handleRestartGame}
                text="Setup New Game"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
