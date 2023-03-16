//import { createStore } from 'redux';
import { legacy_createStore as createStore } from "redux";

import initialState from './initialState';
import shortid from 'shortid';
import strContains from '../utils/strContains';


//selectors
export const getFilteredCards = ({ cards, searchString }, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, searchString));

export const getAllColumns = (state) => state.columns;
export const getAllLists = (state) => state.lists;

// action creators
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });
export const addCard =  payload => ({type: 'ADD_CARD', payload: {...payload, isFavorite: false}}) ;
export const updateSearch = payload => ({type: 'UPDATE_SEARCHSTRING', payload});
export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId)
export const getColumnsByList = (state, listId ) => state.columns.filter(column => column.listId === listId);
export const addList = payload => ({type: 'ADD_LIST', payload})

export const toggleCardFavorite = (cardId, isFavorite) => ({ type: 'TOGGLE_CARD_FAVORITE', payload: {cardId, isFavorite} });
//export const toggleCardFavorite = payload => ({ type: 'TOGGLE_CARD_FAVORITE', payload });




const defaultState = {
  initialState: initialState,
}

const reducer = (state = defaultState.initialState, action) => {
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
          case 'TOGGLE_CARD_FAVORITE':
          return {...state, cards: state.cards.map((card) => {
            if (card.id === action.payload) {
              return { ...card, isFavorite: !card.isFavorite };
          } else {
            return card;
          }
        }),
      };
      default:
        return state;
  }
};




const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;