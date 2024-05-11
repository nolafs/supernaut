
/* eslint-disable-next-line */
import dynamic from 'next/dynamic';




export interface ContentVideoProps {
  id: string;
  type: 'video' | 'youtube' | 'vimeo';
  src: string;
  title: string;
  poster?: string;
  mode?: 'light' | 'dark';
}

export function ContentVideo({id, type, title, src, poster}: ContentVideoProps) {

  if(!src) {
    return (
      <div className={'block w-full p-5'}>
        No src defined
      </div>
    );
  }


  if(type === 'youtube') {

    const Youtube = dynamic(() => import('./youtube'));

    return (
      <div className={'flex w-full max-w-9xl mx-auto'}>
        <Youtube id={id} title={title} poster={poster} src={src} />
      </div>
    );
  }

  if(type === 'vimeo') {

    const Vimeo = dynamic(() => import('./vimeo'));

    return (
      <div className={'flex w-full max-w-9xl mx-auto'}>
        <Vimeo id={id} title={title} poster={poster} src={src}/>
      </div>
    );
  }

  if (type === 'video') {

    const Video = dynamic(() => import('./video'));

    return (
      <div className={'flex w-full max-w-9xl mx-auto'}>
        <Video id={id} title={title} poster={poster} src={src}/>
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
