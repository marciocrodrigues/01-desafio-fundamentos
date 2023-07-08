import { Check, TrashSimple } from "phosphor-react";
import styles from "./TodoTask.module.css";

export interface Task {
  id: string;
  description: string;
  done: boolean;
}

interface TodoTaskProps {
  task: Task;
  handleChangeDoneUndoneTask: (task: Task) => void;
  handleRemoveTask: (task: Task) => void;
}

export function TodoTask({
  task,
  handleChangeDoneUndoneTask,
  handleRemoveTask,
}: TodoTaskProps) {
  return (
    <li className={styles.task}>
      <button
        className={`${styles.taskCheck} ${
          task.done ? styles.taskChecked : styles.taskUnchecked
        }`}
        onClick={() => handleChangeDoneUndoneTask(task)}
      >
        {task.done ? <Check size={15} /> : false}
      </button>
      <span className={task.done ? styles.descriptionTaskChecked : ""}>
        {task.description}
      </span>
      <button
        className={styles.taskRemove}
        onClick={() => handleRemoveTask(task)}
      >
        <TrashSimple size={20} />
      </button>
    </li>
  );
}
