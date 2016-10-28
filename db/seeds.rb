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
ken = User.create(username:'kenny_bone', email:'kenny_bone', score:10, password:'starwars')


bon_iver = Artist.create!(name: "Bon Iver")
radiohead = Artist.create!(name: "Radiohead")
fleetwood = Artist.create!(name: "Fleetwood Mac")
frank = Artist.create!(name: "Frank Ocean")
kanye = Artist.create!(name: "Kanye West")
ingrid = Artist.create!(name: "Ingrid Michaelson")
dylan = Artist.create!(name: "Bob Dylan")
beyonce = Artist.create!(name: "Beyoncé")
lin = Artist.create!(name: "Lin-Manuel Miranda")

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
  album_art: File.open('app/assets/images/808s.jpg'),
  album: "808's and Heartbreak")


      Track.create!(  title: "Hell No",
        description:"Ingrid Michaelson and Greg Laswell divorced in February of 2015. Laswell released his album Everyone Thinks I Dodged A Bullet over a year later, featuring songs mired in regret and sadness – likely over their breakup.

Meanwhile, Michaelson released an upbeat song soon after that essentially saying “good riddance.”

This is that song.",
        lyrics:
        "[Verse 1]
I should've known better
I saw her wearing your sweater
Nice glasses, fake red hair, just like me
Stop crying, stop crawling
Can't you see that I have stop falling
We were good at faking forever
I get it, whatever
Am I gonna miss you?

[Chorus]
Hell no
Baby watch me up and go
Mama said that the boys like you never work any way
(Boys like you)
Girlsfriends say 'are you gonna be sad
If you calls you up you're gonna take him back?' I say
Hell no, oh, hell no
I get it, whatever

[Verse 2]
Straight up, don't blame you
You’re not the Cash and I’m not the June
Never be the one to make you better
Whatever

[Chorus]
Hell no
Baby watch me up and go
Mama said that the boys like you never work any way
(Boys like you)
Girlsfriends say 'are you gonna be sad
If you calls you up you're gonna take him back?'
Hell no, oh, hell no

[Bridge]
In my bed late at night
Thinking of how you held me tight
Will I be lonely when I wake?
Did we make a big mistake?

[Chorus]
Hell no
Baby watch me up and go
I always know that a boy like you wouldn't work out any way
'You gonna take him back?'
Hell no
Baby watch me up and go
Mama said that the boys like you never work any way
(Boys like you)
Girlfriends say 'are you gonna be sad
If you calls you up you're gonna take him back?' I say
Hell no, oh, hell no

[Outro]
I get it
Hell no
(I'm not gonna miss you)
Hell no
Whatever
Hell no
You gonna take him back?
Oh hell no",
artist_id: ingrid.id,
author_id: timbo.id,
album_art: File.open('app/assets/images/ingrid.jpg'),
album: "It Doesn't Have to Make Sense")


Track.create!(  title: "Maggie's Farm",
  description:"“Maggie’s Farm” appears on Dylan’s 1965 album, Bringing It All Back Home.",
  lyrics:
  "[Verse 1]
I ain't gonna work on Maggie's farm no more
No, I ain't gonna work on Maggie's farm no more
Well, I wake up in the morning
Fold my hands and pray for rain
I got a head full of ideas
That are driving me insane
It's a shame the way she makes me scrub the floor
I ain't gonna work on Maggie's farm no more

[Verse 2]
I ain't gonna work for Maggie's brother no more
No, I ain't gonna work for Maggie's brother no more
Well, he hands you a nickel
He hands you a dime
He asks you with a grin
If you're having a good time
Then he fines you every time you slam the door
I ain't work for Maggie's brother more

[Verse 3]
I ain't gonna work for Maggie's pa no more
No, I ain't gonna work for Maggie's pa no more
Well, he puts his cigar
Out in your face just for kicks
His bedroom window
It is made out of bricks
The National Guard stands around his door
Ah, I ain't gonna work for Maggie's pa no more

[Verse 4]
I ain't gonna work for Maggie's ma no more
No, I ain't gonna work for Maggie's ma no more
Well, when she talks to all the servants
About man and God and law
Everybody says
She's the brains behind pa
She's sixty-eight, but she says she's fifty-four
I ain't gonna work for Maggie's ma no more

[Verse 5]
I ain't gonna work on Maggie's farm no more
I ain't gonna work on Maggie's farm no more
Well, I try my best
To be just like I am
But everybody wants you
To be just like them
They say sing while you slave and I just get bored
I ain't gonna work on Maggie's farm no more",
artist_id: dylan.id,
author_id: timbo.id,
album_art: File.open('app/assets/images/maggies_farm.jpg'),
album: "Bringing It All Back Home")

Track.create!(  title: "Countdown",
  description:"In this well-polished R&B song about her love for Jay-Z, Queen Bey talks about how they both manage to have a perfect marriage while maintaining their superstardom. This catchy tune was called both the most experimental and one of the best tunes on her album 4, with additional praise for the creative sampling from Boyz II Men’s “Uhh Ahh.”",
  lyrics:
  "[Intro]
Boy!

[Chorus]
Oh, killing me softly and I'm still falling
Still the one I need, I will always be with you
Oh, you got me all gone, don't ever let me go
Say it real loud if you fly
If you leave me you're out of your mind
[Hook]
My baby is a 10
We dressing to the 9
He pick me up, we 8
Make me feel so lucky 7
He kiss me in his 6
We be making love in 5
Still the one I do this 4
I'm trying to make us 3
From that 2
He still the 1

[Verse 1]
There's ups and downs in this love
Got a lot to learn in this love
Through the good and the bad, still got love
Dedicated to the one of love, hey
Still love the way he talk, still love the way I sing
Still love the way he rock them black diamonds in that chain
Still all up on each other, ain't a damn thing change
My girls can't tell me nothing, I'm gone in the brain
I'm all up under him like it's cold, winter time
All up in the kitchen in my heels, dinner time
Do whatever that it takes, he got a winner's mind
Give it all to him, meet him at the finish line

[Refrain]
Me and my boo in my boo's coupe riding
All up in that black with his chick right beside him
Ladies, if you love your man, show him you the fliest
Grind up on it, girl, show him how you ride it
Me and my boo in my boo's coupe riding
All up in that black with his chick right beside him
Ladies, if you love your man, show him you the fliest
Grind up on it, girl, show him how you ride it

[Chorus]
Oh, killing me softly and I'm still falling
Still the one I need, I will always be with you
Oh, you got me all gone, don't ever let me go
Say it real loud if you fly
If you leave me you're out of your mind

[Hook]
My baby is a 10
We dressing to the 9
He pick me up, we 8
Make me feel so lucky 7
He kiss me in his 6
We be making love in 5
Still the one I do this 4
I'm trying to make us 3
From that 2
He still the 1

[Verse 2]
Yup, I put it on him, it ain't nothing that I can't do
Yup, I buy my own, if he deserve it, buy his shit too
All up in the store, shorty, tricking if I want to
All up in the store, shorty, fly as we want to
Ooh ooh ooh ooh
Damn I think I love that boy, do anything for that boy
Ooh ooh ooh ooh
Now I'll never be the same, you and me until the end

[Refrain]
Me and my boo in my boo's coupe riding
All up in that black with his chick right beside him
Ladies, if you love your man, show him you the fliest
Grind up on it, girl, show him how you ride it

[Refrain 2]
Me and my boo in the coupe lip locking
All up in the back because the chicks keep flocking
All that gossip in 10 years, stop it
London speed it up, Houston rock it

[Chorus]
Oh, killing me softly and I'm still falling
Still the one I need, I will always be with you
Oh, you got me all gone, don't ever let me go
Say it real loud if you fly
If you leave me you're out of your mind

[Hook]
My baby is a 10
We dressing to the 9
He pick me up, we 8
Make me feel so lucky 7
He kiss me in his 6
We be making love in 5
Still the one I do this 4
I'm trying to make us 3
From that 2
He still the 1",
artist_id: beyonce.id,
author_id: belieber.id,
album_art: File.open('app/assets/images/beyonce.jpg'),
album: "4",
youtube_url: 'https://www.youtube.com/watch?v=2XY3AvVgDns')


Track.create!(  title: "You'll be Back",
  description:"This song, framed as a letter from King George to the colonists, is a kind of extended double entendre. It addresses the grievances of the colonists and asserts George’s authority, but in form and wording it echos any number of other songs which have a similarly creepy “you want to leave me, but you can’t really” vibe.

This track serves as the unofficial ‘close’ to the album’s emotional journey, before Beyonce’s first single from Lemonade, “Formation.”",
  lyrics:
  "[Verse 1: KING GEORGE]
You say
The price of my love’s not a price that you’re willing to pay
You cry
In your tea which you hurl in the sea when you see me go by
Why so sad?
Remember we made an arrangement when you went away
Now you’re making me mad
Remember, despite our estrangement, I’m your man
You’ll be back, soon you’ll see
You’ll remember you belong to me
You’ll be back, time will tell
You’ll remember that I served you well
Oceans rise, empires fall
We have seen each other through it all
And when push comes to shove
I will send a fully armed battalion to remind you of my love!

[Chorus: KING GEORGE ]
Da da da dat da dat da da da da ya da
Da da dat dat da ya da!
Da da da dat da dat da da da da ya da
Da da dat dat da…

[Verse 2: KING GEORGE]
You say our love is draining and you can’t go on
You’ll be the one complaining when I am gone...
And no, don’t change the subject
Cuz you’re my favorite subject
My sweet, submissive subject
My loyal, royal subject
Forever and ever and ever and ever and ever…

[Verse 3: KING GEORGE]
You’ll be back like before
I will fight the fight and win the war
For your love, for your praise
And I’ll love you till my dying days
When you’re gone, I’ll go mad
So don’t throw away this thing we had
Cuz when push comes to shove
I will kill your friends and family to remind you of my love

[Chorus: KING GEORGE ]
Da da da dat da dat da da da da ya da
Da da dat dat da ya da!
Da da da dat da dat da da da da ya da
Da da dat—
Everybody!

[Chorus: FULL ENSEMBLE]
Da da da dat da dat da da da da ya da
Da da dat dat da ya da!
Da da da dat da dat da da da da ya da da da da
Dat dat da ya da!",
artist_id: lin.id,
author_id: johnny.id,
album_art: File.open('app/assets/images/hamilton.jpg'),
album: "Hamilton (Original Broadway Cast Recording)",
youtube_url:'https://www.youtube.com/watch?v=fdxLohjwhoQ')


elliott = Artist.create!(name: "Elliott Smith")


Track.create!(title: "Between the Bars",
  description:"Track #4 off of Elliott’s celebrated 1997 album; ‘Either/Or'.",
  lyrics:
  "[Verse 1]
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
I'll keep them still",
artist_id: elliott.id,
author_id: johnny.id,
album_art: File.open('app/assets/images/either_or.jpg'),
album: "Either Or",
youtube_url: 'https://www.youtube.com/watch?v=hPD-a1FjUtU')
