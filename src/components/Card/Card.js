
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/store';
import styles from './Card.module.scss';
//import { useState } from 'react';


const Card = (props) => {
  const dispatch = useDispatch();


  const toggleFavorite = () => {
    dispatch(toggleCardFavorite(props.id));

    console.log(props.id);
  };

  return (
    <li className={styles.card}>
      <div className={styles.cardTitle}>
        {props.title}
        <span
         className={styles.icon + ' fa fa-star-o'}
          onClick={toggleFavorite}  
        ></span>
      </div>
    </li>
  );
};

export default Card; 