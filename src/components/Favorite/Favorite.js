import Container from "../Container/Container";
import PageTitle from "../PageTitle/PageTitle";
import { useSelector,useDispatch } from 'react-redux';
import { getFilteredCards, toggleCardFavorite } from "../../redux/store";
import Card from "../Card/Card";



const Favorite = () => {
    const dispatch = useDispatch();

    const favoriteCards = useSelector(state =>
        getFilteredCards(state, 'favorite', '')
      );
      
      const toggleFavorite = (cardId) => {
        dispatch(toggleCardFavorite(cardId));
      };
    
      
    return(
        <Container>
            <div >
                <PageTitle>Favorite</PageTitle>
                {favoriteCards.map(card => (
                <Card key={card.id} title={card.title} icon={card.icon}  isFavorite={card.isFavorite}
                toggleFavorite={() => toggleFavorite(card.id)} />
                    ))}
                <p>Lorem ipsum</p>
            </div>
        </Container>
    )
}
export default Favorite;