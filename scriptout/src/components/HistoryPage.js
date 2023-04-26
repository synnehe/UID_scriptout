import { Link } from "react-router-dom";
import GoBackBtn from "./GoBackBtn";
import PopUpMenuBtn from "./PopUpMenuBtn";
import Questionmark from "./Questionmark";
import SmallLogo from "./SmallLogo";
import GoBtn from "./GoBtn";
import PopUp from "./PopUp";
import { useState } from "react";
import PopUpMenu from "./PopUpMenu";

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
    <SmallLogo />
    <nav>
      <PopUpMenuBtn togglePopMenu={togglePopMenu} activeMenu={activeMenu} setActiveMenu={setActiveMenu}/>
      <PopUpMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu}/>
      <Questionmark togglePopUp={togglePopUp} active={active} setActive={setActive}/>
      <PopUp info={info} active={active} togglePopUp={togglePopUp}/>
    </nav>
    <article className="article">
      <h2>Spillets historie</h2>
      <p>“Velkommen til ScriptOut-hotellet! Det var en gang en lærer som besøkte oss i år 2022. Han hadde med seg et hellig samlingshefte av koder og løsninger, men dessverre døde han på hotellet i Januar 2023. Samlingen forsvant med han, men det sies at hans spøkelse fremdeles leter på hotellet. 

          Det blir din jobb å gi han ro og finne disse kode-delene som er spredt rundt på hotellet. Sammen med brettspillet kan du løse oppgavene i de 6 forskjellige rommene i hotellet. Bruk hintene og løs de mange kode mysteriene som befinner seg i hotellet. 

          Script deg ut av hotellet før all kunnskap går tapt. 
          Lykke til! ”</p>
    </article>
    <div className="buttons">
      <GoBackBtn />
      <Link to="/info"><GoBtn go="Gå videre" /></Link>
    </div>
    </body>
  )
}