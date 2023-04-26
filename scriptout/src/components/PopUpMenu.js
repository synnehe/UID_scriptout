import { Link } from "react-router-dom";

export default function PopUpMenu({activeMenu, setActiveMenu}) {
  return(
    <nav id="pop-menu" className={activeMenu ? null : "hidden"}>
      <Link to="/"><button className="pop-menu-btn">Gå til forside</button></Link>
      <Link to="/regler"><button className="pop-menu-btn">Regler</button></Link>
      <Link to="/innstillinger"><button className="pop-menu-btn">Innstillinger</button></Link>
      <Link to="/teori"><button className="pop-menu-btn">Teori</button></Link>
    </nav>
  )
}