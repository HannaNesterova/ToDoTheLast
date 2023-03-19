
//action
export const updateSearch = payload => ({type: 'UPDATE_SEARCHSTRING', payload});
const UPDATE_SEARCHSTRING = updateSearch('UPDATE_SEARCHSTRING');


const searchStringReducer = (statePart = '', action) => {
    switch(action.type) {
      case UPDATE_SEARCHSTRING:
        return action.payload
      default:
        return statePart;
    }
  }
  
  export default searchStringReducer;