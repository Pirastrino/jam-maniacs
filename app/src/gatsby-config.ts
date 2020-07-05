export const siteMetadata = {
  title: 'Maniacs Brno',
  description: 'Clash Of Clans | Maniacs Brno',
  url: 'https://maniacs.netlify.app',
  author: 'Martin Began',
  keywords: ['clash of clans', 'maniacs', 'maniacs brno'],
  image: '',
};

export const plugins = [
  'gatsby-plugin-styled-components',
  'gatsby-plugin-typescript',
  'gatsby-plugin-react-helmet',
  'gatsby-plugin-use-dark-mode',
  {
    resolve: 'gatsby-plugin-google-fonts',
    options: {
      fonts: ['Rubik:400,500,700'],
      display: 'swap',
    },
  },
];
