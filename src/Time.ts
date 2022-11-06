import React from "react";

export const useClock = () => {
  const [date, setDate] = React.useState(new Date());

  //Replaces componentDidMount and componentWillUnmount
  React.useEffect(() => {
    const timerID = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  });

  return date;
};
