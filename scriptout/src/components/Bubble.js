export default function Bubble({taskText, answerMessage, hideBubble}) {
  return(
    <div className={hideBubble === true ? "hidden" : "task-bubble"}>
      <p>{taskText}</p>
    </div>
  )
}

/* 
* Boks som blir gjenbrukt i oppgavene, inneholder tekst 
* Brukes i komponentene Task1 og Task2
*/