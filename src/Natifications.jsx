const Natifications = ({ unreadmessages }) => {
  return (
    <div>
      <h1>Hello!</h1>
      {unreadmessages.length > 0 && (<p>You have {unreadmessages.length} enreadmessages</p> )}
    </div>
  );
};
export default Natifications;