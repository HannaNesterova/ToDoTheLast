import Container from "../Container/Container";
import PageTitle from "../PageTitle/PageTitle";
import { useSelector } from 'react-redux';
import { getFilteredCards } from "../../redux/store";
import Card from "../Card/Card";



const Favorite = () => {
    const favoriteCards = useSelector(state =>
        getFilteredCards(state, 'favorite', '')
      );
      
    return(
        <Container>
            <div >
                <PageTitle>Favorite</PageTitle>
                {favoriteCards.map(card => (
                <Card key={card.id} title={card.title} icon={card.icon} />
                    ))}
                <p>Lorem ipsum</p>
            </div>
        </Container>
    )
}
export default Favorite;