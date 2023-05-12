export default function Hint({toggleHint, answerMessage}) {
  return(
    <button type="button" id="hint-btn" className={answerMessage === "" ? "btn" : "hidden"} onClick={toggleHint}>Hint</button>
  )
}