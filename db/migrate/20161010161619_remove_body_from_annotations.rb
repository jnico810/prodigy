class RemoveBodyFromAnnotations < ActiveRecord::Migration
  def change
    remove_column :annotations, :body
  end
end
