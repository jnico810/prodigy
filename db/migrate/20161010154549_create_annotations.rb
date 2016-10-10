class CreateAnnotations < ActiveRecord::Migration
  def change
    create_table :annotations do |t|
      t.integer :author_id, null: false
      t.integer :track_id, null: false
      t.integer :start_idx, null: false
      t.integer :end_idx, null: false
      t.text :body, null: false
      t.timestamps null: false
    end
  end
end
