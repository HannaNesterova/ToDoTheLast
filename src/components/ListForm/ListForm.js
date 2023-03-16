import { useState } from 'react';
import styles from '../ColumnForm/ColumnForm.module.scss';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import {addList } from '../../redux/store';


const ListForm =  ({ listId }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addList({title, description, listId }));
    setTitle('');
    setDescription('');
  };
  return (
    <form className={styles.columnForm} onSubmit={handleSubmit}>
      Title:
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      Description:
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button disabled={!title || !description}>Add Column</Button>
    </form>
  );
};
export default ListForm;
