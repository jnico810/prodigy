# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# 5.times do |num|
#   User.create!(
#   username: "u#{num}",
#   password: 'starwars',
#   email: Faker::Internet.email,
#   score: Faker::Number.between(1, 10))
# end
johnny = User.create(username:'johnny', email:'johnny', score:0, password:'starwars')
timbo = User.create(username:'timbo', email:'timbo', score:10, password:'starwars')
charlieXoXo = User.create(username:'charlieXoXo', email:'charlieXoXo', score:10, password:'starwars')
musicMan = User.create(username:'musicMan', email:'musicMan', score:10, password:'starwars')
belieber = User.create(username:'belieber', email:'belieber', score:10, password:'starwars')
mozart = User.create(username:'mozart', email:'mozart', score:10, password:'starwars')


bon_iver = Artist.create!(name: "Bon Iver")
radiohead = Artist.create!(name: "Radiohead")
fleetwood = Artist.create!(name: "Fleetwood Mac")
frank = Artist.create!(name: "Frank Ocean")
kanye = Artist.create!(name: "Kanye West")

Track.create!(  title: "Skinny Love",
  description:"Released as the first single from For Emma, Forever Ago, ‘Skinny Love’ is a song about a failed relationship and the regret that stems from it.",
  lyrics:
  "[Verse 1]
Come on skinny love just last the year
Pour a little salt we were never here
My, my, my, my, my, my, my, my
Staring at the sink of blood and crushed veneer
I tell my love to wreck it all
Cut out all the ropes and let me fall
My, my, my, my, my, my, my, my
Right in the moment this order's tall

[Chorus #1]
And I told you to be patient
And I told you to be fine
And I told you to be balanced
And I told you to be kind
And in the morning I'll be with you
But it will be a different kind
And I'll be holding all the tickets
And you'll be owning all the fines

[Verse 2]
Come on skinny love, what happened here?
Suckle on the hope in light brassieres
My, my, my, my, my, my, my, my
Sullen load is full, so slow on the split

[Chorus #2]
And I told you to be patient
And I told you to be fine
And I told you to be balanced
And I told you to be kind
And now all your love is wasted
And then who the hell was I?
And I'm breaking at the britches
And at the end of all your lines

[Verse 3]
Who will love you?
Who will fight?
Who will fall far behind?",
  artist_id: bon_iver.id,
  author_id: johnny.id,
  album: 'For Emma, Forever Ago',
  album_art: File.open('app/assets/images/for_emma.jpg'))

Track.create!(  title: "Full Stop",
  description:"Radiohead debuted this song in Chicago on their 2012 tour. It’s a soaring, ominous, driving Krautrock-type song.",
  lyrics:
  "[Verse 1]
You really messed up everything
You really messed up everything
If you could take it all back again
Strike up the tinderbox
Why should I be good if you're not?
This is a foul tasting medicine
A foul tasting medicine
To be trapped in your full stop

[Verse 2]
Truth will mess you up, truth will mess you up
Truth will mess you up, truth will mess you up
Truth will mess you up, truth will mess you up
Truth will mess you up, truth will mess you up
Truth will mess you up (All the good times)
Truth will mess you up
Truth will mess you up (All the good times)
Truth will mess you up
Truth will mess you up (All the good times)
Truth will mess you up
Truth will mess you up (All the good times)
Truth will mess you up
Truth will mess you up (All the good times)
Truth will mess you up
Truth will mess you up (All the good times)
Truth will mess you up
Truth will mess you up (All the good times)
Truth will mess you up
Truth will mess you up (All the good times)
When you take me back
Take me back again
Will you take me back
Take me back again

[Outro]
You really me-
Really mess-
You really messed up
You really messed up
You really messed up
You really messed up this time
You really messed up
You really messed up
You really messed up
You really messed up this time
You really messed up
You really messed up
You really messed up
You really messed up this time",
  artist_id: radiohead.id,
  author_id: belieber.id,
  album: 'A Moon Shaped Pool',
  album_art: File.open('app/assets/images/moonshaped.jpg'))


Track.create!(  title: "Dreams",
  description:"From their top selling album Rumours, “Dreams” was Fleetwood Mac’s’s only No. 1 hit in the US back in 1976.",
  lyrics:
  "[Intro]

[Verse 1]
Now here you go again, you say you want your freedom
Well who am I to keep you down
It's only right that you should play the way you feel it
But listen carefully to the sound of your loneliness

[Pre-Chorus]
Like a heartbeat drives you mad
In the stillness of remembering of what you had
And what you lost and what you had and what you lost

[Chorus]
Thunder only happens when it's raining
Players only love you when they're playing
Say women they will come and they will go
When the rain washes you clean, you'll know, you'll know

[Bridge]

[Verse 2]
Now here I go again, I see the crystal visions
I keep my visions to myself
It's only me who wants to wrap around your dreams
And have you any dreams you'd like to sell?
Dreams of loneliness

[Pre-Chorus]
Like a heartbeat drives you mad
In the stillness of remembering of what you had
And what you lost and what you had and what you lost

[Chorus]
Thunder only happens when it's raining
Players only love you when they're playing
Women they will come and they will go
When the rain washes you clean, you'll know

Oh thunder only happens when it's raining
Players only love you when they're playing
Say women they will come and they will go
When the rain washes you clean, you'll know, you'll know
You will know, you'll know",
  artist_id: fleetwood.id,
  author_id: mozart.id,
  album: 'Rumours',
  album_art: File.open('app/assets/images/rumours.jpg'))

Track.create!(  title: "Seigfried",
  description:"The fifteenth track on Frank Ocean’s Blonde, might be called a metaphysical break-up song. Based on the mention of “a speckled face”, the song may be about male model Willy Cartier, who’s rumored to have had a brief affair with Ocean.",
  lyrics:"The markings on your surface
Your speckled face
Flawed crystals hang from your ears
I couldn't gauge your fears
I can't relate to my peers
I'd rather live outside
I'd rather chip my pride than lose my mind out here
Maybe I'm a fool
Maybe I should move
And settle, two kids and a swimming pool
I'm not brave (brave)
I'm not brave

I'm living over city
And taking in the homeless sometimes
Been living in an idea
An idea from another man's mind
Maybe I'm a fool
To settle for a place with some nice views
Maybe I should move
Settle down, two kids and a swimming pool
I'm not brave
I'd rather live outside
I'd rather live outside
I'd rather go to jail
I've tried hell
(It's a loop)
What would you recommend I do?
(And the other side of the loop is a loop)
This, this fe–, the feel
This feel, this feels
This feels how molly must feel
This feels how molly must feel
Molly must feel, this feels how molly must feel
Molly must feel

This is not my life
It's just a fond farewell to a friend
It's just a fond farewell to a friend
This is not my life
It's just a fond farewell to a friend
It's not what I'm like
It's just a fond farewell (brave)

Speaking of Nirvana, it was there
Rare as the feathers on my dash from a phoenix
There with my crooked teeth and companion sleeping, yeah
Dreaming a thought that could dream about a thought
That could think of the dreamer that thought
That could think of dreaming and getting a glimmer of God
I be dreaming a dream in a thought
That could dream about a thought
That could think of dreaming a dream
Where I cannot, where I cannot
Less morose and more present
Dwell on my gifts for a second
A moment one solar flare we're consumed
So why not spend this flammable paper on the film that's my life?
High flights, inhale the vapor, exhale once and think twice
Eat some shrooms, maybe have a good cry about you
See some colors, light hang glide off the moon

(In the dark, in the dark)
I'd do anything for you
(In the dark)
I'd do anything for you
(In the dark)
I'd do anything for you
(In the dark)
I'd do anything for you
(In the dark)
I'd do anything for you, anything for you
(In the dark)
I'd do anything for you, anything for",
  artist_id: frank.id,
  author_id: musicMan.id,
  album: 'Blond',
  album_art: File.open('app/assets/images/blonde.jpg'))

Track.create!(  title: "Welcome to Heartbreak",
  description:"The second track off Kanye West’s 4th studio album, 808s and Heartbreak. Features backing vocals from KiD CuDi and Jeff Bhasker. Produced by Kanye West, Jeff Bhasker, and Plain Pat.",
  lyrics:
  "[Verse 1: Kanye West]
My friend showed me pictures of his kids
And all I could show him was pictures of my cribs
He said his daughter got a brand new report card
And all I got was a brand new sports car, oh

[Hook: Kid Cudi]
And my head keeps spinning
Can't stop having these visions, I gotta get with it
And my head keeps spinning
I can't stop having these visions, I gotta get with it

[Verse 2: Kanye West]
Dad cracked a joke, all the kids laughed
But I couldn't hear him all the way in first class
Chased the good life my whole life long
Look back on my life and my life gone
Where did I go wrong?

[Hook: Kid Cudi]
And my head keeps spinning
Can't stop having these visions, I gotta get with it
And my head keeps spinning
I can't stop having these visions, I gotta get with it

[Interlude: Kanye West]
I've seen it, I've seen it before
I've seen it, I've seen it before
I've seen it, I've seen it before
I've seen it, I've seen it before

[Verse 3: Kanye West]
My god-sister getting married by the lake
But I couldn't figure out who I'd wanna take
Bad enough that I showed up late
I had to leave before they even cut the cake
Welcome to heartbreak

[Hook: Kid Cudi]
And my head keeps spinning
Can't stop having these visions, I gotta get with it
And my head keeps spinning
I can't stop having these visions, I gotta get with it

[Outro: Kanye West]
And I and I can't stop
No, no, I can't stop
No, no, no, no, I can't stop
No, no, no, no, I can't stop
Can't stop, I can't stop, I can't stop
No, no, no, no, no, no, no, no
No, no, no, no
No, no, I can't stop
I can't stop having these visions
I gotta get with it",
  artist_id: kanye.id,
  author_id: johnny.id,
  album_art: File.open('app/assets/images/808s.jpg',
  album: "808's and Heartbreak"))

# 100.times do |num|
#   Track.create!(
#   title: "t#{num}",
#   description:"d#{num}",
#   lyrics:"l#{num}",
#   artist_id: num + 1,
#   author_id: num + 1)
# end
