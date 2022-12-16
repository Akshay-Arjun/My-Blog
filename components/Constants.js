export const ORG_NAME = "Akshay's Blog";
export const HOME_OG_IMAGE_URL =
  '';
export const BASE_URL = process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'
  ? DOMAIN
  : process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview'
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : '';