export default function PopUp({hintInfo, hint, toggleHint, answerMessage}) {

  return(
    <article id="hint-bubble" className={answerMessage === "Riktig svar!" || answerMessage === "Feil svar!" ? "hidden" : hint ? null : "hidden"}>
      <button type="button" id="pop-up-btn" onClick={toggleHint}>
        <i className="bi bi-x"></i>
      </button>
      <p>{hintInfo}</p>
    </article>
  )
}

/*
* Pop-up av å trykke på hint knappen
* Brukes i komponentet TaskPage
*/