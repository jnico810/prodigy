import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import TracksMiddleware from './tracks_middleware';
import annotationMiddleware from './annotations_middleware';
import commentMiddleware from './comments_middleware';


const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  TracksMiddleware,
  annotationMiddleware,
  commentMiddleware);

export default RootMiddleware;
