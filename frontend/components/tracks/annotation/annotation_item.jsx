import React from 'react';

const AnnotationItem = ({track, annotation, callback}) => (

  <span> className="annotated-lyric">
    {track.lyrics.slice(annotation.start_idx, annotation.end_idx) }
  </span>
);


export default AnnotationItem;
