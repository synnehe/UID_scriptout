import { useState } from "react"

export default function TaskButton({taskbutton, answers, setAnswers, index}) {
  // State som bestemmer className på svarknapper
  const [btnClass, setBtnClass] = useState("taskbutton")

  // Funksjon som oppdaterer verdien på en bestemt index i arrayen i useStaten "answers" ved klikk, basert på index fra knapp
  function toggleAnswer(i) {
    let updatedAnswers = []

      updatedAnswers = [answers] ? updatedAnswers = answers : updatedAnswers = [...answers] 
      updatedAnswers[i] ? updatedAnswers[i] = false : updatedAnswers[i] = true; 
   
    setAnswers(updatedAnswers)
    // Kilder: Fått hjelp av foreleser Tore-Marius til funksjon av svar-alternativ knapper.
    // Også fått hjelp av chatGPT til å oppdatere updatedAnswers på bestemt index til true eller false

    toggleBtnClass(i) 
  }

  // Funksjon som setter staten btnClass ved klikk på knapp, basert på index
  function toggleBtnClass(i){
    answers[i] ? setBtnClass("chosen-taskbutton") : setBtnClass("taskbutton")
    console.log(answers)
  }

  return(
    <button type="button" onClick={() => toggleAnswer(index)} className={btnClass}>{taskbutton}</button>
  )
}

/*
* Knapp som endrer verdiene i useStaten "answers" ved klikk, basert på index
* Blir brukt i komponentet Task1
*/