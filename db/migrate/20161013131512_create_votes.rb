class CreateVotes < ActiveRecord::Migration
  def change
    create_table :votes do |t|
      t.integer :author_id, null: false
      t.integer :annotation_id, null: false
      t.integer :annotation_id, null: false
      t.integer :value, null: false, default: 0
      t.timestamps null: false
    end
  end
end
