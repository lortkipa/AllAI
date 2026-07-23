import styles from "./Message.module.css";

export default function Message({
  sender,
  content,
}: {
  sender: "user" | "ai";
  content: string;
}) {
  return (
    <div className={`${styles["outer-wrapper"]} ${styles[sender]}`}>
      <div className={styles["inner-wrapper"]}>
        <p className="text">{content}</p>
      </div>
    </div>
  );
}
