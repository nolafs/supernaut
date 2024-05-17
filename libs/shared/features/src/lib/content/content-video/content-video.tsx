'use client';
/* eslint-disable-next-line */
import dynamic from 'next/dynamic';
const NotificationBlock = dynamic(() => import('@supernaut/shared-ui').then((mod) => mod.NotificationBlock));


export interface ContentVideoProps {
  id: string;
  type: 'video' | 'youtube' | 'vimeo';
  src: string;
  videoUpload?: any,
  title?: string;
  poster?: string;
  frame?: boolean;
  mode?: 'light' | 'dark';
  autoplay?: boolean;
  controls?: boolean
}

export function ContentVideo({id, type, title, src, videoUpload, poster, autoplay = true, controls = false, frame= false}: ContentVideoProps) {

  if(!src && !videoUpload[0]?.public_id) {
    return (
      <NotificationBlock body={'No video source found'} type={'error'} />
    );
  }

  if(!type) {
    return (
      <NotificationBlock body={'No video type found'} type={'error'} />
    );
  }

  if(type === 'youtube') {

    const Youtube = dynamic(() => import('./youtube'));

    return (
        <Youtube id={id} title={title || id} poster={poster} src={src}  />
    );
  }

  if(type === 'vimeo') {

    const Vimeo = dynamic(() => import('./vimeo'));

    return (
        <Vimeo id={id} title={title || id} poster={poster} src={src}/>
    );
  }

  if (type === 'video') {

    const CloudinaryVideo = dynamic(() => import('./video'));

    return (
          <CloudinaryVideo id={id} title={title || id} poster={poster} src={videoUpload[0].public_id} autoplay={autoplay} controls={controls} frame={frame} />
    );
  }

  return (
    <div  className={'block w-full p-5'}>
      Type is defined
    </div>
  );
}

export default ContentVideo;
