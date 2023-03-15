import { useState } from 'react';
import styles from './ColumnForm.module.scss';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/store';


const ColumnForm =  ({ listId }) => {
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addColumn({ title, icon, listId }));
    setTitle('');
    setIcon('');
  };
  return (
    <form className={styles.columnForm} onSubmit={handleSubmit}>
      Title:
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      Icon:
      <input
        type="text"
        value={icon}
        onChange={(e) => setIcon(e.target.value)}
      />
      <Button disabled={!title || !icon}>Add Column</Button>
    </form>
  );
};
export default ColumnForm;
