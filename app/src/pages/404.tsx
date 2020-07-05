import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';

const Wrapper = styled.div`
  margin: auto;
  text-align: center;
`;

const NotFoundPage: React.FC = () => (
  <Layout>
    <Wrapper>
      <SEO title="404: Not found" />
      <h1>Oops! 404</h1>
      <h3>Gratuluji! Objevils samotný konec vesmíru.</h3>
      <Link to="/">Hlavní stránka</Link>
    </Wrapper>
  </Layout>
);

export default NotFoundPage;
