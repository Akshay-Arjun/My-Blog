import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Container from '../../components/Container';
import Layout from '../../components/Layout';
import { getHackerBySlug, getAllHackers } from '../../lib/api';
import Head from 'next/head';
import { BASE_URL, ORG_NAME } from '../../lib/constants';
import Loader from '../../components/Loader';
import HackerDetail from '../../components/Hackers/HackerDetail';
import markdownToHtml from '../../lib/markdownToHtml';

export default function Hacker({ hacker, morehackers, preview }) {
  const router = useRouter();

  if (!router.isFallback && !hacker?.slug) {
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
                {hacker.title} | {ORG_NAME}
              </title>
              <meta name="description" content={hacker.excerpt} />
              <meta property="og:image" content={`${BASE_URL}${hacker.coverImage}`} />
              <meta property="og:title" content={`${hacker.title} | ${ORG_NAME}`} />
              <meta property="og:description" content={hacker.excerpt} />
              <meta name="twitter:card" content="summary_large_image" />
              <meta property="twitter:title" content={`${hacker.title} | ${ORG_NAME}`} />
              <meta property="twitter:description" content={hacker.excerpt} />
              <meta property="twitter:image" content={`${BASE_URL}${hacker.coverImage}`} />
              <meta property="twitter:image:alt" content={hacker.title} />
            </Head>
            <article className="mb-32">
              <HackerDetail
                slug={hacker.slug}
                title={hacker.title}
                coverImage={hacker.coverImage}
                date={hacker.date}
                content={hacker.content}
              />
            </article>
          </>
        )}
      </Container >
    </Layout >
  );
}

export async function getStaticProps({ params }) {
  const hacker = getHackerBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'excerpt',
    'coverImage',
    'content',
  ]);

  const content = await markdownToHtml(hacker.content || '');

  return {
    props: {
      hacker: {
        ...hacker,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const hackers = getAllHackers(['slug']);
  return {
    paths: hackers.map((hacker) => {
      return {
        params: {
          slug: hacker.slug,
        },
      };
    }),
    fallback: false,
  };
}
