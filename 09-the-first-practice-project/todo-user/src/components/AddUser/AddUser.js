import { useState } from "react";
import classes from "./AddUser.module.css";
import Button from "../Button/Button";

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

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('Tested');
  };


  return (
    <form className={classes.form} onSubmit={onSubmit}>
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
      <Button type='submit'>
        Add User
      </Button>
    </form>
  );
};

export default AddUser;
