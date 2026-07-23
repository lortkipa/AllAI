import Message from "../../components/Message/Message";
import Prompt from "../../components/Prompt/Prompt";
import styles from "./New.module.css";

export default function New() {
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["messages"]}>
        <Message
          sender="user"
          content="hey, my name is ნიკოლოზ. what's your name?"
        />
        <Message
          sender="ai"
          content="hey, my name is ნიკოლოზ. what's your name?"
        />
        <Message
          sender="user"
          content="hey, my name is ნიკოლოზ. what's your name?"
        />
        <Message
          sender="ai"
          content="hey, my name is ნიკოლოზ. what's your name?"
        />
        <Message
          sender="user"
          content="hey, my name is ნიკოლოზ. what's your name?"
        />
        <Message
          sender="ai"
          content="hey, my name is ნიკოლოზ. what's your name?"
        />
        <Message
          sender="user"
          content="hey, my name is ნიკოლოზ. what's your name?"
        />
        <Message
          sender="ai"
          content="hey, my name is ნიკოლოზ. what's your name?"
        />
        <Message
          sender="user"
          content="hey, my name is ნიკოლოზ. what's your name?"
        />
        <Message
          sender="ai"
          content="hey, my name is ნიკოლოზ. what's your name?"
        />
      </div>
      <Prompt />
    </div>
  );
}
