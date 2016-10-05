import { combineReducers } from 'redux';
import session from './session_reducer';
import tracks from './tracks_reducer';

const RootReducer = combineReducers({session, tracks});

export default RootReducer;
