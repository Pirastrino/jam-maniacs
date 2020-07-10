import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { SEO } from '../components/SEO';

const Wrapper = styled.div`
  margin: auto;
  text-align: center;
`;

const NotFoundPage: React.FC = () => (
  <>
    <SEO title="404: Not found" />
    <Wrapper>
      <h1>Oops! 404</h1>
      <h3>Gratuluji! Objevils samotný konec vesmíru.</h3>
      <Link to="/">Hlavní stránka</Link>
    </Wrapper>
  </>
);

export default NotFoundPage;
