import Head from 'next/head';
import Link from "next/link";
import Script from 'next/script';

export default function FirstPost() {
  return (
    <>
      <center>
        <Head>
          <title>EFAC XYZ</title>
        </Head>
        <h1>First Post</h1>
        <h2>
          <Link href="/">Back to home</Link>
        </h2>
      </center>
    </>
  );
}
