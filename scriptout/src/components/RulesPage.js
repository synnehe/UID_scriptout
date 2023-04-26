import GoBackBtn from "./GoBackBtn";
import InfoBlock from "./InfoBlock";
import SmallLogo from "./SmallLogo";

export default function RulesPage() {

  const infoText = "Spillet foregår både digitalt og analogt ved at oppgavene og svaret man avgir er på pcen, mens brettspillet er et hjelpemiddel med hint for å løse oppgavene. Et rom på brettspillet vil ha 8 hint, et hint til hver oppgave. Alle hintene vil være tilgjengelige på brettet hele tiden, slik at hintene alltid kan brukes, men det står ikke hvilke hint som er til hvilke oppgaver. Hvor på brettet hintet befinner seg vil spilleren kun få vite når en “hint” knapp blir tydelig på pcen etter et feilet forsøk på oppgaven. Etter tre feil forsøk får man mulighet til å se løsningsforslaget som forklarer utfyllende hvordan oppgaven kan løses. Man kan da velge å gjøre oppgaven på nytt eller å gå videre til neste oppgave. "


  return(
    <body>
    <SmallLogo />
    <InfoBlock title={"Regler"} infoText={infoText} />
    <GoBackBtn />
    </body>
  )
}