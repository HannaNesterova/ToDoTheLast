import shortid from "shortid";

//selector
export const getAllColumns = (state) => state.columns;
export const getColumnsByList = (state, listId ) => state.columns.filter(column => column.listId === listId);

// action creators
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });

const columnsReducer = (statePart = [], action) => {
    switch(action.type) {
      case 'ADD_COLUMN':
        return [...statePart, { ...action.payload, id: shortid() }];
      default:
        return statePart;
    }
  }
  export default columnsReducer;