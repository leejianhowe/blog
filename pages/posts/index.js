import Link from "next/link";
import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Layout from "../../components/layout";
export default function Post() {
  return (
    <Layout>
      <Head>
        <title>Post</title>
      </Head>

      <h1>Post</h1>
      <Link href="/">
        <a>Go back to Home</a>
      </Link>
      <p className={styles.text}>Go back to Home</p>
    </Layout>
  );
}
