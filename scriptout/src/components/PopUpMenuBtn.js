export default function PopUpMenuBtn({togglePopMenu}) {
  return(
    <button id="pop-up-menu" onClick={togglePopMenu}><i className="bi bi-list"></i></button>
  )
}