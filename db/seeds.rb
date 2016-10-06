# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

100.times do |num|
  User.create!(
  username: "u#{num}",
  password: 'starwars',
  email: Faker::Internet.email,
  score: Faker::Number.between(1, 10))
end
User.create(username:'john', email:'john', score:100, password:'starwars')

1000.times do |num|
  Artist.create!(name: "a#{num}")
end


100.times do |num|
  Track.create!(
  title: "t#{num}",
  description:"d#{num}",
  lyrics:"l#{num}",
  artist_id: num + 1,
  author_id: num + 1)
end
