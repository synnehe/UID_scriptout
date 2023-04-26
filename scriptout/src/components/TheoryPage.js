import GoBackBtn from "./GoBackBtn"
import InfoBlock from "./InfoBlock"
import Questionmark from "./Questionmark"
import SmallLogo from "./SmallLogo"

export default function TheoryPage() {

  const infoText = "Variabler, Scope og globale variabler, Konkatinering og template literals, Datatyper, Manipulasjon av data i variabler"

  return(
    <body>
    <SmallLogo />
    <Questionmark />
    <InfoBlock title={"Teori"} infoText={infoText} />
    <GoBackBtn />
    </body>
  )
}