import styles from "./InfoTodo.module.css";

interface InfoTodoProps {
  totalTasks: number;
  countTasksDone: number;
}

export function InfoTodo({ totalTasks, countTasksDone }: InfoTodoProps) {
  return (
    <div className={styles.infoTodoList}>
      <div className={styles.infoTodoNewTasks}>
        <span>Tarefas criadas</span>
        <span>{totalTasks}</span>
      </div>
      <div className={styles.infoTodoTasksDones}>
        <span>Concluídas</span>
        <span>
          {countTasksDone} de {totalTasks}
        </span>
      </div>
    </div>
  );
}
