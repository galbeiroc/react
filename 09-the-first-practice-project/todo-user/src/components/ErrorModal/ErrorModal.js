import Button from '../Button/Button';
import classes from './ErroModal.module.css';

const ErrorModal = ({ handleModal }) => {
  return (
    <div className={classes.modal}>
      <div className={classes['content-modal']}>
        <div className={classes['header-modal']}>
          Invalid Input
        </div>
        <div className={classes['body-modal']}>
          Please enter a valid age (&gt; 0)
        </div>
        <div className={classes['footer-modal']}>
          <Button onClick={() => handleModal(false)}>
            Cerrar
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ErrorModal;
