import Link from "next/link";
import React from "react";
import Head from "next/head";
import Layout from '../../components/layout';


export default function First_post() {
  return (
    <>
    <Layout>
          <Head>
        <title>First Post</title>
        
      </Head>
     
      <img src="/images/index.jpg" alt="Your Name" />
      <h1>First post </h1>
      <Link href={"/"}>Return to home !</Link>
    </Layout>
    
    </>
  );
}
