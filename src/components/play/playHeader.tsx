interface PlayHeaderProps {
  handleRestartGame: () => void;
}

export const PlayHeader: React.FC<PlayHeaderProps> = ({
  handleRestartGame,
}) => {
  return (
    <div className="w-full flex justify-between items-center">
      <h1 className="text-dark-blue font-bold text-3xl">memory</h1>
      <button
        className="bg-orange rounded-full text-light font-bold px-5 py-3 hover:bg-mid-blue"
        onClick={(e) => {
          e.preventDefault();
          handleRestartGame();
        }}
      >
        Restart Game
      </button>
    </div>
  );
};
