import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";

import styles from "../styles/Home.module.css";
import utilStyles from "../styles/utils.module.css";
import LoginControl from "../components/LoginControl.js";
import Layout from "../components/layoutComponents/layout";
import { getSortedPostsData } from "../lib/posts";
import Date from "../components/date";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ dir, allPostsData }) {
  const { locales } = useRouter();

  const intl = useIntl();

  const siteTitle = intl.formatMessage({ id: "page.home.head.title" });
  const description = intl.formatMessage({
    id: "page.home.head.meta.description",
  });

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />

        {/* Add hreflang links */}
        <link rel="alternate" href="http://www.efac.xyz" hrefLang="x-default" />
        <link rel="alternate" href="http://www.efac.xyz/en-US" hrefLang="en" />
        <link rel="alternate" href="http://www.efac.xyz/ar" hrefLang="ar" />
        <link rel="alternate" href="http://www.efac.xyz/fr" hrefLang="fr" />
      </Head>
      <header>
        <div className={styles.languages}>
          {[...locales].sort().map((locale) => (
            <Link key={locale} href="/" locale={locale}>
              | {locale} |
            </Link>
          ))}
        </div>
      </header>

      <section dir={dir} className={utilStyles.headingSm}>
        <h1 className={styles.title}>
          <FormattedMessage
            id="page.home.title"
            values={{ b: (chunks) => <b>{chunks}</b> }}
          />
        </h1>
        <p className={styles.description}>
          <FormattedMessage id="page.home.description" />
        </p>
        <LoginControl />
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
