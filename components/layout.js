import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Lee Jian Howe";
export const siteTitle = "Lee Jian Howe";
export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="my personal website for projects and blog post" />
      </Head>
      <nav class="navbar">
        <span class="navbar-brand mb-0 h1">Lee Jian Howe</span>
        <ul className="nav justify-content-end">
          <li class="nav-item">
            <Link href="/">
              <a class="nav-link jh-nav-link">About</a>
            </Link>
          </li>
          <li class="nav-item">
            <Link href="/blog">
              <a class="nav-link jh-nav-link">Blog</a>
            </Link>
          </li>
          <li class="nav-item">
            <Link href="/projects">
              <a class="nav-link jh-nav-link">Projects</a>
            </Link>
          </li>
        </ul>
      </nav>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
          </>
        )}
      </header>
      <main>{children}</main>
    </div>
  );
}
