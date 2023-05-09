export default function Bubble({taskText, answerMessage}) {
  return(
    <div className={taskText ? "task-bubble" : "hidden"}>
      <p>{taskText}</p>
    </div>
  )
}