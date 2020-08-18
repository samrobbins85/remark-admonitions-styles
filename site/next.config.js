const images = require('remark-images')
const emoji = require('remark-emoji')
const admonitions = require('remark-admonitions')
const syntax = require('@mapbox/rehype-prism')
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [images, emoji, admonitions],
    rehypePlugins: [syntax]
  }
})

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx']
})
