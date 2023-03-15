import styles from './List.module.scss';
import Column from '../Column/Column.js';
import ColumnForm from '../ColumnForm/ColumnForm';
import { useSelector } from 'react-redux';
//import {getAllColumns} from '../../redux/store';
import { getListById } from '../../redux/store';
import { getColumnsByList } from '../../redux/store';

const List = () => {
 //const columns = useSelector(getAllColumns);
const  columns = useSelector(getColumnsByList);
const listData = useSelector(getListById);

  if (!listData) {
    return null;
  }

  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <h2 className={styles.title}>
          {listData.title}
        </h2>
      </header>
      <p className={styles.description}>
        {listData.description}
      </p>
      <section className={styles.columns}>
        {columns.map((column) => (
          <Column key={column.id} {...column} />
        ))}
      </section>
      <ColumnForm />  
    </div>
  );
};

export default List;
