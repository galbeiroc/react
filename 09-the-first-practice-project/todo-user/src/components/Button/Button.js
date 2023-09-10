import classes from './Button.module.css';

const Button = ({ children }) => (
  <button className={classes.btn}>
    {children}
  </button>
);

export default Button;
