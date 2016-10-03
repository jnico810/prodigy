# Prodigy

[Link to Heroku][heroku]
[heroku]: https://prodigy.herokuapp.com/


## Minimum Viable Product

Prodigy is a web application inspired by Genius built using Ruby on Rails and React/Redux. By the end of 9 days, the application will provide the following features:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Tracks
- [ ] Annotations
- [ ] Upvotes/Downvotes
- [ ] BONUS: Tags
- [ ] BONUS: Search

## Design Docs


* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api_endpoints]
* [DB schema][schema]
* [Redux Structure][redux_structure]
* [Sample State][sample_state]

[wireframes]: docs/wireframes
[components]: docs/react_components.md
[redux_structure]: docs/redux_structure.md
[sample_state]: docs/sample_state.md
[api_endpoints]: docs/api_endpoints.md
[schema]: docs/schema.md


##Implementation Timeline

###Phase 1: Backend setup and Front End user Authentication (2 days)
**Objective**: Functioning rails project with front-end Authentication
  - [ ] New Rails project
  - [ ] `User` model/migrations
  - [ ] Back end authentication (session/password)
  - [ ] `StaticPages` controller and root view
  - [ ] Webpack & react/redux modules
  - [ ] `APIUtil` to interact with the API
  - [ ] Redux cycle for frontend Authentication
  - [ ] User signup/login components
  - [ ] Style signup/login components
  - [ ] Seed users
  - [ ] Application for teacher account
  - [ ] Review phase 1

  ### Phase 2: Header/Footer Styling (1 day)
  **Objective**: Well designed header/footer and homepage
    - [ ] Nav bar
    - [ ] Search bar on nav bar
    - [ ] Links to github/projects in footer
    - [ ] basic layout for TrackIndex on homepage
    - [ ] Review phase 2

  ### Phase 3: SongIndex (1 day)
  **Objective**: CRUD tracks in the database
    - [ ] `Track` model/migrations
    - [ ] Jbuilder views
    - [ ] Create track form
    - [ ] Style new tracks form and `Tracksindex` in homepage.
    - [ ] Review phase 3

  ### Phase 4: Annotations (2 days)
  **Objective**: CRUD annotations for tracks.
    - [ ] `Annotation` model/migrations
    - [ ] use window.getSelection.toString() to get annotation on MouseUp
    - [ ] Build `AnnotationContainer` and `AnnotationForm`
    - [ ] Create Annotation `onSubmit`
    - [ ] Style Form and annotations in lyrics
    - [ ] Review phase 4

  ### Phase 5: Comments and Votes (2 days)
  **Objective**: CRUD comments for tracks and voting for annotations
    - [ ] `Comment` model/migrations
    - [ ] `onClick` of annotation, show  `AnnotationCommentContainer` with `AnnotationCommentForm`
    - [ ] `onComponentDidMount` of `TrackShow`, show  `TracksCommentContainer` with `TracksCommentForm`
    - [ ] Create Comment `onSubmit`
    - [ ] Style form and comments for lyrics
    - [ ] `AnnotationVote` model/migration
    - [ ] Add
    - [ ] Review phase 5

  ### Phase 6: Search and Final Styling (1 day)
  **Objective**: Using Regex, allow searching with feedback in dropdown
    - [ ] Using simple regex, query the database and show results in dropdown
    - [ ] Finishing touches on styling
    - [ ] Review phase 7
