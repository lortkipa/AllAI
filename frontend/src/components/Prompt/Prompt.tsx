import Icon from "../Icon/Icon";
import styles from "./Prompt.module.css";

export default function Prompt() {
  return (
    <div className={styles["wrapper"]}>
      <textarea
        className={styles["input"]}
        placeholder="იკითხე რაც გინდა..."
      ></textarea>
      <div className={styles["bottom"]}>
        <button className={styles["secondary-btn"]}>
          <Icon type="plus" color="white" size="100%" />
        </button>
        <button className={styles["primary-btn"]}>
          <Icon type="arrow-up" color="black" size="100%" />
        </button>
      </div>
    </div>
  );
}
