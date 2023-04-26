import ScriptoutVideo from "../maya/ScriptOut-bildesekvens.mp4"


export default function Video() {

  return(
    <>
    <video width="635" height="360" autoPlay loop muted>
    <source src={ScriptoutVideo} type="video/mp4"></source>
    </video>
    </>
  )
}