import Head from 'next/head';
import React from 'react';
import CertificateList from '../../components/Certificates/CertificateList';
import Container from '../../components/Container';
import Layout from '../../components/Layout';
import { getAllCertificates } from '../../lib/api';
import { HOME_OG_IMAGE_URL, ORG_NAME } from '../../lib/constants';


export async function getStaticProps() {
  const allCertificates = getAllCertificates([
    'title',
    'date',
    'slug',
    'coverImage',
    'excerpt'
  ]);

  return {
    props: { allCertificates },
  };
}

export default function Index({ allCertificates }) {

  return (
    <>
      <Layout>
        <Head>
          <title>Certificates  | {ORG_NAME}</title>
          <meta
            name="description"
            content={`${ORG_NAME}`}
          />
          <meta property="og:image" content={HOME_OG_IMAGE_URL} />
        </Head>
        <Container>
          <div className='content-center pb-10 mb-5'>
          <h1 className="mt-5 mb-7 text-3xl text-accent-3 text-center font-bold">
              My Certifications
            </h1>
           {allCertificates[0] && <CertificateList certificates={[allCertificates[0]]} />}
           {allCertificates.length > 0 && <CertificateList certificates={allCertificates.slice(1)} />}
          </div>
        </Container>
      </Layout>
    </>
  );
}
