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
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Redux Structure][redux-structure]
* [Sample State][sample-state]

[wireframes]: docs/wireframes
[components]: docs/react_components.md
[redux-structure]: docs/redux-structure.md
[sample-state]: docs/sample-state.md
[api-endpoints]: docs/api-endpoints.md
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
