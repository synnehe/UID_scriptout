import Bubble from "./Bubble";

export default function Task2({answers, setAnswers, answerMessage}) {
  return(
    <>
    <Bubble taskText={answerMessage === ""? "Forklaring:" : null}/>
    <Bubble answerMessage={answerMessage} taskText={answerMessage === "" ? 'bla bla...' : answerMessage}/>
    <div className={answerMessage === "" ? "row-div" : "hidden"}>
    </div>
    </>
  )
}