export default function Questionmark({togglePopUp}) {

  return(
    <>
    <button id="questionmark" onClick={togglePopUp}><i className="bi bi-question-lg"></i></button>
    </>
  )
}