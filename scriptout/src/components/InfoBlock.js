export default function InfoBlock({title, infoText}) {
  return(
    <>
    <article class="info-block">
      <h2>{title}</h2>
      <p>{infoText}</p>
    </article>
  </>
  )
}