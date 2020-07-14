import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import { SEO } from '../components';
import { ClanRules } from '../components/ClanRules';

const allClanRulesQuery = graphql`
  {
    allClanRule {
      rules: nodes {
        id
        description
        title
      }
    }
  }
`;

const Wrapper = styled.div`
  max-width: 900px;
  margin: auto;
  text-align: center;
  padding: 3rem 1rem 0 1rem;

  @media (min-width: ${props => props.theme.respondUp.md}) {
    padding: 5rem 1rem;
  }
`;

const Title = styled.h1`
  margin-bottom: 3rem;
`;

const RulesPage = () => {
  const data = useStaticQuery(allClanRulesQuery);

  return (
    <>
      <SEO title="Maniacs Brno | Clan Rules" />
      <Wrapper>
        <Title>Pravidla</Title>
        <ClanRules data={data} />
      </Wrapper>
    </>
  );
};

export default RulesPage;
