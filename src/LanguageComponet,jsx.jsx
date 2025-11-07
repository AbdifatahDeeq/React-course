import { useContext } from "react";
import LangauageContext from "./LangauageContext";

const LangauageComponent = () => {
  const Lang = useContext(LangauageContext);
  const swtch = Lang ==="English"? "Hello!" :" Hoi!"
  

  return (
    <>
      {swtch} This is {Lang}
    </>
  )
}
export default LangauageComponent;