import { Link } from "react-router-dom";

export default function Logo({logo}) {
  return( 
    <Link id="logo-link" to="/">
      <header id={logo === "small" ? "small-logo" : null}>
        <h1 id={logo === "small" ? "logo-s" : "logo"}>ScriptOut</h1>
        <p className={logo === "small" ? "escape-text-s" : "escape-text"}>Escape the house!</p>
      </header>
    </Link>
  )
}