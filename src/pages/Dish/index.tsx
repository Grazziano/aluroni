import { useLocation } from 'react-router-dom';
import styles from './Dish.module.scss';

export default function Dish() {
  const teste = useLocation();
  console.log(teste);

  return <div>Prato</div>;
}
