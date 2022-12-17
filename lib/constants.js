const DOMAIN = 'https://akshay-blog.vercel.app';

export const ORG_NAME = "Akshay's Blog";
export const HOME_OG_IMAGE_URL =
  'https://raw.githubusercontent.com/Akshay-Arjun/akshay-arjun.github.io/main/src/data/me.jpg';
export const BASE_URL = process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'
  ? DOMAIN
  : process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview'
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : '';
