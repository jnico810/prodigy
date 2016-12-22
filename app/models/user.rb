# == Schema Information
#
# Table name: users
#
#  id                        :integer          not null, primary key
#  username                  :string           not null
#  email                     :string
#  password_digest           :string           not null
#  score                     :integer          default(0), not null
#  session_token             :string           not null
#  created_at                :datetime         not null
#  updated_at                :datetime         not null
#  user_picture_file_name    :string
#  user_picture_content_type :string
#  user_picture_file_size    :integer
#  user_picture_updated_at   :datetime
#

class User < ActiveRecord::Base
  attr_reader :password

  validates :username, :session_token, uniqueness: true
  validates :username, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true}

  has_attached_file :user_picture, default_url: "default_user_picture.png"
  validates_attachment_content_type :user_picture, content_type: /\Aimage\/.*\Z/

  has_many :tracks,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: 'Track'

  has_many :comments,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: 'Comment'

  has_many :votes,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: 'Vote'

  has_many :annotations,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: 'Annotation'

  has_many :votes,
    through: :annotations,
    source: :votes

  after_initialize :ensure_sessiontoken

  def self.find_by_credentials(username, password)
    @user = User.find_by(username: username)
    if @user
      return @user if @user.is_password?(password)
    end
    return nil;
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save
    self.session_token
  end


  def ensure_sessiontoken
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

  def score
    self.annotations.length * 5
  end
end
