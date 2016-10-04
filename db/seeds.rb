# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


10.times do |num|
  User.create!(
  username: "u#{num}",
  password: 'starwars',
  email: Faker::Internet.email,
  score: Faker::Number.between(1, 10))
end


User.create(username:'john', email:'john', score:100, password:'starwars')
