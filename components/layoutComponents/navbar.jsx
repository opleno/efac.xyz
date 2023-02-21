import Link from "next/link";
import styles from './menuLayout.module.css';

function MenuLayout() {
  return (
    <>
      <div className={`${styles.menu_row} ${styles.top_menu}`}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </>
  );
}

export default MenuLayout;