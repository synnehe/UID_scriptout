import Bubble from "./Bubble";

export default function Task2({answerMessage, setTask2Answer, hideBubble}) {

  const forklaring = "Scope er et avgrenset område med en start og en slutt. Det finnes ulike scope innenfor programmering, for eksempel et HTML dokument, eller en funksjon. I hvilket scope du deklarerer variabler og funksjoner vil bestemme hvor disse er tilgjengelige."

  const task = [
    "Her finner du en kodebit. Skriv navnet på funksjonen der name er tilgjengelig.",
    " ",
    "let count = 2",
    " ",
    "function increaseCount(){",
    "count++",
    "}",
    " ",
    "function printName(){",
    "const name = 'Pål Askeladden'",
    "console.log(name)",
    "}",
    " ",
    "console.log(count)",
  ]

  // Funksjon som endrer på staten task2Answer basert på verdien til svarfeltet
  function updateAnswer(){
    setTask2Answer(document.getElementById("svar-input").value)
  }

  return(
    <>
    <Bubble hideBubble={hideBubble} taskText={answerMessage === ""? `Forklaring: ${forklaring}`: null}/>
    <Bubble hideBubble={hideBubble} answerMessage={answerMessage} taskText={answerMessage === "" ? task.map((t) => (<p className="task-alternatives">{t}</p>)) : answerMessage}/>
    <h2 className={answerMessage === "Riktig svar!" ? "correct-answer" : answerMessage === "Feil svar!" ? "false-answer" : null}>{answerMessage === "" ? null : answerMessage}</h2>
    <textarea id="svar-input" placeholder="Ditt svar her..." onChange={updateAnswer} className={answerMessage === "" ? null : "hidden"}/>
    </>
  )
}

/*
* Inneholder informasjon og svarfelt til oppgave 2
* Blir brukt i komponentet TaskPage
*/