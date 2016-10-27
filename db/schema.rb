# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161027004118) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "annotations", force: :cascade do |t|
    t.integer  "author_id",  null: false
    t.integer  "track_id",   null: false
    t.integer  "start_idx",  null: false
    t.integer  "end_idx",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text     "body"
  end

  create_table "artists", force: :cascade do |t|
    t.string   "name",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "artists", ["name"], name: "index_artists_on_name", using: :btree

  create_table "comments", force: :cascade do |t|
    t.text     "body",          null: false
    t.integer  "annotation_id", null: false
    t.integer  "author_id",     null: false
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  create_table "tracks", force: :cascade do |t|
    t.string   "title",                  null: false
    t.string   "album"
    t.string   "description",            null: false
    t.text     "lyrics",                 null: false
    t.integer  "author_id",              null: false
    t.integer  "artist_id",              null: false
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
    t.string   "album_art_file_name"
    t.string   "album_art_content_type"
    t.integer  "album_art_file_size"
    t.datetime "album_art_updated_at"
    t.string   "youtube_url"
  end

  add_index "tracks", ["title"], name: "index_tracks_on_title", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",                    null: false
    t.string   "email"
    t.string   "password_digest",             null: false
    t.integer  "score",           default: 0, null: false
    t.string   "session_token",               null: false
    t.datetime "created_at",                  null: false
    t.datetime "updated_at",                  null: false
  end

  add_index "users", ["email"], name: "index_users_on_email", using: :btree
  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

  create_table "votes", force: :cascade do |t|
    t.integer  "author_id",                 null: false
    t.integer  "annotation_id",             null: false
    t.integer  "value",         default: 0, null: false
    t.datetime "created_at",                null: false
    t.datetime "updated_at",                null: false
  end

end
