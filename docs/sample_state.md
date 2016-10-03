{
  currentUser: {
    id: 1,
    username: "jjnicz"
  },
  forms: {
    signUp: {errors: ["password must be at least 6 characters"]},
    logIn: {errors: []},
    annotate: {errors: ["body can't be blank"]}
    comment: {errors: ["body can't be blank"]}
    newTrack: {errors: []}
  },
  session {
    sessionToken: 'qweu21wqepw43oqej4opwqepwq323'
  },
  tracks: {
    1: {
      title: "Between the Bars",
      description: "Track #4 off of Elliott’s celebrated 1997 album; ‘Either/Or’.",
      author_id: 1,
      artist_id: 2
      locked: false
      album_art: 'https://s3.amazonaws.com/rapgenius/1378816725_either-or.jpg'
      annotations: {
        1: {
          indices: [0,10]
          body: "I think this means that elliott with a genius",
          score: 26
          comments: {
            { 1: {
              body: 'REALLY GOOD POINT',
              score: 10
              }
            }
          }
        }
      },
      comments: {
        1 : { "I LOVE THIS SONG" },
        2 : { "this song is dope" },
        3 : { "i miss you elliott <3" },
      }, lyrics: {

        text: "
        Drink up, baby, stay up all night
        With the things you could do, you won't but you might
        The potential you'll be, that you'll never see
        The promises you'll only make

        Drink up with me now and forget all about
        The pressure of days, do what I say
        And I'll make you okay and drive them away
        The images stuck in your head

        [Chorus]
        People you've been before that you
        Don't want around anymore
        That push and shove and won't bend to your will
        I'll keep them still

        [Verse 2]
        Drink up, baby, look at the stars
        I'll kiss you again, between the bars
        Where I'm seeing you there, with your hands in the air
        Waiting to finally be caught

        Drink up one more time and I'll make you mine
        Keep you apart, deep in my heart
        Separate from the rest, where I like you the best
        And keep the things you forgot

        People you've been before that you
        Don't want around anymore
        That push and shove and won't bend to your will
        I'll keep them still"
    }
  }
}
