export default function InfoBlock({title}) {
  return(
    <>
    <article className="info-block">
      <h2>{title}</h2>
      <h3>Variabler</h3>
      <p>En variabel kan deklareres med enten let, const eller var. 
        Ved bruk av let kan man alltid endre verdien til variabelen senere. 
        Om du bruker const derimot, kan verdien aldri endres. Dette er en 
        sikkerhet hvis du vet at du ikke kommer til å ønske å endre verdien 
        på noe, så det ikke skjer ved uhell.</p>
      <h3>Scope</h3>
      <p>..</p>
      <h3>Operatorer</h3>
      <p>Det finnes mange operatorer i javascript. Dette er de viktiste:</p>
      <p>= brukes når man skal bestemme verdien til en variabel</p>
      <h3>Konkatinering</h3>
      <p>Konkatenering brukes for å koble sammen ulike biter av kode, for 
        eksempel en string og en variabel. Vanlig bruk av dette er når man 
        ønsker å skrive ut tekststrenger der en del av teksten blir bestemt 
        av en variabel. Vi bruker "+"" tegnet for å gjøre dette.
      </p>
      <h3>Template literals</h3>
      <p>..</p>
      <h3>Datatyper</h3>
      <p>En datatype kan være en string, number, boolean, array, null, 
        undefined, object eller ferdigdefinerte objekter
      </p>
    </article>
  </>
  )
}