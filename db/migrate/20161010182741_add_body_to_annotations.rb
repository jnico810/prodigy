class AddBodyToAnnotations < ActiveRecord::Migration
  def change
    add_column :annotations, :body, :text
  end
end
