import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
import { getGithubRepos } from "../../lib/github";
export default function Projects({ githubRepos }) {
  return (
    <Layout>
      <div className="container">
        <Head>
          <title>Projects</title>
        </Head>
      </div>
      <div className="mt-3 d-flex justify-content-center">
        <span>Work in Progress</span>
      </div>
      <ul>
        {githubRepos.map((ele) => {
          return (
            <li key={ele.id}>
              {ele.name}
              <br />
              <Link href={ele.html_url}>
                <a target="__blank">Github</a>
              </Link> | {ele.homepage ? (
                <Link href={`https://${ele.homepage}`}>
                  <a target="__blank">Demo</a>
                </Link>
              ) : null}
              <p>{ele.description}</p>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
}

export async function getStaticProps() {
  const result = await getGithubRepos();

  return {
    props: {
      githubRepos: result,
    },
  };
}
