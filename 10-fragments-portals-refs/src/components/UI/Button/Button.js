import classes from "./Button.module.css";

const Button = ({ children, type, onClick }) => (
  <button className={classes.btn} type={type || "button"} onClick={onClick}>
    {children}
  </button>
);

export default Button;
