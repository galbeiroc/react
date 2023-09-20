import { createPortal } from "react-dom";
import Button from "../Button/Button";
import Card from "../Card/Card";
import classes from "./ErroModal.module.css";

const Backdrop = ({ onErrorHandler }) => {
  return <div className={classes.modal} onClick={onErrorHandler} />;
};

const ModalOverlay = ({ message, title, onErrorHandler }) => {
  return (
    <Card classes={classes["content-modal"]}>
      <div className={classes["header-modal"]}>{title}</div>
      <div className={classes["body-modal"]}>{message}</div>
      <div className={classes["footer-modal"]}>
        <Button onClick={onErrorHandler}>Cerrar</Button>
      </div>
    </Card>
  );
};

const ErrorModal = ({ message, title, onErrorHandler }) => {
  return (
    <>
      {createPortal(
        <Backdrop onErrorHandler={onErrorHandler} />,
        document.getElementById("backdrop-root")
      )}
      {createPortal(
        <ModalOverlay
          message={message}
          title={title}
          onErrorHandler={onErrorHandler}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default ErrorModal;
