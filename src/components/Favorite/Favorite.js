import Container from "../Container/Container";
import styles from '../NavBar/NavBar.module.scss';


const Favorite = () => {
    return(
        <Container>
            <div >
                <h1 className={styles.text}>Favorite</h1>
                <p>Lorem ipsum</p>
            </div>
        </Container>
    )
}
export default Favorite;