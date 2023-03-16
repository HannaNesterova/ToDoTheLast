import React, { useState } from 'react';
import styles from './Card.module.scss';

const Card = (props) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <li className={styles.card}>
      <div className={styles.cardTitle}>
        {props.title}
        <span
          className={`${styles.icon} fa fa-star${isFavorite ? '' : '-o'}`}
          onClick={toggleFavorite}
        ></span>
      </div>
    </li>
  );
};

export default Card;