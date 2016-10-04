class ChangeEmailAndScoreConstraint < ActiveRecord::Migration
  def change
    change_column_null(:users, :email, true)
    change_column_default(:users, :score, 0)
  end
end
