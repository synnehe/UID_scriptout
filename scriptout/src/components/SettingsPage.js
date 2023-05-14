import { useState } from "react";
import GoBackBtn from "./GoBackBtn";
import Setting from "./Setting";
import PopUp from "./PopUp";
import PopUpBtn from "./PopUpBtn";
import Logo from "./Logo";

export default function SettingsPage() {

  const vanskelighetsgrader = ["Lett", "Middels", "Vanskelig"]
  const språk = ["Norsk", "Engelsk"]
  const tema = ["Lys", "Mørk"]
  const lydeffekter = ["Lav", "Middels", "Høy"]
  const musikk = ["Lav", "Middels", "Høy"]
  const fortellestemme = ["Av", "På"]

  // State til alle instillinger
  const [difficulty, setDifficulty] = useState("Middels")
  const [language, setLanguage] = useState("Norsk")
  const [theme, setTheme] = useState("Mørk")
  const [effects, setEffects] = useState("Lav")
  const [music, setMusic] = useState("Middels")
  const [narrator, setNarrator] = useState("Av")

  // State som toggler PopUp
  const [active, setActive] = useState(false)
  // Funksjon som toggler staten active, kjører ved klikk på spørsmålstegn eller X på PopUp 
  const togglePopUp = () => {
    setActive(!active)
  }

  const info = "Her kan du endre på instillinger"

return(
  <body>
  <Logo logo="small"/>
  <PopUpBtn btn="2" toggle={togglePopUp} active={active} setActive={setActive}/>
  <PopUp info={info} active={active} togglePopUp={togglePopUp}/>
  <article id="settings-article" className="info-block">
    <h2>Innstillinger</h2>
    <div className="row-div">    
      <h3>Vanskelighetsgrad</h3>
      <Setting setting={vanskelighetsgrader} settingState={difficulty} setSetting={setDifficulty}/>
    </div>
    <div className="row-div">
      <h3>Språk</h3>
      <Setting setting={språk} settingState={language} setSetting={setLanguage}/>
    </div>
    <div className="row-div">
      <h3>Lys/møkt tema</h3>
      <Setting setting={tema} settingState={theme} setSetting={setTheme}/>
    </div>
    <div className="row-div">
      <h3>Lydeffekter</h3>
      <Setting setting={lydeffekter} settingState={effects} setSetting={setEffects}/>
    </div>
    <div className="row-div">
      <h3>Musikk</h3>
      <Setting setting={musikk} settingState={music} setSetting={setMusic}/>
    </div>
    <div className="row-div">
      <h3>Fortellerstemme</h3>
      <Setting setting={fortellestemme} settingState={narrator} setSetting={setNarrator}/>
    </div>
  </article>
  <GoBackBtn />
  </body>
)
}

/*
* Side for å endre på instillinger
* Routes til i App.js
*/