import GoBackBtn from "./GoBackBtn";
import GoBtn from "./GoBtn";
import { Link } from "react-router-dom";
import { useState } from "react";
import PopUp from "./PopUp";
import PopUpMenu from "./PopUpMenu";
import PopUpBtn from "./PopUpBtn";
import Logo from "./Logo";

export default function InfoPage() {

  const info = "Her får du informasjon til rom 1 og temaet variabler. Klikk start for å gå til oppgave 1"

  const [active, setActive] = useState(false)

  const togglePopUp = () => {
    setActive(!active)
    console.log(active)
  }

  const [activeMenu, setActiveMenu] = useState(false)

  const togglePopMenu = () => {
      setActiveMenu(!activeMenu)
  }

  return(
    <body>
    <Logo logo="small"/>
    <nav>
      <PopUpBtn btn="1" toggle={togglePopMenu} activeMenu={activeMenu} setActiveMenu={setActiveMenu}/>
      <PopUpMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu}/>
      <PopUpBtn btn="2" toggle={togglePopUp} active={active} setActive={setActive}/>
      <PopUp info={info} active={active} togglePopUp={togglePopUp}/>
    </nav>
    <article className="article">
      <h2>Rom 1: Variabler</h2>
      <p>Du har ankommet huset, og letingen kan starte! I dette første rommet 
        skal du finne kodebitene om temaet variabler, som er et viktig grunnleggende 
        tema i Javascript. God koding! 
      </p>
    </article>
    <div className="buttons">
      <GoBackBtn />
      <Link to="/oppgave"><GoBtn go="START"/></Link>
    </div>
    </body>
  )
}