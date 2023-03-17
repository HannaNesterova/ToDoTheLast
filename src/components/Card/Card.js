
/*import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/store';
import styles from './Card.module.scss';
import { useState } from 'react';


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
};*/
import styles from "./Card.module.scss"; 
import { useDispatch } from "react-redux"; 
import { toggleCardFavorite } from "../../redux/store"; 
import clsx from "clsx"; 
 
const Card = (props) => { 
    const dispatch = useDispatch(); 
    const toggle = () => { 
        dispatch(toggleCardFavorite(props.id)); 
    }; 
 
    return ( 
        <li className={styles.card}> 
            <div className={styles.row}> 
                <div>{props.title} 
                </div> 
                <div> 
                    <button onClick={toggle} className={clsx(styles.button, props.isFavorite && styles.active)}> 
                    <span className="fa fa-star-o" /> 
                    </button> 
                </div> 
            </div> 
        </li> 
    ); 
  };

export default Card; 