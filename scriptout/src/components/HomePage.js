import Logo from "./Logo";
import MenuButtons from "./MenuButtons";
import Video from "./Video";

export default function HomePage() {
  return(
    <>
      <Logo />
      <div className="row-div">
        <Video />
        <MenuButtons />
      </div>
    </>
  )
}