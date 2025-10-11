
import "./index.css"
const UsrCard = ({Name, Email, Role}) => {
  return (
    <div className="userCard">
       
      <p>Name:{Name}</p>
      <p> Email:{Email }</p>
      <p>Role: {Role }</p>
    </div>
  );
};

export default UsrCard;
