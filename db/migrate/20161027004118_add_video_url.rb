class AddVideoUrl < ActiveRecord::Migration
  def change
    change_table :tracks do |t|
      t.string :youtube_url
    end
  end
end
