interface ButtonProps {
  activeColor?: string;
  text: string;
  onClick: () => void;
  isActive: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  activeColor = "bg-dark-gray",
  text,
  onClick,
  isActive,
}) => {
  return (
    <button
      className={`${
        isActive ? activeColor : "bg-light-blue"
      } text-light font-bold text-3xl rounded-full w-full py-3 hover:bg-mid-blue drop-shadow-sm`}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {text}
    </button>
  );
};
