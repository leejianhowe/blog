import Link from "next/link";
import Head from "next/head";
import utilStyles from "../../styles/utils.module.css";
import Layout from "../../components/layout";
import { getSortedPostsData } from "../../lib/posts";

export async function getStaticProps() {
  const allPostsData = await getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Post({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>Blog</title>
      </Head>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, published_at, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/blog/${id}`}>
                <a>
                  <h5>{title}</h5>
                </a>
              </Link>
              <small className={utilStyles.lightText}>
                {new Date(published_at).toLocaleString("en-us", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
