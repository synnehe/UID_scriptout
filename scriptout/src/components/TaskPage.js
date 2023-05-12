import { useState } from "react";
import GoBackBtn from "./GoBackBtn";
import PopUpBtn from "./PopUpBtn";
import PopUp from "./PopUp";
import PopUpMenu from "./PopUpMenu";
import GoBtn from "./GoBtn";
import Gang from "../maya/Gang_uten.png";
import Task1 from "./Task1";
import Task2 from "./Task2";
import Hint from "./Hint";
import HintBubble from "./HintBubble";
import Logo from "./Logo";

export default function TaskPage() {

  const info = "Les introen og svar på oppgaven"

  const [active, setActive] = useState(false)

  const togglePopUp = () => {
    setActive(!active)
    console.log(active)
  }

  const [activeMenu, setActiveMenu] = useState(false)

  const togglePopMenu = () => {
      setActiveMenu(!activeMenu)
  }
  
  const [hint, setHint] = useState(false)

  const toggleHint = () => {
      setHint(!hint)
  }


  const [answers, setAnswers] = useState([false, false, false, false, false])
  const [answerMessage, setAnswerMessage] = useState("")
  const [currentTask, setCurrentTask] = useState(1)
  const [task2Answer, setTask2Answer] = useState("")

  const [hideBubble, setHideBubble] = useState(false)

  function handleClick(){
    console.log(task2Answer)
    setHideBubble(true)
    if (currentTask === 1 && !answers[0] && answers[1] && !answers[2] && !answers[3] && answers[4]){
      setAnswerMessage("Riktig svar!")
    } else if (answers.includes(true) && currentTask === 1){
      setAnswerMessage("Feil svar!")
    } else if (task2Answer === "printName" && currentTask === 2){
      setAnswerMessage("Riktig svar!")
    } else if (currentTask === 2 && task2Answer !== "printName"){
      setAnswerMessage("Feil svar!")
    }
  }

  function nextTask(){
    if (answerMessage === "Riktig svar!"){
      setCurrentTask(currentTask+1)
      setAnswerMessage("")
      updateHint()
      setHideBubble(false)
    }
  }

  const hintInfo1 = "Se på innsiden av skapdøra"
  const hintInfo2 = "På døra er det skrapet inn et symbol"

  const [hintInfo, setHintInfo] = useState(hintInfo1)

  function updateHint() {
    if (currentTask === 2){
      setHintInfo(hintInfo2)
      setAnswerMessage("")
    }
    console.log(currentTask)

  }

  function tryAgain(){
    setAnswerMessage("")
    setHideBubble(false)
  }

  return(
    <>
      <Logo logo="small"/>
      <nav>
        <PopUpBtn btn="1" toggle={togglePopMenu} activeMenu={activeMenu} setActiveMenu={setActiveMenu}/>
        <PopUpMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu}/>
        <PopUpBtn btn="2" toggle={togglePopUp} active={active} setActive={setActive}/>
        <PopUp info={info} active={active} togglePopUp={togglePopUp}/>
      </nav>
      <div className="row-div">
        <div id="taskbubbles"> 
        <h2 id="current-task">Oppgave {currentTask}</h2>
        {currentTask === 1 ? <Task1 answers={answers} answerMessage={answerMessage} setAnswers={setAnswers} hideBubble={hideBubble}/> : null}
        {currentTask === 2 ? <Task2 task2Answer={task2Answer} answerMessage={answerMessage} setTask2Answer={setTask2Answer} hideBubble={hideBubble}/> : null}
          <GoBtn currentTask={currentTask} answerMessage={answerMessage} go={answerMessage === "Feil svar!" ? "Prøv igjen" : "Gå til neste oppgave"} nextTask={nextTask} tryAgain={tryAgain}/>
        </div>
        <div className="column-div">
          <img src={Gang} id="gang" width="680px" height="auto" alt="ScriptOut rom 1"/>
          <div id="div-test">
            <Hint toggleHint={toggleHint} answerMessage={answerMessage}/>
            <HintBubble hintInfo={hintInfo} hint={hint} toggleHint={toggleHint} answerMessage={answerMessage}/>
          </div>
        </div>
      </div>
      <div className="buttons">
        <GoBackBtn />
        <GoBtn handleClick={handleClick} go="Svar"/>
      </div>
    </>
  )
}