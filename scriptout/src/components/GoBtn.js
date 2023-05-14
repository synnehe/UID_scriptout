export default function GoBtn({go, handleClick, answerMessage, nextTask, tryAgain, currentTask}) {
  return(
    <button type="button" className={answerMessage === "" ? "hidden" : "btn"} id="go-btn" onClick={currentTask === 2 && answerMessage === "Riktig svar!" ? null : answerMessage === "Riktig svar!" ? nextTask : answerMessage === "Feil svar!" ? tryAgain : handleClick}>{go}</button>
  )
}

/*
* Knapp som blir brukt for å gå videre til neste side 
* Satt en sperre etter oppgave 2 så man ikke kan gå videre til oppgave 3 ettersom den ikke har blitt laget enda. 
* Brukes i komponentene HistoryPage, InfoPage og TaskPage
*/