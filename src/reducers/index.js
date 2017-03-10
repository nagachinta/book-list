import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
	//Any key declared to our combineReducers object ends up as a key to our global state
	books : BooksReducer,
	activeBook : ActiveBook 
});

export default rootReducer;
