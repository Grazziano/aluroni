import { ReactComponent as Logo } from 'assets/logo.svg';
import styles from './Navbar.module.scss';

export default function Navbar() {
  const rotas = [
    { label: 'Início', to: '/' },
    { label: 'Cardápio', to: '/menu' },
    { label: 'Sobre', to: '/about' },
  ];

  return (
    <nav className={styles.menu}>
      <Logo />

      <ul className={styles.menu__list}>
        {rotas.map((rota, index) => (
          <li key={index} className={styles.menu__link}>
            <a href={rota.to}>{rota.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
