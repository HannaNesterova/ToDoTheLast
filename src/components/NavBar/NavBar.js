import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.scss';

const NavBar = () => {
    return(
        <div>
            <nav className={styles.nav}>
                <ul className={styles.flex}>
                        <li className={styles.item_left}><NavLink  className={({ isActive }) => isActive ? styles.linkActive : undefined }
                        to="/Home"><span className="fa fa-tasks"></span></NavLink></li>
                        <li className={styles.item_right}><NavLink  className={({ isActive }) => isActive ? styles.linkActive : undefined }
                        to="/Home">Home</NavLink></li>
                        <li className={styles.item_right}><NavLink  className={({ isActive }) => isActive ? styles.linkActive : undefined } to='/About'>About</NavLink></li>
                        <li className={styles.item_right}><NavLink  className={({ isActive }) => isActive ? styles.linkActive : undefined} to='/Favorite'>Favorite</NavLink></li>
{/* 
                    <a href="/Home" className={styles.item_left}><span className="fa fa-tasks"></span></a>
                    <a href="/Home" className={styles.item_right}>Home</a>
                    <a href="/About" className={styles.item_right}>About</a>
                    <a href="/Favorite" className={styles.item_right}>Favorite</a> */}
                </ul>
            </nav>
        </div>
    )
}
export default NavBar;