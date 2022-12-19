import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Container from '../../components/Container';
import Layout from '../../components/Layout';
import { getCertificateBySlug, getAllCertificates } from '../../lib/api';
import Head from 'next/head';
import { BASE_URL, ORG_NAME } from '../../lib/constants';
import Loader from '../../components/Loader';
import CertificateDetail from '../../components/Certificates/CertificateDetail';
import markdownToHtml from '../../lib/markdownToHtml';

export default function Certificate({ certificate, morecertificates, preview }) {
  const router = useRouter();

  if (!router.isFallback && !certificate?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout preview={preview}>
      <Container>
        {router.isFallback ? (
          <Loader />
        ) : (
          <>
            <Head>
              <title>
                {certificate.title} | {ORG_NAME}
              </title>
              <meta name="description" content={certificate.excerpt} />
              <meta property="og:image" content={`${BASE_URL}${certificate.coverImage}`} />
              <meta property="og:title" content={`${certificate.title} | ${ORG_NAME}`} />
              <meta property="og:description" content={certificate.excerpt} />
              <meta name="twitter:card" content="summary_large_image" />
              <meta property="twitter:title" content={`${certificate.title} | ${ORG_NAME}`} />
              <meta property="twitter:description" content={certificate.excerpt} />
              <meta property="twitter:image" content={`${BASE_URL}${certificate.coverImage}`} />
              <meta property="twitter:image:alt" content={certificate.title} />
            </Head>
            <article className="mb-32">
              <CertificateDetail
                slug={certificate.slug}
                title={certificate.title}
                coverImage={certificate.coverImage}
                date={certificate.date}
                content={certificate.content}
              />
            </article>
          </>
        )}
      </Container >
    </Layout >
  );
}

export async function getStaticProps({ params }) {
  const certificate = getCertificateBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'excerpt',
    'coverImage',
    'content',
  ]);

  const content = await markdownToHtml(certificate.content || '');

  return {
    props: {
      certificate: {
        ...certificate,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const certificates = getAllCertificates(['slug']);
  return {
    paths: certificates.map((certificate) => {
      return {
        params: {
          slug: certificate.slug,
        },
      };
    }),
    fallback: false,
  };
}
