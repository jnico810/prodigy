class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.text :body, null: false
      t.integer :annotation_id, null: false
      t.integer :author_id, null: false
      t.timestamps null: false
    end

  end
end
