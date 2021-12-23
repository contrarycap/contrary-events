import Navigation from "../components/navigation";
import styles from '../styles/Home.module.css'

export default function SubmitEvent() {
  return (
    <div className={styles.container}>
      <Navigation />
      <main>
        <h1 className={styles.title}>
          Submit an Event
        </h1>
      </main>
    </div>
  )
}