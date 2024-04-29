import styles from './page.module.css';
import cn from 'classnames';


export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className={cn(styles.page, 'bg-black')}>
      <h1 className={'font-bold text-6xl'}>Welcome to page!</h1>
    </div>
  );
}
