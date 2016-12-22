class AddUserPicture < ActiveRecord::Migration

  def self.up
    change_table :users do |t|
      t.attachment :user_picture
    end
  end

  def self.down
    remove_attachment :users, :user_picture
  end
end
