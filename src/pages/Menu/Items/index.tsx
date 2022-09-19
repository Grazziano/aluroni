import { useEffect, useState } from 'react';
import Item from './Item';
import items from 'data/menu.json';
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

  function orderIncreasingProperty(
    list: typeof items,
    property: 'size' | 'serving' | 'price'
  ) {
    return list.sort((a, b) => (a[property] > b[property] ? 1 : -1));
  }

  function orderBy(newList: typeof items) {
    switch (order) {
    case 'porcao':
      return orderIncreasingProperty(newList, 'size');
    case 'qtd_pessoas':
      return orderIncreasingProperty(newList, 'serving');
    case 'preco':
      return orderIncreasingProperty(newList, 'price');
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
