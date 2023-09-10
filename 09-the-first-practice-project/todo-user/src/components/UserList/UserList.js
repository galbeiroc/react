import classes from './UserList.module.css';

const UserList = ({ users }) => {
  return (
    <div className={classes.list}>
      {users.map((user, index) => (
        <p key={`${user.username}-${index}`}>
          {user.userName} ({user.age} Years Old)
        </p>
      ))}
    </div>
  );
};

export default UserList;
