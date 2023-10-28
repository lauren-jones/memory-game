import { gameSetup } from "../../types/gameSetup";
import { Button } from "./button";
import { Title } from "./title";

interface StartViewProps {
  setGameSetup: (gameSetup: gameSetup) => void;
  gameSetup: gameSetup;
  handleStartGame: (gameSetup: gameSetup) => void;
}

export const StartView: React.FC<StartViewProps> = ({
  setGameSetup,
  gameSetup,
  handleStartGame,
}) => {
  return (
    <div className="p-4 md:p-0 w-full h-full bg-dark-blue flex flex-col items-center justify-center">
      <h1 className="text-light font-bold text-5xl mb-10">memory</h1>
      <div className="w-full md:w-[655px] bg-light h-[560px] rounded-xl p-5 md:p-10 flex flex-col justify-center gap-8">
        <div className="w-full">
          <Title text="Select Theme" />
          <div className="flex w-full gap-3 md:gap-8">
            <Button
              text="Numbers"
              isActive={gameSetup.isNumbersTheme}
              onClick={() =>
                setGameSetup({ ...gameSetup, isNumbersTheme: true })
              }
            />
            <Button
              text="Icons"
              isActive={!gameSetup.isNumbersTheme}
              onClick={() =>
                setGameSetup({ ...gameSetup, isNumbersTheme: false })
              }
            />
          </div>
        </div>
        <div className="w-full">
          <Title text="Number of Players" />
          <div className="flex w-full gap-3 md:gap-8">
            <Button
              text="1"
              isActive={gameSetup.numOfPlayers === 1}
              onClick={() => setGameSetup({ ...gameSetup, numOfPlayers: 1 })}
            />
            <Button
              text="2"
              isActive={gameSetup.numOfPlayers === 2}
              onClick={() => setGameSetup({ ...gameSetup, numOfPlayers: 2 })}
            />
            <Button
              text="3"
              isActive={gameSetup.numOfPlayers === 3}
              onClick={() => setGameSetup({ ...gameSetup, numOfPlayers: 3 })}
            />
            <Button
              text="4"
              isActive={gameSetup.numOfPlayers === 4}
              onClick={() => setGameSetup({ ...gameSetup, numOfPlayers: 4 })}
            />
          </div>
        </div>
        <div className="w-full">
          <Title text="Grid Size" />
          <div className="flex w-full gap-3 md:gap-8">
            <Button
              text="4x4"
              isActive={gameSetup.gridSize === 16}
              onClick={() => setGameSetup({ ...gameSetup, gridSize: 16 })}
            />
            <Button
              text="6x6"
              isActive={gameSetup.gridSize === 36}
              onClick={() => setGameSetup({ ...gameSetup, gridSize: 36 })}
            />
          </div>
        </div>
        <Button
          text="Start Game"
          activeColor="bg-orange"
          isActive={true}
          onClick={() => handleStartGame(gameSetup)}
        />
      </div>
    </div>
  );
};
