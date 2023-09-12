import { useState } from "react";
import classes from "./AddUser.module.css";
import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";

const AddUser = ({ handleUsers, handleModal }) => {
  const [userIput, setUserInput] = useState({
    userName: "",
    age: "",
  });

  const onChangeHandler = ({ target: { name, value } }) => {
    setUserInput((prevState) => ({
      ...prevState,
      [name]: name === "userName" ? value : +value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!userIput.age || !userIput.userName) {
      handleModal(true);
    } else {
      handleUsers(userIput);
      setUserInput({ userName: "", age: "" });
    }
  };

  return (
    <Card classes={classes["content-form"]}>
      <form onSubmit={onSubmit}>
        <div className={classes["input-group"]}>
          <label htmlFor="userName">Username</label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={userIput.userName}
            onChange={onChangeHandler}
          />
        </div>
        <div className={classes["input-group"]}>
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            id="age"
            name="age"
            value={userIput.age}
            onChange={onChangeHandler}
          />
        </div>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
