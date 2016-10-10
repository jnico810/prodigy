import { CREATE_ANNOTATION } from '../actions/annotation_actions';
import { receiveTrack } from '../actions/track_actions';
import * as API from '../util/annotation_api_util';

const annotationMiddleware = ({ getState, dispatch}) => next => action => {
  let success;
  const error = error => console.log(error);
  switch (action.type){
    case CREATE_ANNOTATION:
      success = (track) => {
        dispatch(receiveTrack(track));
        action.callback();
      };
      API.createAnnotation(action.annotation, success, error);
      return next(action);
    default:
      return next(action);
  }
};

export default annotationMiddleware;
