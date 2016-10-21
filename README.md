# Prodigy

Prodigy is a single-page web app clone of Genius.com. Prodigy allows users to add tracks, annotate lyrics, and comment and vote on annotations. Prodigy is built with Ruby on Rails on the backend and React.js / Redux on the front end.

### Features & Implementation
#### User Authorization


[sign_up]: ./docs/images/sign_up.png

Users can sign up and login on Prodigy. A custom authorization is built in Rails utilizing the BCrypt Gem.

![sign_up]

#### Tracks
##### Creating Tracks

[new_track]: ./docs/images/add_track.png

Users can create tracks by clicking Create Track in the nav bar. Tracks require lyrics, an artist, desciption, and title. Optionally, a user can add album art by uploading an image. To keep pressure off of the server, AWS S3 is utilized to store the images.

![new_track]


### Making Annotations

[new_annotation]: ./docs/images/new_annotation.png

Users can create annotations by choosing a track and highlighting text. The user must be signed in to do so, so don't forget! After highlighting, make an annotation and contribute to Prodigy's vast database of lyrical knowledge!

![new_annotation]

[new_annotation_2]: ./docs/images/new_annotation_2.png

![new_annotation_2]


### Viewing Annotations

After you create your annotation, you can view it by clicking on the newly highlighted lyrics. Your masterpiece will display on the side, where other users can comment and upvote!


[show_annotation]: ./docs/images/show_annotation.png

![show_annotation]
