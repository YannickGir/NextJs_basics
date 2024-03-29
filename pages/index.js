import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
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
        <p>Hello ! I'm a passionated developper. I try to get more experience with the amazing nextJS !</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        
        
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <Link href={`./posts/${id}`}>
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              <small className={utilStyles.lightText}>
              <Date dateString={date}/>
              </small>
            </li>
            </Link>
          ))}
        </ul>
        </section>
        <section className={utilStyles.headingMd}>
        <Link href='./form/formPage'>aller au formulaire dynamique !</Link>
        </section>
    </Layout>
  );
}