import { useState } from "react";
import Logo from "./Logo";
import PopUp from "./PopUp";
import { Link } from "react-router-dom";
import PopUpBtn from "./PopUpBtn";

export default function IntroPage() {

    const info = "Her skal du fylle inn din personlige kode som du fikk tildelt med brettspillet. Info til sensor: bruk kode 'R4TW59'"

    // State som toggler PopUp
    const [active, setActive] = useState(false)
    // Funksjon som toggler staten active, kjører ved klikk på spørsmålstegn eller X på PopUp 
    const togglePopUp = () => {
      setActive(!active)
    }

    // State som settes dersom koden i feltet stemmer overens med codeKey
    const [codeVerified, setCodeVerified] = useState(false)

    // Dersom koden i feltet stemmer overens med codeKey, blir staten codeVerified satt og spiller vil bli sendt videre
    const checkInput = () => {
        const inputValue = document.getElementById("code-input").value
        const codeKey = "R4TW59"

        if (inputValue === codeKey){
            setCodeVerified(true)
        }

        console.log(codeVerified)
    }

   
    return(
        <>
        <Logo />
        <body>
            <PopUpBtn btn="2" toggle={togglePopUp} active={active} setActive={setActive}/>
            <PopUp info={info} active={active} togglePopUp={togglePopUp}/>
            <label />
            <input id="code-input" maxLength="6"  placeholder="N29K1M" onChange={checkInput}/>
            <Link to={codeVerified === true ? "/" : null} id="go-to-game"><button className="btn">Gå til spillet</button></Link>
        </body>
        </>
    )
}

/*
* Første side en spiller vil se, der spiller må skrive inn riktig kode fra heftet som følger med i brettspillet. 
* Sensor kan skrive inn koden "R4TW59" for å komme seg videre
* Blir routet til i App.js
*/