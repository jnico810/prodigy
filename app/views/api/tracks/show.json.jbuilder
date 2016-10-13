json.partial! '/api/tracks/track', track: @track
json.extract! @track, :lyrics
json.annotations @track.annotations.includes(:votes).order('start_idx ASC') do |annotation|

  json.author annotation.author.username
  json.author_id annotation.author_id
  json.id annotation.id
  json.end_idx annotation.end_idx
  json.start_idx annotation.start_idx
  json.body annotation.body
  json.score annotation.score
  json.votes annotation.votes
  json.comments annotation.comments do |comment|
    json.author comment.author.username
    json.body comment.body
    json.id comment.id
  end
end
