export default function PopUp({info, active, togglePopUp}) {

  return(
    <article id="pop-up" className={active ? null : "hidden"}>
      <button type="button" id="pop-up-btn" onClick={togglePopUp}>
        <i className="bi bi-x"></i>
      </button>
      <p>{info}</p>
    </article>
  )
}