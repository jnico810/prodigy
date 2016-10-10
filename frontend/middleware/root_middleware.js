import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import TracksMiddleware from './tracks_middleware';
import annotationMiddleware from './annotations_middleware';


const RootMiddleware = applyMiddleware(SessionMiddleware, TracksMiddleware, annotationMiddleware);

export default RootMiddleware;
