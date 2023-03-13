import Container from "../Container/Container";
import styles from './NavBar.module.scss';

const NavBar = () => {
    return(
        <Container>
            <nav className={styles.nav}>
                <ul className={styles.flex}>
                    <a href="/" className={styles.item_left}><span className="fa fa-tasks"></span></a>
                    <a href="/Home" className={styles.item_right}>Home</a>
                    <a href="/About" className={styles.item_right}>About</a>
                    <a href="/Favorite" className={styles.item_right}>Favorite</a>
                </ul>
            </nav>
        </Container>
    )
}
export default NavBar;