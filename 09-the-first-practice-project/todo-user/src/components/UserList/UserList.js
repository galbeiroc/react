import Card from '../Card/Card';
import classes from './UserList.module.css';

const UserList = ({ users }) => {
  return (
    <div className={classes.content}>
      {users.map((user, index) => (
        <Card key={`${user.username}-${index}`}>
          {user.userName} ({user.age} Years Old)
        </Card>
      ))}
    </div>
  );
};

export default UserList;
