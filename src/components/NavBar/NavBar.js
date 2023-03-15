import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.scss';

const NavBar = () => {
    return(
        <div>
            <nav className={styles.nav}>
                <ul className={styles.flex}>
                        <li className={styles.item_left}><NavLink  className={({ isActive }) => 
                        isActive ? styles.linkActive : undefined }
                        to="/"><span className="fa fa-tasks"></span></NavLink></li>
                        <li className={styles.item_right}><NavLink  className={({ isActive }) =>
                         isActive ? styles.linkActive : undefined } 
                        to='/About'>About</NavLink></li>
                        <li className={styles.item_right}><NavLink  className={({ isActive }) => 
                        isActive ? styles.linkActive : undefined} 
                        to='/Favorite'>Favorite</NavLink></li>
                         <li className={styles.item_right}><NavLink  className={({ isActive }) => 
                         isActive ? styles.linkActive : undefined }
                        to="/">Home</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}
export default NavBar;