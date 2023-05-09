import { useState } from "react";
import GoBackBtn from "./GoBackBtn";
import PopUpMenuBtn from "./PopUpMenuBtn";
import Questionmark from "./Questionmark";
import SmallLogo from "./SmallLogo";
import PopUp from "./PopUp";
import PopUpMenu from "./PopUpMenu";
import GoBtn from "./GoBtn";
import Gang from "../maya/Gang_uten.png";
import Task1 from "./Task1";
import Task2 from "./Task2";
import Hint from "./Hint";
import HintBubble from "./HintBubble";

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

  let hintInfo = "Se på innsiden av skapdøra"


  const [answers, setAnswers] = useState([false, false, false, false, false])
  const [answerMessage, setAnswerMessage] = useState("")
  const [currentTask, setCurrentTask] = useState(1)

  function handleClick(){
    if (currentTask === 1 && !answers[0] && answers[1] && !answers[2] && !answers[3] && answers[4]){
      setAnswerMessage("Riktig svar!")
    } else if (answers.includes(true)){
      setAnswerMessage("Feil svar!")
    }
  }

  function nextTask(){
    if (answerMessage === "Riktig svar!"){
    setCurrentTask(currentTask+1)
    setAnswerMessage("")
  }
  }

  function tryAgain(){
    setAnswerMessage("")
  }


  return(
    <>
      <SmallLogo />
      <nav>
        <PopUpMenuBtn togglePopMenu={togglePopMenu} activeMenu={activeMenu} setActiveMenu={setActiveMenu}/>
        <PopUpMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu}/>
        <Questionmark togglePopUp={togglePopUp} active={active} setActive={setActive}/>
        <PopUp info={info} active={active} togglePopUp={togglePopUp}/>
      </nav>
      <div className="row-div">
        <div id="taskbubbles"> 
        <h2 id="current-task">Oppgave {currentTask}</h2>
        {currentTask === 1 ? <Task1 answers={answers} answerMessage={answerMessage} setAnswers={setAnswers}/> : null}
        {currentTask === 2 ? <Task2 answers={answers} answerMessage={answerMessage} setAnswers={setAnswers}/> : null}
          <GoBtn answerMessage={answerMessage} go={answerMessage === "Feil svar!" ? "Prøv igjen" : "Gå til neste oppgave"} nextTask={nextTask} tryAgain={tryAgain}/>
        </div>
        <div className="column-div">
          <img src={Gang} id="gang" width="680px" height="auto" alt="ScriptOut gang"/>
          <Hint toggleHint={toggleHint} answerMessage={answerMessage}/>
          <HintBubble hintInfo={hintInfo} hint={hint} toggleHint={toggleHint} answerMessage={answerMessage}/>
        </div>
      </div>
      <div className="buttons">
        <GoBackBtn />
        <GoBtn handleClick={handleClick} go="Svar"/>
      </div>
    </>
  )
}