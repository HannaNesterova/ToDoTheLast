import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { updateSearch } from '../../redux/store';


const SearchForm = () => {
    const [searchLet, setSearchLet] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateSearch(searchLet));
        setSearchLet('');
    }

    return (
        <form onSubmit={handleSubmit} className={styles.searchForm}>
            <TextInput placeholder="Search..." 
            value={searchLet} 
            onChange={(e) => setSearchLet(e.target.value)}
            />
            <Button type="submit">
                <span className="fa fa-search" />
            </Button>
        </form>
    );
  };


export default SearchForm;