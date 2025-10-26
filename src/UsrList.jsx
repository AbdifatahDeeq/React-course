const UsrList = ({ users }) => {
  return (
    <ul>
      {users.length > 0 ? (
        users.map((user) => (
          <li>
            {user.id}-
            {user.name}-
            {user.email}
          </li>
        ))
      ) : (
        <p>No data found</p>
      )}
    </ul>
  );
   
};

export default UsrList;
