import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { getSortedPostsData } from "../lib/posts";
import Date from "../components/date";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          I'm <b>Tazkiya Mujahid</b>, a full stack learner and UI/UX design
          enthusiast from Jakarta! 💻🎨
        </p>
        <p>
          Currently, I'm working in QA but still consider myself a newbie. 🚀
          I'm eager to expand my knowledge and skills, always looking for
          opportunities to learn and grow. 🌱📚
        </p>
        <p>
          Let's connect and create something awesome together! Feel free to
          reach out if you want to chat about tech, design, or grab a cup of
          coffee. You can contact me on{" "}
          <Link href="https://twitter.com/yaakiyaaa">Twitter</Link> ☕️
        </p>
        <p>
          <b>#HappyCoding #AlwaysLearning</b>
        </p>
        <p>Production Branch</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData?.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
