import GoBackBtn from "./GoBackBtn";
import InfoBlock from "./InfoBlock";
import Questionmark from "./Questionmark";
import SmallLogo from "./SmallLogo";

export default function SettingsPage() {
return(
  <body>
  <SmallLogo />
  <Questionmark />
  <InfoBlock title={"Innstillinger"} />
  <GoBackBtn />
  </body>
)
}