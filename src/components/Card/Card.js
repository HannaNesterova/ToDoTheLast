import styles from './Card.module.scss';




const Card = (props) => {
  // const cards = useSelector(state => state.cards);


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