module.exports = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.akshay-blog.vercel.app' }],
        destination: 'https://akshay-blog.vercel.app/:path*',
        permanent: true
      },
    ];
  },
};
