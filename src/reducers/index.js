import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

// Create 2 reducers using combineReducer

export default combineReducers({
  //------Key------ : --------Reducer------
  // Key determines how app state object looks or how it gets formed up
  libraries: LibraryReducer,
  selectedLibraryId: SelectionReducer
});