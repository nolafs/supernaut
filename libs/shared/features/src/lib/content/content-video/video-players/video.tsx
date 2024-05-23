/* eslint-disable-next-line */
import {AdvancedVideo, lazyload} from '@cloudinary/react';
import {Cloudinary} from '@cloudinary/url-gen';
import {fill} from "@cloudinary/url-gen/actions/resize";
import cn from 'classnames';
import Image from 'next/image';
import {useRef} from 'react';
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
}


export function CloudinaryVideo({id, src, title, autoplay, poster, frame,  controls = true, loop = false, width = 1920, height = 1200}: VideoProps) {

  const ref = useRef<any>(null);
  const posterFormat:any = {format: 'webp'};

  if(!width){
    width = 1920;
  }

  if(!height){
    height = 1200
  }

  const handlePlay = (pause = false) => {

    //if (autoplay) {
      //ref.current.videoRef.current.play();
   // }
  }

  const handleReplay = (pause = false) => {

    //if (autoplay) {
    //  ref.current.videoRef.current.currentTime = 0
    //  ref.current.videoRef.current.play();
    //}
  }

  const handlePause = (pause = false) => {
     // ref.current.videoRef.current.pause();
  }

  const handlePlaying = (e: any) => {
    console.log('handlePlaying', e)
  }

  const handleEnded = (e: any) => {
    console.log('handleEnded', e)
  }


  return (<ContentVideoAnimation
      handlePause={handlePause}
      handleReplay={handleReplay}
      handlePlay={handlePlay}
    >

      <div className={cn('relative', frame && 'wrapper p-4 md:p-10')}>

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
              className={'w-full h-full object-cover bg-transparent' }
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
