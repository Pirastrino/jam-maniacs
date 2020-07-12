import React, { useEffect } from 'react';
import styled from 'styled-components';
//@ts-ignore
import { useImage } from 'use-cloudinary';

const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
const publicIdBase = process.env.CLOUDINARY_PUBLIC_ID_BASE;

type Props = {
  name: string;
};

type ImgProps = {
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

const SmallImage = styled.img<ImgProps>`
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

const LazyImage = ({ name }: Props) => {
  const { generateUrl, url, isLoading, isError } = useImage({
    cloudName,
  });

  const publicId = `${publicIdBase}/${name}`;
  const imgUrl = `https://res.cloudinary.com/${cloudName}/image/upload/w_50,q_1,f_auto/${publicId}`;

  React.useEffect(() => {
    generateUrl({
      publicId,
      transformations: {},
    });
  }, [publicId]);

  if (isError) return null;

  return (
    <Wrapper>
      {!isLoading ? (
        <picture>
          <source srcSet={`${url}.webp`} type="image/webp" />
          <source srcSet={`${url}.jpg`} type="image/jpeg" />
          <FullImage src={url} alt={name} aria-hidden="true" loading="lazy" />
        </picture>
      ) : null}
      <picture>
        <source srcSet={`${imgUrl}.webp`} type="image/webp" />
        <source srcSet={`${imgUrl}.jpg`} type="image/jpeg" />
        <SmallImage
          src={imgUrl}
          alt={name}
          aria-hidden="true"
          loading="lazy"
          isLoading={isLoading}
        />
      </picture>
    </Wrapper>
  );
};

export { LazyImage };
