import { Link } from "react-router-dom";

export default function SmallLogo() {
  return (
    <Link to="/">
      <header id="small-logo">
        <h1 id="logo-s">ScriptOut</h1>
        <p className="escape-text-s">Escape the house!</p>
      </header>
    </Link>
  )
}