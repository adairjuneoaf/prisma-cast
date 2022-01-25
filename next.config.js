/** @type {import('next').NextConfig} */

const withImages = require('next-images')

module.exports = withImages({
  esModule: true,
  reactStrictMode: true,
  images: {
    domains: ['source.unsplash.com', 'storage.googleapis.com']
  }
})
