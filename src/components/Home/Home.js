import Hero from "../Hero/Hero";
import SearchForm from "../SearchForm/SearchForm";
//import List from "../List/List";
import Container from "../Container/Container";
import Lists from '../Lists/Lists';

const Home = () => {
    return(
        <Container>
            <Hero />
            <SearchForm />
            <Lists />
        </Container>
    )
}

export default Home;