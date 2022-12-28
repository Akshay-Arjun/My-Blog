import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Container from '../../components/Container';
import Layout from '../../components/Layout';
import { getTryHackerBySlug, getAllTryHackers } from '../../lib/api';
import Head from 'next/head';
import { BASE_URL, ORG_NAME } from '../../lib/constants';
import Loader from '../../components/Loader';
import HackingDetail from '../../components/Hacking/HackingDetail';
import markdownToHtml from '../../lib/markdownToHtml';

export default function TryHacker({ tryhacker, moretryhackers, preview }) {
  const router = useRouter();

  if (!router.isFallback && !tryhacker?.slug) {
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
                {tryhacker.title} | {ORG_NAME}
              </title>
              <meta name="description" content={tryhacker.excerpt} />
              <meta property="og:image" content={`${BASE_URL}${tryhacker.coverImage}`} />
              <meta property="og:title" content={`${tryhacker.title} | ${ORG_NAME}`} />
              <meta property="og:description" content={tryhacker.excerpt} />
              <meta name="twitter:card" content="summary_large_image" />
              <meta property="twitter:title" content={`${tryhacker.title} | ${ORG_NAME}`} />
              <meta property="twitter:description" content={tryhacker.excerpt} />
              <meta property="twitter:image" content={`${BASE_URL}${tryhacker.coverImage}`} />
              <meta property="twitter:image:alt" content={tryhacker.title} />
            </Head>
            <article className="mb-32">
              <HackingDetail
                slug={tryhacker.slug}
                title={tryhacker.title}
                coverImage={tryhacker.coverImage}
                date={tryhacker.date}
                content={tryhacker.content}
              />
            </article>
          </>
        )}
      </Container >
    </Layout >
  );
}

export async function getStaticProps({ params }) {
  const tryhacker = getTryHackerBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'excerpt',
    'coverImage',
    'content',
  ]);

  const content = await markdownToHtml(tryhacker.content || '');

  return {
    props: {
      tryhacker: {
        ...tryhacker,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const hackers = getAllTryHackers(['slug']);
  return {
    paths: hackers.map((tryhacker) => {
      return {
        params: {
          slug: tryhacker.slug,
        },
      };
    }),
    fallback: false,
  };
}
