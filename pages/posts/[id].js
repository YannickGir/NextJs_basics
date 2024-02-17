import Link from "next/link";
import React from "react";
import Head from "next/head";
import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';

export async function getStaticProps({ params }) {
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({postData}) {
  return (
    <>
    <Layout>
          <Head>
        <title>First Post</title>
        
      </Head>
     
      <img src="/images/index.jpg" alt="Your Name" />
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
      
    </Layout>
    
    </>
  );
}
