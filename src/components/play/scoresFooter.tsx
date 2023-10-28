import { MultiPlayerScore } from "./multiPlayerScore";
import { SoloGameScore } from "./soloGameScore";

interface ScoresFooterProps {
  numOfPlayers: number;
  multiPlayerScores: number[];
  soloPlayerTurns: number;
  soloPlayerTimer: number;
  playerTurn: number;
  setSoloPlayerTimer: (soloPlayerTime: number) => void;
  isTimerOn: boolean;
}

export const ScoresFooter: React.FC<ScoresFooterProps> = ({
  numOfPlayers,
  multiPlayerScores,
  soloPlayerTurns,
  soloPlayerTimer,
  playerTurn,
  setSoloPlayerTimer,
  isTimerOn,
}) => {
  return (
    <div className="w-full">
      {numOfPlayers === 1 && (
        <SoloGameScore
          soloPlayerMoves={soloPlayerTurns}
          soloPlayerTimer={soloPlayerTimer}
          setSoloPlayerTimer={setSoloPlayerTimer}
          isTimerOn={isTimerOn}
        />
      )}

      <div className="w-full flex justify-between items-center gap-2 md:gap-4">
        {numOfPlayers > 1 && (
          <MultiPlayerScore
            playerNumber={1}
            playerScore={multiPlayerScores[0]}
            isActive={playerTurn === 1}
          />
        )}
        {numOfPlayers >= 2 && (
          <MultiPlayerScore
            playerNumber={2}
            playerScore={multiPlayerScores[1]}
            isActive={playerTurn === 2}
          />
        )}
        {numOfPlayers >= 3 && (
          <MultiPlayerScore
            playerNumber={3}
            playerScore={multiPlayerScores[2]}
            isActive={playerTurn === 3}
          />
        )}
        {numOfPlayers === 4 && (
          <MultiPlayerScore
            playerNumber={4}
            playerScore={multiPlayerScores[3]}
            isActive={playerTurn === 4}
          />
        )}
      </div>
    </div>
  );
};
