const UserList = ({ users }) => {
  return (
    <>
      <ul>
        {users.length > 0 ? (
          users.map((user, index) => (
            <li key={index}>
              {user.id} - {user.name}
            </li>
          ))
        ) : (
          <li>No data is found</li>
        )}
      </ul>
    </>
  );
};

export default UserList;
