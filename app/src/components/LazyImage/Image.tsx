import React from 'react';
import styled from 'styled-components';

type Props = {
  alt: string;
  url: string;
  urlSmall?: string;
};

const Wrapper = styled.div`
  display: block;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

const FullImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
`;

const Image = ({ url, alt }: Props) => {
  return (
    <Wrapper>
      <FullImage src={url} alt={alt} aria-hidden="true" loading="lazy" />
    </Wrapper>
  );
};

export { Image };
