import { forwardRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

/* eslint-disable-next-line */
export interface SliderItemProps {
  title: string;
  description: string;
  image: string;
  video?: string;
  url?: string;
}

const SliderItem = forwardRef(
  ({ title, description, image, video, url }: SliderItemProps, ref) => {
    const router = useRouter();

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
          <video
            autoPlay
            muted
            loop
            playsInline
            className={
              'bottom-0 left-0 right-0 top-0 h-full w-full object-cover object-center'
            }
          >
            <source src={video} type="video/mp4" />
          </video>
        ) : (
          <picture>
            <div className={'hidden md:block w-full h-screen max-h-[1000px]'}>
              <Image
                src={image}
                alt={title}
                width={1920}
                height={1000}
                className={'object-cover object-center w-full h-full'}
              />
            </div>
            <div className={'block md:hidden  w-full h-screen max-h-[400px]'}>
              <Image
                src={image}
                alt={title}
                width={390}
                height={400}
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
