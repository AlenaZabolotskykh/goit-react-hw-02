export default function Feedback({ clicks, totalFeedback }) {
  return (
    <div>
      <p>Good: {clicks.good}</p>
      <p>Neutral: {clicks.neutral}</p>
      <p>Bad: {clicks.bad}</p>
      <p>Total:{totalFeedback}</p>
    </div>
  );
}
