import { useRef, useState } from "react";
import Logo from "./Logo";
import PopUp from "./PopUp";
import { Link } from "react-router-dom";
import PopUpBtn from "./PopUpBtn";

export default function IntroPage() {

    const info = "Her skal du fylle inn din personlige kode som du fikk tildelt med brettspillet"

    const [active, setActive] = useState(false)

    const togglePopUp = () => {
      setActive(!active)
    }

    const inputRef = useRef(null);
    const [codeVerified, setCodeVerified] = useState(false)

    const checkInput = () => {
        const inputValue = inputRef.current.value;
        const codeKey = "R4TW59"

        if (inputValue === codeKey){
            setCodeVerified(true)
        }

        console.log(codeVerified)
    }

   
    return(
        <body>
            <Logo />
            <PopUpBtn btn="2" toggle={togglePopUp} active={active} setActive={setActive}/>
            <PopUp info={info} active={active} togglePopUp={togglePopUp}/>
            <label />
            <input id="code-input" ref={inputRef} maxLength="6"  placeholder="N29K1M" onChange={checkInput}/>
            <Link to={codeVerified === true ? "/" : null} id="go-to-game"><button className="btn">Gå til spillet</button></Link>
        </body>
    )
}