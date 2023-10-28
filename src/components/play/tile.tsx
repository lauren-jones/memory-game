import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { tileData } from "../../types/tileData";

interface TileProps {
  index: number;
  data: tileData;
  handleSelectTile: (tile: tileData, index: number) => void;
}

export const Tile: React.FC<TileProps> = ({
  index,
  data,
  handleSelectTile,
}) => {
  const { content, isMatched, isSelected } = data;

  return (
    <button
      key={index}
      onClick={(e) => {
        e.preventDefault();
        handleSelectTile(data, index);
      }}
      disabled={isSelected || isMatched}
      className={`${
        isMatched
          ? "bg-light-blue text-light"
          : isSelected
          ? "bg-orange text-light"
          : "bg-dark-gray text-dark-gray"
      } ${
        !isSelected && !isMatched ? "hover:bg-mid-blue hover:text-mid-blue" : ""
      } flex justify-center items-center rounded-full w-full font-bold text-2xl md:text-4xl`}
    >
      {typeof content === "number" ? (
        content
      ) : (
        <FontAwesomeIcon icon={content} />
      )}
    </button>
  );
};
