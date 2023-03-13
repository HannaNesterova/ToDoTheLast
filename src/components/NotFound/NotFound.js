import Container from "../Container/Container";
import styles from '../NavBar/NavBar.module.scss';


const NotFound = () => {
    return(
        <Container>
            <div >
                <h1 className={styles.text}> 404 NOT FOUND</h1>
            </div>
        </Container>
    )
}
export default NotFound;