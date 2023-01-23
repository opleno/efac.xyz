import Link from "next/link";

export default function FirstPost() {
  return (
    <>
      <center>
        <h1>First Post</h1>
        <h2>
          <Link href="/">Back to home</Link>
        </h2>
      </center>
    </>
  );
}
