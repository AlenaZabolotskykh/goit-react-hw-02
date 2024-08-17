export default function Options({ children, updateFeedback, resetFeedback }) {
  return (
    <>
      <button onClick={updateFeedback || resetFeedback}>{children}</button>
    </>
  );
}
