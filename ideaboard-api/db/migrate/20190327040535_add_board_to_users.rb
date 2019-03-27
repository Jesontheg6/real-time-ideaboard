class AddBoardToUsers < ActiveRecord::Migration[5.2]
  def change
    add_reference :users, :board , foreign_key: true
end
end
