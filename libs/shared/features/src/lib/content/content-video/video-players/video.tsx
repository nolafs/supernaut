/* eslint-disable-next-line */
'use client';
import cn from 'classnames';
import {useEffect, useRef} from 'react';
import ContentVideoAnimation from '../content-video-animation';
import {CldVideoPlayer} from 'next-cloudinary';
import 'next-cloudinary/dist/cld-video-player.css';

export interface VideoProps {
  id: string;
  src?: string;
  title: string;
  poster?: string;
  width?: number;
  height?: number;
  autoplay?: boolean;
  controls?: boolean;
  loop?: boolean;
  frame?: boolean;
  className?: string;
  standard?: boolean;
}


export function CloudinaryVideo({id, src, title, autoplay, poster, frame,  controls = true, loop = false, width = 1920, height = 1200, className, standard= true}: VideoProps) {

  const ref = useRef<any>(null);
  let posterFormat:any = {format: 'webp'};

  useEffect(() => {
    if(autoplay) {
      ref.current.pause();
    }
  }, [ref]);

  if(!width){
    width = 1920;
  }

  if(!height){
    height = 1200
  }

  if (poster) {
    posterFormat = `${poster}?fm=webp&w=${width}&h=${height}&fit=fill`;
  }

  const handlePlay = (pause = false) => {
    if (autoplay) {
      ref.current.play();
   }
  }

  const handleReplay = (pause = false) => {
    if (autoplay) {
      if(ref.current.currentTime === ref.current.duration) {
        ref.current.currentTime = 0
      }
     ref.current.play();
    }
  }

  const handlePause = (pause = false) => {
    ref.current.pause();

  }


  return (<ContentVideoAnimation
      handlePause={handlePause}
      handleReplay={handleReplay}
      handlePlay={handlePlay}
    >

      <div className={cn('video', standard ? ( 'relative ' + frame && 'wrapper p-4 md:p-10'): 'absolute flex flex-col w-full h-full')}>

            {(src) &&
            <CldVideoPlayer
              videoRef={ref}
              width={width}
              height={height}
              id={id}
              autoplay={autoplay}
              playsinline={true}
              controls={controls}
              loop={loop}
              fluid={true}
              //poster='auto'
              muted={(autoplay) ? true : false}
              className={cn('w-full h-full object-cover bg-transparent', className) }
              src={src}
              sourceTypes={[ 'webm', 'mp4' , 'ogv' ]}

              poster={posterFormat}
              transformation={{
                width: width,
                height: height,
                crop: 'fill',
                gravity: 'auto'
              }}
            />
            }


        </div>

    </ContentVideoAnimation>
  );
}

export default CloudinaryVideo;
