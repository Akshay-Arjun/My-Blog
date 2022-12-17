/** @type {import('next-sitemap').IConfig} */
const DOMAIN = 'https://akshay-blog.vercel.app';

const BASE_URL = process.env.VERCEL_ENV === 'production'
  ? DOMAIN
  : process.env.VERCEL_ENV === 'preview'
    ? `https://${process.env.VERCEL_URL}`
    : '';

const config = {
  siteUrl: BASE_URL,
  generateRobotsTxt: true,
  exclude: ['/sitemap.xml'],
  robotsTxtOptions: {
    additionalSitemaps: [
      BASE_URL + '/sitemap.xml',
    ],
  },
};

module.exports = config;
