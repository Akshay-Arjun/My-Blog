import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Container from '../components/Container';
import Layout from '../components/Layout';
import { getBlogBySlug, getAllBlogs } from '../lib/api';
import Head from 'next/head';
import { BASE_URL, ORG_NAME } from '../lib/constants';
import markdownToHtml from '../lib/markdownToHtml';
import Loader from '../components/Loader';
import BlogDetail from '../components/Blogs/BlogDetail';

export default function Blog({ blog, moreBlogs, preview }) {
  const router = useRouter();

  if (!router.isFallback && !blog?.slug) {
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
                {blog.title} | {ORG_NAME}
              </title>
              <meta name="description" content={blog.excerpt} />
              <meta property="og:image" content={`${BASE_URL}${blog.coverImage}`} />
              <meta property="og:title" content={`${blog.title} | ${ORG_NAME}`} />
              <meta property="og:description" content={blog.excerpt} />
              <meta name="twitter:card" content="summary_large_image" />
              <meta property="twitter:title" content={`${blog.title} | ${ORG_NAME}`} />
              <meta property="twitter:description" content={blog.excerpt} />
              <meta property="twitter:image" content={`${BASE_URL}${blog.coverImage}`} />
              <meta property="twitter:image:alt" content={blog.title} />
            </Head>
            <article className="mb-32">
              <BlogDetail
                slug={blog.slug}
                title={blog.title}
                coverImage={blog.coverImage}
                date={blog.date}
                content={blog.content}
              />
            </article>
          </>
        )}
      </Container >
    </Layout >
  );
}

export async function getStaticProps({ params }) {
  const blog = getBlogBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'excerpt',
    'coverImage',
    'content',
  ]);

  const content = await markdownToHtml(blog.content || '');

  return {
    props: {
      blog: {
        ...blog,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const blogs = getAllBlogs(['slug']);
  return {
    paths: blogs.map((blog) => {
      return {
        params: {
          slug: blog.slug,
        },
      };
    }),
    fallback: false,
  };
}
