export default function Options({ children, updateFeedback }) {
  return (
    <>
      <button onClick={updateFeedback}>{children}</button>
    </>
  );
}
