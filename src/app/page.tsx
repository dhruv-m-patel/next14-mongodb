import styles from "./page.module.css";
import CreatePost from "./components/CreatePost";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Next.js v14 integration with MongoDB</h1>
      <section>
        <CreatePost />
      </section>
    </main>
  );
}
