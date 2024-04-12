import Button from "./Button";
import Styles from "./css/ButtonContainer.module.css";
let ButtonContainer = ({ onButtonClick }) => {
  return (
    <div className={Styles.container}>
      <Button onButtonClick={onButtonClick}></Button>
    </div>
  );
};
export default ButtonContainer;
