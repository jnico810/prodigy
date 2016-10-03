# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
score           | integer   | not null
session_token   | string    | not null, indexed, unique

## artists
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## tracks
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
description | sting     | not null
album_art   | string    | not null
lyrics      | text      | not null
locked      | boolean   | not null, default: false
author_id   | integer   | not null, foreign key (references users), indexed
artist_id   | integer   | not null, foreign key (references artists), indexed

## annotations
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
track_id    | integer   | not null, foreign key (references tracks), indexed
startIndex  | integer   | not null
endIndex    | integer   | not null
body        | string    | not null
score       | interger  | not null

## annotation_comments
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
body          | string    | not null
annotation_id | integer   | not null, foreign key (references annotations), indexed
author_id     | integer   | not null, foreign key (references users), indexed

## tracks_comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
body        | string    | not null
track_id    | integer   | not null, foreign key (references tracks), indexed, unique [tag_id]
author_id   | integer   | not null, foreign key (references users), indexed


## annotation_votes
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
annotation_id | integer   | not null, foreign key (references annotations), indexed
voter_id      | integer   | not null, foreign key (references users), indexed
