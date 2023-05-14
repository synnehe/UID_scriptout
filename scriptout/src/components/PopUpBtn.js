export default function PopUpBtn({toggle, btn}) {
  return(
    <button type="button" alt={btn === "1" ? "Pop up meny" : "Info"} id={btn === "1" ? "pop-up-menu" : "questionmark"} onClick={toggle}><i className={btn === "1" ? "bi bi-list" : "bi bi-question-lg"}></i></button>
  )
}

/*
* Knapp for pop-up menu og pop-up info, toggler disse.
* Brukes i komponentene HistoryPage, InfoPage, IntroPage, SettingsPage, TaskPage og TheoryPage
*/