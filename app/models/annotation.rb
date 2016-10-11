# == Schema Information
#
# Table name: annotations
#
#  id         :integer          not null, primary key
#  author_id  :integer          not null
#  track_id   :integer          not null
#  start_idx  :integer          not null
#  end_idx    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  body       :text
#

class Annotation < ActiveRecord::Base
  validates :author_id, :track_id, :start_idx, :end_idx, :body, presence:true

  belongs_to :track
  belongs_to :author,
    class_name: 'User',
    foreign_key: :author_id,
    primary_key: :id

  has_many :comments
end
