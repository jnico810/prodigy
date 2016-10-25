# Prodigy

Prodigy is a single-page web app clone of Genius.com. Prodigy allows users to add tracks, annotate lyrics, and comment and vote on annotations. Prodigy is built with Ruby on Rails on the backend and React.js / Redux on the front end.

## Features & Implementation
### User Authorization


[sign_up]: ./docs/images/sign_up.png

Users can sign up and login on Prodigy. A custom authorization is built in Rails utilizing the BCrypt Gem.

![sign_up]

### Tracks
#### Creating Tracks

[new_track]: ./docs/images/add_track.png

Users can create tracks by clicking Create Track in the nav bar. Tracks require lyrics, an artist, desciption, and title. Optionally, a user can add album art by uploading an image. To keep pressure off of the server, AWS S3 is utilized to store the images.

![new_track]


#### Viewing Tracks

Clicking on or searching for a  track displays the track page, showcasing the lyrics, album art and other information uploaded by the user.

[track_show]: ./docs/images/track_show.png

![track_show]

##### Generating Lyrics

To generate the annotated lyrics, I wrote an algorithm that iterates through an array of annotations that stores start and end indices. The algorithm creates spans from the lyrics, splicing appropriately to obtain a collection of stylized spans.


```
generateLyricsAnnotations() {

  let lyricsDiv = [];
  let startIdx = 0;
  this.props.track.annotations.forEach((annotation, idx) => {
    lyricsDiv.push(<span key={idx} className="non-annotated-lyric">
      { this.props.track.lyrics.slice(startIdx, annotation.start_idx) }
    </span>);
    lyricsDiv.push(
      <span key={idx + 1000} className="annotated-lyric" onClick={ this.handleAnnotationClick.bind(null, annotation) }>
        {this.props.track.lyrics.slice(annotation.start_idx, annotation.end_idx) }
      </span>);
    startIdx = annotation.end_idx;
  });

  lyricsDiv.push(<span key={2000} className="non-annotated-lyric">
    { this.props.track.lyrics.slice(startIdx, this.props.track.lyrics.length) }
  </span>);

  return lyricsDiv;
}```
