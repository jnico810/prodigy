import { CREATE_ANNOTATION, DELETE_ANNOTATION,
  receiveAnnotations} from '../actions/annotation_actions';
import { receiveTrack  } from '../actions/track_actions';
import { updateScore  } from '../actions/session_actions';
import * as API from '../util/annotation_api_util';

const annotationMiddleware = ({ getState, dispatch}) => next => action => {
  let success;
  const error = error => {};
  switch (action.type){
    case CREATE_ANNOTATION:
      success = (annotations) => {
        dispatch(receiveAnnotations(annotations));
        action.callback();
      };
      API.createAnnotation(action.annotation, success, error);
      return next(action);
    case DELETE_ANNOTATION:
      success = (track) => {
        dispatch(receiveTrack(track));
        action.callback();
      };
      API.deleteAnnotation(action.id, success, error);
      return next(action);
    default:
      return next(action);
  }
};

export default annotationMiddleware;
