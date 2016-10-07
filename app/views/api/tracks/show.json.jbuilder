json.partial! '/api/tracks/track', track: @track
json.extract! @track, :lyrics
