import styles from "./App.module.css"
import Hello from "./component/Hello";

function App() {

  return (
    <div>
        <div className={styles.box}>App</div>
        <Hello/>
    </div>
  );
}

export default App;
