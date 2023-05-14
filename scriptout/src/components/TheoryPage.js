import { useState } from "react"
import GoBackBtn from "./GoBackBtn"
import PopUp from "./PopUp"
import PopUpBtn from "./PopUpBtn"
import Logo from "./Logo"

export default function TheoryPage() {

  // State som toggler PopUp
  const [active, setActive] = useState(false)
  // Funksjon som toggler staten active, kjører ved klikk på spørsmålstegn eller X på PopUp 
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
      <p>En variabel kan sammenlignes med en oppbevaringseske. Denne esken 
        kan du fylle med noe, en verdi. For å lage en variabel må du deklarerere 
        den, og dette gjøres ved bruk av "let", "const", eller "var".
        Ved bruk av let kan man alltid endre verdien til variabelen senere. 
        Om du bruker const derimot, kan verdien aldri endres. Du kan tenke på det 
        som en "konstant" verdi. Dette er en sikkerhet hvis du vet at du ikke 
        kommer til å ønske å endre verdien på noe, så det ikke skjer ved uhell.</p>
      <h3>Scope</h3>
      <p>Scope er et avgrenset område med en start og en slutt. Det finnes ulike scope 
        innenfor programmering, for eksempel et HTML dokument, eller en funksjon. 
        I hvilket scope du deklarerer variabler og funksjoner vil bestemme hvor 
        disse er tilgjengelige.</p>
      <h3>Operatorer</h3>
      <p>Det finnes mange operatorer i javascript. Operatorer er symboler med 
        ulike funksjoner. Dette er de viktiste:</p>
      <p>= - Brukes når man skal bestemme verdien til en variabel</p>
      <p>== - Brukes for å sjekke om to verdier er like</p>
      <p>=== - Brukes for å sjekke om to verdier er like og av samme datatype</p>
      <p>{"<"} - Mindre enn. Brukes for å sjekke en verdi er mindre enn en annen verdi</p>
      <p>{">"} - Større enn. Brukes for å sjekke en verdi er større enn en annen verdi</p>
      <p>! - Logisk ikke. Brukes for å sjekke om noe ikke finnes eller er "false" </p>
      <p>&& - Brukes i betinget logikk om man ønsker å sjekke fler enn én verdi i en
        if-else test
      </p>
      <p>|| - Logisk eller. Brukes for å sjekke om enten en eller en annen verdi er sann/
        usann.
      </p>
      <p></p>
      <h3>Konkatinering</h3>
      <p>Konkatenering brukes for å koble sammen ulike biter av kode, for 
        eksempel en string og en variabel. Vanlig bruk av dette er når man 
        ønsker å skrive ut tekststrenger der en del av teksten blir bestemt 
        av en variabel. En måte å gjøre dette på er ved å bruke "+" tegnet.
      </p>
      <h3>Template literals</h3>
      <p>Template literals er den moderne måten å konkatinere på. I stedet for 
        å bruke "+" tegnet, brukes backticks, dollartegn og krøllparenteser. 
        Hver gang en variabel skal kobles på må dollartegnet og krøllparentesene 
        brukes. Eksempel: "`Hans er {"${alder}"} år`" </p>
      <h3>Datatyper</h3>
      <p>En datatype kan være en string, number, boolean, array, null, 
        undefined, object eller ferdigdefinerte objekter.
      </p>
    </article>
    <GoBackBtn />
    </body>
  )
}

/*
* Side for teori
* Routes til i App.js
*
* Kilder brukt til teori: 
* https://lms.webtricks.blog/kurs/innforing-i-programmering 
* https://www.w3schools.com/ 
*/