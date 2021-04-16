import Head from "next/head";

import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          I'm a full stack developer based in Singapore🇸🇬. I build web apps.
          Check out my projects and blog posts.
        </p>
      </section>
    </Layout>
  );
}
