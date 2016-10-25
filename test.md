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

#### Making Annotations

[new_annotation]: ./docs/images/new_annotation.png

Users can create annotations by choosing a track and highlighting text. The user must be signed in to do so, so don't forget! After highlighting, make an annotation and contribute to Prodigy's vast database of lyrical knowledge!

![new_annotation]

[new_annotation_2]: ./docs/images/new_annotation_2.png

![new_annotation_2]

##### Annotation Creation Algorithm

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


#### Viewing Annotations

After you create your annotation, you can view it by clicking on the newly highlighted lyrics. Your masterpiece will display on the side, where other users can comment and upvote!


[show_annotation]: ./docs/images/show_annotation.png

![show_annotation]



### Search

Users can search for songs utilizing the search bar on the top right of the header.

![search]

[search]: ./docs/images/search.png

I wrote a simple query that filters

def filter
  @results = Track.where("title ~* ?", params[:query])
  render :index
end
