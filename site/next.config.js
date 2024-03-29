const images = require('remark-images')
const emoji = require('remark-emoji')
const admonitions = require('remark-admonitions')
const syntax = require('@mapbox/rehype-prism')
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [images, emoji, [admonitions, {
      customTypes: {
        custom: {
          emoji: '💻',
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"></path></svg>'
        }
      }}]],
    rehypePlugins: [syntax]
  }
})

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  eslint: {
		ignoreDuringBuilds: true,
	},
})
