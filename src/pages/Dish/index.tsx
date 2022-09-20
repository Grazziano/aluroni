import classNames from 'classnames';
import { useLocation } from 'react-router-dom';
import styles from './Dish.module.scss';
import menu from 'data/menu.json';

export default function Dish() {
  const { state } = useLocation();
  const { dish } = state as { dish: typeof menu[0] };

  return (
    <>
      <button className={styles.voltar}>{'< Voltar'}</button>
      <section className={styles.container}>
        <h1 className={styles.titulo}>{dish.title}</h1>
        <div className={styles.imagem}>
          <img src={dish.photo} alt={dish.title} />
        </div>
        <div className={styles.conteudo}>
          <p className={styles.conteudo__descricao}>{dish.description}</p>
          <div className={styles.tags}>
            <div
              className={classNames({
                [styles.tags__tipo]: true,
                [styles[`tags__tipo__${dish.category.label.toLowerCase()}`]]:
                  true,
              })}
            >
              {dish.category.label}
            </div>
            <div className={styles.tags__porcao}>{dish.size}g</div>
            <div className={styles.tags__qtdpessoas}>
              Serve {dish.serving} pessoa{dish.serving === 1 ? '' : 's'}
            </div>
            <div className={styles.tags__valor}>R$ {dish.price.toFixed(2)}</div>
          </div>
        </div>
      </section>
    </>
  );
}
