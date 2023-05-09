export default function GoBtn({go, handleClick, answerMessage, nextTask, tryAgain}) {
  return(
    <button className={answerMessage === "" ? "hidden" : "btn"} id="go-btn" onClick={answerMessage === "Riktig svar!" ? nextTask : answerMessage === "Feil svar!" ? tryAgain : handleClick}>{go}</button>
  )
}