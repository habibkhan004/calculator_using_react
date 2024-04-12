import styles from "./css/Button.module.css";
let Button = ({ onButtonClick }) => {
  let btnArr = [
    "C",
    "00",
    "%",
    "**",
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    ".",
    "0",
    "=",
    "+",
  ];
  return (
    <>
      {btnArr.map((e) => (
        // map method will used to display an array in jsx
        <button onClick={onButtonClick} className={styles.btn}>
          {e}
        </button>
      ))}
    </>
  );
};
export default Button;
