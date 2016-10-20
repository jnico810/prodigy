# Prodigy

Prodigy is a single-page web app clone of Genius.com. Prodigy allows users to add tracks, annotate lyrics, and comment and vote on annotations. Prodigy is built with Ruby on Rails on the backend and React.js / Redux on the front end.

### Features & Implementation

#### User Authorization

Users can sign up and login on Prodigy. A custom authorization is built in Rails utilizing the BCrypt Gem.

#### Tracks

##### Creating Tracks

Users can create tracks by clicking Create Track in the nav bar. Tracks require lyrics, an artist, desciption, and title. Optionally, a user can add album art by uploading an image. To keep pressure off of the server, AWS S3 is utilized to store the images.
