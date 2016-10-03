## Component Heirarchy

* **App**
  * NavBar
    * SignupForm
    * LoginForm
  * TracksIndex
    * TrackIndexItem
  * TrackForm
  * TrackShow
    * LyricsComponent
      * TrackLyrics
      * TracksCommentForm
    * AnnotationContainer
      * AnnotationVoteForm
      * AnnotationForm
      * AnnotationContent
      * AnnotationCommentForm

## Routes

|Path   | Component   |
|-------|-------------|
| "/sing-up" | "SessionForm" |
| "/sign-in" | "SessionForm" |
| "/" | "App" |
| "/" | "TracksIndex" |
| "/new" | "TrackForm" |
| "/:track_id" | "TrackShow" |
| "/:track_id/comments" | "TracksCommentForm" |
| "/:track_id/annotations" | "AnnotationForm" |
| "/:track_id/annotations/:annotation_id" | "AnnotationContent" |
| "/:track_id/annotations/:annotation_id/comments" | "AnnotationCommentsForm" |
| "/:track_id/annotations/:annotation_id/comments" | "AnnotationCommentsForm" |
