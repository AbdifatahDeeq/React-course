

 
const User = ({CurrentUser, Role, Dep}) => {
  return (
    <div>
     
      <p>User: {CurrentUser}</p>
      <p>Role: {Role}</p>
      <p> ep:{Dep}</p>
    </div>
  );
};

export default User;
