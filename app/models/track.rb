# == Schema Information
#
# Table name: tracks
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  album       :string
#  description :string           not null
#  lyrics      :text             not null
#  author_id   :integer          not null
#  artist_id   :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Track < ActiveRecord::Base

  validates :title, :description, :lyrics, :artist_id, :author_id, presence: true

  belongs_to :author,
    class_name: 'User',
    foreign_key: :author_id,
    primary_key: :id

  belongs_to :artist

  has_many :annotations
end
