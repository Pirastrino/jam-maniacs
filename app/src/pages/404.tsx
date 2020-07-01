import React from 'react';
import { Link } from 'gatsby';
// import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';

const NotFoundPage: React.FC = () => (
  <>
    {/* <Layout> */}
    <SEO title="404: Not found" />
    <h1>Oops! 404</h1>
    <h3>Gratuluji! Objevils samotný konec vesmíru.</h3>
    <Link to="/">Hlavní stránka</Link>
    {/* </Layout> */}
  </>
);

export default NotFoundPage;
