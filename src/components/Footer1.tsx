import { FunctionComponent } from "react";
import styles from "./Footer1.module.css";
const Footer1: FunctionComponent = () => {
  return (
    <div className={styles.unstylediconbutton}>
      <img className={styles.menufilledIcon} alt="" src="/menufilled.svg" />
    </div>
  );
};

export default Footer1;
