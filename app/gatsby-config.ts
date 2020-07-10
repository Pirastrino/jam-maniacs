export const siteMetadata = {
  title: 'Maniacs Brno',
  description: 'Clash Of Clans | Maniacs Brno',
  url: 'https://maniacs.netlify.app',
  author: 'Martin Began',
  keywords: ['clash of clans', 'maniacs', 'maniacs brno'],
  image: '',
};

export const plugins = [
  'gatsby-plugin-typescript',
  'gatsby-plugin-react-helmet',
  'gatsby-plugin-styled-components',
  {
    resolve: `gatsby-plugin-webfonts`,
    options: {
      fonts: {
        google: [
          {
            family: 'Rubik',
            variants: ['400', '500', '700'],
            subsets: ['latin-ext'],
            fontDisplay: 'swap',
            strategy: 'selfHosted',
          },
        ],
      },
      formats: ['woff2', 'woff'],
      useMinify: true,
      usePreload: true,
    },
  },
];
