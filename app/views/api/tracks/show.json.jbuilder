json.partial! '/api/tracks/track', track: @track
json.extract! @track, :lyrics
json.annotations @track.annotations.order('start_idx ASC')
