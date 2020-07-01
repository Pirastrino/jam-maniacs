require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Maniacs Brno',
    description: 'Clash Of Clans | Maniacs Brno',
    url: 'https://maniacs.netlify.app',
    author: 'Martin Began',
    keywords: ['clash of clans', 'maniacs', 'maniacs brno'],
    image: '',
    author: {
      name: 'Martin Began',
    },
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['Rubik:400,500,700'],
        display: 'swap',
      },
    },
  ],
};
