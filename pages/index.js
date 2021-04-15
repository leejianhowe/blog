import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = await getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Lee Jian Howe</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, published_at, title }) => (
            <Link href={`/posts/${id}`}>
              <li className={utilStyles.listItem} key={id}>
                <a><h5>{title}</h5></a>
                <small className={utilStyles.lightText} >
                  {new Date(published_at).toLocaleString("en-us", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </small>
              </li>
            </Link>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
