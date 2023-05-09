export default function Setting({setting, state, setState}) {

  
  function toggleSetting(value){
    setState(value)
    console.log(`state: ${state}, value: ${value}`)
  }
 
  return(
    <div id="setting" className="row-div">
      {setting.map((s) => (<button key={s} onClick={() => toggleSetting(s)} className={s === state ? "active-setting" : "setting-btn"}>{s}</button>))}
    </div>
  )
}