import Card from "../../UI/Card/Card";
import classes from "./UserList.module.css";

const UserList = ({ users }) => {
  return (
    <Card classes={classes.content}>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.userName} ({user.age} Years Old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
