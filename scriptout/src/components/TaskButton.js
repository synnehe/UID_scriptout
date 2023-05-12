import { useState } from "react"

export default function TaskButton({taskbutton, answers, setAnswers, index}) {
  const [btnClass, setBtnClass] = useState("taskbutton")

  function toggleAnswer(i) {
    let updatedAnswers = []

      updatedAnswers = [answers] ? updatedAnswers = answers : updatedAnswers = [...answers] 
      updatedAnswers[i] ? updatedAnswers[i] = false : updatedAnswers[i] = true; 
   
    setAnswers(updatedAnswers)
    // Kilder: Fått hjelp av foreleser Tore-Marius til funksjon av svar-alternativ knapper.
    // Også fått hjelp av chatGPT til å oppdatere updatedAnswers på bestemt index til true eller false

    toggleBtnClass(i) 
  }

  function toggleBtnClass(i){
    answers[i] ? setBtnClass("chosen-taskbutton") : setBtnClass("taskbutton")
    console.log(answers)
  }

  return(
    <button type="button" onClick={() => toggleAnswer(index)} className={btnClass}>{taskbutton}</button>
  )
}