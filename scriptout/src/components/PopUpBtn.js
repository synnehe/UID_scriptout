export default function PopUpBtn({toggle, btn}) {
  return(
    <button type="button" alt={btn === "1" ? "Pop up meny" : "Info"} id={btn === "1" ? "pop-up-menu" : "questionmark"} onClick={toggle}><i className={btn === "1" ? "bi bi-list" : "bi bi-question-lg"}></i></button>
  )
}