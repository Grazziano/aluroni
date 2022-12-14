import styles from './Menu.module.scss';
import stylesTheme from 'styles/Theme.module.scss';
import Search from './Search';
import { useState } from 'react';
import Filters from './Filters';
import Order from './Order';
import Items from './Items';

export default function Menu() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<number | null>(null);
  const [order, setOrder] = useState('');

  return (
    <section className={styles.menu}>
      <h3 className={stylesTheme.titulo}>Menu</h3>
      <Search search={search} setSearch={setSearch} />
      <div className={styles.menu__filters}>
        <Filters filter={filter} setFilter={setFilter} />
        <Order order={order} setOrder={setOrder} />
      </div>

      <Items search={search} filter={filter} order={order} />
    </section>
  );
}
