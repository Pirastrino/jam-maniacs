import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-grow: 1;
  padding: 0 2rem;
  font-weight: 700;
  font-size: 0.95rem;

  *:not(:last-child) {
    padding-right: 1rem;
  }
`;

const Navigation = () => {
  return (
    <Wrapper>
      <Link to="/rules">Pravidla</Link>
      <Link to="/clan">Klan</Link>
    </Wrapper>
  );
};

export { Navigation };
