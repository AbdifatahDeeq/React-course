import { useEffect, useState } from "react";
import UsrList from "./UsrList"; // file name must match exactly

const App = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    const Userdata = [
      { id: 1, name: "Abdalla", email: "Abdalla@example.com" },
      { id: 2, name: "Yousuf", email: "Yousuf@example.com" },
    ];
    setUsers(Userdata);
  }, []);

  return <UsrList users={users}/>
    
};

export default App;
