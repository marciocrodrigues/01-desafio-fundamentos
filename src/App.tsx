import { Header } from "./components/Header";
import { PlusCircle } from "phosphor-react";

import styles from "./App.module.css";
import "./global.css";

function App() {
  return (
    <div style={{ position: "relative" }}>
      <Header />
      <div className={styles.wrapper}>
        <main>
          <div className={styles.createTodo}>
            <input className={styles.inputTodo} type="text" />
            <button>
              Criar <PlusCircle size={16} />
            </button>
          </div>
          <div></div>
        </main>
      </div>
    </div>
  );
}

export default App;
