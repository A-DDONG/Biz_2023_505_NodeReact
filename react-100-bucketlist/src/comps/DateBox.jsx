import { useEffect, useState } from "react";

const DateBox = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      {currentDateTime.toLocaleDateString()}{" "}
      {currentDateTime.toLocaleTimeString()}
    </div>
  );
};

export default DateBox;
