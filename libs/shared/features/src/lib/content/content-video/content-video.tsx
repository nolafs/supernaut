
/* eslint-disable-next-line */
import dynamic from 'next/dynamic';
import Vimeo from './vimeo';



export interface ContentVideoProps {
  id: string;
  type: 'video' | 'youtube' | 'vimeo';
  src: string;
  title: string;
  poster?: string;
  mode?: 'light' | 'dark';
}

export function ContentVideo({id, type, title, src, poster}: ContentVideoProps) {


  if(type === 'youtube') {

    const Youtube = dynamic(() => import('./youtube'));

    return (
      <div className={'flex w-full max-w-9xl mx-auto'}>
        <Youtube id={id} title={title} poster={poster} src={src} />
      </div>
    );
  }

  if(type === 'vimeo') {

    const vimeo = dynamic(() => import('./vimeo'));

    return (
      <div className={'flex w-full max-w-9xl mx-auto'}>
        <Vimeo id={id} title={title} poster={poster} src={src}/>
      </div>
    );
  }

  if (type === 'video') {
    return (
      <div className={'block w-full p-5'}>
        <h1>Welcome to ContentVideo!</h1>
      </div>
    );
  }

  return (
    <div className={'block w-full p-5'}>
      Type is defined
    </div>
  );
}

export default ContentVideo;
