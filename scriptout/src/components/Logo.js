import { Link, useLocation } from "react-router-dom";

export default function Logo({logo}) {

  const path = useLocation()

  return( 
    <Link id="logo-link" to={path.pathname === "/" ? null : "/meny"}>
      <header id={logo === "small" ? "small-logo" : null}>
        <h1 id={logo === "small" ? "logo-s" : "logo"}>ScriptOut</h1>
        <p className={logo === "small" ? "escape-text-s" : "escape-text"}>Escape the haunted house!</p>
      </header>
    </Link>
  )
}

/*
* Logo som blir gjenbrukt på alle sider
* Gjennom className/id bestemmes det om logoen er i den store eller lille varianten
* Kilde useLocation: https://stackoverflow.com/questions/42253277/react-router-v4-how-to-get-current-route 
*/