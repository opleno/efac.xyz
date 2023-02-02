import Head from "next/head";
import Link from "next/link";

import styles from "../styles/Home.module.css";
import utilStyles from "../styles/utils.module.css";
// import {LoginButton, LogoutButton} from '../components/hello.1.js'
import LoginControl from "../components/LoginControl.js";
import Layout, { siteTitle } from "../components/layout";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[EFAC XYZ Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
        <LoginControl />
      </section>
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
    </Layout>
  );
}
