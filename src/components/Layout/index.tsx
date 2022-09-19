import { Outlet } from 'react-router-dom';
import styles from './Layout.module.scss';
import stylesTheme from 'styles/Theme.module.scss';

export default function Layout() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__text}>A casa do código e da massa</div>
      </header>
      <div className={stylesTheme.container}>
        <Outlet />
      </div>
    </>
  );
}
