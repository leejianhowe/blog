import Head from "next/head";
import Layout from "../../components/layout";
import { getAllPostId, getPostContent } from "../../lib/posts";

export default function Post({ postContent }) {
  return (
    <Layout>
      <Head>
        <title>{postContent.title}</title>
      </Head>
      <h4>{postContent.title}</h4>
      <p>
        {new Date(postContent.published_at).toLocaleString("en-us", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })}
      </p>
      <br />
      {
        <div
          id="content"
          dangerouslySetInnerHTML={{ __html: postContent.content }}
        ></div>
      }
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await getAllPostId();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postContent = await getPostContent(params.id);
  return {
    props: {
      postContent,
    },
  };
}
