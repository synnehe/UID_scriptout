import Logo from "./Logo";
import MenuButtons from "./MenuButtons";
import Video from "./Video";

export default function HomePage() {
  return(
    <>
      <Logo />
      <div className="row-div">
        <Video />
        <MenuButtons id="menubuttons"/>
      </div>
    </>
  )
}

/*
* Meny-siden spiller kommer til etter å ha skrevet inn riktig kode fra brettspillet
* Blir routet til i App.js
*/