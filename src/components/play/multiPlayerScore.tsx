interface MultiPlayerScoreProps {
  playerNumber: number;
  playerScore: number;
  isActive: boolean;
}

export const MultiPlayerScore: React.FC<MultiPlayerScoreProps> = ({
  playerNumber,
  playerScore,
  isActive,
}) => {
  return (
    <div className="w-full flex flex-col items-center">
      <div
        className={`bg-orange w-0 h-0 border-l-[10px] border-l-light border-b-[15px] ${
          isActive ? "border-b-orange" : "border-b-light"
        } border-r-[10px] border-r-light`}
      ></div>
      <div
        className={`${
          isActive ? "bg-orange" : "bg-light-blue"
        } flex justify-between items-center w-full p-4 rounded-xl flex-col md:flex-row `}
      >
        <p
          className={`${
            isActive ? "text-light" : "text-dark-gray"
          } font-bold hidden md:block`}
        >
          Player {playerNumber}
        </p>
        <p
          className={`${
            isActive ? "text-light" : "text-dark-gray"
          } font-bold block md:hidden`}
        >
          P{playerNumber}
        </p>
        <p
          className={`${
            isActive ? "text-light" : "text-dark-gray"
          } font-bold text-3xl`}
        >
          {playerScore}
        </p>
      </div>
    </div>
  );
};
