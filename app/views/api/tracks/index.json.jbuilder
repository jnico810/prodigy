json.array! @tracks.includes(:artist, :author) do |track|
  json.partial! 'track', track: track
end
