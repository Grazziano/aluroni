import styles from './Item.module.scss';
import { Dish } from 'types/Dish';
import TagsDish from 'components/TagsDish';
import { useNavigate } from 'react-router-dom';

export default function Item(props: Dish) {
  const { id, title, description, photo } = props;

  const navigate = useNavigate();

  return (
    <div className={styles.item} onClick={() => navigate(`/dish/${id}`)}>
      <div className={styles.item__imagem}>
        <img src={photo} alt={title} />
      </div>
      <div className={styles.item__descricao}>
        <div className={styles.item__titulo}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <TagsDish {...props} />
      </div>
    </div>
  );
}
