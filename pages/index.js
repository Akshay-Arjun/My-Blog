import Head from 'next/head';
import React from 'react';
import BlogsList from '../components/Blogs/BlogsList';
import Container from '../components/Container';
import Layout from '../components/Layout';
import { getAllBlogs } from '../lib/api';
import { HOME_OG_IMAGE_URL, ORG_NAME } from '../lib/constants';


export async function getStaticProps() {
  const allBlogs = getAllBlogs([
    'title',
    'date',
    'slug',
    'coverImage',
    'excerpt'
  ]);

  return {
    props: { allBlogs },
  };
}

export default function Index({ allBlogs }) {

  return (
    <>
      <Layout>
        <Head>
          <title>Blogs | {ORG_NAME}</title>
          <meta
            name="description"
            content={`${ORG_NAME}`}
          />
          <meta property="og:image" content={HOME_OG_IMAGE_URL} />
        </Head>
        <Container>
          <div className='content-center pb-10 mb-5'>
          <h1 className="mt-5 mb-7 text-3xl text-accent-3 text-center font-bold">
              Hackthebox Writeups
            </h1>
           {allBlogs[0] && <BlogsList blogs={[allBlogs[0]]} />}
           {allBlogs.length > 0 && <BlogsList blogs={allBlogs.slice(1)} />}
          </div>
        </Container>
      </Layout>
    </>
  );
}
