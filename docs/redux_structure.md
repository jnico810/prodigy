# Redux Structure

## Auth Cycles

### Session API Request Actions

* `signUp`
  0. invoked from `SignupForm` `onSubmit`
  0. `POST /users` is called.
  0. `receiveCurrentUser` is the success callback.
* `logIn`
  0. invoked from `LoginForm` `onSubmit`
  0. `POST /session` is called.
  0. `receiveCurrentUser` is the callback.
* `logOut`
  0. invoked from `Navbar` `onClick`
  0. `DELETE /session` is called.
  0. `removeCurrentUser` is the success callback.
* `fetchCurrentUser`
  0. invoked from `App` in `didMount`
  0. `GET /session` is called.
  0. `receiveCurrentUser` is the success callback.

### Session API Response Actions

* `receiveCurrentUser`
  0. invoked from signUp, logIn or fetchCurrentUser
  0. the `SessionReducer` stores `currentUser` in the application's state.
* `removeCurrentUser`
  0. invoked from logOut
  0. the `SessionReducer` removes `currentUser` from the application's state.

## Error Cycles

### Error API Response Actions
* `setErrors`
  0. invoked from `signUp` or `logIn` on error
  0. the `ErrorReducer` stores the `form` in the application's state; `errors` are mapped to their respective form in the store.
* `removeErrors`
  0. invoked from `signUp` or `logIn` on success
  0. the `ErrorReducer` removes `errors` for a given `form` in the application's store.

## Prodigy Cycles

### Tracks API Request Actions

* `fetchAllTracks`
  0. invoked from `TracksIndex` `didMount`/`willReceiveProps`
  0. `GET /tracks` is called.
  0. `receiveAllTracks` is the success callback.

* `createTrack`
  0. invoked from TrackForm button `onSubmit`
  0. `POST /tracks` is called.
  0. `receiveSingleTrack` is the success callback.

* `fetchSingleTrack`
  0. invoked from `TrackShow` `didMount`/`willReceiveProps`
  0. `GET /tracks/:id` is called.
  0. `receiveSingleTrack` is the success callback.

* `updateTrack`
  0. invoked from `TrackForm` `onSubmit`
  0. `POST /tracks/:id` is called.
  0. `receiveSingleTrack` is the success callback.

### Tracks API Response Actions

* `receiveAllTracks`
  0. invoked from an API callback
  0. the `TrackReducer` updates `tracks` in the application's state.

* `receiveSingleTrack`
  0. invoked from an API callback
  0. the `TrackReducer` updates `tracks[id]` in the application's state.

## Annotation Cycles

### Annotation API Request Actions

* `createAnnotation`
  0. invoked from new notebook button `onClick`
  0. `POST /tracks/:id/annotations` is called.
  0. `receiveSingleAnnotation` is the callback.

* `fetchSingleAnnotation`
  0. invoked from `AnnotationContainer` `didMount`/`willReceiveProps`
  0. `GET /tracks/:id/annotations/:id` is called.
  0. `receiveSingleAnnotation` is the success callback.

* `updateAnnotation`
  0. invoked from `AnnotationForm` `onSubmit`
  0. `PATCH /tracks/:id/annotation/:id` is called.
  0. `receiveSingleAnnotation` is the success callback.

* `destroyAnnotation`
  0. invoked from delete button `onClick`
  0. `DELETE /tracks/:id/annotations/:id` is called.
  0. `removeAnnotation` is the success callback.

### Annotations API Response Actions

* `receiveSingleAnnotation`
  0. invoked from an API callback.
  0. The `Annotation` reducer updates `annotations[id]` in the application's state.

* `removeAnnotation`
  0. invoked from an API callback.
  0. The `Annotation` reducer removes `annotations[id]` from the application's state.

## Comment Cycles

### Comments API Request Actions

* `fetchTrackComments`
  0. invoked from `TrackShow` `didMount`/`willReceiveProps`
  0. `GET /api/tracks/:id/comments` is called
  0. `receiveTrackComments` is the success callback.

* `createTrackComment`
  0. invoked from `TrackCommentForm` `onSubmit`
  0. `POST /api/tracks/:id/comments` is called
  0. `receiveTrackComments` is the success callback.

* `deleteTrackComment`
  0. invoked from delete button in `LyricsComponent` `onClick`
  0. `DELETE /api/tracks/:id/comments/:id` is called
  0. `removeTrackComment` is the success callback.

* `fetchAnnotationComments`
  0. invoked from `AnotationComponent` `didMount`/`willReceiveProps`
  0. `GET /api/tracks/:id/annotation/:id/comments` is called
  0. `receiveAnnotationComments` is the success callback.

* `createAnnotationComment`
  0. invoked from `AnnotationCommentForm` `onSubmit`
  0. `POST /api/tracks/:id/annotations/:id/comments` is called
  0. `receiveAnnotationComments` is the success callback.

* `deleteTrackComment`
  0. invoked from delete button in `AnnotationCommentIndexItem` `onClick`
  0. `DELETE /api/tracks/:id/annotations/:id/comments/:id` is called
  0. `removeAnnotationComment` is the success callback.

### Comments API Response Actions

* `receiveTrackComments`
  0. invoked from an API callback.
  0. The `TrackComments` reducer updates  `tracks[:comments]` in the application's state.

* `removeTrackComment`
  0. invoked from an API callback.
  0. The `TrackComments` reducer removes  `tracks[:comments]` from the application's state.

* `receiveAnnotationComments`
  0. invoked from an API callback.
  0. The `AnnotationComments` reducer updates `tracks[:annotations]` in the application's state.

* `removeAnnotationComment`
  0. invoked from an API callback.
  0. The `AnnotationComments` reducer removes `tracks[:annotations]` and emits change.

## Voting Cycles

### Votes API Request Actions

* `createUpvote`
  0. invoked from the upvote button in `AnnotationComponent` `onClick`
  0. `PATCH /api/tracks/:id/annotations/:id` is called to update score
  0. `receiveSingleAnnotation` is the success callback

* `createDownvote`
  0. invoked from the downvote button in `AnnotationComponent` `onClick`
  0. `PATCH /api/tracks/:id/annotations/:id` is called to update score
  0. `receiveSingleAnnotation` is the success callback
