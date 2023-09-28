import classes from './Input.module.css';

const Input = ({ label, isValid, type, value, onChangeHandler, validateInputHandler }) => {
  return (
    <div
      className={`${classes.control} ${
        isValid === false ? classes.invalid : ''
      }`}
    >
      <label htmlFor={type}>{label}</label>
      <input
        type={type}
        id={type}
        value={value}
        onChange={onChangeHandler}
        onBlur={validateInputHandler}
      />
    </div>
  )
}

export default Input;
