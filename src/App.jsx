import React, { useState }  from "react"  
import LangauageContext from "./LangauageContext"

const App = () => {
  const [Lang, SetLang] = useState()
  
  const LangSwitch = () => {
    SetLang((PreviousLang) => PreviousLang === "English" ? "Spanish" : "English");
  }


  return (
    <>
      Hello!
      <LangauageContext.Provider>
        <button onClick={LangSwitch}>Switch to {Lang =="English" ? "Spanish" : "English"} </button>
        <p>{Lang === "English" ? "Hello" : "¡Hola!"}</p>
      </LangauageContext.Provider>
    </>
  );
}
export default App;