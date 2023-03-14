import { Link } from 'react-router-dom';
import styles from './NavBar.module.scss';

const NavBar = () => {
    return(
        <div>
            <nav className={styles.nav}>
                <ul className={styles.flex}>
                    <li><Link to='/Home' className={styles.item_left}><span className="fa fa-tasks"></span></Link></li>
                    <li><Link to='/Home' className={styles.item_right}>Home</Link></li>
                    <li><Link to='/About' className={styles.item_right}>About</Link></li>
                    <li><Link to='/Favorite' className={styles.item_right}>Favorite</Link></li>
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