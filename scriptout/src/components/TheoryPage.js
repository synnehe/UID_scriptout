import { useState } from "react"
import GoBackBtn from "./GoBackBtn"
import PopUp from "./PopUp"
import PopUpBtn from "./PopUpBtn"
import Logo from "./Logo"

export default function TheoryPage() {

  const [active, setActive] = useState(false)

  const togglePopUp = () => {
    setActive(!active)
  }

  const info = "Her finner du teori om JavaScript"

  return(
    <body>
    <Logo logo="small"/>
    <PopUpBtn btn="2" toggle={togglePopUp} active={active} setActive={setActive}/>
    <PopUp info={info} active={active} togglePopUp={togglePopUp}/>
    <article className="info-block">
      <h2>Teori</h2>
      <h3>Variabler</h3>
      <p>En variabel kan deklareres med enten let, const eller var. 
        Ved bruk av let kan man alltid endre verdien til variabelen senere. 
        Om du bruker const derimot, kan verdien aldri endres. Dette er en 
        sikkerhet hvis du vet at du ikke kommer til å ønske å endre verdien 
        på noe, så det ikke skjer ved uhell.</p>
      <h3>Scope</h3>
      <p>Scope er et avgrenset område, og i hvilket scope du deklarerer variabler og funksjoner vil bestemme hvor disse
        blir tilgjengelige.</p>
      <h3>Operatorer</h3>
      <p>Det finnes mange operatorer i javascript. Operatorer er symboler med ulike funksjoner. Dette er de viktiste:</p>
      <p>= brukes når man skal bestemme verdien til en variabel</p>
      <p>==</p>
      <p>===</p>
      <p>!</p>
      <p>&&</p>
      <p>||</p>
      <h3>Konkatinering</h3>
      <p>Konkatenering brukes for å koble sammen ulike biter av kode, for 
        eksempel en string og en variabel. Vanlig bruk av dette er når man 
        ønsker å skrive ut tekststrenger der en del av teksten blir bestemt 
        av en variabel. Vi bruker "+"" tegnet for å gjøre dette.
      </p>
      <h3>Template literals</h3>
      <p>Template literals blir brukt for å sette sammen kode av ulik form, for eksempel en string og en variabel.</p>
      <h3>Datatyper</h3>
      <p>En datatype kan være en string, number, boolean, array, null, 
        undefined, object eller ferdigdefinerte objekter
      </p>
    </article>
    <GoBackBtn />
    </body>
  )
}