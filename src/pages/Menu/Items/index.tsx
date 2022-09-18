import { useEffect, useState } from 'react';
import Item from './Item';
import items from './items.json';
import styles from './Items.module.scss';

interface Props {
  search: string;
  filter: number | null;
  order: string;
}

export default function Items(props: Props) {
  const [list, setList] = useState(items);

  const { search, filter, order } = props;

  function searchTest(title: string) {
    const regex = new RegExp(search, 'i');
    return regex.test(title);
  }

  function filterTest(id: number) {
    if (filter !== null) return filter === id;
    return true;
  }

  function orderBy(newList: typeof items) {
    switch (order) {
      case 'porcao':
        return newList.sort((a, b) => (a.size > b.size ? 1 : -1));
      case 'qtd_pessoas':
        return newList.sort((a, b) => (a.serving > b.serving ? 1 : -1));
      case 'preco':
        return newList.sort((a, b) => (a.price > b.price ? 1 : -1));
      default:
        return newList;
    }
  }

  useEffect(() => {
    const newList = items.filter(
      (item) => searchTest(item.title) && filterTest(item.category.id)
    );
    setList(orderBy(newList));
  }, [search, filter, order]);

  return (
    <div className={styles.items}>
      {list.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}
