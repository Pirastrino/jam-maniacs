import React, { useState } from 'react';
import styled from 'styled-components';

type Props = {
  alt: string;
  url: string;
  urlSmall?: string;
};

type ImgStylesProps = {
  isLoading: boolean;
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

const SmallImage = styled.img<ImgStylesProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  filter: blur(3px);
  will-change: opacity;
  opacity: ${props => (props.isLoading ? 1 : 0)};
  transition: opacity 300ms linear 0s;
`;

const Image = ({ url, urlSmall, alt }: Props) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoaded = () => setIsLoading(false);

  return (
    <Wrapper>
      <FullImage
        src={url}
        alt={alt}
        aria-hidden="true"
        loading="lazy"
        onLoad={handleLoaded}
      />
      {urlSmall ? (
        <SmallImage
          src={urlSmall}
          alt={alt}
          aria-hidden="true"
          loading="lazy"
          isLoading={isLoading}
        />
      ) : null}
    </Wrapper>
  );
};

export { Image };
