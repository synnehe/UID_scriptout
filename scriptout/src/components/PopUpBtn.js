export default function PopUpBtn({toggle, btn}) {

  console.log(btn)
  return(
    <button id={btn === "1" ? "pop-up-menu" : "questionmark"} onClick={toggle}><i className={btn === "1" ? "bi bi-list" : "bi bi-question-lg"}></i></button>
  )
}