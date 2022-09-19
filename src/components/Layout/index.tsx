import { Outlet } from 'react-router-dom';
import styles from './Layout.module.scss';

export default function Layout() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__text}>A casa do código e da massa</div>
      </header>
      <div>
        <Outlet />
      </div>
    </>
  );
}
