import Button from "../Button/Button";
import Card from "../Card/Card";
import classes from "./ErroModal.module.css";

const ErrorModal = ({ message, title, handleModal }) => {
  return (
    <div className={classes.modal}>
      <Card classes={classes["content-modal"]}>
        <div className={classes["header-modal"]}>{title}</div>
        <div className={classes["body-modal"]}>
          {/* Please enter a valid age (&gt; 0) */}
          {message}
        </div>
        <div className={classes["footer-modal"]}>
          <Button onClick={() => handleModal(false)}>Cerrar</Button>
        </div>
      </Card>
    </div>
  );
};

export default ErrorModal;
