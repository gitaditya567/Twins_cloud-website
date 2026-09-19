/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  allowedDevOrigins: ['172.18.128.1', '172.24.48.1', '172.17.160.1', 'localhost:3000', '127.0.0.1:3000', 'localhost:3005'],
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:5050/api/:path*'
      }
    ];
  },
  async redirects() {
    return [
      // 1. Index variations
      { source: '/index', destination: '/', permanent: true },
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/index.php', destination: '/', permanent: true },
      { source: '/&', destination: '/', permanent: true },

      // 2. Singular vs Plural variants
      { source: '/services', destination: '/service', permanent: true },
      { source: '/projects', destination: '/project', permanent: true },
      { source: '/case-studies', destination: '/case-study', permanent: true },
      { source: '/blogs', destination: '/blog', permanent: true },

      // 3. Contact & Form variants
      { source: '/contact', destination: '/consultation', permanent: true },
      { source: '/contact-us', destination: '/consultation', permanent: true },
      { source: '/contacts', destination: '/consultation', permanent: true },
      { source: '/form', destination: '/rfq', permanent: true },
      { source: '/faq', destination: '/service', permanent: true },

      // 4. Underscore vs Hyphen URLs
      { source: '/terms_conditions', destination: '/terms-of-service', permanent: true },
      { source: '/privacy_policy', destination: '/privacy-policy', permanent: true },
      { source: '/case_study', destination: '/case-study', permanent: true },

      // 5. Legacy Website / Book Publishing routes
      { source: '/journals', destination: '/project', permanent: true },
      { source: '/publish-book', destination: '/service', permanent: true },
      { source: '/book-store', destination: '/project', permanent: true },
      { source: '/e-book', destination: '/project', permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: '/admin/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow'
          }
        ]
      },
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow'
          }
        ]
      },
      {
        source: '/((?!admin|api).*)',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
          }
        ]
      },
      {
        source: '/:file*.(mp4|webp|png|jpg|jpeg|svg|ico|woff2)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      }
    ];
  }
};

export default nextConfig;
