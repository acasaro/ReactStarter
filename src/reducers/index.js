import { combineReducers } from 'redux';
import ContentReducer from './reducer_books';

const rootReducer = combineReducers({
  contentStatic: ContentReducer
});

export default rootReducer;
