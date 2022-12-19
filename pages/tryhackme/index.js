import Head from 'next/head';
import React from 'react';
import TryHackMeList from '../../components/Tryhackme/TryHackMeList';
import Container from '../../components/Container';
import Layout from '../../components/Layout';
import { getAllTryHackers } from '../../lib/api';
import { HOME_OG_IMAGE_URL, ORG_NAME } from '../../lib/constants';


export async function getStaticProps() {
  const allTryHackers = getAllTryHackers([
    'title',
    'date',
    'slug',
    'coverImage',
    'excerpt'
  ]);

  return {
    props: { allTryHackers },
  };
}

export default function Index({ allTryHackers }) {

  return (
    <>
      <Layout>
        <Head>
          <title>Try Hack Me  | {ORG_NAME}</title>
          <meta
            name="description"
            content={`${ORG_NAME}`}
          />
          <meta property="og:image" content={HOME_OG_IMAGE_URL} />
        </Head>
        <Container>
          <div className='content-center pb-10 mb-5'>
          <h1 className="mt-5 mb-7 text-3xl text-accent-3 text-center font-bold">
          Try Hack Me Writeups
            </h1>
           {allTryHackers[0] && <TryHackMeList tryhackers={[allTryHackers[0]]} />}
           {allTryHackers.length > 0 && <TryHackMeList tryhackers={allTryHackers.slice(1)} />}
          </div>
        </Container>
      </Layout>
    </>
  );
}
