# API Endpoints

## HTML API

### Root

- `GET /` - loads web app

## JSON API

### Users

- `POST /users` - create user

### Session

- `POST /session` - create session (Log in)
- `DELETE /session` - delete session (Log out)
- `GET /session` - get current session

### Tracks

- `GET /tracks` - receive all tracks
- `POST /tracks` - create new track
- `GET /tracks/:id`  - receive one track
- `PATCH /tracks/:id`  - update one track

### Annotations

- `GET /tracks/:id/annotation/:id` - receive one annotation
- `POST /tracks/:id/annotations` - create new annotation
- `PATCH /tracks/:id/annotation/:id` - update annotation
- `DELETE /tracks/:id/annotation/:id`- remove annotation

### Annotation Comments

- `GET /tracks/:id/annotation/:id/comments` - receive one annotation comment
- `POST /tracks/:id/annotation/:id/comments` - create new annotation comment
- `DELETE /tracks/:id/annotation/:id/comment/:id` - remove new annotation comment

### Track Comments

- `GET /tracks/:id/comments` - receive one track comment
- `POST /tracks/:id/comments` - create new track comment
- `DELETE /tracks/:id/comment/:id` - remove new track comment
