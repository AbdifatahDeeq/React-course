const UserInfo = (props) => {
  return (
    <div>
      <h1> User information</h1>
      <h2> {props.UserName}</h2>
      <h2> {props.Role}</h2>
    </div>
  );
}
export default UserInfo;