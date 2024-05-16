'use client';
/* eslint-disable-next-line */
import dynamic from 'next/dynamic';


export interface ContentVideoProps {
  id: string;
  type: 'video' | 'youtube' | 'vimeo';
  src: string;
  title: string;
  poster?: string;
  frame?: boolean;
  mode?: 'light' | 'dark';
  autoplay?: boolean;
  controls?: boolean
}

export function ContentVideo({id, type, title, src, poster, autoplay = true, controls = false, frame= false}: ContentVideoProps) {

  if(!src) {
    return (
      <div className={'block w-full p-5'}>
        No Video defined
      </div>
    );
  }

  if(type === 'youtube') {

    const Youtube = dynamic(() => import('./youtube'));

    return (
        <Youtube id={id} title={title} poster={poster} src={src}  />
    );
  }

  if(type === 'vimeo') {

    const Vimeo = dynamic(() => import('./vimeo'));

    return (
        <Vimeo id={id} title={title} poster={poster} src={src}/>
    );
  }

  if (type === 'video') {

    const CloudinaryVideo = dynamic(() => import('./video'));

    return (
          <CloudinaryVideo id={id} title={title} poster={poster} src={src} autoplay={autoplay} controls={controls} frame={frame} />
    );
  }

  return (
    <div  className={'block w-full p-5'}>
      Type is defined
    </div>
  );
}

export default ContentVideo;
