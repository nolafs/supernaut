import { forwardRef } from 'react';
import Image, {ImageLoader} from 'next/image';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import {contentfulLoader} from "@delicious-simplicity/next-image-contentful-loader";

/* eslint-disable-next-line */
export interface SliderItemProps {
  title: string;
  description: string;
  image: string;
  video?: string;
  url?: string;
  work?: any;
}

const SliderItem = forwardRef(
  ({ title, description, image, video, url, work }: SliderItemProps, ref) => {
    const router = useRouter();

    if(work) {
      url = `/work/${work.slug}`;
      if(!image){
        image = work.featureImage.url;
      }
      if(!title){
        title = work.title;
      }
      if(!description){
        description = work.subtitle;
      }
    }

    const addVideoPlayer = (id: string, title: string,  video: any, poster: string) => {
        const Video = dynamic(() => import('../../content/content-video/video-players/video').then((mod) => mod.CloudinaryVideo));
        return <Video
          id={id}
          title={title || id}
          poster={poster}
          src={video[0]?.public_id}
          autoplay={true}
          controls={true}
          frame={false} />

      };

    const handleClick = () => {
      //next router
      if (url) {
        router.push(url);
      }
    };


    return (
      <div className={'relative  text-primary'} onClick={handleClick}>
        <div className={'sr-only'}>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        {video ? (
          addVideoPlayer(title, description, video, image)
        ) : (
          <picture>
            <div className={'hidden md:block w-full h-screen max-h-[1000px]'}>
              <Image
                src={`${image}`}
                alt={title}
                loader={(props) => contentfulLoader(props, {fit: 'fill', fm: 'webp'})}
                width={1920}
                height={1000}
                priority={true}
                className={'object-cover object-center w-full h-full'}
              />
            </div>
            <div className={'block md:hidden  w-full h-screen max-h-[400px]'}>
              <Image
                src={`${image}`}
                loader={(props) => contentfulLoader(props, {fit: 'fill', f: 'center', fm: 'webp'})}
                alt={title}
                width={390}
                height={400}
                priority={true}
                className={'object-cover object-center  w-full h-full'}
              />
            </div>
          </picture>
        )}
      </div>
    );
  }
);

export default SliderItem;
