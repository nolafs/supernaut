import { getImageProps } from 'next/image';
/* eslint-disable-next-line */
export interface PictureProps {
  src: string;
  alt: string;
}

export function Picture({ src, alt }: PictureProps) {
  const {
    props: { ...rest },
  } = getImageProps({
    alt: alt,
    width: 600,
    height: 587,
    src: src,
  });
  const {
    props: { srcSet: desk },
  } = getImageProps({
    alt: alt,
    width: 1920,
    height: 1000,
    src: src,
  });

  return (
    <picture>
      <source media="(min-width: 600px)" srcSet={desk} />
      <img {...rest} alt={alt} />
    </picture>
  );
}

export default Picture;
