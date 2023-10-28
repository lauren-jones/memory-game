interface TitleProps {
  text: string;
}

export const Title: React.FC<TitleProps> = ({ text }) => {
  return <h2 className="text-light-gray font-bold text-lg mb-3">{text}</h2>;
};
