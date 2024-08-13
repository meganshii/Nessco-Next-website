/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'i.pinimg.com',
      'upload.wikimedia.org',
      'www.ignant.com',
      'assets.aceternity.com',
      'images.unsplash.com',
      'www.youtube.com',
      'piano.io',
      'www.svgrepo.com',
      'in.pinterest.com',
      'restcountries.com'
    ], // Add any other domains you need
  },
  swcMinify: true,
};

export default nextConfig;
