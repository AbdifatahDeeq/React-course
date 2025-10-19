import { useState , useEffect} from "react"


const UseEffect = () => {
  const [title, setTitle] = useState("Asc");
  const [Name, setName] = useState("Abdi")
  
  useEffect(() => {
    document.title = title + Name;
      console.log(title);
  },[title])
 

  return (
    <div>
      <input onChange={(e) => setName(e.target.value)} type="text" value={Name} />
      <input type="text" onChange={(e)=> setTitle(e.target.value)}/>
    </div>
  );
}
export default UseEffect;