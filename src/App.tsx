import * as uuid from "uuid";
import { Header } from "./components/Header";
import { PlusCircle } from "phosphor-react";

import styles from "./App.module.css";
import "./global.css";
import { useEffect, useState } from "react";
import { InfoTodo } from "./components/InfoTodo";
import { Task, TodoTask } from "./components/TodoTask";

const mookupTask: Task[] = [
  {
    id: uuid.v4(),
    description: "Buy milk",
    done: false,
  },
];

function App() {
  const [taskDescription, setTaskDescription] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>(mookupTask);
  const [countTasksDone, setTasksDone] = useState<number>(0);
  const [totalTasks, setTotalTasks] = useState<number>(0);

  useEffect(() => {
    setTotalTasks(tasks.length);

    const tasksDone = tasks.filter((task) => task.done);
    setTasksDone(tasksDone.length);
  }, [tasks]);

  function handleTaskChange(value: string) {
    setTaskDescription(value);
  }

  function handleRemoveTask(taskRemove: Task) {
    const newArrayTAsks = tasks.filter((task) => task.id !== taskRemove.id);
    setTasks(newArrayTAsks);
  }

  function handleCreateNewTask() {
    if (taskDescription) {
      const newTask: Task = {
        id: uuid.v4(),
        description: taskDescription,
        done: false,
      };

      setTasks([...tasks, newTask]);
      setTaskDescription("");
    }
  }

  function handleChangeDoneUndoneTask(taskChange: Task) {
    const newArrayTAsks = tasks.map((task) => {
      if (task.id === taskChange.id) {
        task.done = !task.done;
      }
      return task;
    });
    setTasks(newArrayTAsks);
  }

  return (
    <div style={{ position: "relative" }}>
      <Header />
      <div className={styles.wrapper}>
        <main>
          <div className={styles.createTodo}>
            <input
              placeholder="Adicione uma nova tarefa"
              className={styles.inputTodo}
              type="text"
              value={taskDescription}
              onChange={(e) => handleTaskChange(e.target.value)}
            />
            <button onClick={handleCreateNewTask}>
              Criar <PlusCircle size={16} />
            </button>
          </div>
          <InfoTodo totalTasks={totalTasks} countTasksDone={countTasksDone} />
          <div className={styles.listTasks}>
            <ul>
              {tasks.map((task) => {
                return (
                  <TodoTask
                    key={task.id}
                    task={task}
                    handleChangeDoneUndoneTask={handleChangeDoneUndoneTask}
                    handleRemoveTask={handleRemoveTask}
                  />
                );
              })}
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
function v4(): string {
  throw new Error("Function not implemented.");
}
