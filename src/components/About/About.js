import Container from "../Container/Container";
import styles from '../NavBar/NavBar.module.scss';


const About = () => {
    return(
        <Container>
            <div >
                <h1 className={styles.text}>ABOUT</h1>
                <p>Lorem ipsum</p>
            </div>
        </Container>
    )
}
export default About;