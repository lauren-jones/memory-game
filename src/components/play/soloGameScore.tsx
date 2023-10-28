import { Timer } from "./timer";

interface SoloGameScoreProps {
  soloPlayerMoves: number;
  soloPlayerTimer: number;
  setSoloPlayerTimer: (soloPlayerTimer: number) => void;
  isTimerOn: boolean;
}

export const SoloGameScore: React.FC<SoloGameScoreProps> = ({
  soloPlayerMoves,
  soloPlayerTimer,
  setSoloPlayerTimer,
  isTimerOn,
}) => {
  return (
    <div className="flex w-full md:w-5/6 m-auto justify-center items-center gap-4">
      <div className="flex w-full bg-light-blue p-4 rounded-xl justify-between items-center">
        <p className="font-bold text-dark-gray">Time</p>
        <p className="font-bold text-2xl text-dark-blue">
          <Timer
            soloPlayerTimer={soloPlayerTimer}
            setSoloPlayerTimer={setSoloPlayerTimer}
            isTimerOn={isTimerOn}
          />
        </p>
      </div>
      <div className="flex w-full bg-light-blue p-4 rounded-xl justify-between items-center">
        <p className="font-bold text-dark-gray">Moves</p>
        <p className="font-bold text-2xl text-dark-blue">{soloPlayerMoves}</p>
      </div>
    </div>
  );
};
