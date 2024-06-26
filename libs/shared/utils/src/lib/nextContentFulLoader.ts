import {parseAspectRatio} from './parseAspectRatio';

export type ImageLoaderProps = {
  src: string;
  width: number;
  height?: number;
  quality?: number;
}

export type ContentfulImageParams = {
  ar?: string;
  fm?: 'jpg' | 'png' | 'webp' | 'gif' | 'avif';
  fl?: 'progressive' | 'png8';
  w?: number;
  h?: number;
  fit?: 'pad' | 'fill' | 'scale' | 'crop' | 'thumb';
  f?:
    | 'face'
    | 'faces'
    | 'center'
    | 'top'
    | 'right'
    | 'left'
    | 'bottom'
    | 'top_right'
    | 'top_left'
    | 'bottom_right'
    | 'bottom_left';
  r?: number | 'max';
  q?: number;
  bg?: string;
};

const defaultQuality = 75;

export const contentfulLoader = (loaderProps: ImageLoaderProps, contentfulParams?: ContentfulImageParams) => {
  if (process.env.NODE_ENV !== 'production') {
    const missingValues = [];

    // these should always be provided but make sure they are
    if (!loaderProps.src) missingValues.push('src');
    if (!loaderProps.width) missingValues.push('width');

    if (missingValues.length > 0)
      throw new Error(
        `Next Image Optimization requires ${missingValues.join(
          ', ',
        )} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify(
          {src: loaderProps.src, width: loaderProps.width, quality: loaderProps.quality},
        )}`,
      );

    if (loaderProps.src.startsWith('//'))
      throw new Error(
        `Failed to parse src "${loaderProps.src}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`,
      );
  }

  let adjustedContentfulParams: ContentfulImageParams;

  if (contentfulParams) {

    adjustedContentfulParams = {
      ...contentfulParams,
      q: loaderProps.quality ? loaderProps.quality : contentfulParams.q ? contentfulParams.q : defaultQuality,
      w: loaderProps.width,
      h: contentfulParams.ar ? Math.round(loaderProps.width * parseAspectRatio(contentfulParams.ar)) : loaderProps.height || contentfulParams.h || undefined,
    };
  } else {
    adjustedContentfulParams = {
      q: loaderProps.quality ? loaderProps.quality : defaultQuality,
      w: loaderProps.width,
    };
  }

  delete adjustedContentfulParams['ar'];
  if (typeof adjustedContentfulParams['h'] === 'undefined') delete adjustedContentfulParams['h'];

  // remove width and height if requesting a gif
  if (/\.gif$/gim.test(loaderProps.src)) {
    delete adjustedContentfulParams['w'];
    delete adjustedContentfulParams['h'];
    delete adjustedContentfulParams['fit'];
  }

  return `${loaderProps.src}?${new URLSearchParams(adjustedContentfulParams as { [key: string]: string }).toString()}`;
};

export default contentfulLoader;
