import Bubble from "./Bubble";
import TaskButton from "./TaskButton";

export default function Task1({answers, setAnswers, answerMessage, hideBubble}) {

  const taskAlternatives = [
    "Du legger merke til at noen av trappetrinnene er for ødelagte til å gå på.", 
    "const trinn1 = 'knirkende trinn'", 
    "let trinn2 = 'trinn med skader'",
    "const trinn3 = 'trinn med flekk på'",
    "const trinn4 = 'trinn som ser ubrukt ut'",
    "let trinn5 = 'trinn med en manglende treplate'",
    "Velg de trinnene som kan fikses"
  ]

  return(
    <>
    <Bubble hideBubble={hideBubble} taskText={answerMessage === ""? "Forklaring: En variabel kan deklareres med enten let, const eller var. Ved bruk av let kan man alltid endre verdien til variabelen senere. Om du bruker const derimot, kan verdien aldri endres. Dette er en sikkerhet hvis du vet at du ikke kommer til å ønske å endre verdien på noe, så det ikke skjer ved uhell." : null}/>
    <Bubble hideBubble={hideBubble} answerMessage={answerMessage} taskText={answerMessage === "" ? 
    taskAlternatives.map((p) => (<p className="task-alternatives">{p}</p>)) : null}/>
    <h2 className={answerMessage === "Riktig svar!" ? "correct-answer" : answerMessage === "Feil svar!" ? "false-answer" : null}>{answerMessage === "" ? null : answerMessage}</h2>
    <div className={answerMessage === "" ? "row-div" : "hidden"}>
      {answers.map((answer, index) => 
      (<TaskButton answers={answers} setAnswers={setAnswers} key={index} index={index} 
      id={"taskBtn" + index} taskbutton={"Trappetrinn " + (index + 1)}/>))}
    </div>
    </>
  )
}

/*
* Inneholder informasjon og svarknapper til oppgave 1
* Blir brukt i komponentet TaskPage
*/