module.exports = {
  siteMetadata: {
    title: 'Maniacs Brno',
    description: 'ClashOfClans Clan Page | Maniacs Brno',
    author: {
      name: 'Martin Began',
    },
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['Rubik:400,500,700'],
        display: 'swap',
      },
    },
  ],
};
