json.extract! user, :username, :id, :score
# json.annotations user.annotations
json.tracks user.tracks

annotationTexts = []
p user
p user.annotations
user.annotations[0..4].each do |annotation|
  p annotation
  if annotation != nil
    text = annotation.track.lyrics[annotation.start_idx, annotation.end_idx]
    annotationTexts.push({
      "trackId": annotation.track.id,
      "trackTitle": annotation.track.title,
      "artistName": annotation.track.artist.name,
      "albumArt": asset_path(annotation.track.album_art.url),
      "annotationText": text,
      "body": annotation.body,
      "id": annotation.id})
  end
end
json.annotations annotationTexts
