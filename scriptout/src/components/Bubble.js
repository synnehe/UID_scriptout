export default function Bubble({taskText, answerMessage, hideBubble}) {
  return(
   // <div className={!taskText || answerMessage === "Feil svar!" ? "hidden" : "task-bubble"}>
    <div className={hideBubble === true ? "hidden" : "task-bubble"}>
      <p>{taskText}</p>
    </div>
  )
}