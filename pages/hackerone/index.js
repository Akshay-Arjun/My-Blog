import Head from 'next/head';
import React from 'react';
import HackersList from '../../components/Hackers/HackersList';
import Container from '../../components/Container';
import Layout from '../../components/Layout';
import { getAllHackers } from '../../lib/api';
import { HOME_OG_IMAGE_URL, ORG_NAME } from '../../lib/constants';


export async function getStaticProps() {
  const allHackers = getAllHackers([
    'title',
    'date',
    'slug',
    'coverImage',
    'excerpt'
  ]);

  return {
    props: { allHackers },
  };
}

export default function Index({ allHackers }) {

  return (
    <>
      <Layout>
        <Head>
          <title>Hacker One  | {ORG_NAME}</title>
          <meta
            name="description"
            content={`${ORG_NAME}`}
          />
          <meta property="og:image" content={HOME_OG_IMAGE_URL} />
        </Head>
        <Container>
          <div className='content-center pb-10 mb-5'>
          <h1 className="mt-5 mb-7 text-3xl text-accent-3 text-center font-bold">
              Hacker One Reports
            </h1>
           {allHackers[0] && <HackersList hackers={[allHackers[0]]} />}
           {allHackers.length > 0 && <HackersList hackers={allHackers.slice(1)} />}
          </div>
        </Container>
      </Layout>
    </>
  );
}
