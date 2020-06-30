import React, { useEffect } from 'react';
import styled from 'styled-components';
// @ts-ignore
import { useImage } from 'use-cloudinary';
import { Button } from '../Button';

const Wrapper = styled.div`
  /* background-color: lightblue; */
  display: flex;
  max-width: 900px;
  height: 100%;
  padding: 2rem;
  margin: auto;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 2rem;
  padding-top: 1.5rem;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  max-width: 470px;
  min-height: 300px;
  z-index: 10;

  p {
    margin-bottom: 2rem;
  }

  @media (min-width: ${props => props.theme.bp.md}) {
    text-align: left;
    align-items: flex-start;
    margin-right: -50px;
    padding-top: 2rem;

    p {
      margin-bottom: 4rem;
    }
  }
`;

const ImagePlaceholder = styled.div`
  display: none;

  @media (min-width: ${props => props.theme.bp.md}) {
    display: block;
    max-width: 400px;
    max-height: 500px;
  }
`;

export const Hero = () => {
  const { getImage, data, status, error } = useImage({
    cloud_name: 'corpexlab',
  });

  useEffect(() => {
    getImage({
      public_id: 'v1593468435/maniacs/hero-king.webp',
      transform_options: {},
    });
  }, []);

  return (
    <Wrapper>
      <StyledDiv>
        <h1>Vítej bojovníku!</h1>
        <p>
          Jsme parta Maníků z Brna, různé váhové kateogie, kteří v šalině a na
          záchodě hrají Clash of Clans. Chceš-li se naučit tomuto multitaskingu,
          jseš na správném místě!
        </p>
        <Button link="/">Pravidla</Button>
      </StyledDiv>
      <ImagePlaceholder>
        {data && (
          <img src={data} alt="Transformed from Cloudinary" width={400} />
        )}
      </ImagePlaceholder>
    </Wrapper>
  );
};
