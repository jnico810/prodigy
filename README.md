# Prodigy

Prodigy is a single-page web app clone of Genius.com. Prodigy allows users to add tracks, annotate lyrics, and comment and vote on annotations. Prodigy is built with Ruby on Rails on the backend and React.js / Redux on the front end.

### Features & Implementation
#### User Authorization


[sign_up]: ./docs/images/sign_up.png

Users can sign up and login on Prodigy. A custom authorization is built in Rails utilizing the BCrypt Gem.

![sign_up]

#### Tracks
##### Creating Tracks

[new_track]: ./docs/images/add_track.png

Users can create tracks by clicking Create Track in the nav bar. Tracks require lyrics, an artist, desciption, and title. Optionally, a user can add album art by uploading an image. To keep pressure off of the server, AWS S3 is utilized to store the images.

![new_track]


### Making Annotations

[new_annotation]: ./docs/images/new_annotation.png

Users can create annotations by choosing a track and highlighting text. The user must be signed in to do so, so don't forget! After highlighting, make an annotation and contribute to Prodigy's vast database of lyrical knowledge!

![new_annotation]

[new_annotation_2]: ./docs/images/new_annotation_2.png

![new_annotation_2]

#### Annotation Creation Algorithm

 Using document.getSelection(), this algorithm extracts the lyrics that the user has highlighted. First, it checks whether or not the selection is valid by checking if the anchorNode (click-down node) is equal to the focusNode (click-up node) and also validates that the highlighted node is not already an annotated-lyric. Since each annotation is its own span, the algorithm then adds the innerHTML length of each previousSibling to generate an accurate index within the lyrics.

```bash
handleSelection(e){
  const selection = document.getSelection().toString();
  if (selection.length > 0 && this.props.currentUser){
    //Ensures that you cannot annotate over existing annotations
    if (
      document.getSelection().anchorNode !==
      document.getSelection().focusNode ||
      document.getSelection().anchorNode.parentElement.className === 'annotated-lyric'){
      return;
    }
    //Cancels your annotation if you click again
    if (this.state.annotating){
      this.setState({annotating: false, annotationIndices:[], body:"", selectedAnnotation:null, location: null, startLoc: null, endLoc: null});
      return;
    }Â
    let startIdx = document.getSelection().anchorOffset;
    let endIdx = document.getSelection().focusOffset;
    let span = document.getSelection().anchorNode.parentElement;

    //Allows users to highlight backwards
    if (startIdx > endIdx) {
      const temp = startIdx;
      startIdx = endIdx;
      endIdx = temp;
    }
    //Accounts for the lengths of the previous elements, ensuring accurate index within entire lyrics
    while (span.previousSibling) {
      startIdx += span.previousSibling.innerText.length;
      endIdx += span.previousSibling.innerText.length;
      span = span.previousSibling;
    }
    this.setState({annotating:true, annotationIndices:[startIdx, endIdx], endLoc: e.pageY});
  } else {
    this.setState({annotating:false, annotationIndices:[], selectedAnnotation:null, startLoc: null, endLoc: null});
  }
}```


### Viewing Annotations

After you create your annotation, you can view it by clicking on the newly highlighted lyrics. Your masterpiece will display on the side, where other users can comment and upvote!


[show_annotation]: ./docs/images/show_annotation.png

![show_annotation]
