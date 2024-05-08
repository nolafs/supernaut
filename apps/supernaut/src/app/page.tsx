import styles from './page.module.css';
import cn from 'classnames';

export default function Index() {
  return (
    <div
      className={cn(
        styles.page,
        'flex flex-col w-full h-screen justify-center items-center '
      )}
    >
      <h1 className={'font-bold text-6xl'}>Supernaut</h1>
    </div>
  );
}
