import styles from './Card.module.scss';
import { useSelector } from 'react-redux';




const Card = (props) => {
  const cards = useSelector(state => state.cards);

  // const card = cards.find(card => card.id === props.id);

  return (
    <li className={styles.card}>
      <div className={styles.cardTitle}>
        {props.title}
          <span className={styles.icon + ' fa fa-' + props.icon}></span>
      </div>
    </li>
  );
};

export default Card;