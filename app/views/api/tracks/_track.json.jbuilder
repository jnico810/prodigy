json.extract! track, :title, :description
json.author track.author.username
json.artist track.artist.name
json.album track.album
json.youtube_url track.youtube_url

json.id track.id
json.album_art_url asset_path(track.album_art.url)
