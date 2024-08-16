export default function Feedback({ clicks, totalFeedback, positiveFeedback }) {
  return (
    <div>
      <p>Good: {clicks.good}</p>
      <p>Neutral: {clicks.neutral}</p>
      <p>Bad: {clicks.bad}</p>
      <p>Total:{totalFeedback}</p>
      <p>Positive:{positiveFeedback}</p>
    </div>
  );
}
