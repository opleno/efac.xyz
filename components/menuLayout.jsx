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
      <div className={`${styles.menu_row} ${styles.bottom_menu}`}>
        <Link href="/blog">Blog</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/services">Services</Link>
      </div>
    </>
  );
}

export default MenuLayout;
