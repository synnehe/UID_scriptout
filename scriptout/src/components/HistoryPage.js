import { Link } from "react-router-dom";
import GoBackBtn from "./GoBackBtn";
import GoBtn from "./GoBtn";
import PopUp from "./PopUp";
import { useState } from "react";
import PopUpMenu from "./PopUpMenu";
import PopUpBtn from "./PopUpBtn";
import Logo from "./Logo";

export default function HistoryPage() {
  const info = "Her får du presentert backstoryen til spillet. Klikk gå videre for å gå til første rom"

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
      <h2>Spillets historie</h2>
      <p>Velkommen til ScriptOut! Det var en gang en lærer som hadde et hellig samlingshefte
         av koder og løsninger som han hadde jobbet med over lang tid, men dessverre døde han 
         i huset sitt i januar 2023. Samlingen forsvant med ham, men det sies at hans spøkelse 
         hjemsøker huset, på leting etter den hellige samlingen sin. Det blir din jobb å gi ham 
         ro og finne disse kode-delene som er spredt rundt i huset. Sammen med brettspillet kan 
         du løse oppgavene i de 6 forskjellige rommene i huset. Bruk hintene og løs de mange 
         kodemysteriene som befinner seg i huset. Script deg ut av det hjemsøkte huset før all 
         kunnskap går tapt. Lykke til! </p>
    </article>
    <div className="buttons">
      <GoBackBtn />
      <Link to="/info"><GoBtn go="Gå videre" /></Link>
    </div>
    </body>
  )
}