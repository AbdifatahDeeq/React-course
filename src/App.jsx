import UserCard from "./UsrCard";




function App() {
 
  return (
    <div>
      <h2>User1 info</h2>
      <UserCard Name={"Abdifatah"} Email={"Abd@som.so"} Role={"IT"} />
      <h2>User2 info</h2>
      <UserCard Name={"Fadumo"} Email={"Fa@som.so"} Role={"Acc"} />
      <h2>User3 info</h2>
      <UserCard Name={"Yousuf"} Email={"Yous@som.so"} Role={"Adm"} />
    </div>
  );
}
 
export default App;
