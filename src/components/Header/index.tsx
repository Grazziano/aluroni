import { ReactComponent as Logo } from 'assets/logo.svg';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <nav className={styles.menu}>
      <Logo />
    </nav>
  );
}
