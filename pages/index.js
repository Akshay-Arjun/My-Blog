import Head from 'next/head';
import React from 'react';
import Container from '../components/Container';
import Layout from '../components/Layout';
import { HOME_OG_IMAGE_URL, ORG_NAME } from '../lib/constants';

export default function Index({ allBlogs }) {
return (
<>
<Layout>
<Head>
<title>Personal Blog | {ORG_NAME}</title>
<meta
name="description"
content={`${ORG_NAME}`}
/>
<meta property="og:image" content={HOME_OG_IMAGE_URL} />
</Head>
<Container>
<div className='content-center pb-10 mb-5'>
<h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Welcome to my Blog!</h1>
<p style={{ fontSize: '1.2rem', lineHeight: '1.5', marginBottom: '1rem' }}>
My name is Akhay and this is my personal blog. Here, you can find hackthebox writeups, hackerone reports, tryhackme writeups, and my certificates. I hope you enjoy reading my content.
</p>
</div>
</Container>
</Layout>
</>
);
}





