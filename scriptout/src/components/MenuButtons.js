import { Link } from "react-router-dom";
import MenuButton from "./MenuButton";

export default function MenuButtons() {
  return(
    <div className="column-div">
    <Link to="/historie"><MenuButton btnName={"START"} /></Link>
    <Link to="/regler"><MenuButton btnName={"REGLER"} /></Link>
    <Link to="/teori"><MenuButton btnName={"TEORI"}/></Link>
    <Link to="/innstillinger"><MenuButton btnName={"INNSTILLINGER"}/></Link>
    </div>
  )
}