import styles from "./App.module.scss";
import PageCreator from "./components/PageCreator/PageCreator";

function App() {
  return (
    <main className={styles.mainBox}>
      <PageCreator />
    </main>
  );
}

export default App;
