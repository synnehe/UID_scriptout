import { useState } from "react"

export default function TaskButton({taskbutton, answers, setAnswers, index}) {
  //const [answers, setAnswers] = useState([false, false, false, false, false])
  const [btnClass, setBtnClass] = useState("taskbutton")

  function toggleAnswer(i) {
    let updatedAnswers = []

    updatedAnswers = [...answers] ? updatedAnswers = answers : updatedAnswers = [...answers] 
    updatedAnswers[i] ? updatedAnswers[i] = false : updatedAnswers[i] = true; 
   
    setAnswers(updatedAnswers)

    toggleBtnClass(i)
  }

  function toggleBtnClass(i){
    answers[i] ? setBtnClass("chosen-taskbutton") : setBtnClass("taskbutton")
    console.log(answers)
  }

  return(
    <button onClick={() => toggleAnswer(index)} className={btnClass}>{taskbutton}</button>
  )
}
/**setAnswers((prevState) => {
      prevState[i]? answers.splice(i, 1, false) : answers.splice(i, 1, true)
    }) */