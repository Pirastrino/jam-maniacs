import React from 'react';
import styled from 'styled-components';
import { SEO } from '../components';
import { Rules } from '../components/Rules';

const Wrapper = styled.div`
  max-width: 900px;
  margin: auto;
  text-align: center;
  padding: 3rem 1rem 0 1rem;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    padding: 5rem 1rem;
  }
`;

const Title = styled.h1`
  margin-bottom: 3rem;
`;

const RulesPage = () => {
  return (
    <>
      <SEO title="Maniacs Brno | Pravidla" />
      <Wrapper>
        <Title>Pravidla</Title>
        <Rules />
      </Wrapper>
    </>
  );
};

export default RulesPage;
