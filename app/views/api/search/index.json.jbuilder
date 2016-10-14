json.array! @results do |track|
  json.artist track.artist.name
  json.title track.title
  json.id track.id
end
