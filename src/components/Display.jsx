import styles from "./css/Display.module.css";
let Display = ({ displayVal }) => {
  return (
    <div>
      <input className={styles.input} type="text" value={displayVal} readOnly />
    </div>
  );
};

export default Display;
