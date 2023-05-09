import { useState } from "react";
import GoBackBtn from "./GoBackBtn";
import Questionmark from "./Questionmark";
import Setting from "./Setting";
import SmallLogo from "./SmallLogo";
import PopUp from "./PopUp";

export default function SettingsPage() {

  const vanskelighetsgrader = ["Lett", "Middels", "Vanskelig"]
  const språk = ["Norsk", "Engelsk"]
  const tema = ["Lys", "Mørk"]
  const lydeffekter = ["Lav", "Middels", "Høy"]
  const musikk = ["Lav", "Middels", "Høy"]
  const fortellestemme = ["Av", "På"]

  const [difficulty, setDifficulty] = useState("Middels")
  const [language, setLanguage] = useState("Norsk")
  const [theme, setTheme] = useState("Mørk")
  const [effects, setEffects] = useState("Lav")
  const [music, setMusic] = useState("Middels")
  const [narrator, setNarrator] = useState("Av")

  const [active, setActive] = useState(false)

  const togglePopUp = () => {
    setActive(!active)
  }

  const info = "Her kan du endre på instillinger"

return(
  <body>
  <SmallLogo />
  <Questionmark togglePopUp={togglePopUp} active={active} setActive={setActive}/>
  <PopUp info={info} active={active} togglePopUp={togglePopUp}/>
  <article id="settings-article" className="info-block">
    <h2>Innstillinger</h2>
    <div className="row-div">    
      <h3>Vanskelighetsgrad</h3>
      <Setting setting={vanskelighetsgrader} state={difficulty} setState={setDifficulty}/>
    </div>
    <div className="row-div">
      <h3>Språk</h3>
      <Setting setting={språk} state={language} setState={setLanguage}/>
    </div>
    <div className="row-div">
      <h3>Lys/møkt tema</h3>
      <Setting setting={tema} state={theme} setState={setTheme}/>
    </div>
    <div className="row-div">
      <h3>Lydeffekter</h3>
      <Setting setting={lydeffekter} state={effects} setState={setEffects}/>
    </div>
    <div className="row-div">
      <h3>Musikk</h3>
      <Setting setting={musikk} state={music} setState={setMusic}/>
    </div>
    <div className="row-div">
      <h3>Fortellerstemme</h3>
      <Setting setting={fortellestemme} state={narrator} setState={setNarrator}/>
    </div>
  </article>
  <GoBackBtn />
  </body>
)
}