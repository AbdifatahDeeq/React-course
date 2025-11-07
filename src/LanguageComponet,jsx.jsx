import { useContext } from "react";
import LangauageContext from "./LangauageContext";

const LangauageComponent = () => {
  const Lang = useContext(LangauageContext);
  const swtch = {
    e: "English",
    s: "Spanish"
  }
  return (
    <>
      {swtch} This is {Lang}
    </>
  )
}
export default LangauageComponent;