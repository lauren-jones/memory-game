import { useEffect } from "react";

interface TimerProps {
  soloPlayerTimer: number;
  setSoloPlayerTimer: (soloPlayerTimer: number) => void;
  isTimerOn: boolean;
}

export const Timer: React.FC<TimerProps> = ({
  soloPlayerTimer,
  setSoloPlayerTimer,
  isTimerOn,
}) => {
  useEffect(() => {
    if (isTimerOn) {
      const time = setTimeout(() => {
        let currentTime = soloPlayerTimer;
        setSoloPlayerTimer((currentTime += 1));
      }, 1000);

      return () => {
        clearTimeout(time);
      };
    }
  }, [soloPlayerTimer]);

  return <>{soloPlayerTimer}</>;
};
