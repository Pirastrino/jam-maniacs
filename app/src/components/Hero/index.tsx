import React, { useEffect } from 'react';
import styled from 'styled-components';

// @ts-ignore
import { useImage } from 'use-cloudinary';

import { Button } from '../Button';

const Wrapper = styled.div`
  display: flex;
  min-height: 350px;
  max-width: 400px;
  padding: 0 2rem;
  margin: auto;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    display: grid;
    grid-template-columns: 1fr 50px 1fr;
    grid-template-rows: 1fr;
    min-height: 450px;
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

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    grid-column-start: 1;
    grid-column-end: 3;
    text-align: left;
    align-items: flex-start;
    padding-top: 3rem;
  }
`;

const ImagePlaceholder = styled.div`
  display: none;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    display: block;
    margin-left: -50px;
  }
`;

const Hero = () => {
  const { getImage, data } = useImage({
    cloud_name: 'corpexlab',
  });

  useEffect(() => {
    getImage({
      public_id: 'v1593468435/maniacs/hero-king',
      transform_options: {},
    });
  }, []);

  return (
    <>
      <Wrapper>
        <StyledDiv>
          <h1>Vítej bojovníku!</h1>
          <p>
            Jsme parta Maníků z Brna, různé váhové kateogie, kteří v šalině a na
            záchodě hrají Clash of Clans. Chceš-li se naučit tomuto
            multitaskingu, jseš na správném místě!
          </p>
          <Button to="/rules">Pravidla</Button>
        </StyledDiv>
        <ImagePlaceholder>
          {data && <img src={data} alt="king" loading="lazy" width={400} />}
        </ImagePlaceholder>
      </Wrapper>
    </>
  );
};

export { Hero };
