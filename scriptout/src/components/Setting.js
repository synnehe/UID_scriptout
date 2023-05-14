export default function Setting({setting, settingState, setSetting}) {

  // Funksjon som tar imot value fra en innstilling og bruker denne for å oppdatere staten setting
  function toggleSetting(value){
    setSetting(value)
  }
 
  return(
    <div id="setting" className="row-div">
      {setting.map((s) => (<button key={s} onClick={() => toggleSetting(s)} className={s === settingState ? "active-setting" : "setting-btn"}>{s}</button>))}
    </div>
  )
}

/*
* Innstilling-knapper som endres ved klikk, har ingen funksjon for øyeblikket. 
* Planen i videre utvikling er at disse skal fungere
* Brukes i komponentet SettingsPage
*/