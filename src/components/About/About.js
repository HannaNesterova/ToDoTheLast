import Container from "../Container/Container";
import styles from '../NavBar/NavBar.module.scss';


const About = () => {
    return(
        <Container>
            {/* <nav className={styles.nav}>
                <ul className={styles.flex}>
                    <a href="/" className={styles.item_left}><span className="fa fa-tasks"></span></a>
                    <a href="/Home" className={styles.item_right}>Home</a>
                    <a href="/About" className={styles.item_right}>About</a>
                    <a href="/Favorite" className={styles.item_right}>Favorite</a>
                </ul>
            </nav> */}
            <div >
                <h1 className={styles.text}>ABOUT</h1>
                <p>Lorem ipsum</p>
            </div>
        </Container>
    )
}
export default About;