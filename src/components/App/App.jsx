import { useState, useEffect } from "react";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";
import "./App.css";

export default function App() {
  const [clicks, setClicks] = useState(() => {
    const savedClicks = window.localStorage.getItem("all-clicks");

    if (savedClicks !== null) {
      return JSON.parse(savedClicks);
    }
    return { good: 0, neutral: 0, bad: 0 };
  });

  const updateFeedback = (feedbackType) => {
    setClicks((prevClicks) => ({
      ...prevClicks,
      [feedbackType]: prevClicks[feedbackType] + 1,
    }));
  };

  useEffect(() => {
    window.localStorage.setItem("all-clicks", JSON.stringify(clicks));
  }, [clicks]);

  const resetFeedback = () => {
    setClicks({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = clicks.good + clicks.neutral + clicks.bad;
  const positiveFeedback = Math.round((clicks.good / totalFeedback) * 100);

  return (
    <>
      <Description />
      <Options updateFeedback={() => updateFeedback("good")}> {"Good"}</Options>
      <Options updateFeedback={() => updateFeedback("neutral")}>
        {"Neutral"}
      </Options>
      <Options updateFeedback={() => updateFeedback("bad")}>{"Bad"} </Options>
      {totalFeedback > 0 && (
        <Options resetFeedback={resetFeedback}>{"Reset"} </Options>
      )}
      {totalFeedback > 0 ? (
        <Feedback
          clicks={clicks}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}
