# == Schema Information
#
# Table name: votes
#
#  id            :integer          not null, primary key
#  author_id     :integer          not null
#  annotation_id :integer          not null
#  value         :integer          default(0), not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Vote < ActiveRecord::Base
  validates :annotation_id, :author_id, :value, null: false

  belongs_to :annotation
  belongs_to :author,
    class_name: 'Class',
    foreign_key: :author_id,
    primary_key: :id

end
