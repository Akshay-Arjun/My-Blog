import Head from 'next/head';

export default function Meta() {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/assets/intro.jpeg"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/assets/intro.jpg"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/assets/intro.jpg"
      />
    
      <link
        rel="mask-icon"
        href="/assets/intro.jpg"
        color="#2e4a79"
      />
      <link rel="shortcut icon" href="https://akshay-blog.vercel.app/assets/intro.jpg" />
      <meta name="msapplication-TileColor" content="#2e4a79" />
      <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
      <meta name="theme-color" content="#2e4a79" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="twitter:site" content="@x4k5h4yx" />
    </Head>
  );
}
