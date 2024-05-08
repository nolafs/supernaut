import styles from './page.module.css';
import cn from 'classnames';
import {LogoAnimated} from '@supernaut/features';

export default function Index() {
  return (
    <div
      className={cn(
        styles.page,
        'flex flex-col w-full h-screen justify-center items-center '
      )}
    >
      <h1 className={'font-bold text-6xl'}>
        <LogoAnimated />
      </h1>
    </div>
  );
}
