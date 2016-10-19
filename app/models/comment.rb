# == Schema Information
#
# Table name: comments
#
#  id            :integer          not null, primary key
#  body          :text             not null
#  annotation_id :integer          not null
#  author_id     :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Comment < ActiveRecord::Base
  validates :body, :annotation_id, :author_id, presence: true

  belongs_to :author,
    class_name: 'User',
    foreign_key: :author_id,
    primary_key: :id

  belongs_to :annotation
end
