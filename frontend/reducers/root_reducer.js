import { combineReducers } from 'redux';
import session from './session_reducer';
import tracks from './tracks_reducer';
import search from './search_reducer';

const RootReducer = combineReducers({session, tracks, search});

export default RootReducer;
