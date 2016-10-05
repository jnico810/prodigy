class CreateTracks < ActiveRecord::Migration
  def change
    create_table :tracks do |t|
      t.string :title, null: false
      t.string :album
      t.string :description, null: false
      t.text :lyrics, null: false
      t.integer :author_id, null: false
      t.integer :artist_id, null: false
      t.timestamps null: false
    end

    add_index :tracks, :title
  end
end
