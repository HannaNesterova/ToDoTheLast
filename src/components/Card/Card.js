import styles from './Card.module.scss';





const Card = (props) => {

return (
    <li className={styles.card}>
      <div className={styles.cardTitle}>
        {props.title}
          <span className={styles.icon + ' fa fa-star-o'} ></span>
      </div>
    </li>
  );
};

export default Card;