import styles from "@/app/Footer.module.css";
import { roboto } from "@/app/fonts";

export default function footer() {
  return (
    <section className={roboto.className}>
      <footer className={styles.footer}>
        <p>&copy; Abiyyah Putri</p>
      </footer>
    </section>
  );
}
