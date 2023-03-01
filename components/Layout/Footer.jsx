import styles from "../../styles/Home.module.css";

export default function MyFooter() {
  return (
    <footer className={styles.footer}>
      <div>
        <a href="https://efac.xyz" target="_blank" rel="noopener noreferrer">
          ®EFAC XYZ 2019
          <img
            src="/images/profile.png"
            alt="EFAC Logo"
            className={styles.logo}
          />
        </a>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </div>
    </footer>
  );
}
