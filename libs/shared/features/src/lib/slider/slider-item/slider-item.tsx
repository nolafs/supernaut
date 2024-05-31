import { forwardRef } from 'react';
import Image, {ImageLoader} from 'next/image';
import { useRouter } from 'next/navigation';
import {contentfulLoader} from "@delicious-simplicity/next-image-contentful-loader";
import {CldVideoPlayer} from 'next-cloudinary';
import 'next-cloudinary/dist/cld-video-player.css';
import styles from './slider.module.scss';

/* eslint-disable-next-line */
export interface SliderItemProps {
  title: string;
  description: string;
  image: string;
  video?: any;
  url?: string;
  work?: any;
}

const SliderItem = forwardRef(
  ({ title, description, image, video, url, work }: SliderItemProps, ref) => {
    const router = useRouter();

    console.log('SLIDER ITEM', video)

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

        return (<div className={styles['video-slide']}><CldVideoPlayer
          id={id}
          playsinline={true}
          src={video[0].public_id}
          sourceTypes={['webm', 'mp4', 'ogv']}
          transformation={{
            width: 1920,
            height: 1000,
            crop: 'fill',
            gravity: 'auto'
          }}
          width={1920}
          height={1000}
          autoplay={true}
          controls={false}
          muted={true}
          loop={true}
          fluid={false}
          className={'absolute w-full h-full'}
          />

          <Image
            src={`${image}`}
            alt={title}
            loader={(props) => contentfulLoader(props, {fit: 'fill', fm: 'webp'})}
            width={1920}
            height={1000}
            priority={true}
            className={'object-cover object-center w-full h-full max-h-[1000px] hidden md:block'}
          />

            <Image
              src={`${image}`}
              alt={title}
              loader={(props) => contentfulLoader(props, {fit: 'fill', f: 'center', fm: 'webp'})}
              width={390}
              height={400}
              priority={true}
              className={'object-cover object-center w-full  block md:hidden h-screen max-h-[400px]'}
            />

          </div>
        );
      };

    const handleClick = () => {
      //next router
      if (url) {
        router.push(url);
      }
    };


    return (
      <div className={'relative flex flex-col w-full h-full  text-primary'} onClick={handleClick}>
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
