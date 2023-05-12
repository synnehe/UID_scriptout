import ScriptoutVideo from "../maya/ScriptOut-bildesekvens.mp4"


export default function Video() {

  return(
    <>
    <video itemtype="http://schema.org/VideoObject" id="video" width="635" height="358" autoPlay loop muted>
    <source src={ScriptoutVideo} type="video/mp4"></source>
    <meta itemprop="name" content="Boardgame 3D-prototype" />
    </video>
    </>
  )
}