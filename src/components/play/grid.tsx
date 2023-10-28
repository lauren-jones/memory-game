import { tileData } from "../../types/tileData";
import { Tile } from "./tile";

interface GridProps {
  gridSize: number;
  gameGrid: tileData[];
  handleSelectTile: (selectedTile: tileData, selectedTileIndex: number) => void;
}

export const Grid: React.FC<GridProps> = ({
  gridSize,
  gameGrid,
  handleSelectTile,
}) => {
  return (
    <div
      className={`grid ${
        gridSize === 16 ? "grid-cols-4" : "grid-cols-6"
      } w-[330px] h-[330px] md:w-[510px] md:h-[510px] gap-2`}
    >
      {gameGrid.map((tileData, index) => (
        <Tile
          index={index}
          data={tileData}
          handleSelectTile={handleSelectTile}
        />
      ))}
    </div>
  );
};
