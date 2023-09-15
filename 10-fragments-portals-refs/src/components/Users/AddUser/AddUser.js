import { useState, useRef } from "react";
import classes from "./AddUser.module.css";
import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";
import ErrorModal from "../../UI/ErrorModal/ErrorModal";
import Wrapper from "../../Helpers/Wrapper";

const AddUser = ({ handleUsers }) => {
  const usernameInputRef = useRef();
  const ageInputRef = useRef();
  const [error, setError] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    const enteredUsername = usernameInputRef.current.value;
    const enteredAge  = ageInputRef.current.value;

    if (
      enteredUsername.trim().length === 0 ||
      enteredAge.trim().length === 0
    ) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter valid age ( > 0).",
      });
      return;
    }

    handleUsers({ userName: enteredUsername, age: enteredAge});
    usernameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  const onErrorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
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
              ref={usernameInputRef}
            />
          </div>
          <div className={classes["input-group"]}>
            <label htmlFor="age">Age (Years)</label>
            <input
              type="number"
              id="age"
              name="age"
              ref={ageInputRef}
            />
          </div>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
