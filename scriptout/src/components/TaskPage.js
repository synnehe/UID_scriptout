import { useState } from "react";
import Bubble from "./Bubble";
import GoBackBtn from "./GoBackBtn";
import PopUpMenuBtn from "./PopUpMenuBtn";
import Questionmark from "./Questionmark";
import SmallLogo from "./SmallLogo";
import PopUp from "./PopUp";
import PopUpMenu from "./PopUpMenu";
import { Link } from "react-router-dom";
import GoBtn from "./GoBtn";
import Gang from "../maya/Gang-screenshot.png";
import Task1 from "./Task1";

export default function TaskPage() {

  const info = "Les introen til oppgaven og svar på oppgaven"

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
    <div className="row-div">
      <div>
        <Bubble taskText={"Forklaring: En variabel kan deklareres med enten let, const eller var. Ved bruk av let kan man alltid endre verdien til variabelen senere. Om du bruker const derimot, kan verdien aldri endres. Dette er en sikkerhet hvis du vet at du ikke kommer til å ønske å endre verdien på noe, så det ikke skjer ved uhell."}/>
        <Bubble taskText={'Du legger merke til at noen av trappetrinnene er for ødelagte til å gå på. const trinn1 = "knirkende trinn" let trinn2 = “trinn med skader”const trinn3 = “trinn med flekk på” const trinn4 = “trinn som ser ubrukt ut” let trinn5 = “trinn med en manglende treplate”. Finn ut hvilke trinn som kan fikses og noter det ned'}/>
        <Task1 />
      </div>
      <img src={Gang} id="gang" width="680px" height="auto" alt="ScriptOut gang"/>
    </div>
    <div className="buttons">
      <GoBackBtn />
      <Link to="/"><GoBtn go="Svar" /></Link>
    </div>
    </body>
  )
}