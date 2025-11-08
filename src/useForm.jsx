import { useState } from "react";

 
const useForm = (initialValue) => {

  const [values, setValue] = useState(initialValue)
  
  const handleChange = (e) => {
    const { name, value } = e.target ;
    setValue((prev) => ({ ...prev, [name]: value }))
  }
   

  return { values, handleChange}

}
export default useForm;
