import Link from "next/link";
import Layout from "../components/Layout/Layout";

export default function About() {
  return (
    <Layout>
      <h1>About Page</h1>
      <Link href="/">Homepage</Link>
    </Layout>
  );
}
