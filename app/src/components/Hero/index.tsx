import React from 'react';
import styled from 'styled-components';
import { ImageCloudinary } from '../LazyImage';
import { Button } from '../Button';

const Wrapper = styled.div`
  display: flex;
  min-height: 350px;
  max-width: 400px;
  padding: 0 2rem;
  margin: auto;

  @media (min-width: ${props => props.theme.respondUp.md}) {
    display: grid;
    grid-template-columns: 1fr 418px;
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
    text-align: left;
    align-items: flex-start;
    padding-top: 3rem;
  }
`;

const ImageHero = styled(ImageCloudinary)`
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
        <ImageHero name="hero-king" />
      </Wrapper>
    </>
  );
};

export { Hero };
