export default function Feedback({ clicks }) {
  return (
    <div>
      <p>Good: {clicks.good}</p>
      <p>Neutral: {clicks.neutral}</p>
      <p>Bad: {clicks.bad}</p>
    </div>
  );
}
