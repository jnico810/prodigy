json.partial! '/api/tracks/track', track: @track
json.extract! @track, :lyrics
json.annotations @track.annotations.order('start_idx ASC') do |annotation|
  json.author annotation.author.username
  json.end_idx annotation.end_idx
  json.start_idx annotation.start_idx
  json.body annotation.body
end
