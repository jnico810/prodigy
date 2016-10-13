# == Schema Information
#
# Table name: tracks
#
#  id                     :integer          not null, primary key
#  title                  :string           not null
#  album                  :string
#  description            :string           not null
#  lyrics                 :text             not null
#  author_id              :integer          not null
#  artist_id              :integer          not null
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#  album_art_file_name    :string
#  album_art_content_type :string
#  album_art_file_size    :integer
#  album_art_updated_at   :datetime
#

class Track < ActiveRecord::Base

  validates :title, :description, :lyrics, :artist_id, :author_id, presence: true

  has_attached_file :album_art, default_url: "dark_side.jpg"
  validates_attachment_content_type :album_art, content_type: /\Aimage\/.*\Z/

  belongs_to :author,
    class_name: 'User',
    foreign_key: :author_id,
    primary_key: :id

  belongs_to :artist

  has_many :annotations
end
