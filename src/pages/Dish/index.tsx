import { useParams } from 'react-router-dom';
import styles from './Dish.module.scss';

export default function Dish() {
  const { id } = useParams();

  return <div>Prato</div>;
}
