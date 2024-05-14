/* eslint-disable-next-line */
import {AdvancedVideo, lazyload} from '@cloudinary/react';
import {Cloudinary} from '@cloudinary/url-gen';
import {fill} from "@cloudinary/url-gen/actions/resize";
import cn from 'classnames';
import Image from 'next/image';
import {useRef} from 'react';
import placeholder_white from '../../assets/placeholder-white.webp';
import placeholder from '../../assets/placeholder.webp';


export interface VideoProps {
  id: string;
  src?: string;
  title: string;
  poster?: string;
  width?: number;
  height?: number;
  mode?: 'light' | 'dark';
}


export function CloudinaryVideo({id, src, title, poster, mode, width = 1920, height = 1200}: VideoProps) {

  const ref = useRef<any>(null);

  const cld = new Cloudinary({
    cloud: {
      cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'biff-new-media'
    }
  });

  const videoSource = cld.video(src);

  videoSource.resize(fill().width(width).height(height));


  return (
    <div className={'relative'}>
      <div
        className={cn('absolute bg-neutral w-full h-full overflow-hidden z-20 aspect-w-16 aspect-h-9')}>
        <AdvancedVideo
          autoPlay={true}
          muted={true}
          plugins={[lazyload()]}
          cldVid={videoSource}
          controls
          //cldPoster={videoSource.format('webp')}
        />
      </div>
      <Image width={width} height={height} loading={'lazy'}
             className={'z-10'}
             src={(mode === 'light') ? placeholder : placeholder_white}
             quality={60}
             alt={title}/>
    </div>
  );
}

export default CloudinaryVideo;
