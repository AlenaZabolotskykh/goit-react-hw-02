import { useState } from "react";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import "./App.css";

export default function App() {
  const [clicks, setClicks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (feedbackType) => {
    setClicks((prevClicks) => ({
      ...prevClicks,
      [feedbackType]: prevClicks[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setClicks({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <>
      <Description />
      <Options updateFeedback={() => updateFeedback("good")}> {"Good"}</Options>
      <Options updateFeedback={() => updateFeedback("neutral")}>
        {"Neutral"}
      </Options>
      <Options updateFeedback={() => updateFeedback("bad")}>{"Bad"} </Options>
      <Options updateFeedback={resetFeedback}>{"Reset"} </Options>
      <Feedback clicks={clicks} />
    </>
  );
}
