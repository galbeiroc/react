import { useState } from "react";
import classes from "./AddUser.module.css";

const AddUser = () => {
  const [userIput, setUserInput] = useState({
    userName: "",
    age: "",
  });

  const onChangeHandler = ({ target: { name, value } }) => {
    setUserInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  console.log(userIput);
  return (
    <form className={classes.form}>
      <div className={classes["input-group"]}>
        <label>Username</label>
        <input
          type="text"
          name="userName"
          value={userIput.userName}
          onChange={onChangeHandler}
        />
      </div>
      <div className={classes["input-group"]}>
        <label>Age (Years)</label>
        <input
          type="number"
          name="age"
          value={userIput.age}
          onChange={onChangeHandler}
        />
      </div>
    </form>
  );
};

export default AddUser;
