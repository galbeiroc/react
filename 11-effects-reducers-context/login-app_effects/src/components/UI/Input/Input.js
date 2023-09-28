import { useImperativeHandle, useRef, forwardRef } from "react";
import classes from "./Input.module.css";

const Input = forwardRef(
  (
    { label, isValid, type, value, onChangeHandler, validateInputHandler },
    ref
  ) => {
    const inputRef = useRef();

    const activate = () => {
      inputRef.current.focus();
    };

    useImperativeHandle(ref, () => {
      return {
        focus: activate,
      };
    });

    return (
      <div
        className={`${classes.control} ${
          isValid === false ? classes.invalid : ""
        }`}
      >
        <label htmlFor={type}>{label}</label>
        <input
          ref={inputRef}
          type={type}
          id={type}
          value={value}
          onChange={onChangeHandler}
          onBlur={validateInputHandler}
        />
      </div>
    );
  }
);

export default Input;
