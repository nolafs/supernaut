/* eslint-disable-next-line */
import {AdvancedVideo, lazyload} from '@cloudinary/react';
import {Cloudinary} from '@cloudinary/url-gen';
import {fill} from "@cloudinary/url-gen/actions/resize";
import cn from 'classnames';
import Image from 'next/image';
import {useRef, useState} from 'react';
import placeholder_white from '../../../assets/placeholder-white.webp';
import placeholder from '../../../assets/placeholder.webp';
import ContentVideoAnimation from '../content-video-animation';


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

  const cld = new Cloudinary({
    cloud: {
      cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'biff-new-media'
    }
  });

  const videoSource = cld.video(src);

  videoSource.resize(fill().width(width).height(height));

  const handlePlay = (pause = false) => {
    console.log('handlePlay', pause, videoSource)
    if (autoplay) {
      ref.current.videoRef.current.play();
    }
  }

  const handleReplay = (pause = false) => {
    console.log('handlePlay', pause, videoSource)
    if (autoplay) {
      ref.current.videoRef.current.currentTime = 0
      ref.current.videoRef.current.play();
    }
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
    <div className={cn('', frame && 'wrapper relative p-4 md:p-10')}>
      <div className={cn('relative video')}>
        <div
          className={cn('w-full h-full overflow-hidden z-20 aspect-w-16 aspect-h-9')}>
          <AdvancedVideo
            ref={ref}
            muted={(autoplay) ? true : false}
            plugins={[lazyload()]}
            cldVid={videoSource}
            controls={controls}
            playsInline={true}
            autoPlay={false}
            loop={loop}
            onPlay={handlePlaying}
            onEnded={handleEnded}

          />
        </div>

        { (poster) &&
          <Image width={width} height={height} loading={'lazy'}
                            className={'z-10'}
                            src={poster}
                            quality={60}
                            alt={title}/>
        }
      </div>
    </div>
    </ContentVideoAnimation>
  );
}

export default CloudinaryVideo;
