interface ResultTabProps {
  text: string;
  result: string | number;
  isDark?: boolean;
}

export const ResultTab: React.FC<ResultTabProps> = ({
  text,
  result,
  isDark = false,
}) => {
  return (
    <div
      className={`flex justify-between items-center w-full ${
        isDark ? "bg-dark-blue text-light" : "bg-light-blue text-dark-blue"
      } rounded-lg p-4 text-light`}
    >
      <p className="font-bold">{text}</p>
      <p className="font-bold text-2xl">{result}</p>
    </div>
  );
};
