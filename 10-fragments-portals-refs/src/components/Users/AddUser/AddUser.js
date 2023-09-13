import { useState } from "react";
import classes from "./AddUser.module.css";
import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";
import ErrorModal from "../../UI/ErrorModal/ErrorModal";

const AddUser = ({ handleUsers }) => {
  const [userIput, setUserInput] = useState({
    userName: "",
    age: "",
  });
  const [error, setError] = useState(null);

  const onChangeHandler = ({ target: { name, value } }) => {
    setUserInput((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (
      userIput.age.trim().length === 0 ||
      userIput.userName.trim().length === 0
    ) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+userIput.age < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter valid age ( > 0).",
      });
      return;
    }

    handleUsers(userIput);
    setUserInput({ userName: "", age: "" });
  };

  const onErrorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onErrorHandler={onErrorHandler}
        />
      )}
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
    </div>
  );
};

export default AddUser;
