import React from 'react';
import styled from 'styled-components';
import { LazyImage } from '../LazyImage';
import { Button } from '../Button';

const Wrapper = styled.div`
  display: flex;
  min-height: 350px;
  max-width: 400px;
  padding: 0 2rem;
  margin: auto;

  @media (min-width: ${props => props.theme.respondUp.md}) {
    display: grid;
    grid-template-columns: 1fr 50px 1fr;
    grid-template-rows: 1fr;
    min-height: 420px;
    max-width: 900px;
    padding: 0 2rem;
    margin: auto;
  }

  & p {
    padding-bottom: 2rem;
  }

  & button {
    margin: 0;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 2rem;
  align-items: center;
  text-align: center;

  @media (min-width: ${props => props.theme.respondUp.md}) {
    grid-column-start: 1;
    grid-column-end: 3;
    text-align: left;
    align-items: flex-start;
    padding-top: 3rem;
  }
`;

const ImagePlaceholder = styled.div`
  display: none;

  @media (min-width: ${props => props.theme.respondUp.md}) {
    display: block;
  }
`;

const Hero = () => {
  return (
    <>
      <Wrapper>
        <StyledDiv>
          <h1>Vítej bojovníku!</h1>
          <p>
            Jsme parta Maníků z Brna, různé váhové kategorie, kteří v šalině a
            na záchodě hrají Clash of Clans. Chceš-li se naučit tomuto
            multitaskingu, jseš na správném místě!
          </p>
          <Button to="/rules">Pravidla</Button>
        </StyledDiv>
        <ImagePlaceholder>
          <LazyImage name="hero-king" />
        </ImagePlaceholder>
      </Wrapper>
    </>
  );
};

export { Hero };
