import LanguageContext from "./LangauageContext";
import { useContext } from "react";
const LangaugeComponent = () => {
  const lang =useContext (LanguageContext)
   const greet = lang === "English" ? "Hello" : "Hoi"
  return (
    <div>
     {greet } this is {lang}
    </div>
  )
}
export default LangaugeComponent;
