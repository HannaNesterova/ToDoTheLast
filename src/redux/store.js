import { legacy_createStore as createStore, combineReducers } from "redux";
import initialState from './initialState';
import shortid from 'shortid';
import strContains from '../utils/strContains';

import listsReducer from './listsRedux'
import columnsReducer from "./columnsReducer";
import cardsReducer from "./cardsReducer";
import searchStringReducer from "./searchStringReducer";


//selectors
export const getFilteredCards = ({ cards, searchString }, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, searchString));
export const getAllColumns = (state) => state.columns;

export const getColumnsByList = (state, listId ) => state.columns.filter(column => column.listId === listId);
export const getFavoriteCard = (state) => state.cards.filter((card) => card.isFavorite === true);

// action creators
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });
export const addCard =  payload => ({type: 'ADD_CARD', payload: {...payload, isFavorite: true}}) ;
export const updateSearch = payload => ({type: 'UPDATE_SEARCHSTRING', payload});
export const addList = payload => ({type: 'ADD_LIST', payload})
export const toggleCardFavorite = (payload) => ({ type: 'TOGGLE_CARD_FAVORITE', payload});

const state = {
  initialState: initialState,
}


/*const reducer = (state = defaultState.initialState, action) => {
  switch (action.type) {
    case 'ADD_COLUMN':
      return {
        ...state,
        columns: [...state.columns, { ...action.payload, id: shortid() }]
      };
      case 'ADD_CARD':
        return {
          ...state,
          cards: [...state.cards, { ...action.payload, id: shortid() }]
        };
      case 'UPDATE_SEARCHSTRING':
      return { ...state, 
        searchString: action.payload };
        case 'ADD_LIST':
          return{ ...state,
            lists: [...state.lists, {...action.payload, id: shortid()}]
          };
          case "TOGGLE_CARD_FAVORITE": 
            return {...state, cards: state.cards.map((card) => card.id === action.payload ?  
              { ...card, isFavorite: !card.isFavorite } : card),};
      default:
        return state;
  }
};*/

const subreducers = {
  lists: listsReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  searchString: searchStringReducer
}

const reducer = combineReducers(subreducers);

// const reducer = (state, action) => {
//   const newState = {
//     lists: listsReducer(state.lists, action),
//     columns: columnsReducer(state.columns, action),
//     cards: cardsReducer(state.cards, action),
//     searchString: searchStringReducer(state.searchString, action)
//   };

//   return newState;
// };



const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;