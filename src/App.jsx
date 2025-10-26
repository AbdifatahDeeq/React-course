
import UserList from "./Userlist";

const App = () => {
  const users = [{ id: 1, name: "Alice", Email: "Alice@example.com" },
  { id: 2, name: "Abdalla", Email: "Abdalla@example.com" }
  ];

  return <UserList User={users}/>;
};

export default App;
